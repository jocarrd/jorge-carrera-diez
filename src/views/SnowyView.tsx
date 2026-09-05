import Image from "next/image";
import { CaseCta, CaseDetails, CaseHero, CaseStack } from "@/components/case";
import {
  BrowserFrame,
  ButtonLink,
  MetricCard,
  Section,
  Rail,
  SectionHeader,
  Surface,
  TechTag,
} from "@/components/ui";
import { SpreadCone } from "@/components/visual/SpreadCone";
import { SurfaceTiles } from "@/components/visual/SurfaceTiles";
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
      <CaseHero
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        lead={copy.lead}
        detail={copy.detail}
        facts={copy.facts}
        actions={
          <>
            <ButtonLink href={site.snowy}>{copy.ctaPrimary}</ButtonLink>
            <ButtonLink href={routePath(locale, "cv")} variant="secondary">
              {copy.ctaSecondary}
            </ButtonLink>
          </>
        }
      />

      <section className="border-y border-[var(--line)] bg-[var(--panel)] py-10 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <BrowserFrame label={site.snowyDomain}>
            <Image
              src="/images/snowy-home.webp"
              alt={copy.imageAlts.home}
              width={1365}
              height={1049}
              className="h-auto w-full"
              priority
            />
          </BrowserFrame>
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
                className=""
              >
                <BrowserFrame label={site.snowyDomain}>
                  <div className="aspect-[16/10]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1600}
                      height={1000}
                      className="h-full w-full object-cover object-top"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </BrowserFrame>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La infografia va antes de las superficies: primero se entiende el
          problema —dieciseis fuentes que no coinciden— y luego se enseña que
          se construyo encima. Al reves, las capturas no significan nada. */}
      <Section>
        <SectionHeader
          eyebrow={copy.convergence.eyebrow}
          title={copy.convergence.title}
          text={copy.convergence.text}
        />
        <div className="mt-12">
          <SpreadCone
            ticks={copy.convergence.ticks}
            spreadLabel={copy.convergence.spreadLabel}
            answerLabel={copy.convergence.answerLabel}
          />
          <p className="mt-6 text-[13px] text-[var(--muted)]">{copy.convergence.note}</p>
        </div>
      </Section>

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
          <div className="mt-10">
            <SurfaceTiles items={copy.modules.items} />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader title={copy.traction.title} text={copy.traction.text} />
        <div className="mt-10 grid gap-x-8 gap-y-9 md:grid-cols-3">
          {copy.tractionMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
        <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-6">
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
        {/* Las fotos son la prueba: una entrevista de radio y un periódico en
            la mano. Antes iban de miniatura encima de una caja blanca. Ahora
            son la tarjeta entera y el texto va sobre un velo, como una portada. */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {copy.press.proof.map((item) => {
            const contenido = (
              <>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={900}
                  height={600}
                  className="press-photo"
                />
                <div className="press-body">
                  <p className="press-source">{item.source}</p>
                  <h2 className="press-title">{item.title}</h2>
                  <p className="press-text">{item.text}</p>
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
                  className="press-card is-link"
                >
                  {contenido}
                </a>
              );
            }

            return (
              <article key={item.title} className="press-card">
                {contenido}
              </article>
            );
          })}
        </div>
        {/* La ficha del portal nacional de datos abiertos es la unica prueba
            institucional: va sola y con su captura, no mezclada entre recortes
            de prensa. */}
        <a href={site.openData} target="_blank" rel="noreferrer" className="opendata mt-5">
          <Image
            src="/images/prensa/datos-gob.webp"
            alt={copy.press.openDataTitle}
            width={1200}
            height={800}
            className="opendata-shot"
            sizes="(min-width: 1024px) 32rem, 100vw"
          />
          <div className="opendata-body">
            <p className="clip-outlet">{copy.press.openDataLabel}</p>
            <p className="clip-date">{copy.press.openDataTag}</p>
            <h2 className="opendata-title">{copy.press.openDataTitle}</h2>
          </div>
        </a>

        {/* Siete recortes en dos columnas serian una pared: en carril se
            recorren, y cada uno ensena el titular tal como se publico. */}
        <div className="mt-12">
          <Rail label={copy.press.title}>
            {copy.mediaMentions.map((mention) => (
              <a
                key={`${mention.outlet}-${mention.date}-${mention.title}`}
                href={mention.url}
                target="_blank"
                rel="noreferrer"
                className="clip rail-item w-[78vw] max-w-[22rem]"
              >
                {mention.cover ? (
                  <Image
                    src={mention.cover}
                    alt={`${mention.title} — ${mention.outlet}`}
                    width={900}
                    height={600}
                    className="clip-cover"
                    sizes="(min-width: 1024px) 22rem, 78vw"
                  />
                ) : null}
                <p className="clip-outlet">{mention.outlet}</p>
                <p className="clip-date">{mention.date}</p>
                <h2 className="clip-title">{mention.title}</h2>
              </a>
            ))}
          </Rail>
        </div>
      </Section>

      <CaseDetails
        eyebrow={copy.details.eyebrow}
        title={copy.details.title}
        text={copy.details.text}
        items={copy.details.items}
      />

      <CaseStack title={copy.stack.title} text={copy.stack.text} groups={copy.stack.groups} />

      <CaseCta locale={locale} />
    </main>
  );
}
