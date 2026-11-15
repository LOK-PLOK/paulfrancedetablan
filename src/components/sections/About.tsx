import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Window } from "@/components/ui/Window";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-6 md:py-8">
      <SectionHeading id="about-title" title="About me" path="~/about.md" />
      <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        <Window path="~/about.md">
          <div className="space-y-4 p-5 text-sm leading-relaxed text-fg-2 sm:p-8">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Window>
        <Window path="~/focus-areas" className="self-start">
          <ul className="space-y-3 p-5 text-sm">
            {profile.focusAreas.map((f) => (
              <li key={f} className="flex gap-2 text-fg">
                <span aria-hidden className="text-primary">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </Window>
      </div>
    </section>
  );
}
