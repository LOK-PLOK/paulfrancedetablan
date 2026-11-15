import { ArrowUpRight, ChevronDown, Mail, UserRound } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { assets } from "@/lib/assets";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { PdfViewer } from "@/components/ui/PdfViewer";
import { Window } from "@/components/ui/Window";

function ProfilePhoto() {
  if (assets.profile) {
    return (
      <Image
        src={assets.profile}
        alt={profile.photoAlt}
        width={176}
        height={176}
        priority
        className="size-32 shrink-0 rounded-xl border border-primary-dim object-cover sm:size-44"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label="Profile photo placeholder"
      className="flex size-32 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-primary-dim bg-bg text-center sm:size-44"
    >
      <UserRound className="size-10 text-primary-dim sm:size-12" aria-hidden />
      <span className="text-xs text-muted">profile photo</span>
    </div>
  );
}

const outlineBtn =
  "inline-flex items-center gap-1.5 rounded border border-line px-2.5 py-2 text-xs font-bold text-fg transition-colors hover:border-primary hover:text-primary";
const iconBtn =
  "inline-flex size-[34px] items-center justify-center rounded border border-line text-fg transition-colors hover:border-primary hover:text-primary";

const enc = encodeURIComponent(profile.email);
const emailOptions = [
  { label: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${enc}`, external: true },
  { label: "Outlook", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${enc}`, external: true },
  { label: "Mail app", href: `mailto:${profile.email}`, external: false },
];

// Native popover (no JS): light-dismiss and Escape built in; anchored below the button where
// CSS anchor positioning is supported, otherwise the browser centres it (see .email-menu in globals.css).
function EmailMenu() {
  return (
    <>
      <button
        type="button"
        popoverTarget="email-menu"
        className="email-anchor inline-flex items-center gap-1.5 rounded bg-primary px-2.5 py-2 text-xs font-bold text-bg transition-opacity hover:opacity-90"
      >
        <Mail size={14} aria-hidden /> Send Email <ChevronDown size={12} aria-hidden />
      </button>
      <div id="email-menu" popover="auto" className="email-menu w-48 rounded-md border border-line bg-surface p-1 text-sm text-fg shadow-lg">
        <p className="px-3 pb-1 pt-2 text-xs text-muted">Write an email with</p>
        <ul>
          {emailOptions.map((o) => (
            <li key={o.label}>
              <a
                href={o.href}
                {...(o.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center justify-between rounded px-3 py-2 hover:bg-bg hover:text-primary"
              >
                {o.label}
                {o.external ? <ArrowUpRight size={14} aria-hidden className="text-primary" /> : null}
                {o.external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function Hero() {
  const title = "paul@lokko";
  return (
    <section id="hero" aria-labelledby="hero-name" className="mx-auto max-w-6xl px-5 pb-4 pt-8 sm:pt-10">
      {/* One terminal window rendered as `fastfetch` output: photo in the logo slot, info as coloured keys. */}
      <Window path="~ — zsh" tag="● online">
        <div className="p-5 sm:p-8">
          <p className="mb-6 text-sm text-fg-2" aria-hidden>
            <span className="font-bold text-primary">$</span> fastfetch
          </p>
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-x-10 xl:grid-cols-[auto_1fr_20rem]">
            <ProfilePhoto />
            <div className="min-w-0">
              <p aria-hidden className="text-sm font-bold text-primary">{title}</p>
              <p aria-hidden className="text-sm leading-none text-muted">{"-".repeat(title.length)}</p>
              <h1 id="hero-name" className="mt-4 text-2xl font-bold leading-tight tracking-tight text-fg sm:text-3xl">
                {profile.name}
              </h1>
              <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-fg-2">{profile.intro}</p>
            </div>
            {/* fastfetch-style info. xl: own right-hand column, label above value so nothing wraps mid-value;
                below xl: aligned label/value rows under the intro. */}
            <dl className="grid grid-cols-[max-content_1fr] content-start gap-x-5 gap-y-1 text-sm md:col-start-2 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:grid-cols-1 xl:gap-y-0 xl:border-l xl:border-line xl:pl-8">
              {profile.fastfetch.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-primary xl:mb-0.5 xl:text-xs">{k}</dt>
                  <dd className="min-w-0 text-fg xl:mb-3">{v}</dd>
                </div>
              ))}
              {profile.availability.open ? (
                <div className="contents">
                  <dt className="text-primary xl:mb-0.5 xl:text-xs">status</dt>
                  <dd className="flex items-start gap-2 text-fg">
                    <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                    {profile.availability.label}
                  </dd>
                </div>
              ) : null}
            </dl>
            <div className="flex flex-wrap items-start gap-2 md:col-start-2">
              <EmailMenu />
              <CopyEmailButton email={profile.email} />
              {assets.resume ? (
                <PdfViewer
                  title={`${profile.name} — Resume`}
                  src={assets.resume}
                  path="~/resume.pdf"
                  fileName="Paul-France-Detablan_Resume.pdf"
                  label="View Resume"
                  iconSize={14}
                  className={outlineBtn}
                />
              ) : null}
              <a href={profile.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={iconBtn}>
                <GithubIcon className="size-4" />
              </a>
              <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={iconBtn}>
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Window>
    </section>
  );
}
