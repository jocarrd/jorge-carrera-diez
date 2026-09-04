import { ButtonLink, Section } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function ContactCta({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).contactCta;

  return (
    <Section id="contacto">
      {/* Es donde se decide si te escriben y era la banda más plana de la
          página: mismo relleno y mismo borde que cualquier otra tarjeta. */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.07] via-white/[0.02] to-transparent p-8 sm:p-12 lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/70">
              {site.email}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:leading-7">
              {copy.text}
            </p>
          </div>
          <ButtonLink href={`mailto:${site.email}`}>{copy.cta}</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
