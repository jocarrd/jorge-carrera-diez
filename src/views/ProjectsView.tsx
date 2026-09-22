import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { SideProjects } from "@/components/projects/SideProjects";
import { Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function ProjectsView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.projects;

  return (
    <main>
      <Section>
        <SectionHeader title={copy.heading} text={copy.text} level={1} />
        <div className="mt-12">
          <FeaturedProjects locale={locale} level={2} />
        </div>
        <div className="mt-24 sm:mt-32">
          <SideProjects locale={locale} />
        </div>
      </Section>
    </main>
  );
}
