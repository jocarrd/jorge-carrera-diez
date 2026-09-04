import Image from "next/image";
import { ButtonLink, MetricCard, Section, SectionHeader, Surface } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function LariojaMeteoView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.lariojameteo;

  return (
    <main>
      <Section>
        <h1 className="max-w-4xl text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-5xl">
          {copy.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
          {copy.lead}
        </p>
        <div className="mt-9">
          <ButtonLink href={site.lariojameteo}>{copy.cta}</ButtonLink>
        </div>
        <div className="shot-frame mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black sm:mt-12">
          <Image
            src="/images/lariojameteo-home.webp"
            alt={copy.imageAlt}
            width={1230}
            height={923}
            className="w-full object-cover object-top"
            priority
          />
        </div>
      </Section>

      <Section className="section-band">
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

      <Section>
        <SectionHeader
          eyebrow={copy.responsibility.eyebrow}
          title={copy.responsibility.title}
          text={copy.responsibility.text}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {copy.responsibility.items.map((item) => (
            <Surface key={item}>
              <p className="text-base leading-relaxed text-slate-300 sm:leading-7">{item}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow={copy.content.eyebrow}
            title={copy.content.title}
            text={copy.content.text}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.content.items.map((section) => (
              <Surface key={section}>
                <p className="text-base leading-relaxed text-slate-300 sm:leading-7">{section}</p>
              </Surface>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
