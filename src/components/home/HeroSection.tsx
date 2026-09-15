import { ButtonLink, Container } from "@/components/ui";
import { ClientsStrip } from "@/components/home/ClientsStrip";
import { HeroStage } from "@/components/home/HeroStage";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="relative overflow-hidden">
      <Container className="relative pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="relative z-10 max-w-[34rem]">
          <p className="rise rise-1 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel-strong)] py-1.5 pl-2.5 pr-3.5 text-[13px] text-[var(--muted)]">
            <span className="inline-flex items-center gap-2 whitespace-nowrap font-medium text-[var(--foreground)]">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-[#22c55e] ring-[3px] ring-[rgba(34,197,94,0.2)]"
              />
              {copy.profile.availability}
            </span>
            {/* En 390 px la nota parte la píldora en dos líneas y se come el
                sitio del titular: ahí basta con que se lea "disponible". */}
            <span aria-hidden className="hidden sm:inline">
              ·
            </span>
            <span className="hidden sm:inline">{copy.profile.availabilityNote}</span>
          </p>

          {/* Tres líneas cortas en vez de un párrafo: el titular se lee entero
              antes de que a nadie le dé tiempo a decidir que no le interesa. La
              última va en el acento, que es donde está la promesa. */}
          <h1 className="rise rise-2 mt-6 text-[2.5rem] font-semibold leading-[1.0] tracking-[-0.045em] sm:text-[3.5rem] lg:text-[4rem]">
            {copy.profile.tagline.map((line, index) => (
              <span
                key={line}
                className={index === 2 ? "block text-[var(--accent)]" : "block"}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="rise rise-3 mt-6 max-w-[42ch] text-[1.0625rem] leading-[1.58] text-[var(--muted)] sm:text-[1.125rem]">
            {copy.profile.taglineSub}
          </p>

          <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-x-4">
            <ButtonLink href={routePath(locale, "experience")}>{copy.hero.ctaPrimary}</ButtonLink>
            <ButtonLink href={routePath(locale, "contact")} variant="secondary">
              {copy.hero.ctaContact}
            </ButtonLink>
          </div>
        </div>

        <HeroStage />
      </Container>

      <ClientsStrip label={copy.profile.clientsLabel} />

      {/* Tres capacidades justo bajo la tira: es lo que hace que "IA" se lea
          sin hacer scroll, sin llenar el titular de palabras. */}
      <Container className="py-12 sm:py-16">
        <ul className="grid gap-8 text-left sm:grid-cols-3 sm:gap-10">
          {copy.profile.capabilities.map((item) => (
            <li key={item.title}>
              <h2 className="t-item">{item.title}</h2>
              <p className="mt-1.5 text-base leading-[1.6] text-[var(--muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
