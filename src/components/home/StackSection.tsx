import { Section, SectionHeader, Surface } from "@/components/ui";
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
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <Surface key={group.title}>
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Surface>
          ))}
        </div>
      </div>
    </Section>
  );
}
