import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { ServiceStats } from "@/components/services/ServiceStats";
import { RevealChildren, Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { faqJsonLd, servicesPageJsonLd } from "@/lib/seo";

export function ServicesView({ locale }: { locale: Locale }) {
  const page = getCopy(locale).pages.services;
  const contact = getCopy(locale).pages.contact;

  return (
    <main>
      <JsonLd data={servicesPageJsonLd(locale)} />
      <JsonLd data={faqJsonLd(locale)} />

      <Section>
        <h1 className="t-section max-w-3xl">{page.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-xl sm:leading-9">
          {page.lead}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:leading-7">
          {page.detail}
        </p>
        <ServiceStats locale={locale} />
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
            </div>
          ))}
        </RevealChildren>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader
          title={page.engagementTitle}
          text={page.engagementText}
        />
        <RevealChildren className="mt-10 grid gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-3">
          {page.engagement.map((item) => (
            <div key={item.title} className="area">
              <h3 className="area-title">{item.title}</h3>
              <p className="area-text">{item.text}</p>
            </div>
          ))}
        </RevealChildren>
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

      <Section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-2xl">
          <SectionHeader title={page.formTitle} text={page.formText} />
          <ContactForm locale={locale} />
        </div>
      </Section>
    </main>
  );
}
