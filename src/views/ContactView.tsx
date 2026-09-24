import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Section } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { contactPageJsonLd } from "@/lib/seo";

export function ContactView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.contact;
  const profile = getCopy(locale).profile;

  return (
    <main>
      <JsonLd data={contactPageJsonLd(locale)} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="contact-status">{profile.availability}</p>
            <h1 className="t-section mt-4 max-w-3xl">{copy.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-xl sm:leading-9">
              {copy.lead}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:leading-7">
              {copy.detail}
            </p>
          </div>

          <div className="rounded-[var(--radius-card-lg)] bg-[var(--panel)] p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {copy.emailLabel}
            </p>
            <a
              className="mt-4 inline-flex min-h-11 items-center break-all text-xl font-semibold tracking-tight text-[var(--accent-text)] transition hover:text-[var(--accent-text)] sm:text-3xl"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
              {copy.emailHint}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${site.email}`}>
                {copy.ctaPrimary}
              </ButtonLink>
              <ButtonLink href={routePath(locale, "cv")} variant="secondary">
                {copy.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="section-band">
        <div className="max-w-2xl">
          <h2 className="t-section">{copy.servicesCtaTitle}</h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)] sm:leading-8">
            {copy.servicesCtaText}
          </p>
          <div className="mt-8">
            <ButtonLink href={routePath(locale, "services")}>
              {copy.servicesCtaButton}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
