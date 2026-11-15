import { ChevronDown, Lock } from "lucide-react";
import { projects, projectsIntro } from "@/data/projects";
import { ChipList } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Window } from "@/components/ui/Window";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-5 py-6 md:py-8">
      <SectionHeading id="projects-title" title="Featured projects" path="~/projects" />
      <p className="-mt-3 mb-6 max-w-2xl text-sm text-muted">{projectsIntro}</p>
      <div className="grid items-start gap-5 lg:grid-cols-3">
        {projects.map((p) => (
          <Window
            key={p.id}
            path={p.repoLabel}
            tag={<span className="inline-flex items-center gap-1"><Lock size={12} aria-hidden /> private</span>}
          >
            <div className="space-y-3 p-5">
              <h3 className="font-bold leading-snug text-fg">{p.title}</h3>
              <p className="text-sm leading-relaxed text-fg-2">{p.description}</p>
              <ChipList items={p.tags} label={`${p.title} technologies`} />
              <details className="group border-t border-line pt-3">
                <summary className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-primary">
                  <span className="group-open:hidden">More details</span>
                  <span className="hidden group-open:inline">Less details</span>
                  <ChevronDown size={14} aria-hidden className="transition-transform group-open:rotate-180" />
                </summary>
                <ul className="details-body mt-3 space-y-2 text-sm leading-relaxed text-fg-2">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span aria-hidden className="text-primary">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </Window>
        ))}
      </div>
    </section>
  );
}
