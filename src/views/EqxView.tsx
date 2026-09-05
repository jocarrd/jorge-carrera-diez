import Image from "next/image";
import { CaseCta, CaseHero, CaseStack } from "@/components/case";
import { ButtonLink, MetricCard, Reveal, Section, SectionHeader, Surface } from "@/components/ui";
import { getCopy, organizations, site } from "@/content";
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
            <div className="shot-frame overflow-hidden rounded-2xl border border-[var(--line)] bg-black shadow-2xl">
              <Image
                src="/images/eqx-home.webp"
                alt={copy.imageAlts.home}
                width={2400}
                height={1080}
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>
          {/* La tabla es una tira ancha y baja: recortarla a 16/10 la dejaba
              con bandas. Va a su proporción, sobre blanco, que es su fondo. */}
          <Reveal delay={80}>
            <div className="shot-frame mt-5 overflow-hidden rounded-2xl border border-[var(--line)] bg-white">
              <Image
                src="/images/eqx-rankings.webp"
                alt={copy.imageAlts.rankings}
                width={2268}
                height={1060}
                className="h-auto w-full"
                sizes="100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow={copy.client.eyebrow} title={copy.client.title} text={copy.client.text} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.client.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <Surface className="h-full">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </Surface>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="section-band">
        <SectionHeader eyebrow={copy.index.eyebrow} title={copy.index.title} text={copy.index.text} />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 lg:grid-cols-4">
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
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{level.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{level.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader eyebrow={copy.work.eyebrow} title={copy.work.title} text={copy.work.text} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.work.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <Surface className="h-full">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </Surface>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="section-band border-t border-[var(--line)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
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

      <CaseStack title={copy.stack.title} text={copy.stack.text} groups={copy.stack.groups} />

      <CaseCta locale={locale} />
    </main>
  );
}
