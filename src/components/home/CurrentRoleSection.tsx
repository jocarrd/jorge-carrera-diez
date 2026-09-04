import { RichText } from "@/components/RichText";
import { Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function CurrentRoleSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).currentRole;

  return (
    <Section id="rol-actual" className="border-y border-white/10 lvl-1">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
        <article className="rounded-2xl lvl-2 border p-6 sm:p-8">
          {copy.paragraphs.map((segments, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "prose-links text-base leading-relaxed text-slate-300 sm:leading-7"
                  : "mt-4 text-sm leading-6 text-slate-400 sm:mt-5"
              }
            >
              <RichText
                segments={segments}
              />
            </p>
          ))}
          <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-3">
            {copy.signals.map((signal) => (
              <div key={signal.title}>
                <span aria-hidden className="block h-px w-8 bg-cyan-300/60" />
                <h3 className="mt-5 text-base font-semibold text-white">{signal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{signal.text}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
