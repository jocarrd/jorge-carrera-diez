import { CaseHero } from "@/components/case";
import { ClicksChart } from "@/components/visual/ClicksChart";
import {
  ButtonLink,
  DeviceFrame,
  RevealChildren,
  Section,
  SectionHeader,
} from "@/components/ui";
import { getCopy } from "@/content";
import { snowySearchDaily } from "@/content/snowy-search-daily";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

function shareWidth(value: string) {
  return `${parseFloat(value.replace(",", "."))}%`;
}

export function SnowySeoView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.snowySeo;
  const services = routePath(locale, "services");

  return (
    <main>
      <CaseHero
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        lead={copy.lead}
        detail={copy.detail}
        facts={copy.facts}
        actions={
          <>
            <ButtonLink href={routePath(locale, "seoService")}>
              {copy.ctaPrimary}
            </ButtonLink>
            <ButtonLink href={routePath(locale, "snowy")} variant="secondary">
              {copy.ctaSecondary}
            </ButtonLink>
          </>
        }
      />

      <Section className="section-band">
        <SectionHeader title={copy.workTitle} text={copy.workText} />
        <RevealChildren className="mt-10 grid gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-2">
          {copy.work.map((item) => (
            <div key={item.title} className="area">
              <h3 className="area-title">{item.title}</h3>
              <p className="area-text">{item.text}</p>
            </div>
          ))}
        </RevealChildren>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={copy.resultTitle} text={copy.resultText} />
        <ClicksChart
          data={snowySearchDaily}
          copy={copy.chart}
          className="mt-10 sm:mt-14"
        />
        <RevealChildren as="ul" className="mt-10 flex flex-col gap-8 sm:mt-14">
          {copy.shares.map((share) => (
            <li key={share.label}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="t-item">{share.label}</h3>
                <span className="text-[1.375rem] font-semibold tracking-[-0.02em]">
                  {share.value}
                </span>
              </div>
              <div
                aria-hidden
                className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--panel)]"
              >
                <div
                  className="h-full rounded-full bg-[var(--accent)]"
                  style={{ width: shareWidth(share.value) }}
                />
              </div>
              <p className="mt-2 text-base leading-[1.6] text-[var(--muted)]">
                {share.detail}
              </p>
            </li>
          ))}
        </RevealChildren>
        <div className="mt-14 grid items-center gap-10 sm:grid-cols-[1fr_auto] sm:gap-14">
          <p className="max-w-xl text-[1.3125rem] font-medium leading-[1.45] tracking-[-0.01em] text-[var(--foreground)]">
            {copy.resultNote}
          </p>
          <div className="mx-auto w-[220px] sm:w-[240px]">
            <DeviceFrame
              src="/images/snowy-playa-movil.webp"
              alt={copy.phoneAlt}
            />
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={copy.lessonsTitle} text={copy.lessonsText} />
        <RevealChildren className="mt-10 grid gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-2">
          {copy.lessons.map((item) => (
            <div key={item.title} className="area">
              <h3 className="area-title">{item.title}</h3>
              <p className="area-text">{item.text}</p>
            </div>
          ))}
        </RevealChildren>
        <p className="mt-12 text-[14px] leading-[1.5] text-[var(--muted)]">
          {copy.source}
        </p>
      </Section>

      <Section className="section-band border-t border-[var(--line)]">
        <div className="mx-auto max-w-[46rem] text-center">
          <h2 className="t-section">{copy.closingTitle}</h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.55] text-[var(--muted)] sm:mt-5 sm:text-xl">
            {copy.closingText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={`${services}#llamada`}>
              {copy.closingCta}
            </ButtonLink>
            <ButtonLink href={services} variant="secondary">
              {copy.closingSecondary}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
