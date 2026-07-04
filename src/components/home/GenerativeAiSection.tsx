import { Section } from "@/components/ui";

const systemFlow = [
  {
    title: "Interfaz",
    caption: "UX, streaming y feedback",
    metric: "input",
  },
  {
    title: "Agente",
    caption: "plan, memoria corta y tool choice",
    metric: "reason",
  },
  {
    title: "Herramientas",
    caption: "MCP, APIs y contratos",
    metric: "tools",
  },
  {
    title: "Datos",
    caption: "RAG, fuentes y permisos",
    metric: "context",
  },
  {
    title: "Control",
    caption: "logs, limites y evaluacion",
    metric: "guard",
  },
] as const;

const toolSignals = ["RAG", "MCP", "AI SDK", "evals", "logs", "fallback"] as const;

const consoleLines = [
  ["intent", "consulta meteorologica con contexto de usuario"],
  ["tool", "getForecast(), getAlerts(), searchDocs()"],
  ["context", "fuentes internas + datos en tiempo real"],
  ["policy", "limites, trazabilidad y respuesta verificable"],
] as const;

const aiPrinciples = [
  {
    title: "Contexto antes que prompt",
    text: "El valor esta en que el modelo reciba la informacion correcta: datos propios, permisos, recuperacion, herramientas y limites del caso de uso.",
  },
  {
    title: "Agentes con responsabilidad clara",
    text: "Me interesa disenar flujos donde el agente sabe que puede hacer, que herramienta usar y como dejar trazabilidad para depurar el sistema.",
  },
  {
    title: "Producto, coste y operacion",
    text: "Una funcionalidad con IA tambien necesita latencia razonable, fallback, observabilidad, evaluaciones y una UX que no obligue al usuario a entender el sistema.",
  },
] as const;

export function GenerativeAiSection() {
  return (
    <Section id="ia-generativa" className="border-t border-white/10">
      <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            IA integrada en producto, no añadida encima.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Estoy creciendo en la parte de agentes, RAG, tools, MCP y LLMs desde el sitio
            que mas me interesa: convertir capacidades generativas en funcionalidades
            mantenibles dentro de un producto.
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            No lo planteo como anadir un chatbot. Lo trabajo como una pieza mas de
            arquitectura: entrada de usuario, contexto, herramientas, datos, controles y
            experiencia final.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#050814]/80">
            {[
              ["VidaCaixa", "integracion de capacidades generativas en entorno enterprise"],
              ["Snowy", "asistente y herramientas sobre datos meteorologicos reales"],
              ["criterio", "contexto, limites, trazabilidad, coste y experiencia final"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[7rem_1fr]"
              >
                <p className="font-mono text-xs text-slate-500">{label}</p>
                <p className="text-sm leading-6 text-slate-300">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050814]/90 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.32)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(103,232,249,0.18),transparent_16rem),radial-gradient(circle_at_82%_34%,rgba(94,234,212,0.1),transparent_18rem)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.035)_1px,transparent_1px)] bg-[size:34px_34px] opacity-60" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-300/10 ai-orbit" />
            <div className="pointer-events-none absolute -right-10 top-12 h-32 w-32 rounded-full border border-teal-300/10 ai-orbit" />

            <div className="relative rounded-xl border border-white/10 bg-black/20 p-3">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-300/70" />
                </div>
                <p className="font-mono text-xs text-slate-500">agent-runtime</p>
              </div>

              <div className="relative mt-4 sm:mt-5">
                <div className="absolute left-6 right-6 top-9 hidden h-px ai-pipeline-line lg:block" />
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5">
                  {systemFlow.map((item, index) => (
                    <div
                      key={item.title}
                      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#07111f]/90 p-3 ai-node-glow sm:p-4 ${
                        index === systemFlow.length - 1 ? "col-span-2 lg:col-span-1" : ""
                      }`}
                      style={{ animationDelay: `${index * 260}ms` }}
                    >
                      <div
                        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent ai-signal"
                        style={{ animationDelay: `${index * 420}ms` }}
                      />
                      <div className="relative flex items-center justify-between gap-3">
                        <p className="font-mono text-xs text-slate-500">0{index + 1}</p>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10">
                          <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                        </div>
                      </div>
                      <p className="relative mt-5 text-sm font-semibold text-white sm:mt-7">
                        {item.title}
                      </p>
                      <p className="relative mt-2 hidden min-h-10 text-xs leading-5 text-slate-500 sm:block">
                        {item.caption}
                      </p>
                      <p className="relative mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-300/80 sm:mt-4">
                        {item.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:mt-4 lg:grid-cols-[1fr_0.78fr]">
                <div className="hidden rounded-xl border border-white/10 bg-black/25 p-4 md:block">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs text-slate-500">execution trace</p>
                    <span className="rounded-full border border-teal-300/20 bg-teal-300/10 px-2.5 py-1 font-mono text-[0.68rem] text-teal-200">
                      controlled
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {consoleLines.map(([label, value], index) => (
                      <div
                        key={label}
                        className="grid gap-2 font-mono text-xs sm:grid-cols-[5.5rem_1fr] ai-console-line"
                        style={{ animationDelay: `${index * 480}ms` }}
                      >
                        <span className="text-cyan-300/80">{label}</span>
                        <span className="text-slate-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                  <p className="font-mono text-xs text-slate-500">tool surface</p>
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                    {toolSignals.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[0.68rem] text-slate-300 sm:px-3 sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5">
                    {[
                      ["lat", "<1s"],
                      ["cost", "cap"],
                      ["eval", "on"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-lg border border-white/10 bg-black/20 p-2.5 sm:p-3">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">
                          {label}
                        </p>
                        <p className="mt-2 font-mono text-sm text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <h3 className="text-xl font-semibold text-white">Como lo enfoco</h3>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {aiPrinciples.map((item) => (
                <div key={item.title}>
                  <h4 className="text-sm font-semibold text-cyan-100">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
