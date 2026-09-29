import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";
import { CapabilityCards } from "@/components/home/CapabilityCards";
import { ClientsStrip } from "@/components/home/ClientsStrip";
import { HeroShowcase } from "@/components/home/HeroShowcase";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <>
      <section className="hero-ed on-dark">
        <Container className="hero-ed-inner">
          <div className="hero-ed-top rise rise-1">
            <p className="hero-ed-badge">
              <span aria-hidden className="hero-ed-dot" />
              {copy.profile.availability}
            </p>
            <p className="hero-ed-role">{copy.profile.positioning}</p>
          </div>

          <div className="hero-ed-stage" aria-hidden>
            <p className="hero-ed-word hero-ed-word--back">
              Tech
            </p>
            <Image
              src="/images/jorge-recorte.webp"
              alt=""
              width={1032}
              height={1248}
              priority
              sizes="(max-width: 639px) 78vw, 460px"
              className="hero-ed-photo rise rise-2"
            />
            <p className="hero-ed-word hero-ed-word--front">
              Lead
            </p>
          </div>

          <div className="hero-ed-bottom rise rise-4">
            <div className="hero-ed-copy">
              <h1 className="hero-ed-title">
                <span className="sr-only">{site.name}. </span>
                {copy.profile.tagline.join(" ")}
              </h1>
              <p className="hero-ed-sub">{copy.profile.taglineSub}</p>
            </div>

            <div className="hero-ed-paths">
              <div className="hero-ed-path">
                <p>{copy.hero.paths.team.question}</p>
                <ButtonLink href={routePath(locale, "cv")}>
                  {copy.hero.paths.team.label}
                </ButtonLink>
              </div>
              <div className="hero-ed-path">
                <p>{copy.hero.paths.product.question}</p>
                <ButtonLink
                  href={routePath(locale, "services")}
                  variant="secondary"
                  tone="dark"
                >
                  {copy.hero.paths.product.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HeroShowcase />

      <ClientsStrip label={copy.profile.clientsLabel} />

      <CapabilityCards locale={locale} />
    </>
  );
}
