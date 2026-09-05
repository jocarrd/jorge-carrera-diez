import { Section, SectionHeader, Reveal } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

// El bloque de IA existía sólo en la página de experiencia. Es lo que separa
// este perfil del de otro tech lead, así que sube a la portada: el flujo
// completo primero, y debajo el criterio con el que se decide cada pieza.
export function AiPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).ai;

  return (
    <Section id="ia">
      <Reveal>
        <SectionHeader eyebrow="IA generativa" title={copy.title} text={copy.lead} />
      </Reveal>

      <Reveal delay={80} className="mt-14 rounded-[var(--radius-card-lg)] bg-[var(--panel)] p-6 sm:p-10">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {copy.flow.map((step) => (
            <li key={step.title} className="rounded-[var(--radius-card)] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--accent)]">
                {step.metric}
              </p>
              <p className="mt-3 text-[1.1875rem] font-semibold tracking-[-0.015em]">
                {step.title}
              </p>
              <p className="mt-1.5 text-[15px] leading-[1.45] text-[var(--muted)]">
                {step.caption}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={140} className="mt-5 grid gap-5 md:grid-cols-3">
        {copy.principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-[var(--radius-card-lg)] bg-[var(--panel)] p-8"
          >
            <h3 className="text-[1.375rem] font-semibold leading-[1.25] tracking-[-0.02em]">
              {principle.title}
            </h3>
            <p className="mt-3 text-[17px] leading-[1.55] text-[var(--muted)]">
              {principle.text}
            </p>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
