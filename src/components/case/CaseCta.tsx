import { ButtonLink, Section } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

/* Toda página de caso termina invitando a escribir. Antes se acababa en la
   última sección de contenido y había que volver arriba para encontrar cómo
   contactar. */
export function CaseCta({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).caseCta;

  return (
    <Section className="section-band border-t border-[var(--line)]">
      <div className="mx-auto max-w-[46rem] text-center">
        <h2 className="text-[1.75rem] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--foreground)] sm:text-[2.75rem]">
          {copy.title}
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-[1.55] text-[var(--muted)] sm:mt-5 sm:text-xl">
          {copy.text}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={`mailto:${site.email}`}>{copy.cta}</ButtonLink>
          <ButtonLink href={routePath(locale, "projects")} variant="secondary">
            {copy.ctaSecondary}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
