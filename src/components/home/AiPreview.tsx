import { ButtonLink, Reveal, Section, SectionHeader } from "@/components/ui";
import { CruxSession } from "@/components/home/CruxSession";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { blogPostPath } from "@/i18n/routes";

export function AiPreview({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const copy = content.ai;

  return (
    <Section id="ia">
      <Reveal>
        <SectionHeader
          label={content.sectionLabels.method}
          title={copy.title}
          accent={copy.titleAccent}
          text={copy.lead}
        />
      </Reveal>

      <div className="mt-10 sm:mt-14">
        <CruxSession
          steps={copy.session.steps}
          concepts={copy.flow}
          label={copy.session.label}
        />
      </div>

      <div className="mt-8">
        <ButtonLink href={blogPostPath(locale, "crux")}>
          {content.pages.blog.readLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
