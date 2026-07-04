import { Section, SectionHeader } from "@/components/ui";
import { skillGroups } from "@/content/skills";

export function StackSection() {
  return (
    <Section id="stack" className="border-t border-white/10">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Stack"
          title="Tecnologia al servicio del producto."
          text="Elijo herramientas por rendimiento, mantenibilidad, SEO, costes y experiencia de usuario."
        />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          {skillGroups.map((group) => (
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
