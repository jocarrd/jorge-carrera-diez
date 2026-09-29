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
              <p className="text-[3.5rem] font-light leading-none tracking-[-0.06em] text-white sm:text-[6rem] lg:text-[7.5rem]">
                <CountUp to={copy.value} />
              </p>
              <p className="mt-5 max-w-[34ch] text-[1.0625rem] leading-[1.45] text-[var(--ink-dark-muted)] sm:text-[1.25rem]">
                {copy.label}
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-5 sm:gap-8 lg:w-[32rem]">
              {copy.support.map((dato) => (
                <div
                  key={dato.label}
                  className="border-t border-white/[0.14] pt-4"
                >
                  <dt className="sr-only">{dato.label}</dt>
                  <dd>
                    <span className="block text-[1.625rem] font-light leading-none tracking-[-0.045em] text-white sm:text-[2.25rem]">
                      {dato.value}
                    </span>
                    <span className="mt-2.5 block text-[13px] leading-[1.4] text-[var(--ink-dark-muted)] sm:text-[14px]">
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
