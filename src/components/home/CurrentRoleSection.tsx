import { Section, SectionHeader } from "@/components/ui";

const roleSignals = [
  {
    title: "Liderazgo técnico",
    text: "Arquitectura, estándares, code reviews, coordinación técnica y acompañamiento del equipo.",
  },
  {
    title: "Integración de IA",
    text: "Definición e incorporación de capacidades de IA generativa y agentes en flujos enterprise de Caixa.",
  },
  {
    title: "Entorno crítico",
    text: "Trabajo sobre producto financiero/asegurador con dependencias de negocio, QA, backend y equipos transversales.",
  },
] as const;

export function CurrentRoleSection() {
  return (
    <Section id="rol-actual" className="border-y border-white/10 bg-white/[0.02]">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="Rol actual"
          title="Tech Lead en VidaCaixa y colaborador técnico de EQx en Suiza."
          text="Mi trabajo actual combina criterio técnico, coordinación con equipos y aterrizaje de nuevas capacidades, tanto en un entorno enterprise como en un producto internacional donde llevo el relevo técnico completo."
        />
        <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <p className="text-base leading-7 text-slate-300 sm:leading-8">
            En VidaCaixa trabajo como Tech Lead en un entorno financiero/asegurador,
            participando en decisiones de arquitectura frontend, coordinación técnica,
            revisiones de código y alineamiento con backend, QA y negocio.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5">
            También estoy involucrado en la integración de capacidades de IA generativa,
            aterrizando casos de uso, agentes y herramientas dentro de flujos enterprise
            con requisitos de seguridad, trazabilidad y mantenimiento.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5">
            En paralelo colaboro como freelance con la fundación suiza que publica el{" "}
            <a
              className="text-cyan-300 underline-offset-4 hover:underline"
              href="https://www.unisg.ch/en/research/research-in-focus/elite-quality-index/"
              target="_blank"
              rel="noreferrer"
            >
              Elite Quality Index
            </a>
            , un índice de economía política dirigido académicamente por la Universidad de
            St. Gallen. He asumido el relevo técnico de sus productos digitales y trabajo
            directamente con dirección y diseño para decidir qué se entrega y cuándo.
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
