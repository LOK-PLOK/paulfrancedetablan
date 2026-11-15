"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/data/profile";
import { ThemePicker } from "@/components/ui/ThemePicker";

export function Header() {
  const [active, setActive] = useState("#top");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ids = nav.map((n) => (n.href === "#top" ? "hero" : n.href.slice(1)));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0])
          setActive(
            visible[0].target.id === "hero"
              ? "#top"
              : `#${visible[0].target.id}`,
          );
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus(); // menu links unmount on close; keep keyboard focus on the toggle
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (href: string) =>
    `whitespace-nowrap px-1.5 py-1 text-sm transition-colors hover:text-primary xl:px-2.5 ${
      active === href ? "text-primary" : "text-fg-2"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="text-sm text-fg" aria-label="Home">
          <span className="text-primary">paul</span>@detablan:~
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center xl:gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={linkClass(n.href)}
                  aria-current={active === n.href ? "location" : undefined}
                >
                  {active === n.href ? (
                    <span aria-hidden className="mr-1">
                      ▸
                    </span>
                  ) : null}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemePicker />
          <button
            ref={toggleRef}
            type="button"
            className="p-2 text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X size={20} aria-hidden />
            ) : (
              <Menu size={20} aria-hidden />
            )}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-surface lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {nav.map((n) => (
              <li key={n.href} className="border-b border-line last:border-0">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base ${active === n.href ? "text-primary" : "text-fg"}`}
                  aria-current={active === n.href ? "location" : undefined}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
