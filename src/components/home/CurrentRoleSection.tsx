import { Reveal, Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function CurrentRoleSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const role = copy.currentRole;

  return (
    <Section id="rol-actual" className="section-band">
      <Reveal>
        <SectionHeader indice="01" eyebrow={role.eyebrow} title={role.homeTitle} text={role.homeText} />
      </Reveal>

      {/* En escritorio caben las tres de un vistazo y la rejilla gana. */}
      <Reveal delay={80} className="mt-14 hidden gap-5 md:grid md:grid-cols-3">
        {role.fronts.map((front) => (
          <FrontCard key={front.label} front={front} />
        ))}
      </Reveal>

      {/* En móvil iban en carril, y se veía una de tres. Desde que las tres
          son partes del mismo trabajo y no tres empleos, cada una es un título
          y una frase: apiladas en un solo bloque caben en media pantalla y se
          leen seguidas, que es como tienen sentido. */}
      <Reveal delay={80} className="mt-10 md:hidden">
        <ol className="divide-y divide-[var(--line)] overflow-hidden rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-[var(--panel-strong)]">
          {role.fronts.map((front) => (
            <li key={front.label} className="grid grid-cols-[2rem_1fr] gap-x-2 px-5 py-4">
              <span className="pt-1 font-mono text-[12px] text-[var(--muted-strong)]">{front.label}</span>
              <div>
                <h3 className="text-[1.0625rem] font-semibold leading-[1.3] tracking-[-0.015em]">
                  {front.title}
                </h3>
                <p className="mt-1 text-[15px] leading-[1.5] text-[var(--muted)]">{front.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

    </Section>
  );
}

function FrontCard({
  front,
  className = "",
}: {
  front: { label: string; title: string; text: string };
  className?: string;
}) {
  return (
    <article
      className={`rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-[var(--panel-strong)] p-8 sm:p-9 ${className}`}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--muted-strong)]">
        {front.label}
      </p>
      <h3 className="t-card mt-4">{front.title}</h3>
      <p className="mt-3.5 text-[17px] leading-[1.55] text-[var(--muted)]">{front.text}</p>
    </article>
  );
}
