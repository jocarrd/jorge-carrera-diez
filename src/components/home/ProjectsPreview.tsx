import { Container, ProductShot, Reveal } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

// LaRiojaMeteo baja al final y ocupa una sola banda: es contexto y audiencia,
// no el argumento principal, y compitiendo con Snowy los debilitaba a los dos.
export function ProjectsPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const project = copy.projects.find((item) => item.slug === "lariojameteo");

  if (!project) return null;

  return (
    <section id="proyectos" className="section-band py-16 sm:py-24">
      <Container>
        <Reveal className="grid gap-8 rounded-[var(--radius-card-lg)] bg-white p-7 sm:gap-10 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.02em] text-[var(--muted)]">
              {project.name}
            </p>
            <h2 className="mt-3.5 text-[1.75rem] font-bold leading-[1.2] tracking-[-0.025em] sm:text-[2rem]">
              {project.description}
            </h2>
            <p className="mt-3.5 text-[17px] leading-[1.55] text-[var(--muted)]">
              {project.impact}
            </p>
            <a
              href={site.lariojameteo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-[17px] text-[var(--accent-text)] hover:underline"
            >
              {copy.featuredProjects.secondaryCta}
              <span aria-hidden className="ml-1 text-[15px]">
                &rsaquo;
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-7">
            {project.image ? (
              <ProductShot src={project.image} alt={copy.featuredProjects.secondaryImageAlt} width={1600} height={1000} />
            ) : null}
            <dl className="grid grid-cols-2 gap-5">
            {(project.metrics ?? []).map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block text-[1.875rem] font-bold leading-none tracking-[-0.03em]">
                    {metric.value}
                  </span>
                  <span className="mt-1.5 block text-sm text-[var(--muted)]">{metric.label}</span>
                </dd>
              </div>
            ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
