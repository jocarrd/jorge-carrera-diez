import Image from "next/image";
import {
  BrowserFrame,
  ButtonLink,
  Container,
  DeviceFrame,
  Rail,
  Reveal,
} from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function SnowyShowcase({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const showcase = copy.snowyShowcase;
  const snowy = copy.projects.find((project) => project.slug === "snowy");

  return (
    <section
      id="snowy-showcase"
      className="section-dark py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <h2 className="t-section max-w-[20ch] text-white">
          {showcase.title}
        </h2>
        <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.5] text-[var(--ink-dark-muted)] sm:text-[1.1875rem]">
          {showcase.detail}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-x-4">
          <ButtonLink
            href={site.snowy}
            tone="dark"
            target="_blank"
            rel="noreferrer"
          >
            {showcase.ctaSecondary}
          </ButtonLink>
          <ButtonLink
            href={routePath(locale, "snowy")}
            variant="quiet"
            tone="dark"
          >
            {showcase.ctaPrimary}
          </ButtonLink>
        </div>
      </Container>

      <Container className="mt-14 sm:mt-16">
        <Reveal delay={80}>
          <Rail label="Snowy">
            {showcase.gallery.map((shot) => (
              <figure
                key={shot.image}
                className="rail-item w-[62vw] max-w-[42rem] sm:w-[86vw]"
              >
                <div className="sm:hidden">
                  <DeviceFrame src={shot.imageMobile} alt={shot.alt} />
                </div>
                <div className="hidden sm:block">
                  <BrowserFrame label={site.snowyDomain} tone="dark">
                    <Image
                      src={shot.image}
                      alt={shot.alt}
                      width={1200}
                      height={900}
                      className="h-auto w-full"
                      sizes="672px"
                    />
                  </BrowserFrame>
                </div>
                <figcaption className="mt-5">
                  <p className="t-item text-white">{shot.title}</p>
                  <p className="mt-1 text-base leading-[1.6] text-[var(--ink-dark-muted)]">
                    {shot.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </Rail>
        </Reveal>
      </Container>

      {snowy?.metrics ? (
        <Container className="mt-14 sm:mt-16">
          <p className="max-w-[46ch] text-[1.0625rem] leading-[1.5] text-[var(--ink-dark-muted)] sm:text-lg">
            {copy.profile.availability}.{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-[var(--accent-dark)] underline decoration-[var(--accent-dark)]/35 underline-offset-4 hover:decoration-[var(--accent-dark)]"
            >
              {copy.contactCta.cta}
            </a>
          </p>

          <p className="mt-8 max-w-2xl font-mono text-[12px] leading-[1.7] text-[var(--ink-dark-muted)]">
            {(snowy.stack ?? []).join(" · ")}
          </p>
        </Container>
      ) : null}
    </section>
  );
}
