import { Award, Download } from "lucide-react";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { assets } from "@/lib/assets";
import { PdfViewer } from "@/components/ui/PdfViewer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Window } from "@/components/ui/Window";

// Friendly name for the saved file, e.g. "Paul-France-Detablan_TCP-IP-Analysis-With-Wireshark.pdf"
const downloadName = (title: string) => `Paul-France-Detablan_${title.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "")}.pdf`;

// On hover-capable devices the "pdf" label cross-fades into the actions on hover/keyboard focus;
// on touch devices the actions are always shown. Opacity (not display) keeps the actions focusable.
const actionClass = "inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-bold text-primary hover:bg-surface";

function Actions({ id, title, doc }: { id: string; title: string; doc: string }) {
  return (
    <span className="relative flex items-center">
      <span
        aria-hidden
        className="absolute right-0 hidden transition-opacity [@media(hover:hover)]:block [@media(hover:hover)]:group-focus-within:opacity-0 [@media(hover:hover)]:group-hover:opacity-0"
      >
        pdf
      </span>
      <span
        className="flex items-center gap-1 transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-focus-within:opacity-100 [@media(hover:hover)]:group-hover:opacity-100"
      >
        <PdfViewer title={`${title} certificate`} src={doc} path={`~/certs/${id}.pdf`} fileName={downloadName(title)} className={actionClass} />
        <a href={doc} download={downloadName(title)} className={actionClass}>
          <Download size={12} aria-hidden /> Download<span className="sr-only"> {title}</span>
        </a>
      </span>
    </span>
  );
}

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certs-title" className="mx-auto max-w-6xl px-5 py-6 md:py-8">
      <SectionHeading id="certs-title" title="Certifications" path="~/certs" />
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((c) => {
          const doc = assets.documents[c.id];
          const logo = assets.logos[c.id];
          return (
            // min-w-0: lets the grid track shrink so the long window path truncates instead of overflowing on phones
            <li key={c.id} className="group min-w-0">
              <Window
                path={`~/certs/${c.id}`}
                tag={doc ? <Actions id={c.id} title={c.title} doc={doc} /> : <span className="text-muted">no file yet</span>}
                className={`h-full transition-colors ${doc ? "group-hover:border-primary-dim" : ""}`}
              >
                <div className="flex items-start gap-4 p-4">
                  {logo ? (
                    <Image src={logo} alt="" width={40} height={40} className="size-10 shrink-0 object-contain" />
                  ) : (
                    <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded border border-line bg-bg text-primary">
                      <Award size={18} />
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-bold leading-snug text-fg">{c.title}</h3>
                    <p className="mt-1 text-sm text-fg-2">{c.issuer ?? <span className="text-muted">Issuer pending</span>}</p>
                    <p className="mt-0.5 text-xs text-muted">{c.date ?? "Date pending"}</p>
                  </div>
                </div>
              </Window>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
