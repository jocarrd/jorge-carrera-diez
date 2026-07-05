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
            En VidaCaixa estoy en una posicion donde el codigo importa, pero tambien
            importan las decisiones alrededor: que arquitectura se sostiene, como se
            coordina con backend y QA, que estandares se aplican y que capacidades nuevas
            merece la pena introducir.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5">
            La parte de IA la estoy trabajando desde ese prisma: casos de uso con sentido,
            agentes y herramientas donde aportan valor, y una integracion que encaje con
            seguridad, trazabilidad, coste y mantenimiento.
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
