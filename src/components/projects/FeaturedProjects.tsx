import Image from "next/image";
import { ButtonLink, Reveal, TechTag } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/i18n/routes";
import { routePath } from "@/i18n/routes";
import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";
import type { Project } from "@/types/content";

type FeaturedProjectsProps = {
  locale: Locale;
  level?: HeadingLevel;
};

/* Los tres proyectos tienen página propia, así que el slug es también la clave
   de ruta. Antes esta rejilla era Snowy y LaRiojaMeteo escritos a mano, uno
   grande y otro pequeño; al aparecer un tercero no había dónde meterlo. */
const caseRoutes: Record<string, RouteKey> = {
  snowy: "snowy",
  eqx: "eqx",
  lariojameteo: "lariojameteo",
};

export function FeaturedProjects({ locale, level = 3 }: FeaturedProjectsProps) {
  const Heading = headingTags[level];
  const copy = getCopy(locale);
  const labels = copy.featuredProjects;
  const [lead, ...rest] = copy.projects;

  if (!lead) {
    return null;
  }

  const routeFor = (project: Project) => caseRoutes[project.slug];

  return (
    <div className="grid gap-5">
      {/* El primero manda: ocupa el ancho y es el único con métricas a la
          vista, porque es el que se quiere que abran. */}
      <Reveal>
        <article className="overflow-hidden rounded-2xl lvl-2 border transition-colors duration-300 hover:border-[var(--line-strong)]">
          <div className="grid gap-6 p-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:p-8">
            <div className="flex flex-col">
              {lead.logo ? (
                <Image
                  src={lead.logo}
                  alt={lead.name}
                  width={150}
                  height={48}
                  className="h-10 w-auto object-contain object-left sm:h-12"
                />
              ) : null}
              <Heading className="mt-5 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-6 sm:text-3xl">
                {lead.name}
              </Heading>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:leading-7">
                {lead.description}
              </p>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{lead.impact}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {lead.stack.slice(0, 6).map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
              <div className="mt-8">
                <ButtonLink href={routePath(locale, routeFor(lead))}>{labels.leadCta}</ButtonLink>
              </div>
            </div>

            <div className="shot-frame group/shot relative overflow-hidden rounded-xl border border-[var(--line)] bg-black">
              <Image
                src={lead.image ?? ""}
                alt={labels.leadImageAlt}
                width={1365}
                height={1049}
                className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover/shot:scale-100 sm:h-full sm:min-h-72"
              />
            </div>
          </div>
        </article>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {rest.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl lvl-2 border transition-colors duration-300 hover:border-[var(--line-strong)]">
              <div className="shot-frame relative h-48 border-b border-[var(--line)] bg-[var(--panel)] sm:h-56">
                <Image
                  src={project.image ?? ""}
                  alt={project.name}
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 lg:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                  {project.label}
                </p>
                <Heading className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  {project.name}
                </Heading>
                <p className="mt-4 flex-1 text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)]">
                  {project.metrics?.slice(0, 4).map((metric) => (
                    <div key={metric.label} className="bg-[var(--panel)] p-4">
                      <p className="font-mono text-xl font-semibold text-[var(--foreground)]">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <ButtonLink href={routePath(locale, routeFor(project))} variant="quiet">
                    {labels.secondaryCta}
                  </ButtonLink>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
