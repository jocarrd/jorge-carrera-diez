import Image from "next/image";
import { ButtonLink, MetricCard, Section, SectionHeader, Surface, TechTag } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

const dataSources = [
  "AEMET",
  "Euskalmet",
  "MeteoGalicia",
  "MITECO",
  "USGS",
  "IGN",
  "CAMS",
] as const;

export function SnowyView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.snowy;

  return (
    <main>
      <Section>
        <h1 className="max-w-5xl text-3xl font-semibold tracking-tight text-white sm:text-6xl">
          {copy.heading}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:mt-6 sm:text-xl sm:leading-9">
          {copy.lead}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:mt-5 sm:leading-8">
          {copy.detail}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={site.snowy}>{copy.ctaPrimary}</ButtonLink>
          <ButtonLink href={routePath(locale, "cv")} variant="secondary">
            {copy.ctaSecondary}
          </ButtonLink>
        </div>
      </Section>

      <section className="border-y border-white/10 bg-[#030712] py-10 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <Image
              src="/images/snowy-home.png"
              alt={copy.imageAlts.home}
              width={1365}
              height={1049}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src="/images/snowy-stations-map.png"
                alt={copy.imageAlts.stations}
                width={1280}
                height={862}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src="/images/snowy-radar-map.png"
                alt={copy.imageAlts.radar}
                width={1210}
                height={872}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <SectionHeader
          eyebrow={copy.product.eyebrow}
          title={copy.product.title}
          text={copy.product.text}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.features.map((feature) => (
            <Surface key={feature.title}>
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{feature.text}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <section className="py-12 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-500">
              {copy.modules.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              {copy.modules.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:leading-8">
              {copy.modules.text}
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {copy.modules.items.map((module) => (
              <article
                key={module.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <Image
                  src={module.image}
                  alt={module.alt}
                  width={1200}
                  height={1000}
                  className="h-auto w-full border-b border-white/10"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{module.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader title={copy.traction.title} text={copy.traction.text} />
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {copy.tractionMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-6">
          {copy.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <SectionHeader
          eyebrow={copy.build.eyebrow}
          title={copy.build.title}
          text={copy.build.text}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.capabilities.map((item) => (
            <Surface key={item.title}>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow={copy.seo.eyebrow}
            title={copy.seo.title}
            text={copy.seo.text}
          />
          <Surface>
            <h2 className="text-xl font-semibold text-white">{copy.seo.sourcesTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {dataSources.map((source) => (
                <TechTag key={source}>{source}</TechTag>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-400">{copy.seo.sourcesText}</p>
          </Surface>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow={copy.b2b.eyebrow}
            title={copy.b2b.title}
            text={copy.b2b.text}
          />
          <div className="grid gap-4">
            {copy.b2b.lines.map((line) => (
              <Surface key={line.title}>
                <h2 className="text-xl font-semibold text-white">{line.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{line.text}</p>
              </Surface>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow={copy.press.eyebrow}
          title={copy.press.title}
          text={copy.press.text}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {copy.press.proof.map((item) => {
            const content = (
              <>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={900}
                  height={600}
                  className="h-72 w-full border-b border-white/10 object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </div>
              </>
            );

            if (item.url) {
              return (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-300/25 hover:bg-white/[0.045]"
                >
                  {content}
                </a>
              );
            }

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                {content}
              </article>
            );
          })}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <a
            href={site.openData}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 transition hover:border-cyan-200/50 hover:bg-cyan-300/15"
          >
            <p className="font-mono text-sm text-cyan-200">{copy.press.openDataLabel}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
              {copy.press.openDataTag}
            </p>
            <h2 className="mt-4 text-lg font-semibold leading-7 text-white">
              {copy.press.openDataTitle}
            </h2>
          </a>
          {copy.mediaMentions.map((mention) => (
            <a
              key={`${mention.outlet}-${mention.date}-${mention.title}`}
              href={mention.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_90px_rgba(0,0,0,0.24)] transition hover:border-cyan-300/25 hover:bg-white/[0.045]"
            >
              <p className="font-mono text-sm text-cyan-300">{mention.outlet}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                {mention.date}
              </p>
              <h2 className="mt-4 text-lg font-semibold leading-7 text-white">{mention.title}</h2>
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}
