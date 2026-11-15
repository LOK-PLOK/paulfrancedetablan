import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted">
        <p>
          © 2026 Paul France M. Detablan <span aria-hidden>·</span> Built with Next.js
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 text-primary transition-opacity hover:opacity-80">
          Back to top <ArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
