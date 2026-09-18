import Link from "next/link";
import {
  ButtonLink,
  Container,
  DeviceFrame,
  Rail,
  Reveal,
  RevealGroup,
  SectionHeader,
} from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import type { RouteKey } from "@/i18n/routes";
import type { Project } from "@/types/content";

const caseRoutes: Record<string, RouteKey> = {
  snowy: "snowy",
  eqx: "eqx",
  lariojameteo: "lariojameteo",
};

export function ProjectsPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const preview = copy.projectsPreview;
  const projects = copy.projects.filter((project) => project.imageMobile);

  if (projects.length === 0) return null;

  return (
    <section id="proyectos" className="section-band py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader title={preview.title} text={preview.text} />
        </Reveal>

        <RevealGroup
          delay={80}
          className="mt-14 hidden gap-5 sm:grid sm:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </RevealGroup>

        <Reveal delay={80} className="mt-12 sm:hidden">
          <Rail label={preview.title}>
            {projects.map((project) => (
              <div
                key={project.slug}
                className="rail-item w-[78vw] max-w-[20rem]"
              >
                <ProjectCard project={project} locale={locale} />
              </div>
            ))}
          </Rail>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <ButtonLink href={routePath(locale, "projects")} variant="secondary">
            {copy.pages.projects.eyebrow}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const route = caseRoutes[project.slug];
  if (!route) return null;

  return (
    <Link
      href={routePath(locale, route)}
      className={`proj-card proj-card--${project.slug} group`}
      aria-label={`${project.name}: ${project.pitch ?? ""}`}
    >
      <p className="proj-card-kicker">{project.label}</p>
      <h3 className="proj-card-title">{project.name}</h3>
      <p className="proj-card-pitch">{project.pitch}</p>

      <div className="proj-card-device">
        <DeviceFrame
          src={project.imageMobile ?? ""}
          alt={`${project.name} en un móvil`}
        />
      </div>
    </Link>
  );
}
