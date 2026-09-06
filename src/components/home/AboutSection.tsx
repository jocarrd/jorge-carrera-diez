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
  const labels = copy.aboutFacts;

  const facts = [
    { label: labels.location, value: copy.meta.location },
    {
      label: labels.languages,
      value: copy.languages.map((lang) => `${lang.name} (${lang.level.toLowerCase()})`).join(", "),
    },
    { label: labels.education, value: copy.education[0]?.title ?? "" },
  ];

  return (
    <Section id="sobre-mi">
      <Reveal className="grid items-center gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="mx-auto max-w-[280px] overflow-hidden rounded-[22px] ring-1 ring-black/[0.06] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.28)] sm:max-w-none sm:rounded-[var(--radius-card-lg)]">
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
          <p className="t-eyebrow">{site.name}</p>
          <h2 className="t-section mt-3">
            {copy.profile.positioningLong}
          </h2>
          <ProfileSummary
            locale={locale}
            className="prose-links mt-5 text-[1.0625rem] leading-[1.6] text-[var(--muted)] sm:mt-6 sm:text-xl"
          />

          {/* La ficha de datos: base, idiomas y formación estaban sólo en el CV
              y son lo primero que se busca antes de escribir a alguien. De paso
              la columna de texto deja de quedarse corta frente al retrato. */}
          <dl className="mt-9 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-[var(--line)] sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-[var(--background)] px-5 py-4">
                <dt className="text-[13px] font-medium uppercase tracking-[0.02em] text-[var(--muted)]">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-base leading-[1.6] text-[var(--foreground)]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
