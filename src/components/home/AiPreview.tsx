import { Section, SectionHeader, Reveal } from "@/components/ui";
import { DeliveryCycle } from "@/components/home/DeliveryCycle";
import { AgentHub } from "@/components/visual/AgentHub";
import { TileGraphic } from "@/components/visual/TileGraphic";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

// El bloque de IA existía sólo en la página de experiencia. Es lo que separa
// este perfil del de otro tech lead, así que sigue en la portada.
//
// Eran cinco cajas iguales en fila. La rejilla dice sin escribirlo lo que la
// sección cuenta: el estándar es el centro y las otras cuatro piezas cuelgan de
// él. El contraste de la pieza oscura marca dónde está lo que sostiene el resto.

export function AiPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).ai;

  const focal =
    copy.flow.find((step) => step.metric === "base") ?? copy.flow[0];
  const around = copy.flow.filter((step) => step !== focal);

  return (
    <Section id="ia">
      <Reveal>
        <SectionHeader
          eyebrow="Trabajo con agentes"
          title={copy.title}
          text={copy.lead}
        />
      </Reveal>

      {/* Dos columnas ya en móvil: apiladas, las cinco piezas costaban casi dos
          pantallas y el bento dejaba de leerse como conjunto. */}
      <Reveal
        delay={80}
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        <article className="ai-focal col-span-2 flex flex-col justify-between rounded-[var(--radius-card-lg)] p-7 sm:row-span-2 sm:p-9">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--accent-dark)]">
            {focal.metric}
          </p>
          {/* El diagrama vivia pegado al rotulo y dejaba 250 px de negro entre
              medias. Aqui ocupa el hueco que hay entre el rotulo y el texto,
              que es lo que hace que la pieza se lea como una sola cosa. */}
          <div className="flex flex-1 items-center justify-center">
            <AgentHub />
          </div>
          <div className="mt-10 sm:mt-0">
            <p className="t-block text-white">{focal.title}</p>
            <p className="mt-2 text-base leading-[1.6] text-[var(--ink-dark-muted)] sm:text-[17px]">
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
              <p className="text-[1.1875rem] font-semibold tracking-[-0.015em]">
                {step.title}
              </p>
              <p className="mt-1.5 text-base leading-[1.6] text-[var(--muted)]">
                {step.caption}
              </p>
            </div>
          </article>
        ))}
      </Reveal>

      {/* El bento dice de qué está hecho el sistema; esto dice qué pasa cuando
          se usa. Iba en el hero, donde competía con el titular y con las
          capturas de producto: aquí llega cuando ya se ha explicado. */}
      <Reveal delay={120}>
        <div className="mt-4 grid gap-8 rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-[var(--panel)] p-7 sm:p-9 lg:grid-cols-[1fr_22rem] lg:items-center lg:gap-14">
          <div>
            <h3 className="t-card">{copy.detailTitle}</h3>
            <p className="mt-3 max-w-[54ch] text-[1.0625rem] leading-[1.6] text-[var(--muted)]">
              {copy.detail}
            </p>
          </div>
          <DeliveryCycle locale={locale} />
        </div>
      </Reveal>
    </Section>
  );
}
