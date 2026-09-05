import { ButtonLink, Container, ProductShot } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="relative overflow-hidden">
      <Container className="pt-14 text-center sm:pt-24 lg:pt-28">
        <p className="rise rise-1 text-xl font-semibold text-[var(--muted)] sm:text-[1.3125rem]">
          {site.name}
        </p>
        <p className="rise rise-1 mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--panel)] py-1.5 pl-3 pr-4 text-[14px] font-medium">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#1db954]" />
          {copy.profile.availability}
        </p>
        {/* Tres líneas cortas en vez de un párrafo: el titular se lee entero
            antes de que a nadie le dé tiempo a decidir que no le interesa. */}
        <h1 className="rise rise-2 mt-4 text-[2.625rem] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[6rem]">
          {copy.profile.tagline.map((line, index) => (
            <span key={line} className={index === 2 ? "block text-[var(--muted)]" : "block"}>
              {line}
            </span>
          ))}
        </h1>
        <p className="rise rise-3 mx-auto mt-6 max-w-[34ch] text-[1.0625rem] leading-[1.45] text-[var(--muted)] sm:mt-7 sm:max-w-[46ch] sm:text-[1.5625rem]">
          {copy.profile.taglineSub}
        </p>
        <div className="rise rise-4 mt-7 flex flex-col items-center gap-1 sm:mt-8 sm:flex-row sm:justify-center sm:gap-x-8">
          <ButtonLink href={routePath(locale, "snowy")} variant="quiet">
            {copy.hero.ctaPrimary}
          </ButtonLink>
          <ButtonLink href={routePath(locale, "contact")} variant="quiet">
            {copy.hero.ctaContact}
          </ButtonLink>
        </div>
        {/* Tres capacidades justo bajo los enlaces: es lo que hace que "IA"
            se lea sin hacer scroll, sin llenar el titular de palabras. */}
        <ul className="rise rise-4 mx-auto mt-14 grid max-w-[62rem] gap-8 text-left sm:mt-16 sm:grid-cols-3 sm:gap-10">
          {copy.profile.capabilities.map((item) => (
            <li key={item.title}>
              <h2 className="text-[17px] font-semibold tracking-[-0.01em]">{item.title}</h2>
              <p className="mt-1.5 text-[15px] leading-[1.5] text-[var(--muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* La captura entra recortada por abajo y se funde con el fondo: el
          producto no se presenta, se asoma. */}
      <Container className="mt-12 sm:mt-20">
        <div className="relative">
          <ProductShot
            src="/images/snowy-home.webp"
            srcMobile="/images/snowy-home-movil.webp"
            alt={copy.snowyShowcase.imageAlt}
            priority
            crop
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent sm:h-28"
          />
        </div>
      </Container>
    </section>
  );
}
