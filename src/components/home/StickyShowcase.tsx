"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BrowserFrame, Container } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

/* La captura se queda quieta mientras el texto pasa por al lado. El fijado es
   CSS puro —`position: sticky` dentro de un contenedor alto—, así que el
   navegador lo resuelve en el compositor y no hay nada que se atasque.

   Lo que sí necesita JavaScript es saber qué paso se está leyendo para cambiar
   la captura: antes se quedaba la misma imagen los tres, y una zona fijada que
   no responde al scroll promete algo que luego no pasa. Va con
   IntersectionObserver y no escuchando scroll: dispara tres veces por sección
   en vez de en cada fotograma.

   En móvil no hay dos columnas que fijar, así que la captura va arriba y los
   bloques debajo, en orden. Fijar algo en una pantalla de 844 px de alto deja
   sin sitio al texto, que es justo lo que se venía a leer. */
export function StickyShowcase({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).stickyShowcase;
  const [active, setActive] = useState(0);
  const stepsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepsRef.current.filter(Boolean) as HTMLLIElement[];
    if (nodes.length === 0) return;

    // La banda estrecha en mitad de pantalla evita el parpadeo de dos pasos
    // activos a la vez cuando uno entra y el otro todavía no ha salido.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = nodes.indexOf(entry.target as HTMLLIElement);
          if (index >= 0) setActive(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-band border-y border-[var(--line)] py-16 sm:py-24">
      <Container>
        <div className="max-w-[46rem]">
          <p className="t-eyebrow">
            {copy.eyebrow}
          </p>
          <h2 className="t-section mt-4">
            {copy.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <BrowserFrame label={site.snowyDomain}>
              <div className="relative aspect-[4/3]">
              {copy.steps.map((step, index) => (
                <Image
                  key={step.image}
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  aria-hidden={index !== active}
                  className={`sticky-shot object-cover object-top ${
                    index === active ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              ))}
              </div>
            </BrowserFrame>

            {/* Tres rayas que dicen por dónde va: sin ellas el cambio de imagen
                parece un fallo de carga en vez de una respuesta al scroll. */}
            <ol className="mt-5 hidden gap-2 lg:flex" aria-hidden>
              {copy.steps.map((step, index) => (
                <li
                  key={step.title}
                  className={`h-[3px] flex-1 rounded-full transition-colors duration-[var(--dur-media)] ${
                    index === active ? "bg-[var(--accent)]" : "bg-[var(--line-strong)]"
                  }`}
                />
              ))}
            </ol>
          </div>

          <ol className="flex flex-col gap-10 lg:gap-14 lg:py-6">
            {copy.steps.map((step, index) => (
              <li
                key={step.title}
                ref={(node) => {
                  stepsRef.current[index] = node;
                }}
                className="lg:min-h-[26vh]"
              >
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
