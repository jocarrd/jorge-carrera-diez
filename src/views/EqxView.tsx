import Image from "next/image";
import { CaseCta, CaseHero, CaseStack } from "@/components/case";
import {
  BrowserFrame,
  ButtonLink,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/ui";
import { domainOf, getCopy, organizations, site } from "@/content";
import type { Locale } from "@/i18n/config";

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

      <section className="border-y border-[var(--line)] bg-[var(--panel)] py-10 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
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
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader title={copy.products.title} />
        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {copy.products.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 70}>
              <div className="area">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent-text)]">
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
        <SectionHeader title={copy.work.title} />
        <div className="mt-10 grid gap-x-10 gap-y-9 md:grid-cols-2">
          {copy.work.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="area">
                <h3 className="area-title">{item.title}</h3>
                <p className="area-text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CaseStack title={copy.stack.title} groups={copy.stack.groups} />

      <CaseCta locale={locale} />
    </main>
  );
}
