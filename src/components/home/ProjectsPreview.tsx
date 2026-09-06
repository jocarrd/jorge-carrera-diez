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
// quien la seguía se encontraba uno.
//
// Y luego eran un móvil flotando sobre el fondo con el texto debajo, en la
// página. Eso no es una tarjeta: una tarjeta tiene superficie propia, el texto
// dentro y el producto asomando recortado por su borde. La variedad de fondos
// —dos claras y una oscura— evita la fila de tres cajas idénticas.
export function ProjectsPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const preview = copy.projectsPreview;
  const projects = copy.projects.filter((project) => project.imageMobile);

  if (projects.length === 0) return null;

  return (
    <section id="proyectos" className="section-band py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader eyebrow={preview.eyebrow} title={preview.title} text={preview.text} />
        </Reveal>

        <Reveal delay={80} className="mt-14 hidden gap-5 sm:grid sm:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </Reveal>

        <Reveal delay={80} className="mt-12 sm:hidden">
          <Rail label={preview.title}>
            {projects.map((project) => (
              <div key={project.slug} className="rail-item w-[78vw] max-w-[20rem]">
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

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
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
        <DeviceFrame src={project.imageMobile ?? ""} alt={`${project.name} en un móvil`} />
      </div>
    </Link>
  );
}
