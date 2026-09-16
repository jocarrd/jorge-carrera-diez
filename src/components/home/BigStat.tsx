import { CountUp, Container, Reveal } from "@/components/ui";
import { DatoEnVivo } from "./DatoEnVivo";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

/* Una pantalla, un número. Antes esto eran cuatro tarjetas del mismo tamaño, y
   cuatro datos con el mismo peso no jerarquizan: el visitante no sabe cuál
   tenía que recordar. Aquí hay uno grande y tres de apoyo.
 *
 * El número iba a 11 rem y centrado, que es la diapositiva de una
 * presentación de producto. A 7 rem y alineado con el resto de la página, el
 * dato sigue siendo lo primero que se ve y deja de pedir su propia pantalla;
 * los tres de apoyo pasan a la derecha, separados por filetes. */
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

            {/* En móvil eran tres columnas de 115 px con la etiqueta partida en tres
                líneas. Ahí cada dato es una fila, cifra a la izquierda y etiqueta
                a la derecha, que se lee de un golpe. */}
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/[0.1] bg-white/[0.1] sm:grid-cols-3 lg:w-[26rem]">
              {copy.support.map((dato) => (
                <div key={dato.label} className="bg-[var(--ink-dark)] px-5 py-4 sm:px-4 sm:py-5">
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

        {/* Arriba, noventa dias de historico. Aqui debajo, lo que la API acaba
            de devolver: el mismo sistema, en directo. */}
        <Reveal delay={200}>
          <DatoEnVivo locale={locale} />
        </Reveal>
      </Container>
    </section>
  );
}
