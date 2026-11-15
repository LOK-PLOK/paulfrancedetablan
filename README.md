# Paul France M. Detablan — Portfolio

Static personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and JetBrains Mono, themed after Omarchy (near-black with mint-green accents). Design source: `docs/design/portfolio.op` (OpenPencil).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` (strict) |
| `npm run build` | Static export to `out/` (runs the asset manifest script first) |
| `npm start` | Serve `out/` locally |

## Structure

- `src/data/*` — all content as typed data (profile, experience, technologies, projects, certifications).
- `src/components/{layout,sections,ui}` — presentation. Client Components: `Header`, `CopyEmailButton`, `PdfViewer` (in-page PDF dialog), `ThemePicker` (colour schemes, `src/data/themes.ts` + `[data-theme]` blocks in `globals.css`).
- `scripts/cert-manifest.mjs` — build-time detection of optional files in `public/`.
- `public/images/profile/`, `public/certifications/{logos,documents}/` — drop-in assets, see `docs/ASSET_UPLOAD_GUIDE.md`.

## Notes

- `output: "export"` with `images.unoptimized`; no backend, API routes, database or runtime data.
- The three featured projects are private company repositories: no links, screenshots or source are published.
- Canonical domain `https://paulfrancedetablan.com` (`src/lib/site.ts`) drives `metadataBase`, canonical link, Open Graph URL, `robots.txt` and `sitemap.xml`. `NEXT_PUBLIC_SITE_URL` overrides it at build time.
- Availability badge: set `profile.availability.open` in `src/data/profile.ts`.

See `docs/DEPLOYMENT.md` for Vercel.
