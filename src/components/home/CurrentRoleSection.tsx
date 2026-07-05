import { Section, SectionHeader } from "@/components/ui";

const roleSignals = [
  {
    title: "Liderazgo tecnico",
    text: "Arquitectura, estandares, code reviews, coordinacion tecnica y acompanamiento del equipo.",
  },
  {
    title: "Integracion de IA",
    text: "Definicion e incorporacion de capacidades de IA generativa y agentes en flujos enterprise de Caixa.",
  },
  {
    title: "Entorno critico",
    text: "Trabajo sobre producto financiero/asegurador con dependencias de negocio, QA, backend y equipos transversales.",
  },
] as const;

export function CurrentRoleSection() {
  return (
    <Section id="rol-actual" className="border-y border-white/10 bg-white/[0.02]">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="Rol actual"
          title="Tech Lead en VidaCaixa, con foco en arquitectura y agentes."
          text="Mi trabajo actual combina criterio tecnico, coordinacion con equipos y aterrizaje de nuevas capacidades en un entorno enterprise."
        />
        <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <p className="text-base leading-7 text-slate-300 sm:leading-8">
            En VidaCaixa trabajo como Tech Lead en un entorno financiero/asegurador,
            participando en decisiones de arquitectura frontend, coordinacion tecnica,
            revisiones de codigo y alineamiento con backend, QA y negocio.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5">
            Tambien estoy involucrado en la integracion de capacidades de IA generativa,
            aterrizando casos de uso, agentes y herramientas dentro de flujos enterprise
            con requisitos de seguridad, trazabilidad y mantenimiento.
          </p>
          <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-3">
            {roleSignals.map((signal, index) => (
              <div key={signal.title}>
                <p className="font-mono text-xs text-cyan-300/80">0{index + 1}</p>
                <h3 className="mt-4 text-base font-semibold text-white">{signal.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{signal.text}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
