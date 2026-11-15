"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type State = "idle" | "copied" | "failed";

const RESET_MS: Record<Exclude<State, "idle">, number> = { copied: 2500, failed: 6000 };

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    let next: Exclude<State, "idle">;
    try {
      await navigator.clipboard.writeText(email);
      next = "copied";
    } catch {
      next = "failed";
    }
    setState(next);
    timer.current = setTimeout(() => setState("idle"), RESET_MS[next]);
  }

  const copied = state === "copied";
  return (
    <span className="inline-flex flex-col gap-1.5">
      <button
        type="button"
        onClick={copy}
        className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-2 text-xs font-bold transition-colors ${
          copied ? "border-primary bg-primary text-bg" : "border-line text-fg hover:border-primary hover:text-primary"
        }`}
      >
        {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden className="text-primary" />}
        {copied ? "Copied!" : "Copy Email"}
      </button>
      <span role="status" aria-live="polite" className={state === "failed" ? "text-xs text-fg-2" : "sr-only"}>
        {state === "copied" ? "Email address copied" : state === "failed" ? `Copy failed — ${email}` : ""}
      </span>
    </span>
  );
}
