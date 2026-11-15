# Handoff

Last updated: 2026-11-15. Read `CLAUDE.md` first.

## Status
Design approved; implementation complete; final QA pass done 2026-11-15 (Opus 5.5). Ready to commit pending approval. **Nothing is committed, pushed or deployed.**

## Stack
Next.js 16.4.6 (App Router, Turbopack), React 19, TypeScript (strict), Tailwind CSS 4 (`@theme` tokens in `src/app/globals.css`), `lucide-react` (no brand icons: GitHub mark is an inline SVG), JetBrains Mono via `next/font/google`, ESLint flat config (`eslint-config-next`), npm + `package-lock.json`.

## Static export
`next.config.ts`: `output: "export"`, `images: { unoptimized: true }`. `npm run build` runs `prebuild` (`scripts/cert-manifest.mjs`) then `next build` → `out/`. No API routes, Server Actions, DB or runtime data. `robots.ts`/`sitemap.ts` are `force-static`; canonical origin from `src/lib/site.ts` (`NEXT_PUBLIC_SITE_URL` or https://paulfrancedetablan.com).

## Implemented
Header (sticky, active-section highlight via IntersectionObserver, mobile menu with Escape/aria), Hero, About, Experience (single-column timeline, USC education last), Tech Stack (8 groups), Featured Projects (3 private, native `<details>` More/Less details), Certifications (7), Connect (3 full-row links), Footer + Back to top, skip link, favicon (`src/app/icon.svg`), metadata/Open Graph/robots/sitemap, reduced-motion CSS, focus-visible styles.

## Design decisions (Omarchy black-and-green)
bg `#08080e`, surface `#101118`, primary mint `#83f6a5`, dark green `#315b3e`, text `#dbece2`, secondary `#a9b9af`, border `#294334`, muted `#7c9585`. Terminal-window cards (titlebar path + tag), thin borders, original pixel-strip decoration (`PixelStrip.tsx`), no numbered nav, no project imagery. Hero: photo left; chip, `$ whoami`, name, intro and the Send Email / Copy Email / GitHub buttons share one text column. The design's "now: Whisky Cask Club / ContactPoint 360" fastfetch row was deliberately omitted (no employer cards in Hero).

## Where things live
- Content: `src/data/{profile,experience,technologies,projects,certifications}.ts`, types in `types.ts`. Availability badge: `profile.availability.open`.
- Components: `src/components/{layout/Header,Footer; sections/*; ui/*}`. Client components: `Header.tsx`, `ui/CopyEmailButton.tsx`, `ui/PdfViewer.tsx`, `ui/ThemePicker.tsx`.
- Asset manifest: generated `src/data/assets.generated.json` (read via `src/lib/assets.ts`).
- Design: `docs/design/portfolio.op` (+ two `.backup-*.op` files).

## Certification / photo asset detection
`scripts/cert-manifest.mjs` scans `public/` at build and writes `assets.generated.json`:
- Profile: `public/images/profile/paul-profile.webp` (placeholder shown until present).
- Docs: `public/certifications/documents/<id>.pdf` → card shows View + Download and "pdf" tag.
- Logos: `public/certifications/logos/<id>.(svg|png|webp)`.
`<id>` values are listed in `docs/ASSET_UPLOAD_GUIDE.md`. After adding files run `npm run build` (dev: run `node scripts/cert-manifest.mjs` then restart).

## Commands
`npm run dev` · `npm run lint` · `npm run typecheck` · `npm run build` · `npm start` (serves `out/` via the zero-dependency `scripts/preview.mjs`, `PORT` env optional; local only, not used by Vercel).

## Final QA (2026-11-15, headless Chromium via CDP, `out/` served locally)
Fixes applied this pass:
- `CopyEmailButton`: reset delay now derived from the new state (success 2.5 s, failure 6 s) instead of stale state; timer cleared before rescheduling and on unmount.
- `npm start`: `npx serve out` (runtime download) → `node scripts/preview.mjs` (built-ins only; blocks path traversal, 400 on malformed URLs, serves `404.html`).
- `Header`: Escape closes the mobile menu **and returns focus to the toggle** (focus was dropped to `<body>`).
- `.gitignore`: `docs/design/*.backup-*.op` ignored (files kept locally).

Verified (all passed): lint, typecheck, build (`out/` regenerated from clean). At 1440/768/390 every section screenshotted and reviewed (header, hero + photo placeholder + availability badge, About, Experience timeline, Tech Stack, 3 projects expanded, 7 certs, Connect, footer, mobile menu); no horizontal overflow, no off-viewport elements; cert titlebar paths truncate with ellipsis at ≤768 (intended). Copy Email success (clipboard contents checked, "Copied!" + sr status, reverts ~2.5 s) and failure (visible message incl. address, still shown at 3.2 s, cleared by 6.2 s, also right after a success). mailto, GitHub, LinkedIn hrefs correct; external links `target=_blank rel="noopener noreferrer"`. Project details open/close independently; Enter/Space toggle. Mobile menu by keyboard (open, Tab into links, Escape, link activation closes + navigates). Back to top → scrollY 0. Keyboard: skip link first and lands in `<main>`, logical tab order, every focus stop has `:focus-visible` solid outline. Headings: one h1, h2 per section, h3 per card. Reduced motion: `scroll-behavior: auto`, transitions/animations off. 0 console errors/warnings, 0 external requests, 0 HTTP errors. Sensitive scan of the files to commit: only the public email; no phone, secrets or local paths; `portfolio.op` has no embedded images.

## Post-QA design changes (2026-11-15, requested by Paul)
- Smaller type: section h2 `text-xl sm:text-2xl`, hero h1 `text-2xl sm:text-3xl`, Hero intro / About / Connect copy `text-sm`, Connect values `sm:text-base`.
- Experience restyled after a friend's compact timeline: timeline line with dots (filled green = current, hollow = past), one bordered card per entry with period column (10rem) and title + CURRENT badge, org · type, and the bullets joined into one paragraph (education: honors · GPA · location). Tags are no longer rendered in Experience (still in `src/data/experience.ts`). `path` removed from `ExperienceEntry`, `type?` added. Current roles: "August – Present" (year not stated by Paul).
- Education split into its own section below Experience (`#education`, nav item added). `Experience.tsx` exports `Experience` and `Education`, both rendering the same timeline filtered by `kind`. GPA shown as "GPA 1.60" ("(1.0 highest)" removed at Paul's request).
- Connect list now spans the full container; label column 13rem + gap-8 so values line up with the Experience right column; rows align with the heading edge.
- `docs/design/portfolio.op` NOT updated for these changes (still shows the card timeline).
- Missing data: start year for the two current roles; employment type/work mode for those two; remote/onsite for eComia and NextStepX.

## Assets added (2026-11-15)
- Profile photo `public/images/profile/paul-profile.webp` (600×600).
- Certificate PDFs renamed to `<id>.pdf`: cisco-intro-cybersecurity, cisco-cybersecurity-essentials, paessler-monitoring-professional, tcpip-analysis-wireshark, powershell-scripting-essentials. No PhilNITS file.
- TOPCIT PDF (`topcit-level-2.pdf`) contains date of birth, certificate number and scores; published at Paul's explicit request.
- Issuer/date filled from the PDFs: Paessler LLC · August 2026; Leutert NetServices · October 2026 (Wireshark, Oct 20–21); IT-Schulungen.com · October 2026 (PowerShell; issuer from the certificate's filename).
- Cert actions appear on hover/focus-within (`[@media(hover:hover)]`), always visible on touch; `download` attribute gives `Paul-France-Detablan_<Title>.pdf`.
- Open questions: Intro to Cybersecurity PDF says "offered by Networking Academy" (data says "Cisco Networking Academy / University of San Carlos"); PowerShell certificate is titled "PowerShell Individualschulung" (site says "PowerShell Scripting Essentials").

## In-page certificate viewer (2026-11-15)
`ui/PdfViewer.tsx`: "View" opens a native modal `<dialog>` (terminal-style titlebar, Download + close) with the PDF in an iframe (`#view=FitH&navpanes=0`), mounted only while open. Closes via Escape, X, or backdrop click; focus returns to View; page scroll locked via `html:has(dialog[open])`. Verified in Chromium at 1440/390: no new tabs, 0 console errors. Caveat: mobile browsers without an inline PDF viewer (notably Android Chrome; iOS Safari shows page 1 only) may show a blank/limited frame; the dialog's Download button is the fallback.

## Certifications + spacing refresh (2026-11-15)
- Cert actions moved into the card titlebar (no extra body space): "pdf" label cross-fades to View/Download on hover/focus-within (`[@media(hover:hover)]`); always visible on touch. Placeholder `Award` icon box when no logo. Cards ~130px tall.
- Section spacing: `py-6 md:py-8`, SectionHeading `mb-5`, tighter Projects/Connect intros, Hero `pb-4 pt-8 sm:pt-10`. 64px between sections on desktop, 48px on mobile.
- Tech Stack: one terminal Window (`~/stack — ls -R`) with a row per category (label column 15rem + chips; stacks on mobile) instead of 8 cards.
- Tailwind note: write variant classes literally; string-built class names are not generated.

## Colour schemes + ThemePicker (2026-11-15)
- 9 schemes: Default (original green), Tokyo Night, Nord, Kanagawa, Osaka Jade, Vanta Black, Miasma, Matte Black, Hackerman. Ids/labels in `src/data/themes.ts`; tokens in `[data-theme="<id>"]` blocks in `globals.css` (selector works on any element, so picker swatches preview their own palette).
- `ui/ThemePicker.tsx` (Client Component) sits under fastfetch in the Hero: titlebar shows the active theme + "next ›" cycle button; 3×3 swatch grid with `aria-pressed`. Reads `<html data-theme>` via `useSyncExternalStore` + MutationObserver.
- Inline script in `layout.tsx` applies the theme before paint: `?theme=<id>` wins, else `localStorage.theme`; only whitelisted ids are applied (tested with a malicious stored value).
- Palettes from local Omarchy `colors.toml` files (Osaka Jade from the Omarchy GitHub repo). Muted text (and Miasma primary/fg-2) lifted to >= 4.5:1. Kanagawa primary = crystal blue; Osaka Jade primary = #63b07a.
- Favicon and `themeColor` meta stay green for every theme.

## Hero actions (2026-11-15)
- Order: Send Email (native `popover` menu: Gmail compose, Outlook compose, Mail app/mailto; anchored via CSS anchor positioning, `.email-menu` in globals.css, centred fallback elsewhere) · Copy Email · View Resume (only when a PDF exists in `public/resume/`; opens in `PdfViewer`, downloads as `Paul-France-Detablan_Resume.pdf`) · GitHub icon · LinkedIn icon (inline SVG `ui/LinkedinIcon.tsx`, aria-labels).
- `CertViewer` renamed `PdfViewer` (props `label`, `iconSize`). Manifest now has `resume`.
- Hero content vertically centred; lg: photo 144px, padding/gaps tightened, buttons px-3 so all five fit one row at ≥1280; right column compacted (gap-4, smaller fastfetch/picker padding).
- CLAUDE.md "no resume" rule lifted at Paul's request (no phone number still applies).

## Hero redesign (2026-11-15, frontend-design skill)
Hero is now ONE terminal window rendered as `$ fastfetch` output: photo in the logo slot; `paul@lokko` + dashed rule; h1 name; intro (≤65ch); info `dl` (location/focus/study/github/status, coloured keys) in its own column on lg with a divider; button row spans name+info columns (`md:col-start-2 lg:col-end-4`); the closing colour-block row is the ThemePicker (one block per theme in its own palette, `aria-pressed`, "theme <name> next ›"). Separate fastfetch/themes windows and the availability chip / `$ whoami` were removed (status row replaces the chip). Hero height 532px at 1440 (was ~485 + side column, with dead space). Experience current roles now "Aug 2026 – Present".

## Theme button in header (2026-11-15)
ThemePicker is now a single header button (beside the mobile menu toggle, visible at all widths): shows the current theme name + dot in that theme's primary colour; click cycles to the next theme (saved to localStorage). The hero colour-block row was removed. Nav links `whitespace-nowrap`, tighter padding below xl so "Tech Stack" stays on one line at 1024.

## Vanta Black is the starting theme (2026-11-15)
`defaultTheme = "vantablack"` in `src/data/themes.ts`; `<html data-theme>` is rendered with it, so first-time visitors (and no-JS) get Vanta Black. A saved choice or `?theme=` still wins. The green theme keeps its id/label "Default" and stays in the cycle. Browser `themeColor` is now #000000.

## Hero info list (2026-11-15)
xl (≥1280): right-hand column (20rem, border-l) with each label (small, primary) above its value, so no value wraps. Below xl: aligned label/value rows (shared `max-content` label column) under the intro. Buttons stay in the name column (info `dl` is `xl:row-span-2`), sized text-xs / px-2.5 py-2 / 14px icons / 34px icon buttons so all five fit one row at ≥1024 without reaching the info column. Note: dt/dd sit in `div.contents` wrappers, so `last:` variants match every dd.

## Send Email is a plain link (2026-11-15)
The Gmail/Outlook/Mail-app popover was removed at Paul's request: Send Email is now a `mailto:` link (visitor's default mail app). `.email-menu`/`.email-anchor` CSS removed.

## Status green (2026-11-15, branch develop)
`--color-status: #4ade80` in `@theme` (globals.css), never redefined by `[data-theme]` blocks, so `text-status`/`bg-status` stay green in every theme. Used by: hero "● online" tag, availability dot, Experience CURRENT badge (`border-status/40 bg-status/10 text-status`) and current-role timeline dots. Past-role dots keep `border-primary-dim bg-bg`; Education has no dots. Contrast of the green text ≥7.2:1 in all 9 themes.

## Themes: Default removed, Vanta Black is the default (2026-11-15, branch develop)
The "default" theme (original green, later tried as random-accent and monochrome) is removed: 8 themes remain and `defaultTheme = "vantablack"`; `@theme` fallback tokens now equal Vanta Black. A visitor with a saved "default" falls back to Vanta Black (not in the whitelist). Hero Send Email is `bg-status text-black` (status green in every theme). themeColor #000000.

## Known issues / not verified
- Not tested: real devices, Safari/Firefox, Lighthouse, screen readers (only ARIA/DOM checked).
- No certificate logos; no PhilNITS PDF.
- No site URL/domain: canonical metadata and sitemap inactive.

## Git status (at save time)
Branch `main`, one commit (`2e94bbf Initial commit`), identity `LOK-PLOK`. `git add -A` would stage 48 files (~1.1 MB): README.md (modified), `.gitignore`, `CLAUDE.md`, `docs/` (incl. `design/portfolio.op`, excl. backups), configs, `package-lock.json`, `public/**/.gitkeep`, `scripts/{cert-manifest,preview}.mjs`, `src/**` (incl. generated `src/data/assets.generated.json`, committed so dev/typecheck work on a fresh clone). Ignored: `.next/`, `out/`, `node_modules/`, `next-env.d.ts`, `*.tsbuildinfo`, `.env*.local`, `.vercel`, `.op` backups.

## Pending work
1. Commit — needs explicit approval (no AI attribution).
2. Push — needs separate approval.
3. Import repo into Vercel (see `docs/DEPLOYMENT.md`) — needs approval.
4. Verify live site; set `NEXT_PUBLIC_SITE_URL` and custom domain when available.
5. Add real profile photo, certificate PDFs/logos; fill pending cert issuers/dates.
6. Optional: Lighthouse, Safari/Firefox, real-device check.
