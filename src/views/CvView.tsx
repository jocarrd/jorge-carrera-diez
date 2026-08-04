import { PrintButton } from "@/components/cv/PrintButton";
import { ProfileSummary } from "@/components/ProfileSummary";
import { Section, SectionHeader, Surface } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function CvView({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const copy = content.pages.cv;

  return (
    <main className="cv-document">
      <Section>
        <SectionHeader eyebrow={copy.eyebrow} title={site.name} />
        <ProfileSummary
          locale={locale}
          className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:leading-8"
        />
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
          <span>{content.meta.location}</span>
          <a className="text-cyan-300 hover:text-cyan-100" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="text-cyan-300 hover:text-cyan-100"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-cyan-300 hover:text-cyan-100"
            href={site.universityUrl}
            target="_blank"
            rel="noreferrer"
          >
            {content.meta.universityLabel}
          </a>
          <a
            className="text-cyan-300 hover:text-cyan-100"
            href={site.collegeUrl}
            target="_blank"
            rel="noreferrer"
          >
            {content.meta.collegeLabel}
          </a>
        </div>
        <div className="mt-8">
          <PrintButton label={copy.downloadCta} hint={copy.printHint} />
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <SectionHeader eyebrow={copy.experienceEyebrow} title={copy.experienceTitle} />
        <div className="mt-10 space-y-4">
          {content.experience.map((item) => (
            <Surface key={`${item.company}-${item.period}`}>
              <p className="text-sm text-cyan-300">{item.period}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                {item.headline ?? `${item.role} - ${item.company}`}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {item.client ? `${item.client} · ${item.company}` : item.context}
              </p>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:leading-8">{item.summary}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-400">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={copy.stackEyebrow} title={copy.stackTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {content.skills.map((group) => (
            <Surface key={group.title}>
              <h2 className="text-xl font-semibold text-white">{group.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{group.items.join(", ")}</p>
            </Surface>
          ))}
        </div>
      </Section>
    </main>
  );
}
