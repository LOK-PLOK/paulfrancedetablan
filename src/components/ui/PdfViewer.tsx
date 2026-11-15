"use client";

import { Download, FileText, X } from "lucide-react";
import { useRef, useState } from "react";

type Props = { title: string; src: string; path: string; fileName: string; className?: string; label?: string; iconSize?: number };

// In-page PDF viewer: native modal <dialog> (focus trap, Escape, top layer) with the PDF in an iframe.
export function PdfViewer({ title, src, path, fileName, className, label = "View", iconSize = 12 }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false); // iframe is only mounted while open, so PDFs load on demand

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          dialog.current?.showModal();
        }}
        className={className}
      >
        <FileText size={iconSize} aria-hidden /> {label}<span className="sr-only"> {title}</span>
      </button>
      <dialog
        ref={dialog}
        aria-label={title}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto h-[88dvh] max-h-none w-[min(64rem,calc(100vw-2rem))] max-w-none overflow-hidden rounded-md border border-line bg-surface p-0 text-sm font-normal text-fg backdrop:bg-black/75"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-10 shrink-0 items-center justify-between gap-3 border-b border-line bg-bg px-3.5 text-xs">
            <span className="truncate text-fg-2">{path}</span>
            <div className="flex shrink-0 items-center gap-1">
              <a href={src} download={fileName} className="inline-flex items-center gap-1.5 rounded px-2 py-1 font-bold text-primary hover:bg-surface">
                <Download size={14} aria-hidden /> Download
              </a>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                aria-label="Close document"
                className="rounded p-1 text-fg-2 hover:bg-surface hover:text-primary"
              >
                <X size={18} aria-hidden />
              </button>
            </div>
          </div>
          {open ? <iframe src={`${src}#view=FitH&navpanes=0`} title={title} className="min-h-0 w-full flex-1 bg-white" /> : null}
        </div>
      </dialog>
    </>
  );
}
