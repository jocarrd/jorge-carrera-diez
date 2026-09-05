import { Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function SkillsPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <Section id="stack">
      <SectionHeader title={copy.pages.cv.stackTitle} text={copy.pages.cv.stackText} />
      {/* Cinco tarjetas apiladas con seis líneas cada una eran cinco pantallas
          de scroll para una lista de herramientas. En móvil el grupo cabe en
          una línea corrida; en escritorio, donde hay cinco columnas a la vez,
          la lista vertical se lee mejor. */}
      <div className="mt-10 grid gap-3.5 sm:mt-12 lg:grid-cols-5">
        {copy.skills.map((group) => (
          <div
            key={group.title}
            className="rounded-[var(--radius-card)] border border-[var(--line)] p-5 sm:p-7"
          >
            <h3 className="text-[17px] font-semibold">{group.title}</h3>
            <p className="mt-2 text-base leading-[1.6] text-[var(--muted)] lg:hidden">
              {group.items.join(" · ")}
            </p>
            <ul className="mt-3.5 hidden space-y-1 text-base leading-[1.7] text-[var(--muted)] lg:block">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
