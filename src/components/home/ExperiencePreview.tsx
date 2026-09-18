import {
  ButtonLink,
  Section,
  SectionHeader,
  Reveal,
  RevealChildren,
} from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function ExperiencePreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const preview = copy.experiencePreview;

  return (
    <Section id="experiencia" className="section-band">
      <Reveal>
        <SectionHeader
          indice="05"
          eyebrow={copy.pages.experience.eyebrow}
          title={copy.cvTimeline.label}
          text={copy.cvTimeline.note}
        />
      </Reveal>

      <RevealChildren
        as="ol"
        className="mt-12 hidden overflow-hidden rounded-[var(--radius-card-lg)] bg-[var(--line-strong)] sm:block"
      >
        {copy.experience.map((role, index) => (
          <li
            key={`${role.company}-${role.period}`}
            className={`tl-entry grid items-baseline gap-3 p-7 sm:gap-8 sm:p-9 lg:grid-cols-[14.5rem_1fr_13.5rem] ${
              index === copy.experience.length - 1
                ? ""
                : "border-b border-[var(--line)]"
            }`}
          >
            <p className="font-mono text-[14px] leading-[1.5] text-[var(--muted)]">
              {role.period}
            </p>
            <div>
              <h3 className="text-xl font-semibold leading-[1.25] tracking-[-0.015em]">
                {role.role}
              </h3>
              <p className="mt-1 text-base font-medium lg:hidden">
                {role.client ?? role.company}
                {role.client ? (
                  <span className="text-[var(--muted)]"> · {role.company}</span>
                ) : null}
              </p>
              <p className="mt-2 text-base leading-[1.6] text-[var(--muted)]">
                {role.summary}
              </p>
            </div>
            <p className="hidden text-base font-medium lg:block lg:text-right">
              {role.client ?? role.company}
              {role.client ? (
                <span className="block text-sm font-normal text-[var(--muted)]">
                  {role.company}
                </span>
              ) : null}
            </p>
          </li>
        ))}
      </RevealChildren>

      <ol className="mt-10 divide-y divide-[var(--line)] overflow-hidden rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-[var(--panel-strong)] sm:hidden">
        {copy.experience.map((role) => (
          <li key={`${role.company}-${role.period}`} className="px-5 py-4">
            <p className="font-mono text-[12px] tabular-nums text-[var(--muted)]">
              {role.period}
            </p>
            <h3 className="mt-1 text-[1.0625rem] font-semibold leading-[1.3] tracking-[-0.015em]">
              {role.role}
            </h3>
            <p className="mt-0.5 text-[15px] text-[var(--muted)]">
              {role.client ?? role.company}
              {role.client ? <span> · {role.company}</span> : null}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <ButtonLink href={routePath(locale, "experience")} variant="quiet">
          {preview.cta}
        </ButtonLink>
      </div>
    </Section>
  );
}
