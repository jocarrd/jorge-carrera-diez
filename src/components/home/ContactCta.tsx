import { ButtonLink, Section, Surface } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function ContactCta({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).contactCta;

  return (
    <Section id="contacto">
      <Surface className="grid gap-8 border-white/10 bg-white/[0.025] lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">{copy.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{copy.text}</p>
        </div>
        <ButtonLink href={`mailto:${site.email}`}>{copy.cta}</ButtonLink>
      </Surface>
    </Section>
  );
}
