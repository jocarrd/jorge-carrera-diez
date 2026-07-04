import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { experience } from "@/content/experience";

const featuredExperience = experience.slice(0, 3);

export function ExperiencePreview() {
  return (
    <Section id="experiencia">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Experiencia"
          title="Liderazgo tecnico en proyectos enterprise."
          text="Mi rol actual da contexto y autoridad: arquitectura, estandares, revisiones, coordinacion, IA aplicada y mentoring en sistemas con impacto real."
        />
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-2 w-px bg-gradient-to-b from-cyan-300/70 via-white/10 to-transparent" />
          <div className="space-y-8">
          {featuredExperience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="relative pl-12">
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-[#07111f]">
                <div className="h-2 w-2 rounded-full bg-cyan-300" />
              </div>
              <p className="font-mono text-sm text-cyan-300">{item.period}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {item.headline ?? `${item.role} - ${item.company}`}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {item.client ? `${item.client} · ${item.company}` : item.context}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
            </article>
          ))}
          </div>
          <div className="mt-10 pl-12">
            <ButtonLink href="/experiencia" variant="secondary">
              Ver trayectoria completa
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
