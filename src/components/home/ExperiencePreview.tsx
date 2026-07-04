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
          text="Mi rol actual da contexto y autoridad: arquitectura, estandares, revisiones, coordinacion, agentes y mentoring en sistemas con impacto real."
        />
        <div>
          <div className="grid gap-4">
            {featuredExperience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.045]"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-sm text-cyan-300">{item.period}</p>
                  <p className="text-sm text-slate-500">
                    {item.client ? `${item.client} · ${item.company}` : item.context}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {item.headline ?? `${item.role} - ${item.company}`}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/experiencia" variant="secondary">
              Ver trayectoria completa
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
