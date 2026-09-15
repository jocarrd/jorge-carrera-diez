import { Rail, Reveal, Section, SectionHeader } from "@/components/ui";
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

      {/* En escritorio caben las tres de un vistazo y la rejilla gana. Por
          debajo de md se apilaban y costaban tres pantallas de scroll: ahí el
          carril las pone en fila y se recorren con el dedo. */}
      <Reveal delay={80} className="mt-14 hidden gap-5 md:grid md:grid-cols-3">
        {role.fronts.map((front) => (
          <FrontCard key={front.label} front={front} />
        ))}
      </Reveal>

      <Reveal delay={80} className="mt-14 md:hidden">
        <Rail label={role.homeTitle}>
          {role.fronts.map((front) => (
            <div key={front.label} className="rail-item w-[85vw] max-w-[22rem]">
              <FrontCard front={front} className="h-full" />
            </div>
          ))}
        </Rail>
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
