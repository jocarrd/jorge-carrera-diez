import { JsonLd } from "@/components/JsonLd";
import {
  ButtonLink,
  Container,
  CopyEmail,
  RevealChildren,
  Section,
  SectionHeader,
} from "@/components/ui";
import { TerminalCta } from "@/components/home/TerminalCta";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { contactPageJsonLd } from "@/lib/seo";

export function ContactView({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const copy = content.pages.contact;
  const links = [
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
    { label: "X", href: site.x },
  ];

  return (
    <main>
      <JsonLd data={contactPageJsonLd(locale)} />

      <section className="contact-ed on-dark">
        <Container>
          <p className="hero-ed-badge rise rise-1">
            <span aria-hidden className="hero-ed-dot" />
            {content.profile.availability}
          </p>
          <h1 className="contact-ed-title rise rise-2">
            <span
              className="cta-ed-fill"
              style={{ backgroundImage: "url(/images/textura-lima.webp)" }}
            >
              {copy.title}
            </span>
          </h1>

          <div className="contact-ed-grid rise rise-3">
            <div>
              <p className="contact-ed-lead">{copy.lead}</p>
              <p className="contact-ed-detail">{copy.detail}</p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <CopyEmail email={site.email} label={copy.emailLabel} />
                <ButtonLink
                  href={routePath(locale, "cv")}
                  variant="secondary"
                  tone="dark"
                >
                  {copy.ctaSecondary}
                </ButtonLink>
              </div>
            </div>
            <TerminalCta
              email={site.email}
              command={content.contactCta.terminalCommand}
              hint={content.contactCta.terminalHint}
            />
          </div>

          <ul className="cta-ed-links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <SectionHeader title={copy.stepsTitle} text={copy.stepsText} />
        <RevealChildren as="ol" className="svc-steps">
          {copy.steps.map((step) => (
            <li key={step.title} className="svc-step">
              <span aria-hidden className="svc-step-dot" />
              <h3 className="svc-step-title">{step.title}</h3>
              <p className="svc-step-text">{step.text}</p>
            </li>
          ))}
        </RevealChildren>
      </Section>

      <Section className="section-band">
        <SectionHeader
          label={content.sectionLabels.work}
          title={copy.servicesCtaTitle}
          text={copy.servicesCtaText}
        />
        <div className="mt-8">
          <ButtonLink href={routePath(locale, "services")}>
            {copy.servicesCtaButton}
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
