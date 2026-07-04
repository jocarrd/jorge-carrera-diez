import Image from "next/image";
import Link from "next/link";
import { Badge, ButtonLink, TechTag } from "@/components/ui";
import { projects } from "@/content/projects";

const snowy = projects.find((project) => project.slug === "snowy");
const lariojaMeteo = projects.find((project) => project.slug === "lariojameteo");

export function FeaturedProjects() {
  if (!snowy || !lariojaMeteo) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
        <div className="grid gap-8 p-6 lg:grid-cols-[0.75fr_1.25fr] lg:p-8">
          <div className="flex flex-col">
            <Image
              src={snowy.logo ?? ""}
              alt="Snowy"
              width={150}
              height={48}
              className="h-12 w-auto object-contain object-left"
            />
            <Badge>{snowy.label}</Badge>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">
              {snowy.name}
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-300">{snowy.description}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{snowy.impact}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {snowy.stack.slice(0, 7).map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/proyectos/snowy">Ver Snowy</ButtonLink>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
            <Image
              src={snowy.image ?? "/images/snowy-home.png"}
              alt="Interfaz de Snowy"
              width={1365}
              height={1049}
              className="h-full min-h-72 w-full object-cover object-left-top"
            />
          </div>
        </div>
      </article>

      <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 lg:p-8">
        <div className="flex h-24 items-center justify-start">
          <Image
            src={lariojaMeteo.logo ?? ""}
            alt="LaRiojaMeteo"
            width={160}
            height={160}
            className="h-20 w-auto object-contain object-left"
          />
        </div>
        <Badge>{lariojaMeteo.label}</Badge>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
          {lariojaMeteo.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{lariojaMeteo.description}</p>
        <p className="mt-4 text-sm leading-7 text-slate-400">{lariojaMeteo.impact}</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {lariojaMeteo.metrics?.slice(0, 4).map((metric) => (
            <div key={metric.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="font-mono text-2xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-xs leading-5 text-cyan-100">{metric.label}</p>
            </div>
          ))}
        </div>
        <Link
          href="/proyectos/lariojameteo"
          className="mt-8 text-sm font-medium text-cyan-300 hover:text-cyan-100"
        >
          Ver LaRiojaMeteo
        </Link>
      </article>
    </div>
  );
}
