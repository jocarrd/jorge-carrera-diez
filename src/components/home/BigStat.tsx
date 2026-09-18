import { CountUp, Container, Reveal } from "@/components/ui";
import { DatoEnVivo } from "./DatoEnVivo";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function BigStat({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).bigStat;

  return (
    <section className="section-dark border-t border-white/[0.08] py-20 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <p className="t-eyebrow">{copy.eyebrow}</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              <p className="text-[3.5rem] font-semibold leading-none tracking-[-0.055em] text-white sm:text-[6rem] lg:text-[7rem]">
                <CountUp to={copy.value} />
              </p>
              <p className="mt-5 max-w-[34ch] text-[1.0625rem] leading-[1.45] text-[var(--ink-dark-muted)] sm:text-[1.25rem]">
                {copy.label}
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/[0.1] bg-white/[0.1] sm:grid-cols-3 lg:w-[26rem]">
              {copy.support.map((dato) => (
                <div
                  key={dato.label}
                  className="bg-[var(--ink-dark)] px-5 py-4 sm:px-4 sm:py-5"
                >
                  <dt className="sr-only">{dato.label}</dt>
                  <dd className="flex items-baseline justify-between gap-4 sm:block">
                    <span className="block text-[1.5rem] font-semibold leading-none tracking-[-0.035em] text-white sm:text-[1.875rem]">
                      {dato.value}
                    </span>
                    <span className="block text-right text-[14px] leading-[1.4] text-[var(--ink-dark-muted)] sm:mt-2.5 sm:text-left sm:text-[13px]">
                      {dato.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <DatoEnVivo locale={locale} />
        </Reveal>
      </Container>
    </section>
  );
}
