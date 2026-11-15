# Project rules — paulfrancedetablan portfolio

Static personal portfolio (Next.js App Router, TypeScript strict, Tailwind v4, `output: "export"`). Read first, in order:

1. `docs/ai/HANDOFF.md` — current status, tests, pending work
2. `docs/ai/PLAN.md` — architecture summary
3. `docs/design/portfolio.op` — approved OpenPencil design (preserve; never overwrite; backups sit beside it)
4. `docs/DEPLOYMENT.md` — Vercel steps
5. `docs/ASSET_UPLOAD_GUIDE.md` — photo and certificate files

## Permanent rules
- Static only: no backend, API routes, Server Actions, database, auth or runtime data. Content stays in typed files under `src/data/`.
- Keep the approved Omarchy black-and-green design and JetBrains Mono; no redesign, no copied Omarchy artwork.
- Do not invent dates, issuers, certificates, URLs, domains or photos. Pending certification fields stay "pending".
- The three Whisky Cask Club projects are private: no repo links, screenshots, source, infrastructure or confidential details. No ContactPoint 360/Paessler customer details. No phone number. A resume PDF may be shown (added at Paul's request, `public/resume/`).
- Server Components by default; Client Components only for Header and CopyEmailButton unless truly needed. Minimal dependencies.
- Before claiming done: `npm run lint`, `npm run typecheck`, `npm run build`; report only what actually ran.

## Git rules (strict)
- Never commit automatically. Never push automatically. Commit and push each need separate explicit approval.
- Never deploy without explicit approval.
- No AI attribution anywhere in Git (no Co-Authored-By, Generated-By, session notes).
- Use the existing Git identity (`LOK-PLOK`); do not change git config.
- Never print or store secrets.

## Models
Planning/design: Sonnet 5.5. Coding: Opus 5.5 (`/model claude-opus-5-5`); flag it if coding on another model.
