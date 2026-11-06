import Image from "next/image";
import { CaseCta, CaseHero, CaseStack } from "@/components/case";
import {
  BrowserFrame,
  ButtonLink,
  DeviceFrame,
  Section,
  SectionHeader,
  TiltOnScroll,
} from "@/components/ui";
import { BookToWeb } from "@/components/projects/BookToWeb";
import { VcrTools } from "@/components/projects/VcrTools";
import { domainOf, getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

const SHOTS: Record<
  "scorecard" | "comparison" | "matrix",
  { src: string; width: number; height: number; mobile: string | null }
> = {
  scorecard: {
    src: "/images/vcr/vcr-scorecard.webp",
    width: 2000,
    height: 1408,
    mobile: "/images/vcr/vcr-scorecard-movil.webp",
  },
  comparison: {
    src: "/images/vcr/vcr-comparison.webp",
    width: 2000,
    height: 637,
    mobile: null,
  },
  matrix: {
    src: "/images/vcr/vcr-matrix.webp",
    width: 2000,
    height: 1393,
    mobile: "/images/vcr/vcr-matrix-movil.webp",
  },
};

export function VcrView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.vcr;

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
            <ButtonLink href={site.vcr}>{copy.ctaPrimary}</ButtonLink>
            <ButtonLink href={site.vcrReports} variant="secondary">
              {copy.ctaSecondary}
            </ButtonLink>
          </>
        }
      />

      <section className="case-shot on-dark">
        <div className="vcr-hero-shot mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <TiltOnScroll>
            <BrowserFrame label={domainOf(site.vcr)}>
              <Image
                src="/images/vcr/vcr-home.webp"
                alt={copy.imageAlts.home}
                width={2400}
                height={1500}
                className="h-auto w-full"
                priority
              />
            </BrowserFrame>
          </TiltOnScroll>
          <DeviceFrame
            src="/images/vcr/vcr-home-movil.webp"
            alt={copy.imageAlts.homeMobile}
            className="vcr-hero-phone"
          />
        </div>
      </section>

      <Section>
        <SectionHeader title={copy.tools.title} text={copy.tools.text} />
        <div className="mt-10">
          <BookToWeb
            width={2000}
            height={1408}
            handleLabel={copy.compare.handle}
            book={{
              src: "/images/vcr/vcr-libro-rtx.webp",
              alt: copy.compare.bookAlt,
              label: copy.compare.book,
            }}
            web={{
              src: "/images/vcr/vcr-scorecard.webp",
              alt: copy.compare.webAlt,
              label: copy.compare.web,
            }}
          />
        </div>
        <VcrTools
          label={domainOf(site.vcr)}
          tools={copy.tools.items.map((tool) => ({
            ...tool,
            ...SHOTS[tool.key],
          }))}
        />
      </Section>

      <Section className="section-band">
        <SectionHeader title={copy.credits.title} />
        <ul className="vcr-credits">
          {copy.credits.items.map((credit) => (
            <li key={credit.role} className="vcr-credit">
              <p className="vcr-credit-who">
                {credit.href ? (
                  <a href={credit.href} target="_blank" rel="noopener noreferrer">
                    {credit.who}
                  </a>
                ) : (
                  credit.who
                )}
              </p>
              <p className="vcr-credit-role">{credit.role}</p>
              <p className="vcr-credit-note">{credit.note}</p>
            </li>
          ))}
        </ul>
        <h3 className="vcr-sources-title">{copy.sources.title}</h3>
        <ul className="vcr-sources">
          {copy.sources.items.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <span>{item.label}</span>
                <span aria-hidden className="vcr-sources-arrow">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <CaseStack title={copy.stack.title} groups={copy.stack.groups} />

      <CaseCta locale={locale} />
    </main>
  );
}
