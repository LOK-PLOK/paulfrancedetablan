"use client";

import { useSyncExternalStore } from "react";
import { defaultTheme, themes, type ThemeId } from "@/data/themes";

// The active theme lives on <html data-theme> (set before paint by the script in layout.tsx),
// so the picker just reads that attribute and re-renders when it changes.
const root = () => document.documentElement;
const subscribe = (onChange: () => void) => {
  const mo = new MutationObserver(onChange);
  mo.observe(root(), { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
};
const current = () => (root().dataset.theme as ThemeId | undefined) ?? defaultTheme;

function apply(id: ThemeId) {
  root().dataset.theme = id;
  try {
    localStorage.setItem("theme", id);
  } catch {} // storage blocked (private mode): theme still applies for this visit
}

export function ThemePicker() {
  const active = useSyncExternalStore(subscribe, current, () => defaultTheme as ThemeId);
  const index = themes.findIndex((t) => t.id === active);
  const next = themes[(index + 1) % themes.length];
  const label = themes[index]?.label ?? defaultTheme;

  // One button: shows the current theme in its own accent colour; clicking moves to the next theme.
  return (
    <button
      type="button"
      onClick={() => apply(next.id)}
      aria-label={`Theme: ${label}. Switch to ${next.label}`}
      className="inline-flex items-center gap-2 rounded border border-primary-dim px-2.5 py-1 text-sm text-primary transition-colors hover:border-primary hover:bg-surface"
    >
      <span aria-hidden className="size-2.5 rounded-sm bg-primary" />
      {label}
    </button>
  );
}
