import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { SideProjects } from "@/components/projects/SideProjects";
import { PageHero, Section } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function ProjectsView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.projects;

  return (
    <main>
      <PageHero
        label={getCopy(locale).sectionLabels.projects}
        title={copy.heading}
        lead={copy.text}
      />
      <Section>
        <div>
          <FeaturedProjects locale={locale} level={2} />
        </div>
        <div className="mt-24 sm:mt-32">
          <SideProjects locale={locale} />
        </div>
      </Section>
    </main>
  );
}
