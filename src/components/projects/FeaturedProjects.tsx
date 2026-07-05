import Image from "next/image";
import Link from "next/link";
import { ButtonLink, TechTag } from "@/components/ui";
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
        <div className="grid gap-6 p-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8 lg:p-8">
          <div className="flex flex-col">
            <Image
              src={snowy.logo ?? ""}
              alt="Snowy"
              width={150}
              height={48}
              className="h-10 w-auto object-contain object-left sm:h-12"
            />
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:mt-6 sm:text-3xl">
              {snowy.name}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:leading-8">{snowy.description}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{snowy.impact}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {snowy.stack.slice(0, 6).map((tech) => (
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
              className="h-64 w-full object-cover object-left-top sm:h-full sm:min-h-72"
            />
          </div>
        </div>
      </article>

      <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
        <div className="relative h-48 border-b border-white/10 bg-slate-950">
          <Image
            src={lariojaMeteo.image ?? "/images/lariojameteo-home.png"}
            alt="Home de LaRiojaMeteo"
            width={1230}
            height={923}
            className="h-full w-full object-cover object-left-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
          <Image
            src={lariojaMeteo.logo ?? ""}
            alt="LaRiojaMeteo"
            width={120}
            height={120}
            className="absolute bottom-4 left-5 h-16 w-auto object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 lg:p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {lariojaMeteo.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">{lariojaMeteo.description}</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">{lariojaMeteo.impact}</p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {lariojaMeteo.metrics?.slice(0, 4).map((metric) => (
              <div key={metric.label} className="bg-[#07111f] p-4">
                <p className="font-mono text-xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/proyectos/lariojameteo"
            className="mt-8 text-sm font-medium text-cyan-300 hover:text-cyan-100"
          >
            Ver LaRiojaMeteo
          </Link>
        </div>
      </article>
    </div>
  );
}
