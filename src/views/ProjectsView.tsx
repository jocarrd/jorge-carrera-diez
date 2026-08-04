import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function ProjectsView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.projects;

  return (
    <main>
      <Section>
        <SectionHeader eyebrow={copy.eyebrow} title={copy.heading} text={copy.text} />
        <div className="mt-12">
          <FeaturedProjects locale={locale} />
        </div>
      </Section>
    </main>
  );
}
