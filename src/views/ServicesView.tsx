import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { DeliveryCycle } from "@/components/home/DeliveryCycle";
import { ProductionStrip } from "@/components/services/ProductionStrip";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ClicksChart } from "@/components/visual/ClicksChart";
import {
  ButtonLink,
  RevealChildren,
  Section,
  SectionHeader,
} from "@/components/ui";
import { getCopy, site } from "@/content";
import { snowySearchDaily } from "@/content/snowy-search-daily";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { faqJsonLd, servicesPageJsonLd } from "@/lib/seo";

export function ServicesView({ locale }: { locale: Locale }) {
  const page = getCopy(locale).pages.services;
  const contact = getCopy(locale).pages.contact;

  return (
    <main>
      <JsonLd data={servicesPageJsonLd(locale)} />
      <JsonLd data={faqJsonLd(locale)} />

      <Section>
        <p className="t-eyebrow">{page.eyebrow}</p>
        <h1 className="t-section mt-4 max-w-3xl">{page.heading}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-xl sm:leading-9">
          {page.lead}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:leading-7">
          {page.detail}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#llamada">{page.ctaCall}</ButtonLink>
          <ButtonLink href={routePath(locale, "snowySeo")} variant="secondary">
            {page.ctaCase}
          </ButtonLink>
        </div>
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
        <RevealChildren className="mt-10 grid gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-2">
          {contact.services.map((service) => (
            <div key={service.title} className="area">
              <h3 className="area-title">{service.title}</h3>
              <p className="area-text">{service.text}</p>
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
          ))}
        </RevealChildren>
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
        <RevealChildren as="ol" className="contact-steps mt-10 sm:mt-14">
          {contact.steps.map((step, index) => (
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

      <Section className="section-band">
        <SectionHeader title={page.pricingTitle} text={page.pricingText} />
        <RevealChildren className="mt-10 grid gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-3">
          {page.pricing.map((item) => (
            <div key={item.title} className="area">
              <h3 className="area-title">{item.title}</h3>
              <p className="area-text">{item.text}</p>
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
              <p className="area-text">{row.items}</p>
            </div>
          ))}
        </RevealChildren>
      </Section>

      <Section className="section-band">
        <SectionHeader title={page.faqTitle} text={page.faqText} />
        <RevealChildren as="dl" className="faq mt-10 sm:mt-14">
          {page.faq.map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="faq-question">{item.question}</dt>
              <dd className="faq-answer">{item.answer}</dd>
            </div>
          ))}
        </RevealChildren>
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
