import { CountUp, Container, Reveal } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

/* Una pantalla, un número. Antes esto eran cuatro tarjetas del mismo tamaño, y
   cuatro datos con el mismo peso no jerarquizan: el visitante no sabe cuál
   tenía que recordar. Aquí hay uno grande y tres de apoyo. */
export function BigStat({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).bigStat;

  return (
    <section className="section-dark border-t border-white/[0.08] py-20 sm:py-28 lg:py-32">
      <Container className="text-center">
        <Reveal>
          <p className="text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-dark)]">
            {copy.eyebrow}
          </p>
          <p className="mt-6 text-[3.5rem] font-bold leading-none tracking-[-0.05em] text-white sm:text-[9rem] lg:text-[11rem]">
            <CountUp to={copy.value} />
          </p>
          <p className="mx-auto mt-6 max-w-[34ch] text-[1.0625rem] leading-[1.45] text-[var(--ink-dark-muted)] sm:text-[1.5rem]">
            {copy.label}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-3 gap-6 border-t border-white/[0.08] pt-10 sm:mt-20 sm:gap-10">
            {copy.support.map((dato) => (
              <div key={dato.label}>
                <dt className="sr-only">{dato.label}</dt>
                <dd>
                  <span className="block text-[1.75rem] font-bold leading-none tracking-[-0.03em] text-white sm:text-[2.75rem]">
                    {dato.value}
                  </span>
                  <span className="mt-3 block text-[13px] leading-[1.35] text-[var(--ink-dark-muted)] sm:text-[15px]">
                    {dato.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
