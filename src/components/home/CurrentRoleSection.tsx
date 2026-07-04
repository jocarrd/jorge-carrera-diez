import { Section, SectionHeader, Surface } from "@/components/ui";

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
    <Section className="border-y border-white/10 bg-white/[0.02]">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="Rol actual"
          title="Tech Lead en VidaCaixa, con foco en arquitectura e IA aplicada."
          text="Mi trabajo actual combina criterio tecnico, coordinacion con equipos y aterrizaje de capacidades de IA generativa en un entorno enterprise."
        />
        <div className="grid gap-4">
          {roleSignals.map((signal, index) => (
            <Surface key={signal.title} className="relative overflow-hidden">
              <div className="absolute bottom-0 left-0 top-0 w-px bg-cyan-300/30" />
              <p className="font-mono text-sm text-cyan-300">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{signal.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{signal.text}</p>
            </Surface>
          ))}
        </div>
      </div>
    </Section>
  );
}
