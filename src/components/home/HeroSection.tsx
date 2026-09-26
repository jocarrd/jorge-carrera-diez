import { ButtonLink, Container, RevealChildren } from "@/components/ui";
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
          <p className="rise rise-1 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--panel-strong)] py-1.5 pl-2.5 pr-3.5 text-[13px] font-medium text-[var(--foreground)]">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[#22c55e] ring-[3px] ring-[rgba(34,197,94,0.2)]"
            />
            {copy.profile.availability}
          </p>

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
          <div className="rise rise-4 mt-8 grid gap-5 sm:grid-cols-2 sm:gap-4">
            <div className="hero-path">
              <p className="hero-path-question">
                {copy.hero.paths.team.question}
              </p>
              <ButtonLink
                href={routePath(locale, "cv")}
                className="sm:self-start"
              >
                {copy.hero.paths.team.label}
              </ButtonLink>
            </div>
            <div className="hero-path">
              <p className="hero-path-question">
                {copy.hero.paths.product.question}
              </p>
              <ButtonLink
                href={routePath(locale, "services")}
                variant="secondary"
                className="sm:self-start"
              >
                {copy.hero.paths.product.label}
              </ButtonLink>
            </div>
          </div>
        </div>

        <HeroStage />
      </Container>

      <ClientsStrip label={copy.profile.clientsLabel} />

      <Container className="py-12 sm:py-16">
        <RevealChildren
          as="ul"
          className="grid gap-8 text-left sm:grid-cols-3 sm:gap-10"
        >
          {copy.profile.capabilities.map((item) => (
            <li key={item.title}>
              <h2 className="t-item">{item.title}</h2>
              <p className="mt-1.5 text-base leading-[1.6] text-[var(--muted)]">
                {item.text}
              </p>
            </li>
          ))}
        </RevealChildren>
      </Container>
    </section>
  );
}
