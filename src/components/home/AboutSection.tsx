import Image from "next/image";
import { ProfileSummary } from "@/components/ProfileSummary";
import { Section, Reveal } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

// La cara va antes de pedir el contacto, no en la primera pantalla: arriba
// competiría con el lema, y aquí es lo que hace que escribir a un desconocido
// deje de parecerlo. Retrato grande, sin recortar en círculo.
export function AboutSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <Section id="sobre-mi">
      <Reveal className="grid items-center gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="mx-auto max-w-[280px] overflow-hidden rounded-[22px] ring-1 ring-black/[0.06] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.28)] sm:max-w-none sm:rounded-[28px]">
          <Image
            src={site.photo}
            alt={copy.meta.ogAlt}
            width={1083}
            height={1452}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-[var(--muted)] sm:text-xl">{site.name}</p>
          <h2 className="mt-3 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.035em] sm:text-[3rem]">
            {copy.profile.positioningLong}
          </h2>
          <ProfileSummary
            locale={locale}
            className="prose-links mt-5 text-[1.0625rem] leading-[1.6] text-[var(--muted)] sm:mt-6 sm:text-xl"
          />
        </div>
      </Reveal>
    </Section>
  );
}
