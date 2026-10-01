import Image from "next/image";
import { CaseCta, CaseHero, CaseStack } from "@/components/case";
import {
  BrowserFrame,
  ButtonLink,
  Reveal,
  Section,
  SectionHeader,
  TiltOnScroll,
} from "@/components/ui";
import { domainOf, getCopy, organizations, site } from "@/content";
import type { Locale } from "@/i18n/config";

const PARTNER_LOGOS = [
  {
    name: "University of St.Gallen",
    src: "/images/logos/university-of-st-gallen.svg",
    width: 496,
    height: 103,
  },
  {
    name: "Elite Quality Index",
    src: "/images/logos/elite-quality-index.svg",
    width: 762,
    height: 219,
  },
  {
    name: "Value Creation Rating",
    src: "/images/logos/value-creation-rating.svg",
    width: 970,
    height: 249,
  },
];

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
            <ButtonLink href={organizations.eqx.url}>
              {copy.ctaPrimary}
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="secondary">
              {copy.ctaSecondary}
            </ButtonLink>
          </>
        }
      />

      <section className="case-shot on-dark">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <TiltOnScroll>
            <BrowserFrame label={domainOf(site.eqx)}>
              <Image
                src="/images/eqx-home.webp"
                alt={copy.imageAlts.home}
                width={2400}
                height={1080}
                className="h-auto w-full"
                priority
              />
            </BrowserFrame>
          </TiltOnScroll>
        </div>
      </section>

      <Section>
        <SectionHeader title={copy.products.title} />
        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {copy.products.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 70}>
              <div className="area">
                <p className="label-ed text-[var(--accent-text)]">
                  {item.tech}
                </p>
                <h3 className="area-title mt-2">
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
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="section-band">
        <SectionHeader title={copy.partners.title} text={copy.partners.text} />
        <Reveal>
          <ul className="partner-logos">
            {PARTNER_LOGOS.map((logo) => (
              <li key={logo.name} className="partner-logo">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <CaseStack title={copy.stack.title} groups={copy.stack.groups} />

      <CaseCta locale={locale} />
    </main>
  );
}
