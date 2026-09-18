import { BrowserFrame, ButtonLink, Reveal } from "@/components/ui";
import Image from "next/image";
import { domainOf, getCopy } from "@/content";
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

const caseRoutes: Record<string, RouteKey> = {
  snowy: "snowy",
  eqx: "eqx",
  lariojameteo: "lariojameteo",
};

export function FeaturedProjects({ locale, level = 3 }: FeaturedProjectsProps) {
  const copy = getCopy(locale);
  const projects = copy.projects.filter((project) => caseRoutes[project.slug]);

  if (projects.length === 0) return null;

  return (
    <div className="grid gap-5">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 80}>
          <FeatureCard
            project={project}
            locale={locale}
            level={level}
            reversed={index % 2 === 1}
          />
        </Reveal>
      ))}
    </div>
  );
}

function FeatureCard({
  project,
  locale,
  level,
  reversed,
}: {
  project: Project;
  locale: Locale;
  level: HeadingLevel;
  reversed: boolean;
}) {
  const Heading = headingTags[level];
  const copy = getCopy(locale);
  const dark = project.slug === "eqx";

  return (
    <article className={`proj-feature proj-card--${project.slug}`}>
      <div
        className={`grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="proj-feature-body">
          <p className="proj-card-kicker">{project.label}</p>
          <Heading className="t-block mt-3">{project.name}</Heading>
          <p className="proj-feature-text mt-4 max-w-[46ch] text-[17px] leading-[1.5]">
            {project.description}
          </p>

          {project.metrics?.length ? (
            <dl className="mt-8 grid max-w-[34rem] grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {project.metrics.slice(0, 4).map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <span className="block text-[1.5rem] font-semibold leading-none tracking-[-0.03em]">
                      {metric.value}
                    </span>
                    <span className="proj-feature-text mt-1.5 block text-[14px] leading-[1.45]">
                      {metric.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <p className="proj-feature-stack mt-7 font-mono text-[12px] leading-[1.6]">
            {project.stack.slice(0, 7).join(" · ")}
          </p>

          <div className="mt-8">
            <ButtonLink
              href={routePath(locale, caseRoutes[project.slug])}
              tone={dark ? "dark" : "light"}
            >
              {copy.featuredProjects.leadCta}
            </ButtonLink>
          </div>
        </div>

        <div className={`proj-feature-shot ${reversed ? "is-left" : ""}`}>
          <BrowserFrame
            label={project.url ? domainOf(project.url) : undefined}
            tone={dark ? "dark" : "light"}
          >
            <Image
              src={project.image ?? ""}
              alt={project.name}
              width={1600}
              height={1000}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 62vw, 100vw"
            />
          </BrowserFrame>
        </div>
      </div>
    </article>
  );
}
