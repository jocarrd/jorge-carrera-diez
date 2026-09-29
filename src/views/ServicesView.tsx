import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { DeliveryCycle } from "@/components/home/DeliveryCycle";
import { ProductionStrip } from "@/components/services/ProductionStrip";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ClicksChart } from "@/components/visual/ClicksChart";
import {
  ButtonLink,
  PageHero,
  RevealChildren,
  Section,
  SectionHeader,
} from "@/components/ui";
import { getCopy, site } from "@/content";
import { snowySearchDaily } from "@/content/snowy-search-daily";
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

  return (
    <main>
      <JsonLd data={servicesPageJsonLd(locale)} />
      <JsonLd data={faqJsonLd(locale)} />

      <PageHero
        label={page.eyebrow}
        title={page.heading}
        lead={page.lead}
        detail={page.detail}
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
      />
      <Section>
        <ServiceStats locale={locale} />
        <ClicksChart
          data={snowySearchDaily}
          copy={page.chart}
          className="mt-12 sm:mt-16"
        />
      </Section>

      <Section className="section-band">
        <SectionHeader
          title={contact.servicesTitle}
          text={contact.servicesText}
        />
        <ServiceIndex
          linkLabel={page.caseLink}
          items={contact.services.map((service, index) => ({
            title: service.title,
            text: service.text,
            href: service.route ? routePath(locale, service.route) : undefined,
            image: SERVICE_SHOTS[index % SERVICE_SHOTS.length],
          }))}
        />
      </Section>

      <Section className="border-t border-[var(--line)]">
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

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={contact.stepsTitle} text={contact.stepsText} />
        <RevealChildren as="ol" className="contact-plan">
          {contact.steps.map((step) => (
            <li key={step.title} className="card-ed contact-plan-item">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </RevealChildren>
      </Section>

      <Section className="section-band">
        <SectionHeader title={page.pricingTitle} text={page.pricingText} />
        <RevealChildren className="contact-plan">
          {page.pricing.map((item) => (
            <div key={item.title} className="card-ed contact-plan-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </RevealChildren>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={page.stackTitle} text={page.stackText} />
        <RevealChildren className="mt-10 grid gap-x-12 gap-y-9 sm:mt-14 sm:grid-cols-2">
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

      <Section className="section-band">
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

      <Section
        id="llamada"
        className="scroll-mt-20 border-t border-[var(--line)]"
      >
        <div className="mx-auto max-w-2xl">
          <SectionHeader title={page.formTitle} text={page.formText} />
          <ContactForm locale={locale} />
          <p className="field-note mt-6">
            {page.form.emailAlt}{" "}
            <a className="area-link mt-0" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </Section>
    </main>
  );
}
