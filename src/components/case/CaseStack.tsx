import { Section, TechTag } from "@/components/ui";

type CaseStackProps = {
  title: string;
  text?: string;
  groups: { label: string; items: string[] }[];
};

/* El stack en columnas etiquetadas y no en una nube de píldoras: una lista
   larga de tecnologías sin agrupar no dice en qué capa trabaja cada una. */
export function CaseStack({ title, text, groups }: CaseStackProps) {
  return (
    <Section className="border-t border-[var(--line)]">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-[1.75rem] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--foreground)] sm:text-[2.5rem]">
            {title}
          </h2>
          {text ? (
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:leading-7">{text}</p>
          ) : null}
        </div>
        <div className="grid gap-7 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechTag key={item}>{item}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
