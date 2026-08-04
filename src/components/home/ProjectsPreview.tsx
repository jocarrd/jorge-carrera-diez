import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function ProjectsPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).projectsPreview;

  return (
    <Section id="proyectos">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
      <div className="mt-10">
        <FeaturedProjects locale={locale} />
      </div>
    </Section>
  );
}
