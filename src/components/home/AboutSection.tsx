import Image from "next/image";
import { ProfileSummary } from "@/components/ProfileSummary";
import { ButtonLink, Reveal, Section } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function AboutSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <Section id="sobre-mi">
      <Reveal className="about-ed">
        <div className="about-photo">
          <Image
            src="/images/jorge-recorte.webp"
            alt={copy.meta.ogAlt}
            width={1032}
            height={1248}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 80vw, 420px"
          />
          <p className="about-photo-name">{site.name}</p>
        </div>
        <div>
          <p className="sh-label">
            {copy.sectionLabels.about}
            <span aria-hidden className="sh-line" />
          </p>
          <h2 className="about-statement">
            {copy.profile.aboutStatement.map((part) =>
              part.strong ? (
                <strong key={part.text}>{part.text}</strong>
              ) : (
                <span key={part.text}>{part.text}</span>
              ),
            )}
          </h2>
          <ProfileSummary
            locale={locale}
            className="prose-links about-summary"
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={routePath(locale, "cv")}>
              {copy.hero.paths.team.label}
            </ButtonLink>
            <ButtonLink
              href={site.linkedin}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
