import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { contactPageJsonLd } from "@/lib/seo";

export function ContactView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.contact;

  const hrefFor = (key: (typeof copy.links)[number]["key"]) => {
    switch (key) {
      case "malt":
        return site.malt;
      case "linkedin":
        return site.linkedin;
      case "github":
        return site.github;
      case "cv":
        return routePath(locale, "cv");
      case "snowy":
        return routePath(locale, "snowy");
    }
  };

  return (
    <main>
      <JsonLd data={contactPageJsonLd(locale)} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h1 className="t-section max-w-3xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-xl sm:leading-9">
              {copy.lead}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:leading-7">
              {copy.detail}
            </p>

            {/* Era una caja con contorno colgando del texto, y competía con la
                tarjeta de al lado sin ser tan importante. Un filete separa
                igual y no pesa. */}
            <div className="mt-10 border-t border-[var(--line)] pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {copy.availabilityLabel}
              </p>
              <p className="mt-3 max-w-md text-base leading-7 text-[var(--muted)]">
                {copy.availabilityText}
              </p>
            </div>
          </div>

          {/* El destino de la página pesaba lo mismo que la tarjeta de al lado.
              El peso lo da la superficie, no el halo de neón que llevaba: ese
              resplandor no salía en ninguna otra parte de la web. */}
          <div className="rounded-[28px] bg-[var(--panel)] p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {copy.emailLabel}
            </p>
            <a
              className="mt-4 inline-flex min-h-11 items-center break-all text-xl font-semibold tracking-tight text-[var(--accent-text)] transition hover:text-[var(--accent-text)] sm:text-3xl"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">{copy.emailHint}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${site.email}`}>{copy.ctaPrimary}</ButtonLink>
              <ButtonLink href={routePath(locale, "cv")} variant="secondary">
                {copy.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="section-band">
        <SectionHeader title={copy.servicesTitle} text={copy.servicesText} />
        <div className="mt-10 grid gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-3">
          {copy.services.map((service) => (
            <div key={service.title} className="area">
              <h3 className="area-title">{service.title}</h3>
              <p className="area-text">{service.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <SectionHeader title={copy.clientsTitle} text={copy.clientsText} />
        <div className="mt-10 grid gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-2">
          {copy.clients.map((client) => (
            <div key={client.title} className="area">
              <h3 className="area-title">{client.title}</h3>
              <p className="area-text">{client.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="section-band">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="t-block">
              {copy.linksTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">{copy.linksText}</p>
          </div>
          {/* Cinco contornos en la esquina de una caja pesaban más que el
              titular. Enlaces subrayados, que es lo que son. */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {copy.links.map((link) => {
              const href = hrefFor(link.key);

              return (
                <Link
                  key={link.key}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center text-base text-[var(--foreground)] underline decoration-[var(--line-strong)] underline-offset-[6px] transition-colors hover:text-[var(--accent-text)] hover:decoration-[var(--accent)]"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
    </main>
  );
}
