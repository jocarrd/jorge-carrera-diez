import Image from "next/image";
import { CaseCta, CaseHero, CaseStack } from "@/components/case";
import { ButtonLink, MetricCard, Reveal, Section, SectionHeader, Surface } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function LariojaMeteoView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.lariojameteo;

  return (
    <main>
      <CaseHero
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        lead={copy.lead}
        facts={copy.facts}
        actions={<ButtonLink href={site.lariojameteo}>{copy.cta}</ButtonLink>}
      />

      <section className="border-y border-[var(--line)] bg-[var(--panel)] py-10 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="shot-frame overflow-hidden rounded-2xl border border-[var(--line)] bg-black shadow-2xl">
              <Image
                src="/images/lariojameteo-home.webp"
                alt={copy.imageAlt}
                width={1230}
                height={923}
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow={copy.timeline.eyebrow}
          title={copy.timeline.title}
          text={copy.timeline.text}
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 lg:grid-cols-4">
          {copy.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Section>

      <Section className="section-band">
        <SectionHeader
          eyebrow={copy.responsibility.eyebrow}
          title={copy.responsibility.title}
          text={copy.responsibility.text}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {copy.responsibility.items.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <Surface className="h-full">
                <p className="text-base leading-relaxed text-[var(--muted)] sm:leading-7">{item}</p>
              </Surface>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow={copy.content.eyebrow}
            title={copy.content.title}
            text={copy.content.text}
            align="left"
          />
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {copy.content.items.map((section) => (
              <li
                key={section}
                className="py-4 text-base leading-relaxed text-[var(--muted)] sm:leading-7"
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CaseStack title={copy.stack.title} text={copy.stack.text} groups={copy.stack.groups} />

      <CaseCta locale={locale} />
    </main>
  );
}
