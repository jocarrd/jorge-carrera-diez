import Image from "next/image";
import { CaseCta, CaseHero, CaseStack } from "@/components/case";
import {
  BrowserFrame,
  ButtonLink,
  DeviceFrame,
  MetricCard,
  Rail,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/ui";
import { Timeline } from "@/components/visual/Timeline";
import { domainOf, getCopy, site } from "@/content";
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
            <BrowserFrame label={domainOf(site.lariojameteo)}>
              <Image
                src="/images/lariojameteo-home.webp"
                alt={copy.imageAlt}
                width={1230}
                height={923}
                className="h-auto w-full"
                priority
              />
            </BrowserFrame>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow={copy.timeline.eyebrow}
          title={copy.timeline.title}
          text={copy.timeline.text}
        />
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-9 sm:mt-10 lg:grid-cols-4">
          {copy.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Section>

      {/* El recorrido va antes de qué se hace: sin saber que el sitio llevaba
          doce años publicando, "rendimiento y SEO" no significa lo mismo. */}
      {/* Faltaba lo mas sustancial del encargo: el rediseño y el plugin propio
          que trae los datos de Snowy. La pagina decia que el trabajo "no es
          funcionalidad nueva", y con un plugin a medida de por medio eso se
          quedaba corto. */}
      <Section className="section-band">
        <SectionHeader
          eyebrow={copy.product.eyebrow}
          title={copy.product.title}
          text={copy.product.text}
        />

        <div className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-3">
          {copy.product.items.map((item) => (
            <div key={item.title} className="area">
              <h2 className="area-title">{item.title}</h2>
              <p className="area-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* El portal se lee casi siempre en el movil, asi que se ensena en el
            movil: portada, una seccion y la categoria donde se ven los datos
            que trae el plugin. */}
        <div className="mt-14">
          <Rail label={copy.product.title}>
            {copy.product.shots.map((shot) => (
              <figure key={shot.image} className="rail-item w-[62vw] max-w-[16rem]">
                <DeviceFrame src={shot.image} alt={shot.alt} />
                <figcaption className="mt-5 text-[15px] font-semibold leading-[1.35] text-[var(--muted)]">
                  {shot.title}
                </figcaption>
              </figure>
            ))}
          </Rail>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow={copy.history.eyebrow}
          title={copy.history.title}
          text={copy.history.text}
        />
        <div className="mt-14">
          <Timeline milestones={copy.history.milestones} />
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
              <div className="area h-full">
                <p className="area-text mt-0">{item}</p>
              </div>
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
