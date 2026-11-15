// Build-time asset detection (static-export friendly): records which optional
// files exist so components never probe the filesystem in the browser.
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pub = join(process.cwd(), "public");
const list = (dir) => (existsSync(join(pub, dir)) ? readdirSync(join(pub, dir)) : []);

const logos = {};
for (const f of list("certifications/logos")) {
  const m = f.match(/^(.+)\.(svg|png|webp|jpg|jpeg)$/i);
  if (m) logos[m[1]] = `/certifications/logos/${f}`;
}
const documents = {};
for (const f of list("certifications/documents")) {
  const m = f.match(/^(.+)\.pdf$/i);
  if (m) documents[m[1]] = `/certifications/documents/${f}`;
}
const profile = list("images/profile").find((f) => /^paul-profile\.webp$/i.test(f))
  ? "/images/profile/paul-profile.webp"
  : null;

// Resume: first PDF in public/resume/ (e.g. paul-detablan-resume.pdf)
const resumeFile = list("resume").find((f) => /\.pdf$/i.test(f));
const resume = resumeFile ? `/resume/${resumeFile}` : null;

writeFileSync(
  join(process.cwd(), "src/data/assets.generated.json"),
  JSON.stringify({ profile, resume, logos, documents }, null, 2) + "\n",
);
console.log("asset manifest:", { profile, resume, logos: Object.keys(logos), documents: Object.keys(documents) });
