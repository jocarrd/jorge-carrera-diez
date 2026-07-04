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
        <div className="grid gap-4">
          {roleSignals.map((signal, index) => (
            <article
              key={signal.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/25 hover:bg-white/[0.045]"
            >
              <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(103,232,249,0.55)]" />
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full border border-cyan-300/10 transition group-hover:border-cyan-300/20" />
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-xs text-slate-500">0{index + 1}</p>
                <p className="font-mono text-xs text-cyan-300/80">vida-caixa</p>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-white">{signal.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{signal.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
