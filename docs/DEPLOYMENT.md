# Deployment (Vercel)

Production domain: **https://paulfrancedetablan.com** (apex is canonical; `www` redirects to it).
Do not treat the domain as live until Vercel shows it as verified with a valid certificate.

## Canonical URL

`src/lib/site.ts` uses `NEXT_PUBLIC_SITE_URL` if set, otherwise `https://paulfrancedetablan.com`. It feeds
`metadataBase`, `<link rel="canonical">`, `og:url`, `robots.txt` (sitemap + host) and `sitemap.xml`.
Set in Vercel → Project → Settings → Environment Variables (Production):

    NEXT_PUBLIC_SITE_URL=https://paulfrancedetablan.com

It is read at build time, so redeploy after changing it. Never set it to a `*.vercel.app` URL. No secrets
are needed and no `.env` file is committed.

## First deployment (GitHub integration)

1. vercel.com → **Add New… → Project** → Import Git Repository → `LOK-PLOK/paulfrancedetablan`
   (install/authorize the Vercel GitHub app for this repo if asked).
2. Framework Preset: **Next.js** (auto-detected). Root Directory: `./`. Build Command: default (`npm run build`).
   Output Directory / Install Command: leave default — Vercel handles `output: "export"` itself.
3. Add the environment variable above (Production), then **Deploy**.
4. Production branch is `main` (default); every push to `main` redeploys, other branches get preview URLs.

## Domain

1. Project → Settings → **Domains** → add `paulfrancedetablan.com`, then `www.paulfrancedetablan.com`.
2. Set `paulfrancedetablan.com` as primary; set `www.paulfrancedetablan.com` to **Redirect to** `paulfrancedetablan.com` (308).
3. At the registrar, add exactly the DNS records Vercel displays for each domain (typically an A record for the
   apex and a CNAME for `www`; use Vercel's values, do not copy examples). Leave other records (MX, TXT) untouched.
   Alternatively switch the domain's nameservers to Vercel's if you prefer Vercel DNS.
4. Wait for both domains to show **Valid Configuration**; Vercel issues HTTPS certificates automatically.

## After it is live

- Check `https://paulfrancedetablan.com/robots.txt`, `/sitemap.xml`, and that `https://www.paulfrancedetablan.com` redirects.
- Assets (resume, certificates, photo) are added via commits; each push rebuilds and re-detects them.
