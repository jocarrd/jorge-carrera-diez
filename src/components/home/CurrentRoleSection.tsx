import { Section, SectionHeader, ProductShot, Reveal } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function CurrentRoleSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const role = copy.currentRole;
  const eqx = copy.experience.find((item) => item.company === "EQx");

  return (
    <Section id="rol-actual" className="section-band">
      <Reveal>
        <SectionHeader title={role.homeTitle} text={role.homeText} />
      </Reveal>

      <Reveal delay={80} className="mt-14 grid gap-5 md:grid-cols-3">
        {role.fronts.map((front) => (
          <article key={front.label} className="rounded-[var(--radius-card-lg)] bg-white p-8 sm:p-9">
            <p className="text-[13px] font-semibold uppercase tracking-[0.02em] text-[var(--muted)]">
              {front.label}
            </p>
            <h3 className="mt-4 text-[1.625rem] font-semibold leading-[1.2] tracking-[-0.02em]">
              {front.title}
            </h3>
            <p className="mt-3.5 text-[17px] leading-[1.55] text-[var(--muted)]">{front.text}</p>
          </article>
        ))}
      </Reveal>

      {/* El índice suizo es lo menos conocido de los tres frentes y lo que más
          gana con verse: una web pública real detrás de la frase. */}
      {eqx?.image ? (
        <div className="mt-5 overflow-hidden rounded-[var(--radius-card-lg)] bg-white p-8 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.02em] text-[var(--muted)]">
                {eqx.client}
              </p>
              <h3 className="mt-3.5 text-[1.75rem] font-bold leading-[1.2] tracking-[-0.025em] sm:text-[2rem]">
                {eqx.headline}
              </h3>
              <p className="mt-3.5 text-[17px] leading-[1.55] text-[var(--muted)]">{eqx.summary}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
              <ProductShot src={eqx.image} alt={eqx.imageAlt ?? eqx.headline ?? ""} />
              <ProductShot
                src="/images/eqx-rankings.webp"
                alt={eqx.imageAlt ?? eqx.headline ?? ""}
                className="hidden sm:block"
              />
            </div>
              <ProductShot
                src="/images/eqx-rankings.webp"
                alt={eqx.imageAlt ?? eqx.headline ?? ""}
                className="hidden sm:block"
              />
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
