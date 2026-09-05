import Link from "next/link";
import { ButtonLink, Container, DeviceFrame, Rail, Reveal, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import type { RouteKey } from "@/i18n/routes";
import type { Project } from "@/types/content";

// Los tres tienen pagina de caso propia y el slug es la clave de ruta.
const caseRoutes: Record<string, RouteKey> = {
  snowy: "snowy",
  eqx: "eqx",
  lariojameteo: "lariojameteo",
};

// Antes esta banda enseñaba sólo LaRiojaMeteo, pero el titular prometía tres
// proyectos "que puedes abrir y mirar" y el ancla del menú caía justo aquí:
// quien la seguía se encontraba uno. Ahora están los tres, y en el móvil real
// en el que se usan, que es donde se entiende que son productos y no maquetas.
export function ProjectsPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const preview = copy.projectsPreview;
  const projects = copy.projects.filter((project) => project.imageMobile);

  if (projects.length === 0) return null;

  return (
    <section id="proyectos" className="section-band py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader eyebrow={preview.eyebrow} title={preview.title} text={preview.text} />
        </Reveal>

        <Reveal delay={80} className="mt-14 hidden gap-8 sm:grid sm:grid-cols-3 lg:gap-12">
          {projects.map((project) => (
            <ProjectDevice key={project.slug} project={project} locale={locale} />
          ))}
        </Reveal>

        <Reveal delay={80} className="mt-12 sm:hidden">
          <Rail label={preview.title}>
            {projects.map((project) => (
              <div key={project.slug} className="rail-item w-[62vw] max-w-[15rem]">
                <ProjectDevice project={project} locale={locale} />
              </div>
            ))}
          </Rail>
        </Reveal>

        <div className="mt-14 flex justify-center">
          <ButtonLink href={routePath(locale, "projects")} variant="secondary">
            {copy.pages.projects.eyebrow}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function ProjectDevice({ project, locale }: { project: Project; locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <article className="flex flex-col items-center text-center">
      <DeviceFrame
        src={project.imageMobile ?? ""}
        alt={`${project.name} en un móvil`}
        className="max-w-[15rem]"
      />
      <p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.02em] text-[var(--muted)]">
        {project.label}
      </p>
      <h3 className="mt-2 text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em]">
        {project.name}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.5] text-[var(--muted)]">{project.pitch}</p>
      {/* El rotulo dice "ver el caso", asi que lleva al caso y no a la web del
          producto: el enlace externo ya esta dentro de cada pagina de caso. */}
      {caseRoutes[project.slug] ? (
        <Link
          href={routePath(locale, caseRoutes[project.slug])}
          className="mt-3 inline-flex min-h-11 items-center text-[15px] text-[var(--accent-text)] hover:underline"
        >
          {copy.featuredProjects.secondaryCta}
          <span aria-hidden className="ml-1 text-[13px]">
            &rsaquo;
          </span>
        </Link>
      ) : null}
    </article>
  );
}
