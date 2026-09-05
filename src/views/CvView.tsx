import { CareerTimeline } from "@/components/cv/CareerTimeline";
import { PrintButton } from "@/components/cv/PrintButton";
import { ProfileSummary } from "@/components/ProfileSummary";
import { Section, SectionHeader, Surface } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function CvView({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const copy = content.pages.cv;

  const contactLinks = [
    { label: site.email, href: `mailto:${site.email}` },
    { label: site.domain, href: site.url },
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
    { label: content.meta.universityLabel, href: site.universityUrl },
    { label: content.meta.collegeLabel, href: site.collegeUrl },
  ];

  return (
    <main className="cv-document">
      <Section>
        <div className="cv-head">
          <SectionHeader eyebrow={copy.eyebrow} title={site.name} level={1} />
          <p className="cv-role mt-3 text-lg text-[var(--muted)]">{content.profile.positioning}</p>
          <ProfileSummary
            locale={locale}
            className="cv-summary prose-links mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:leading-7"
          />
          <div className="cv-contact mt-8 flex flex-wrap items-center gap-2 text-sm">
            <span className="cv-chip inline-flex min-h-11 items-center rounded-full lvl-2 border px-4 text-[var(--muted)]">
              {content.meta.location}
            </span>
            {contactLinks.map((link) => (
              <a
                key={link.href}
                className="cv-chip inline-flex min-h-11 items-center rounded-full lvl-2 border px-4 text-[var(--foreground)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--accent-text)]"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <PrintButton label={copy.downloadCta} hint={copy.printHint} />
          </div>
          {/* En papel una barra de tiempo no aporta: el PDF ya lista los puestos
              en orden. Vive solo en pantalla. */}
          <div className="cv-screen-only mt-10">
            <CareerTimeline locale={locale} />
          </div>
        </div>
      </Section>

      <Section className="cv-section section-band">
        <h2 className="cv-section-title text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {copy.experienceTitle}
        </h2>
        <div className="cv-entries mt-10 space-y-4">
          {content.experience.map((item) => (
            <Surface key={`${item.company}-${item.period}`} className="cv-entry">
              <p className="cv-period text-sm text-[var(--accent-text)]">{item.period}</p>
              <h3 className="cv-entry-title mt-2 text-2xl font-semibold text-[var(--foreground)]">
                {item.headline ?? `${item.role} - ${item.company}`}
              </h3>
              <p className="cv-entry-meta mt-1 text-sm text-[var(--muted)]">
                {item.client ? `${item.client} · ${item.company}` : item.context}
              </p>
              <p className="cv-entry-summary mt-5 text-base leading-relaxed text-[var(--muted)] sm:leading-7">
                {item.summary}
              </p>
              <ul className="cv-bullets mt-5 grid gap-2 text-sm leading-6 text-[var(--muted)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="cv-bullet-dot mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          ))}
        </div>
      </Section>

      <Section className="cv-section">
        <h2 className="cv-section-title text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {copy.stackTitle}
        </h2>
        <p className="cv-section-text mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:leading-7">
          {copy.stackText}
        </p>
        <div className="cv-skills mt-10 grid gap-4 sm:grid-cols-2">
          {content.skills.map((group) => (
            <Surface key={group.title} className="cv-skill">
              <h3 className="cv-skill-title text-xl font-semibold text-[var(--foreground)]">{group.title}</h3>
              <p className="cv-skill-items mt-4 text-sm leading-6 text-[var(--muted)]">
                {group.items.join(", ")}
              </p>
            </Surface>
          ))}
        </div>
      </Section>
    </main>
  );
}
