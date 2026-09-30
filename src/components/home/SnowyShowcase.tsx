import { SnowyScroll } from "@/components/home/SnowyScroll";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function SnowyShowcase({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const showcase = copy.snowyShowcase;
  const snowy = copy.projects.find((project) => project.slug === "snowy");

  return (
    <section
      id="snowy-showcase"
      className="section-dark py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <SectionHeader
          label={copy.sectionLabels.snowy}
          title={showcase.title}
          text={showcase.lead}
        />

        <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-x-4">
          <ButtonLink
            href={site.snowy}
            tone="dark"
            target="_blank"
            rel="noreferrer"
          >
            {showcase.ctaSecondary}
          </ButtonLink>
          <ButtonLink
            href={routePath(locale, "snowy")}
            variant="quiet"
            tone="dark"
          >
            {showcase.ctaPrimary}
          </ButtonLink>
        </div>
      </Container>

      <Container className="mt-10 sm:mt-14">
        <SnowyScroll shots={showcase.gallery} />
      </Container>

      {snowy?.metrics ? (
        <Container className="mt-14 sm:mt-16">
          <p className="max-w-[46ch] text-[1.0625rem] leading-[1.5] text-[var(--ink-dark-muted)] sm:text-lg">
            {copy.profile.availability}.{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-[var(--accent-dark)] underline decoration-[var(--accent-dark)]/35 underline-offset-4 hover:decoration-[var(--accent-dark)]"
            >
              {copy.contactCta.cta}
            </a>
          </p>

          <p className="mt-8 max-w-2xl font-mono text-[12px] leading-[1.7] text-[var(--ink-dark-muted)]">
            {(snowy.stack ?? []).join(" · ")}
          </p>
        </Container>
      ) : null}
    </section>
  );
}
