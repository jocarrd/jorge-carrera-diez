import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Section, SectionHeader, Surface } from "@/components/ui";
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
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 sm:mt-6 sm:text-xl sm:leading-9">
              {copy.lead}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-5 sm:leading-7">
              {copy.detail}
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                {copy.availabilityLabel}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{copy.availabilityText}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              {copy.emailLabel}
            </p>
            <a
              className="mt-4 block break-all text-xl font-semibold tracking-tight text-cyan-200 transition hover:text-cyan-100 sm:text-3xl"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <p className="mt-5 text-sm leading-6 text-slate-400">{copy.emailHint}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${site.email}`}>{copy.ctaPrimary}</ButtonLink>
              <ButtonLink href={routePath(locale, "cv")} variant="secondary">
                {copy.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-white/[0.02]">
        <SectionHeader title={copy.servicesTitle} text={copy.servicesText} />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
          {copy.services.map((service) => (
            <Surface key={service.title}>
              <h3 className="text-lg font-semibold tracking-tight text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{service.text}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <SectionHeader title={copy.clientsTitle} text={copy.clientsText} />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
          {copy.clients.map((client) => (
            <Surface key={client.title}>
              <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                {client.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{client.text}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-white/[0.02]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {copy.linksTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{copy.linksText}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {copy.links.map((link) => {
                const href = hrefFor(link.key);

                return (
                  <Link
                    key={link.key}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
