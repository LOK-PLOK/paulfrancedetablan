import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rows = [
  { label: "EMAIL", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "GITHUB", value: "github.com/LOK-PLOK", href: profile.github.url, external: true },
  { label: "LINKEDIN", value: profile.linkedin.handle, href: profile.linkedin.url, external: true },
];

export function Connect() {
  return (
    <section id="connect" aria-labelledby="connect-title" className="mx-auto max-w-6xl px-5 py-6 md:py-8">
      <SectionHeading id="connect-title" title="Connect" path="~/connect" />
      <p className="-mt-3 mb-6 text-sm text-fg-2">For inquiries, reach out directly.</p>
      <ul className="border-b border-line">
        {rows.map((r) => (
          <li key={r.label} className="border-t border-line">
            <a
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group -mx-3 flex items-center justify-between gap-4 px-3 py-5 transition-colors hover:bg-surface"
            >
              <span className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
                <span className="text-xs font-medium tracking-[0.15em] text-muted sm:w-[13rem] sm:shrink-0">{r.label}</span>
                <span className="break-all text-sm text-fg group-hover:text-primary sm:text-base">{r.value}</span>
              </span>
              <ArrowUpRight aria-hidden className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              {r.external ? <span className="sr-only">(opens in a new tab)</span> : null}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
