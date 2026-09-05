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
        <h1 className="max-w-4xl text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--foreground)] sm:text-5xl">
          {copy.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
          {copy.lead}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:leading-7">
          {copy.detail}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={site.snowy}>{copy.ctaPrimary}</ButtonLink>
          <ButtonLink href={routePath(locale, "cv")} variant="secondary">
            {copy.ctaSecondary}
          </ButtonLink>
        </div>
      </Section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)] py-10 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="shot-frame overflow-hidden rounded-2xl border border-[var(--line)] bg-black shadow-2xl">
            <Image
              src="/images/snowy-home.webp"
              alt={copy.imageAlts.home}
              width={1365}
              height={1049}
              className="h-auto w-full"
              priority
            />
          </div>
          {/* Las dos capturas venían de tamaños distintos y con `h-auto` cada
              una tomaba su proporción: la pareja no casaba y una dejaba banda
              negra. Misma caja y recorte desde arriba. */}
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {[
              { src: "/images/snowy-stations-map.webp", alt: copy.imageAlts.stations },
              { src: "/images/snowy-radar-map.webp", alt: copy.imageAlts.radar },
            ].map((shot) => (
              <div
                key={shot.src}
                className="shot-frame aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--line)] bg-black"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="section-band">
        <SectionHeader
          eyebrow={copy.product.eyebrow}
          title={copy.product.title}
          text={copy.product.text}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.features.map((feature) => (
            <Surface key={feature.title}>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{feature.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{feature.text}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <section className="py-12 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-text)]">
              {copy.modules.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {copy.modules.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:leading-7">
              {copy.modules.text}
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {copy.modules.items.map((module, index) => {
              // Cinco tarjetas en dos columnas dejan una sola al final. La
              // ultima es el mapa de estaciones en vivo, la vista mas potente:
              // ocupa la fila entera y cierra la seccion en vez de sobrar.
              const wide = index === copy.modules.items.length - 1;

              return (
              // Cada captura traía su proporción y la tarjeta se estiraba a
              // ella: en una fila una quedaba casi vacía, con el texto flotando
              // sobre un hueco muerto. Caja fija arriba y el texto abajo, para
              // que las tarjetas de una fila compartan cantos y línea base.
              <article
                key={module.title}
                className={`lvl-2 flex flex-col overflow-hidden rounded-2xl border ${
                  wide ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`shrink-0 overflow-hidden border-b border-[var(--line)] bg-black ${
                    wide ? "aspect-[16/9]" : "aspect-[6/5]"
                  }`}
                >
                  <Image
                    src={module.image}
                    alt={module.alt}
                    width={1200}
                    height={1000}
                    className="h-full w-full object-cover object-top"
                    sizes={wide ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{module.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{module.text}</p>
                </div>
              </article>
              );
            })}
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

      <Section className="section-band">
        <SectionHeader
          eyebrow={copy.build.eyebrow}
          title={copy.build.title}
          text={copy.build.text}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.capabilities.map((item) => (
            <Surface key={item.title}>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section className="section-band">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow={copy.seo.eyebrow}
            title={copy.seo.title}
            text={copy.seo.text}
          />
          <Surface>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">{copy.seo.sourcesTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {dataSources.map((source) => (
                <TechTag key={source}>{source}</TechTag>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[var(--muted)]">{copy.seo.sourcesText}</p>
          </Surface>
        </div>
      </Section>

      <Section className="section-band">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow={copy.b2b.eyebrow}
            title={copy.b2b.title}
            text={copy.b2b.text}
          />
          <div className="grid gap-4">
            {copy.b2b.lines.map((line) => (
              <Surface key={line.title}>
                <h2 className="text-xl font-semibold text-[var(--foreground)]">{line.title}</h2>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{line.text}</p>
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
                  className="h-72 w-full border-b border-[var(--line)] object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
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
                  className="overflow-hidden rounded-2xl lvl-2 border transition hover:border-[var(--line-strong)] lvl-hover"
                >
                  {content}
                </a>
              );
            }

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl lvl-2 border"
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
            className="rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-6 transition hover:border-[var(--line-strong)] hover:bg-[var(--panel)]"
          >
            <p className="font-mono text-sm text-[var(--accent-text)]">{copy.press.openDataLabel}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {copy.press.openDataTag}
            </p>
            <h2 className="mt-4 text-lg font-semibold leading-7 text-[var(--foreground)]">
              {copy.press.openDataTitle}
            </h2>
          </a>
          {copy.mediaMentions.map((mention) => (
            <a
              key={`${mention.outlet}-${mention.date}-${mention.title}`}
              href={mention.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl lvl-2 border p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_90px_rgba(0,0,0,0.24)] transition hover:border-[var(--line-strong)] lvl-hover"
            >
              <p className="font-mono text-sm text-[var(--accent-text)]">{mention.outlet}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {mention.date}
              </p>
              <h2 className="mt-4 text-lg font-semibold leading-7 text-[var(--foreground)]">{mention.title}</h2>
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}
