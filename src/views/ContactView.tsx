import { JsonLd } from "@/components/JsonLd";
import {
  ButtonLink,
  RevealChildren,
  Section,
  SectionHeader,
} from "@/components/ui";
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
        <SectionHeader title={copy.servicesTitle} text={copy.servicesText} />
        <RevealChildren className="mt-10 grid gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-2">
          {copy.services.map((service) => (
            <div key={service.title} className="area">
              <h3 className="area-title">{service.title}</h3>
              <p className="area-text">{service.text}</p>
            </div>
          ))}
        </RevealChildren>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={copy.stepsTitle} text={copy.stepsText} />
        <RevealChildren as="ol" className="contact-steps mt-10 sm:mt-14">
          {copy.steps.map((step, index) => (
            <li key={step.title}>
              <span className="contact-step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="contact-step-body">
                <span className="contact-step-title">{step.title}</span>
                <span className="contact-step-text">{step.text}</span>
              </span>
            </li>
          ))}
        </RevealChildren>
      </Section>

    </main>
  );
}
