import type { Metadata } from "next";
import { Section, SectionHeader, Surface } from "@/components/ui";
import { experience } from "@/content/experience";
import { profile, site } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "CV",
  description:
    "CV de Jorge Carrera Diez, Product Software Engineer e Ingeniero Informatico especializado en full stack, arquitectura, producto digital e IA aplicada.",
  path: "/cv",
});

export default function CvPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="CV"
          title="Jorge Carrera Diez"
          text={profile.summary}
        />
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
          <span>{site.location}</span>
          <a className="text-cyan-300 hover:text-cyan-100" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <SectionHeader eyebrow="Experiencia" title="Trayectoria profesional" />
        <div className="mt-10 space-y-4">
          {experience.map((item) => (
            <Surface key={`${item.company}-${item.period}`}>
              <p className="text-sm text-cyan-300">{item.period}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                {item.headline ?? `${item.role} - ${item.company}`}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {item.client ? `${item.client} · ${item.company}` : item.context}
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">{item.summary}</p>
              <ul className="mt-5 grid gap-2 text-sm text-slate-400">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>- {highlight}</li>
                ))}
              </ul>
            </Surface>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Stack" title="Competencias tecnicas" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <Surface key={group.title}>
              <h2 className="text-xl font-semibold text-white">{group.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {group.items.join(", ")}
              </p>
            </Surface>
          ))}
        </div>
      </Section>
    </main>
  );
}
