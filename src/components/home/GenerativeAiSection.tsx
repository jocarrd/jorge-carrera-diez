import { Section } from "@/components/ui";

const aiWorkflow = [
  {
    step: "01",
    title: "Caso de uso",
    text: "Primero separo lo util de lo vistoso: donde una respuesta generativa, un agente o una automatizacion realmente reduce friccion.",
  },
  {
    step: "02",
    title: "Agente y herramientas",
    text: "Defino contexto, permisos, herramientas, limites y fallback. Un agente sin frontera clara acaba siendo dificil de mantener.",
  },
  {
    step: "03",
    title: "Integracion",
    text: "Lo bajo a arquitectura: backend, contratos, trazabilidad, UX, seguridad, costes y dependencias con otros equipos.",
  },
  {
    step: "04",
    title: "Control",
    text: "Mido calidad, errores, latencia y coste. La IA tiene que poder observarse y corregirse como cualquier otra pieza critica.",
  },
] as const;

export function GenerativeAiSection() {
  return (
    <Section id="ia-generativa" className="border-t border-white/10">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            IA generativa
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Agentes, si aportan algo al sistema.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Trabajo la IA desde la arquitectura: caso de uso, contexto, herramientas,
            permisos, trazabilidad, coste y experiencia de usuario. La clave esta en
            convertir una capacidad generativa en una funcionalidad mantenible.
          </p>
          <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-cyan-200">
              En Caixa
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Lidero la integracion de IA generativa en proyectos enterprise,
              coordinando arquitectura, equipos tecnicos y necesidades de negocio.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-5 hidden w-px bg-gradient-to-b from-cyan-300/70 via-white/10 to-transparent sm:block" />
          <div className="space-y-5">
            {aiWorkflow.map((item) => (
              <article
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:ml-12"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-[#07111f] font-mono text-sm text-cyan-200 sm:absolute sm:-left-16 sm:top-5">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
