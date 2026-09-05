import { Container, ProductShot } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import Link from "next/link";

// La única sección oscura de la página. Se reserva para Snowy porque es lo que
// debe recordarse: si todo destacara, no destacaría nada.
export function SnowyShowcase({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const showcase = copy.snowyShowcase;
  const snowy = copy.projects.find((project) => project.slug === "snowy");

  return (
    <section id="snowy-showcase" className="section-dark py-20 sm:py-28 lg:py-32">
      <Container className="text-center">
        <p className="text-xl font-semibold text-[var(--ink-dark-muted)] sm:text-[1.3125rem]">
          Snowy
        </p>
        <h2 className="mx-auto mt-4 max-w-[20ch] text-[2.125rem] font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-[3.625rem]">
          {showcase.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.5] text-[var(--ink-dark-muted)] sm:text-[1.3125rem]">
          {showcase.detail}
        </p>

        <div className="mt-6 flex flex-col items-center gap-1 sm:mt-7 sm:flex-row sm:justify-center sm:gap-x-8">
          <Link
            href={routePath(locale, "snowy")}
            className="inline-flex min-h-11 items-center text-[17px] text-[var(--accent-dark)] hover:underline"
          >
            {showcase.ctaPrimary}
            <span aria-hidden className="ml-1 text-[15px]">
              &rsaquo;
            </span>
          </Link>
          <a
            href={site.snowy}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-[17px] text-[var(--accent-dark)] hover:underline"
          >
            {showcase.ctaSecondary}
            <span aria-hidden className="ml-1 text-[15px]">
              &rsaquo;
            </span>
          </a>
        </div>

        {/* Tres superficies del producto en una fila: el radar, el asistente y
            el cubo climático. Dicen en una pasada lo que la lista de stack
            tarda un párrafo en contar. */}
        <div className="mt-12 sm:hidden">
          <ProductShot
            src="/images/snowy-mapa-movil.webp"
            alt={showcase.imageAlt}
            tone="dark"
            width={430}
            height={932}
          />
        </div>
        <div className="mt-16 hidden gap-4 sm:grid sm:grid-cols-3">
          <ProductShot
            src="/images/snowy-radar-map.webp"
            alt={showcase.imageAlt}
            tone="dark"
            width={1200}
            height={900}
          />
          <ProductShot
            src="/images/snowy-ai-assistant.webp"
            alt={showcase.imageAlt}
            tone="dark"
            width={1200}
            height={900}
          />
          <ProductShot
            src="/images/snowy-climate.webp"
            alt={showcase.imageAlt}
            tone="dark"
            width={1200}
            height={900}
          />
        </div>

        {snowy?.metrics ? (
          <>
            <div className="mt-4 grid grid-cols-2 gap-4 text-left lg:grid-cols-4">
              {snowy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[var(--radius-card-lg)] bg-[var(--ink-dark-panel)] p-7 sm:p-8"
                >
                  <p className="text-[2.25rem] font-bold leading-none tracking-[-0.04em] text-white sm:text-[3.125rem]">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.4] text-[var(--ink-dark-muted)] sm:text-base">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-[46ch] text-[1.0625rem] leading-[1.5] text-[var(--ink-dark-muted)] sm:text-lg">
              {copy.profile.availability}.{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--accent-dark)] underline decoration-[var(--accent-dark)]/35 underline-offset-4 hover:decoration-[var(--accent-dark)]"
              >
                {copy.contactCta.cta}
              </a>
            </p>

            <ul className="mt-7 flex flex-wrap justify-center gap-2">
              {(snowy.stack ?? []).map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/[0.14] px-4 py-1.5 text-sm text-[var(--ink-dark-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </Container>
    </section>
  );
}
