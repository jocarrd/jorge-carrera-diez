import Link from "next/link";
import { Section } from "@/components/ui";

const rows = [
  ["actual", "Tech Lead en VidaCaixa", "arquitectura, agentes y coordinacion tecnica"],
  ["producto", "Snowy", "Next.js, NestJS, Redis, MySQL, Docker y SEO"],
  ["contexto", "LaRiojaMeteo", "audiencia, contenido, comunidad y meteorologia regional"],
  ["operativa", "End-to-end", "roadmap, backend, frontend, datos, infraestructura y UX"],
] as const;

const links = [
  { href: "/experiencia", label: "experiencia" },
  { href: "/proyectos/snowy", label: "snowy" },
  { href: "https://datos.gob.es/es/aplicaciones/snowy", label: "datos.gob.es" },
] as const;

export function EngineeringSnapshot() {
  return (
    <Section className="border-y border-white/10 bg-white/[0.018] py-12 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Perfil tecnico con producto real detras.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Mi experiencia combina consultoria enterprise, liderazgo tecnico y un producto
              propio donde las decisiones se ven en arquitectura, rendimiento, SEO y operativa.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050814]/80">
          {rows.map(([label, title, detail]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[7rem_13rem_1fr] sm:items-center"
            >
              <p className="font-mono text-xs text-slate-500">{label}</p>
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="text-sm leading-6 text-slate-400">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
