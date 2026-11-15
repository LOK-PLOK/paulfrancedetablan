# Asset upload guide

Optional files are detected at **build time** by `scripts/cert-manifest.mjs`, which writes `src/data/assets.generated.json`. Add files, then run `npm run build` (or restart `npm run dev` after running `node scripts/cert-manifest.mjs`).

## Profile photo

Save as `public/images/profile/paul-profile.webp` (square, ≥ 352×352 recommended). Until it exists, a placeholder is shown. Alt text lives in `src/data/profile.ts` (`photoAlt`).

## Resume

Save one PDF in `public/resume/` (e.g. `paul-detablan-resume.pdf`). When present, the Hero shows **View Resume**, which opens it in the in-page viewer (downloads as `Paul-France-Detablan_Resume.pdf`). Remove any phone number or home address first: the file is public.

## Certification documents

Save the PDF as `public/certifications/documents/<id>.pdf`. When present, the card's tag changes from "no file yet" to "pdf" and **View** (in-page viewer) / **Download** appear on hover or keyboard focus (always visible on touch devices). Downloads are saved as `Paul-France-Detablan_<Title>.pdf`.

Everything in `public/` is published. Check PDFs for personal data (date of birth, ID numbers) first.

## Certification logos

Save as `public/certifications/logos/<id>.svg|png|webp` — only use the issuer's authentic, permitted logo.

## IDs

| Certification | `<id>` |
| --- | --- |
| Introduction to Cybersecurity | `cisco-intro-cybersecurity` |
| TOPCIT — Level 2 | `topcit-level-2` |
| Cybersecurity Essentials | `cisco-cybersecurity-essentials` |
| PhilNITS Fundamental IT Engineers | `philnits-fe` |
| Paessler Monitoring Professional | `paessler-monitoring-professional` |
| TCP/IP Analysis With Wireshark | `tcpip-analysis-wireshark` |
| PowerShell Scripting Essentials | `powershell-scripting-essentials` |

Issuer/date live in `src/data/certifications.ts`.
