import { CaseHero } from "@/components/case";
import { JsonLd } from "@/components/JsonLd";
import { AuditChecklist } from "@/components/services/AuditChecklist";
import { RenderCompare } from "@/components/services/RenderCompare";
import { SearchMockup } from "@/components/services/SearchMockup";
import { VitalsScale } from "@/components/services/VitalsScale";
import { ClicksChart } from "@/components/visual/ClicksChart";
import {
  ButtonLink,
  RevealChildren,
  Section,
  SectionHeader,
} from "@/components/ui";
import { getCopy } from "@/content";
import { snowySearchDaily } from "@/content/snowy-search-daily";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { seoServiceFaqJsonLd, seoServiceJsonLd } from "@/lib/seo";
import type { TitledText } from "@/types/content";

function AreaGrid({
  items,
  columns = 2,
}: {
  items: TitledText[];
  columns?: 2 | 3;
}) {
  return (
    <RevealChildren
      className={`mt-10 grid gap-x-12 gap-y-10 sm:mt-14 ${
        columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {items.map((item) => (
        <div key={item.title} className="area">
          <h3 className="area-title">{item.title}</h3>
          <p className="area-text">{item.text}</p>
        </div>
      ))}
    </RevealChildren>
  );
}

export function SeoServiceView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.seoService;
  const services = routePath(locale, "services");
  const call = `${services}#llamada`;

  return (
    <main>
      <JsonLd data={seoServiceJsonLd(locale)} />
      <JsonLd data={seoServiceFaqJsonLd(locale)} />

      <CaseHero
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        lead={copy.lead}
        detail={copy.detail}
        facts={copy.facts}
        actions={
          <>
            <ButtonLink href={call}>{copy.ctaPrimary}</ButtonLink>
            <ButtonLink
              href={routePath(locale, "snowySeo")}
              variant="secondary"
            >
              {copy.ctaSecondary}
            </ButtonLink>
          </>
        }
      />

      <Section className="section-band">
        <SectionHeader title={copy.search.title} text={copy.search.text} />
        <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SearchMockup
              query={copy.search.query}
              domain={copy.search.domain}
              path={copy.search.path}
              title={copy.search.resultTitle}
              snippet={copy.search.resultSnippet}
              badge={copy.search.badge}
            />
            <p className="mt-4 text-[14px] leading-[1.5] text-[var(--muted)]">
              {copy.search.caption}
            </p>
          </div>
          <ClicksChart data={snowySearchDaily} copy={copy.chart} />
        </div>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={copy.forWhomTitle} text={copy.forWhomText} />
        <AreaGrid items={copy.forWhom} />
      </Section>

      <Section className="section-band">
        <SectionHeader title={copy.auditTitle} text={copy.auditText} />
        <AuditChecklist items={copy.audit} />
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={copy.vitalsTitle} text={copy.vitalsText} />
        <VitalsScale items={copy.vitals} scale={copy.vitalsScale} />
      </Section>

      <Section className="section-band">
        <SectionHeader
          title={copy.deliverablesTitle}
          text={copy.deliverablesText}
        />
        <AreaGrid items={copy.deliverables} />
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={copy.jsTitle} text={copy.jsText} />
        <RenderCompare before={copy.render.before} after={copy.render.after} />
        <AreaGrid items={copy.js} columns={3} />
      </Section>

      <Section className="section-band">
        <SectionHeader title={copy.faqTitle} text={copy.faqText} />
        <RevealChildren as="dl" className="faq mt-10 sm:mt-14">
          {copy.faq.map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="faq-question">{item.question}</dt>
              <dd className="faq-answer">{item.answer}</dd>
            </div>
          ))}
        </RevealChildren>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-[46rem] text-center">
          <h2 className="t-section">{copy.closingTitle}</h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.55] text-[var(--muted)] sm:mt-5 sm:text-xl">
            {copy.closingText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={call}>{copy.closingCta}</ButtonLink>
            <ButtonLink href={services} variant="secondary">
              {copy.closingSecondary}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
