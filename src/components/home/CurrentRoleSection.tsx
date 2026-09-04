import { RichText } from "@/components/RichText";
import { Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function CurrentRoleSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).currentRole;

  return (
    <Section id="rol-actual" className="border-y border-white/10 bg-white/[0.02]">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
        <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
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
                linkClassName="text-cyan-300 underline-offset-4 hover:underline"
              />
            </p>
          ))}
          <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-3">
            {copy.signals.map((signal, index) => (
              <div key={signal.title}>
                <p className="font-mono text-xs text-cyan-300/80">0{index + 1}</p>
                <h3 className="mt-4 text-base font-semibold text-white">{signal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{signal.text}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
