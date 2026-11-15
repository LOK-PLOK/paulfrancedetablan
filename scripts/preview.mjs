// Local preview of the static export in out/ (no dependencies, not used by Vercel).
import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT) || 3000;
const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".svg": "image/svg+xml", ".png": "image/png",
  ".webp": "image/webp", ".jpg": "image/jpeg", ".ico": "image/x-icon", ".pdf": "application/pdf",
  ".woff2": "font/woff2",
};

const isFile = (p) => { try { return statSync(p).isFile(); } catch { return false; } };

try { statSync(root); } catch { console.error("out/ not found: run `npm run build` first."); process.exit(1); }

createServer((req, res) => {
  let path;
  try { path = decodeURIComponent(new URL(req.url, "http://x").pathname); } catch { return res.writeHead(400).end(); }
  const base = normalize(join(root, path));
  if (base !== root && !base.startsWith(root + sep)) return res.writeHead(403).end();
  const file = [base, join(base, "index.html"), `${base}.html`].find(isFile);
  const status = file ? 200 : 404;
  const target = file ?? join(root, "404.html");
  res.writeHead(status, { "Content-Type": types[extname(target)] ?? "application/octet-stream" });
  createReadStream(target).pipe(res);
}).listen(port, () => console.log(`Previewing out/ at http://localhost:${port}`));
