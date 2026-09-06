import Image from "next/image";
import { CaseCta, CaseHero } from "@/components/case";
import {
  BrowserFrame,
  ButtonLink,
  MetricCard,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/ui";
import { ScaleLadder } from "@/components/visual/ScaleLadder";
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
            <ButtonLink href={organizations.eqx.url}>{copy.ctaPrimary}</ButtonLink>
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
          {/* La tabla es una tira ancha y baja: recortarla a 16/10 la dejaba
              con bandas. Va a su proporción, sobre blanco, que es su fondo. */}
          <Reveal delay={80}>
            <div className="mt-5">
              <BrowserFrame label={domainOf(site.eqx)}>
                <Image
                  src="/images/eqx-rankings.webp"
                  alt={copy.imageAlts.rankings}
                  width={2268}
                  height={1060}
                  className="h-auto w-full"
                  sizes="100vw"
                />
              </BrowserFrame>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader indice="01" eyebrow={copy.client.eyebrow} title={copy.client.title} text={copy.client.text} />
        {/* Sin caja: era el unico caso que seguia con rejilla de contornos
            mientras el resto de la web usa ficha con filete. */}
        <div className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-3">
          {copy.client.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="area">
                <h3 className="area-title">{item.title}</h3>
                <p className="area-text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* La escala va antes de las cifras sueltas: primero se entiende que el
          indice es una cadena de medicion y luego los numeros significan algo. */}
      <Section>
        <SectionHeader
          indice="02"
          eyebrow={copy.scale.eyebrow}
          title={copy.scale.title}
          text={copy.scale.text}
        />
        <div className="mt-12">
          <div className="ladder-stage">
            <ScaleLadder rungs={copy.scale.rungs} />
          </div>
          <p className="mt-6 text-[14px] leading-[1.5] text-[var(--muted)]">{copy.scale.note}</p>
        </div>
      </Section>

      <Section className="section-band">
        <SectionHeader indice="03" eyebrow={copy.index.eyebrow} title={copy.index.title} text={copy.index.text} />
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-9 sm:mt-10 lg:grid-cols-4">
          {copy.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
        {/* La jerarquía se lee de arriba abajo: un nivel por fila, con el número
            del nivel a la izquierda haciendo de columna guía. */}
        <ol className="mt-10 divide-y divide-[var(--line)] border-t border-[var(--line)]">
          {copy.index.levels.map((level, index) => (
            <li key={level.level}>
              <Reveal delay={index * 60}>
                <div className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:py-7">
                  <p className="font-mono text-sm text-[var(--accent-text)]">{level.level}</p>
                  <div>
                    <h3 className="t-item">{level.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{level.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader indice="04" eyebrow={copy.work.eyebrow} title={copy.work.title} text={copy.work.text} />
        <div className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {copy.work.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="area">
                <h3 className="area-title">{item.title}</h3>
                <p className="area-text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Los grupos de tecnologia vivian en una seccion propia al final;
            aqui van con el trabajo que describen. */}
        <div className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
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
      </Section>

      <Section className="section-band border-t border-[var(--line)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            indice="05"
            eyebrow={copy.vcr.eyebrow}
            title={copy.vcr.title}
            text={copy.vcr.text}
            align="left"
          />
          <div>
            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {copy.vcr.items.map((item) => (
                <li key={item} className="py-4 text-base leading-relaxed text-[var(--muted)] sm:leading-7">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-[var(--muted)]">{copy.vcr.note}</p>
          </div>
        </div>
      </Section>


      <CaseCta locale={locale} />
    </main>
  );
}
