import { Section } from "@/components/ui";

const systemFlow = [
  "Interfaz",
  "Agente",
  "Herramientas",
  "Datos",
  "Control",
] as const;

const agentCapabilities = [
  {
    label: "contexto",
    title: "RAG y datos propios",
    text: "Recuperacion de informacion, fuentes internas, documentacion, embeddings y contexto limitado al caso de uso.",
  },
  {
    label: "tools",
    title: "Herramientas y MCP",
    text: "Agentes con herramientas explicitas, permisos, contratos, function calling y servidores MCP cuando aportan una frontera clara.",
  },
  {
    label: "sdk",
    title: "Integracion en producto",
    text: "Vercel AI SDK, streaming, UX, latencia, coste y fallback integrados dentro de flujos reales, no como demo aislada.",
  },
  {
    label: "ops",
    title: "Control",
    text: "Logs, trazabilidad, evaluacion de respuestas, limites y capacidad de corregir el sistema como cualquier pieza critica.",
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
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="grid gap-3 lg:grid-cols-5">
              {systemFlow.map((item, index) => (
                <div key={item} className="relative rounded-xl border border-white/10 bg-[#07111f] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs text-slate-500">0{index + 1}</p>
                    <div className="h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(103,232,249,0.55)]" />
                  </div>
                  <p className="mt-8 text-sm font-medium text-white">{item}</p>
                  {index < systemFlow.length - 1 ? (
                    <div className="absolute -right-3 top-1/2 hidden h-px w-3 bg-cyan-300/40 lg:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {agentCapabilities.map((item) => (
              <article
                key={item.label}
                className="group relative min-h-48 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.045]"
              >
                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full border border-cyan-300/10 transition group-hover:border-cyan-300/20" />
                <p className="font-mono text-xs text-slate-500">{item.label}</p>
                <h3 className="mt-8 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
