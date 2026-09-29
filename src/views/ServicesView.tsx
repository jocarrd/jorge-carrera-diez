import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { DeliveryCycle } from "@/components/home/DeliveryCycle";
import { ProductionStrip } from "@/components/services/ProductionStrip";
import { ServiceStats } from "@/components/services/ServiceStats";
import {
  ButtonLink,
  Container,
  PageHero,
  RevealChildren,
  Section,
  SectionHeader,
} from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { faqJsonLd, servicesPageJsonLd } from "@/lib/seo";

const SERVICE_SHOTS = [
  { src: "/images/eqx-home.webp", w: 2400, h: 1080 },
  { src: "/images/snowy-home.webp", w: 2400, h: 1500 },
  { src: "/images/eqx-rankings.webp", w: 2268, h: 1060 },
  { src: "/images/snowy-ai-assistant.webp", w: 1600, h: 1000 },
  { src: "/images/snowy-climate.webp", w: 2400, h: 1500 },
];

export function ServicesView({ locale }: { locale: Locale }) {
  const page = getCopy(locale).pages.services;
  const contact = getCopy(locale).pages.contact;
  const [closed, monthly, ...priceNotes] = page.pricing;

  return (
    <main>
      <JsonLd data={servicesPageJsonLd(locale)} />
      <JsonLd data={faqJsonLd(locale)} />

      <PageHero
        label={page.eyebrow}
        title={page.heading}
        lead={page.lead}
        actions={
          <>
            <ButtonLink href="#llamada">{page.ctaCall}</ButtonLink>
            <ButtonLink
              href={routePath(locale, "snowySeo")}
              variant="secondary"
              tone="dark"
            >
              {page.ctaCase}
            </ButtonLink>
          </>
        }
      >
        <ServiceStats locale={locale} />
      </PageHero>

      <Section className="section-band">
        <SectionHeader
          title={contact.servicesTitle}
          text={contact.servicesText}
        />
        <RevealChildren as="ul" className="svc-bento">
          {contact.services.map((service, index) => {
            const shot = SERVICE_SHOTS[index % SERVICE_SHOTS.length];
            return (
              <li
                key={service.title}
                className={`svc-card${index < 2 ? " svc-card--big" : ""}`}
              >
                <div className="svc-card-shot">
                  <Image
                    src={shot.src}
                    alt=""
                    width={shot.w}
                    height={shot.h}
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                </div>
                <div className="svc-card-body">
                  <h3 className="svc-card-title">{service.title}</h3>
                  <p className="svc-card-text">{service.text}</p>
                  {service.route ? (
                    <Link
                      href={routePath(locale, service.route)}
                      className="area-link"
                    >
                      {page.caseLink}
                      <span aria-hidden className="ml-1">
                        &rsaquo;
                      </span>
                    </Link>
                  ) : null}
                </div>
              </li>
            );
          })}
        </RevealChildren>
      </Section>

      <Section>
        <SectionHeader
          title={page.productionTitle}
          text={page.productionText}
        />
        <ProductionStrip
          locale={locale}
          items={page.production}
          linkLabel={page.productionLink}
        />
      </Section>

      <Section className="section-band">
        <SectionHeader
          title={page.engagementTitle}
          text={page.engagementText}
        />
        <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-2 lg:items-start">
          <RevealChildren className="flex flex-col gap-10">
            {page.engagement.map((item) => (
              <div key={item.title} className="area">
                <h3 className="area-title">{item.title}</h3>
                <p className="area-text">{item.text}</p>
              </div>
            ))}
          </RevealChildren>
          <DeliveryCycle locale={locale} />
        </div>
      </Section>

      <Section>
        <SectionHeader title={contact.stepsTitle} text={contact.stepsText} />
        <RevealChildren as="ol" className="svc-steps">
          {contact.steps.map((step) => (
            <li key={step.title} className="svc-step">
              <span aria-hidden className="svc-step-dot" />
              <h3 className="svc-step-title">{step.title}</h3>
              <p className="svc-step-text">{step.text}</p>
            </li>
          ))}
        </RevealChildren>

        <div className="svc-pricing">
          <div className="svc-pricing-head">
            <h3 className="svc-pricing-title">{page.pricingTitle}</h3>
            <p className="svc-pricing-text">{page.pricingText}</p>
          </div>
          <RevealChildren className="svc-price-grid">
            <div className="svc-price svc-price--dark on-dark">
              <h4>{closed.title}</h4>
              <p>{closed.text}</p>
            </div>
            <div className="svc-price">
              <h4>{monthly.title}</h4>
              <p>{monthly.text}</p>
            </div>
          </RevealChildren>
          {priceNotes.map((note) => (
            <p key={note.title} className="svc-price-note">
              <span aria-hidden className="svc-price-note-dot" />
              <span>
                <strong>{note.title}.</strong> {note.text}
              </span>
            </p>
          ))}
        </div>
      </Section>

      <Section className="section-band">
        <SectionHeader title={page.stackTitle} text={page.stackText} />
        <RevealChildren className="mt-10 grid gap-x-10 gap-y-9 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {page.stack.map((row) => (
            <div key={row.group} className="area">
              <h3 className="area-title">{row.group}</h3>
              <ul className="stack-chips">
                {row.items.split(/,\s*|\s·\s/).map((tech) => (
                  <li key={tech}>{tech.replace(/\.$/, "")}</li>
                ))}
              </ul>
            </div>
          ))}
        </RevealChildren>
      </Section>

      <Section>
        <SectionHeader title={page.faqTitle} text={page.faqText} />
        <div className="faq-ed">
          {page.faq.map((item) => (
            <details key={item.question} className="faq-ed-item">
              <summary>
                <span>{item.question}</span>
                <span aria-hidden className="faq-ed-icon" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="llamada" className="svc-contact on-dark scroll-mt-20">
        <Container>
          <div className="svc-contact-grid">
            <div>
              <SectionHeader title={page.formTitle} text={page.formText} />
              <p className="field-note mt-6">
                {page.form.emailAlt}{" "}
                <a className="area-link mt-0" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div className="svc-contact-card">
              <ContactForm locale={locale} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
