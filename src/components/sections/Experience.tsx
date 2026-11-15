import { experience } from "@/data/experience";
import type { ExperienceEntry } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Experience = () => <Timeline kind="work" id="experience" title="Experience" />;
export const Education = () => <Timeline kind="education" id="education" title="Education" />;

function Timeline({ kind, id, title }: { kind: ExperienceEntry["kind"]; id: string; title: string }) {
  const timeline = kind === "work"; // Education is shown as plain cards, without the dots and line
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-6 md:py-8">
      <SectionHeading id={`${id}-title`} title={title} path={`~/${id}`} />
      <ol
        className={`relative space-y-3 ${
          timeline ? "pl-7 before:absolute before:bottom-6 before:left-[5px] before:top-6 before:w-px before:bg-line" : ""
        }`}
      >
        {experience.filter((e) => e.kind === kind).map((e) => {
          const current = e.status === "current";
          return (
            <li key={e.id} className="relative">
              {timeline ? (
                <span
                  aria-hidden
                  className={`absolute -left-7 top-[1.15rem] size-[11px] rounded-full ${
                    current ? "bg-status" : "border-2 border-primary-dim bg-bg"
                  }`}
                />
              ) : null}
              <div className="grid gap-1.5 rounded-md border border-line bg-surface px-4 py-3.5 transition-colors hover:border-primary-dim md:grid-cols-[10rem_1fr] md:gap-6">
                <p className="pt-0.5 text-xs text-muted">{e.period}</p>
                <div className="min-w-0">
                  <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-fg">
                    {e.title}
                    {current ? (
                      <span className="rounded-sm border border-status/40 bg-status/10 px-1.5 py-px text-[10px] font-bold tracking-wider text-status">
                        CURRENT
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-0.5 text-xs text-fg-2">
                    {e.org}
                    {e.type ? <span className="text-muted"> · {e.type}</span> : null}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-2">
                    {e.meta ? `${e.meta.honors} · ${e.meta.gpa} · ${e.meta.location}` : e.bullets.join(" ")}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
