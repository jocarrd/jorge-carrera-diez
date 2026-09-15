import { BrowserFrame, ButtonLink, Container, ProductShot } from "@/components/ui";
import { DeliveryCycle } from "@/components/home/DeliveryCycle";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="relative overflow-hidden">
      {/* El titular deja de estar centrado. Centrado con el nombre encima era
          una portada de presentación; a la izquierda, con el ciclo de entrega
          al lado, la primera pantalla enseña el trabajo y no la persona. */}
      <Container className="pt-12 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_24.75rem] lg:items-center lg:gap-14">
          <div>
            <p className="rise rise-1 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] py-1.5 pl-2.5 pr-3.5 text-[13px] text-[var(--muted)]">
              <span className="inline-flex items-center gap-2 font-medium text-[var(--foreground)]">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#15803d] ring-[3px] ring-[rgba(21,128,61,0.14)]" />
                {copy.profile.availability}
              </span>
              {/* En 390 px la nota parte la píldora en dos líneas y se come
                  el sitio del titular: ahí basta con que se lea "disponible". */}
              <span aria-hidden className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">{copy.profile.availabilityNote}</span>
            </p>
            {/* Tres líneas cortas en vez de un párrafo: el titular se lee entero
                antes de que a nadie le dé tiempo a decidir que no le interesa. */}
            <h1 className="rise rise-2 mt-6 text-[2.5rem] font-semibold leading-[1.0] tracking-[-0.045em] sm:text-[3.5rem] lg:text-[4rem]">
              {copy.profile.tagline.map((line, index) => (
                <span key={line} className={index === 2 ? "block text-[var(--muted-strong)]" : "block"}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="rise rise-3 mt-6 max-w-[48ch] text-[1.0625rem] leading-[1.58] text-[var(--muted)] sm:text-[1.125rem]">
              {copy.profile.taglineSub}
            </p>
            {/* Dos enlaces de texto iguales no son una jerarquía: hay una acción
                principal —la trayectoria— y una secundaria. La píldora la marca. */}
            <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-x-4">
              <ButtonLink href={routePath(locale, "experience")}>{copy.hero.ctaPrimary}</ButtonLink>
              <ButtonLink href={routePath(locale, "contact")} variant="quiet">
                {copy.hero.ctaContact}
              </ButtonLink>
            </div>
          </div>

          <div className="rise rise-3">
            <DeliveryCycle locale={locale} />
          </div>
        </div>

        {/* Tres capacidades justo bajo los enlaces: es lo que hace que "IA"
            se lea sin hacer scroll, sin llenar el titular de palabras. */}
        <ul className="rise rise-4 mt-14 grid gap-8 text-left sm:mt-16 sm:grid-cols-3 sm:gap-10">
          {copy.profile.capabilities.map((item) => (
            <li key={item.title}>
              <h2 className="t-item">{item.title}</h2>
              <p className="mt-1.5 text-base leading-[1.6] text-[var(--muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* La captura entra recortada por abajo y se funde con el fondo: el
          producto no se presenta, se asoma. La ventana con el dominio hace de
          prueba —se puede teclear y comprobar— sin decirlo en una frase. */}
      <Container className="mt-12 sm:mt-20">
        <div className="relative">
          <BrowserFrame label={site.snowyDomain}>
            <ProductShot
              src="/images/snowy-home.webp"
              srcMobile="/images/snowy-home-movil.webp"
              alt={copy.snowyShowcase.imageAlt}
              priority
              crop
              className="!rounded-none !shadow-none !ring-0"
            />
          </BrowserFrame>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent sm:h-28"
          />
        </div>
      </Container>
    </section>
  );
}
