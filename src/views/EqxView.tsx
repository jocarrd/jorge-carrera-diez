import Image from "next/image";
import { CaseCta, CaseHero, CaseStack } from "@/components/case";
import { ProductTour } from "@/components/projects/ProductTour";
import {
  BrowserFrame,
  ButtonLink,
  DeviceFrame,
  Reveal,
  Section,
  SectionHeader,
  TiltOnScroll,
} from "@/components/ui";
import { domainOf, getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

const SHOTS: Record<
  "map" | "rankings" | "comparison" | "pvq",
  { src: string; width: number; height: number; mobile: string | null }
> = {
  map: {
    src: "/images/eqx26/eqx-map.webp",
    width: 2000,
    height: 1532,
    mobile: "/images/eqx26/eqx-map-movil.webp",
  },
  rankings: {
    src: "/images/eqx26/eqx-rankings.webp",
    width: 2000,
    height: 1385,
    mobile: null,
  },
  comparison: {
    src: "/images/eqx26/eqx-comparison.webp",
    width: 2000,
    height: 1391,
    mobile: null,
  },
  pvq: {
    src: "/images/eqx26/eqx-pvq.webp",
    width: 1400,
    height: 1400,
    mobile: null,
  },
};

export function EqxView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.eqx;

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
            <ButtonLink href={site.eqx}>{copy.ctaPrimary}</ButtonLink>
            <ButtonLink href={site.eqxReports} variant="secondary">
              {copy.ctaSecondary}
            </ButtonLink>
          </>
        }
      />

      <section className="case-shot on-dark">
        <div className="vcr-hero-shot mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <TiltOnScroll>
            <BrowserFrame label={domainOf(site.eqx)}>
              <Image
                src="/images/eqx26/eqx-home.webp"
                alt={copy.imageAlts.home}
                width={2400}
                height={1500}
                className="h-auto w-full"
                priority
              />
            </BrowserFrame>
          </TiltOnScroll>
          <DeviceFrame
            src="/images/eqx26/eqx-home-movil.webp"
            alt={copy.imageAlts.homeMobile}
            className="vcr-hero-phone"
          />
        </div>
      </section>

      <Section>
        <SectionHeader title={copy.tools.title} text={copy.tools.text} />
        <ProductTour
          label={domainOf(site.eqx)}
          tools={copy.tools.items.map((tool) => ({
            ...tool,
            ...SHOTS[tool.key],
          }))}
        />
      </Section>

      <Section className="section-band">
        <SectionHeader title={copy.products.title} />
        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {copy.products.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 70}>
              <div className="area">
                <h3 className="area-title">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </h3>
                <p className="area-text">{item.text}</p>
                <p className="area-tech">{item.tech}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
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
