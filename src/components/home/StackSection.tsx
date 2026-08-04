import { Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function StackSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <Section id="stack" className="border-t border-white/10">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow={copy.stack.eyebrow}
          title={copy.stack.title}
          text={copy.stack.text}
        />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          {copy.skills.map((group) => (
            <div
              key={group.title}
              className="grid gap-4 border-b border-white/10 p-5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:items-start"
            >
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
