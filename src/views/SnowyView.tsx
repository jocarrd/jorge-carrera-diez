import Image from "next/image";
import { CaseCta, CaseHero } from "@/components/case";
import {
  BrowserFrame,
  ButtonLink,
  MetricCard,
  Section,
  Rail,
  SectionHeader,
} from "@/components/ui";
import { ArchitectureStack } from "@/components/visual/ArchitectureStack";
import { CapabilityRail } from "@/components/visual/CapabilityRail";
import { SourceGrid } from "@/components/visual/SourceGrid";
import { SpreadCone } from "@/components/visual/SpreadCone";
import { SurfaceTiles } from "@/components/visual/SurfaceTiles";
import { domainOf, getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

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
        </div>
      </section>

      {/* La infografia va antes de las superficies: primero se entiende el
          problema —dieciseis fuentes que no coinciden— y luego se enseña que
          se construyo encima. Al reves, las capturas no significan nada. */}
      <Section>
        <SectionHeader
          indice="01"
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
          <p className="mt-6 text-[14px] leading-[1.5] text-[var(--muted)]">{copy.convergence.note}</p>
        </div>
      </Section>

      <Section className="section-band">
        <SectionHeader
          indice="02"
          eyebrow={copy.product.eyebrow}
          title={copy.product.title}
          text={copy.product.text}
        />
        {/* En carril y en oscuro: seis tarjetas blancas en rejilla iban justo
            antes de cinco superficies claras con color, y no se distinguian
            unas de otras. */}
        <div className="mt-12">
          <CapabilityRail items={copy.features} label={copy.product.title} />
        </div>
      </Section>

      <section className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="t-eyebrow">{copy.modules.eyebrow}</p>
            <h2 className="t-section">{copy.modules.title}</h2>
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
          indice="03"
          eyebrow={copy.build.eyebrow}
          title={copy.build.title}
          text={copy.build.text}
        />
        {/* El diagrama primero: dice como esta hecho. Las areas de trabajo van
            debajo como ficha, sin contorno: siete cajas iguales competian entre
            si y dejaban dos huecos vacios al final de la rejilla. */}
        <div className="mt-10">
          <ArchitectureStack
            layers={copy.architecture.layers}
            stores={copy.architecture.stores}
            servicesLabel={copy.architecture.servicesLabel}
            services={copy.architecture.services}
            servicesNote={copy.architecture.servicesNote}
          />
        </div>

        {/* Los grupos de tecnologia vivian en una seccion propia al final que
            repetia lo que ya dice el diagrama. Aqui, debajo, es donde
            significan algo. */}
        <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {copy.stack.groups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                {group.label}
              </p>
              <p className="mt-2 text-base leading-[1.6] text-[var(--foreground)]">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {copy.capabilities.map((item) => (
            <div key={item.title} className="area">
              <h2 className="area-title">{item.title}</h2>
              <p className="area-text">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="section-band">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            indice="04"
            eyebrow={copy.seo.eyebrow}
            title={copy.seo.title}
            text={copy.seo.text}
            align="left"
          />
          {/* Siete etiquetas grises no decian quien es cada fuente ni que
              aporta. Ahora cada una lleva su sigla, su nombre y el dato que
              pone, y el color viene del dominio: tiempo, agua, sismo o aire. */}
          <div>
            <h2 className="t-card">{copy.seo.sourcesTitle}</h2>
            <SourceGrid sources={copy.seo.sources} className="mt-6" />
            <p className="mt-6 text-base leading-[1.6] text-[var(--muted)]">{copy.seo.sourcesText}</p>
          </div>
        </div>
      </Section>

      <Section className="section-band">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Centrado dentro de una rejilla de dos columnas: el titular quedaba
              centrado y las tarjetas a la izquierda. */}
          <SectionHeader
            indice="05"
            eyebrow={copy.b2b.eyebrow}
            title={copy.b2b.title}
            text={copy.b2b.text}
            align="left"
          />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-7">
            {/* Cada linea enlaza a su pagina viva: sin eso son tres
                afirmaciones que nadie puede comprobar. */}
            {copy.b2b.lines.map((line) => (
              <div key={line.title} className="area">
                <h2 className="area-title">{line.title}</h2>
                <p className="area-text">{line.text}</p>
                {line.url ? (
                  <a
                    href={line.url}
                    target="_blank"
                    rel="noreferrer"
                    className="area-link"
                  >
                    {domainOf(line.url)}
                    <span aria-hidden className="ml-1">
                      &rsaquo;
                    </span>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          indice="06"
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



      <CaseCta locale={locale} />
    </main>
  );
}
