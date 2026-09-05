import Image from "next/image";
import { Container } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

/* La captura se queda quieta mientras el texto pasa por al lado. Es CSS puro
   —`position: sticky` dentro de un contenedor alto—, sin escuchar el scroll:
   el navegador lo resuelve en el compositor y no hay nada que se atasque.

   En móvil no hay dos columnas que fijar, así que la captura va arriba y los
   bloques debajo, en orden. Fijar algo en una pantalla de 844 px de alto deja
   sin sitio al texto, que es justo lo que se venía a leer. */
export function StickyShowcase({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).stickyShowcase;

  return (
    <section className="section-band border-y border-[var(--line)] py-16 sm:py-24">
      <Container>
        <div className="max-w-[46rem]">
          <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-text)]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-[2rem] font-bold leading-[1.1] tracking-[-0.035em] sm:text-[3.25rem]">
            {copy.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="shot-frame overflow-hidden rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-white">
              <Image
                src="/images/snowy-home.webp"
                alt={copy.imageAlt}
                width={1365}
                height={1049}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <ol className="flex flex-col gap-10 lg:gap-14 lg:py-6">
            {copy.steps.map((step, index) => (
              <li key={step.title} className="lg:min-h-[26vh]">
                <p className="font-mono text-sm text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[1.5rem] font-bold leading-[1.2] tracking-[-0.025em] sm:text-[2rem]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[1.0625rem] leading-[1.55] text-[var(--muted)] sm:text-[1.1875rem]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
