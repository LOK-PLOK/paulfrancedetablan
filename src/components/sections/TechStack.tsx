import { technologies } from "@/data/technologies";
import { ChipList } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Window } from "@/components/ui/Window";

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="mx-auto max-w-6xl px-5 py-6 md:py-8">
      <SectionHeading id="stack-title" title="Tech stack" path="~/stack" />
      <Window path="~/stack — ls -R" tag={<span className="text-muted">{technologies.length} groups</span>}>
        <dl className="divide-y divide-line">
          {technologies.map((g) => (
            <div key={g.id} className="grid gap-2 px-4 py-3 transition-colors hover:bg-bg/40 md:grid-cols-[15rem_1fr] md:items-center md:gap-6">
              <dt className="flex items-center gap-2 text-sm font-bold text-fg">
                <span aria-hidden className="text-primary">▸</span>
                {g.title}
              </dt>
              <dd>
                <ChipList items={g.items} label={g.title} />
              </dd>
            </div>
          ))}
        </dl>
      </Window>
    </section>
  );
}
