import { Section, SectionHeader, Reveal } from "@/components/ui";
import { AgentHub } from "@/components/visual/AgentHub";
import { TileGraphic } from "@/components/visual/TileGraphic";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

// El bloque de IA existía sólo en la página de experiencia. Es lo que separa
// este perfil del de otro tech lead, así que sigue en la portada.
//
// Eran cinco cajas iguales en fila, que además contaban el sistema como si
// fuese una cola de pasos. No lo es: el agente es el centro y lo demás es lo
// que toca —de dónde entra la petición, qué herramientas usa, qué datos ve y
// qué lo vigila—. La rejilla lo dice sin escribirlo, y el contraste de la
// pieza oscura marca dónde está la decisión.

export function AiPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).ai;

  const focal = copy.flow.find((step) => step.metric === "reason") ?? copy.flow[0];
  const around = copy.flow.filter((step) => step !== focal);

  return (
    <Section id="ia">
      <Reveal>
        <SectionHeader eyebrow="IA generativa" title={copy.title} text={copy.lead} />
      </Reveal>

      {/* Dos columnas ya en móvil: apiladas, las cinco piezas costaban casi dos
          pantallas y el bento dejaba de leerse como conjunto. */}
      <Reveal delay={80} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <article className="ai-focal col-span-2 flex flex-col justify-between rounded-[var(--radius-card-lg)] p-7 sm:row-span-2 sm:p-9">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--accent-dark)]">
              {focal.metric}
            </p>
            <AgentHub />
          </div>
          <div className="mt-10 sm:mt-0">
            <p className="text-[1.75rem] font-semibold tracking-[-0.025em] text-white sm:text-[2.25rem]">
              {focal.title}
            </p>
            <p className="mt-2 text-[15px] leading-[1.5] text-[var(--ink-dark-muted)] sm:text-[17px]">
              {focal.caption}
            </p>
          </div>
        </article>

        {around.map((step) => (
          <article
            key={step.title}
            className="ai-tile lvl-2 lvl-hover flex flex-col justify-between rounded-[var(--radius-card-lg)] p-5 sm:p-7"
          >
            <div>
              {/* --muted-strong se queda en 3,62:1 sobre blanco a 11 px, por
                  debajo del 4,5 que pide texto pequeño. --muted da 5,07. */}
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                {step.metric}
              </span>
              <TileGraphic kind={step.metric} />
            </div>
            <div className="mt-6 sm:mt-10">
              <p className="text-[1.1875rem] font-semibold tracking-[-0.015em]">{step.title}</p>
              <p className="mt-1.5 text-[15px] leading-[1.45] text-[var(--muted)]">{step.caption}</p>
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
