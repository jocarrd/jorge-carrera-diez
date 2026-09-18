import {
  Section,
  SectionHeader,
  Reveal,
  RevealChildren,
} from "@/components/ui";
import { DeliveryCycle } from "@/components/home/DeliveryCycle";
import { AgentHub } from "@/components/visual/AgentHub";
import { TileGraphic } from "@/components/visual/TileGraphic";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function AiPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).ai;

  const focal =
    copy.flow.find((step) => step.metric === "base") ?? copy.flow[0];
  const around = copy.flow.filter((step) => step !== focal);

  return (
    <Section id="ia">
      <Reveal>
        <SectionHeader title={copy.title} text={copy.lead} />
      </Reveal>

      <RevealChildren
        delay={80}
        className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-4"
      >
        <article className="ai-focal flex flex-col sm:col-span-2 justify-between rounded-[var(--radius-card-lg)] p-7 sm:row-span-2 sm:p-9">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--accent-dark)]">
            {focal.metric}
          </p>
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
            className="ai-tile lvl-2 lvl-hover flex flex-row items-center gap-4 rounded-[var(--radius-card-lg)] p-4 sm:flex-col sm:items-stretch sm:justify-between sm:gap-0 sm:p-7"
          >
            <div className="w-[4.5rem] shrink-0 sm:w-auto">
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] sm:inline">
                {step.metric}
              </span>
              <TileGraphic kind={step.metric} />
            </div>
            <div className="sm:mt-10">
              <p className="text-[1.0625rem] font-semibold tracking-[-0.015em] sm:text-[1.1875rem]">
                {step.title}
              </p>
              <p className="mt-1 text-[15px] leading-[1.5] text-[var(--muted)] sm:mt-1.5 sm:text-base sm:leading-[1.6]">
                {step.caption}
              </p>
            </div>
          </article>
        ))}
      </RevealChildren>

      <Reveal delay={120}>
        <div className="mt-3 grid gap-6 rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-[var(--panel)] p-5 sm:mt-4 sm:gap-8 sm:p-9 lg:grid-cols-[1fr_22rem] lg:items-center lg:gap-14">
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
