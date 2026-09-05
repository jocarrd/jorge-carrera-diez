import { ButtonLink, Section, SectionHeader, Reveal } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

// Las seis etapas estaban repartidas entre secciones y páginas. Juntas, en una
// sola tabla, se leen de un vistazo y el recorrido se entiende sin abrir nada.
export function ExperiencePreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const preview = copy.experiencePreview;

  return (
    <Section id="experiencia" className="section-band">
      <Reveal>
        <SectionHeader title={copy.cvTimeline.label} text={copy.cvTimeline.note} />
      </Reveal>

      <ol className="mt-12 overflow-hidden rounded-[var(--radius-card-lg)] bg-white">
        {copy.experience.map((role, index) => (
          <li
            key={`${role.company}-${role.period}`}
            className={`tl-entry grid items-baseline gap-3 p-7 sm:gap-7 sm:p-8 lg:grid-cols-[180px_1fr_190px] ${
              index === copy.experience.length - 1 ? "" : "border-b border-[var(--line)]"
            }`}
          >
            <p className="text-[15px] text-[var(--muted)]">{role.period}</p>
            <div>
              <h3 className="text-xl font-semibold leading-[1.25] tracking-[-0.015em]">
                {role.role}
              </h3>
              <p className="mt-1 text-base font-medium lg:hidden">
                {role.client ?? role.company}
                {role.client ? (
                  <span className="text-[var(--muted)]"> · {role.company}</span>
                ) : null}
              </p>
              <p className="mt-1.5 text-base leading-[1.5] text-[var(--muted)]">{role.summary}</p>
            </div>
            <p className="hidden text-base font-medium lg:block lg:text-right">
              {role.client ?? role.company}
              {role.client ? (
                <span className="block text-sm font-normal text-[var(--muted)]">
                  {role.company}
                </span>
              ) : null}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8 text-center">
        <ButtonLink href={routePath(locale, "experience")} variant="quiet">
          {preview.cta}
        </ButtonLink>
      </div>
    </Section>
  );
}
