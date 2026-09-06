import { PrintButton } from "@/components/cv/PrintButton";
import { ProfileSummary } from "@/components/ProfileSummary";
import { CareerSpan } from "@/components/visual/CareerSpan";
import { Section, SectionHeader } from "@/components/ui";
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
          <SectionHeader eyebrow={copy.eyebrow} title={site.name} level={1} align="left" />
          <p className="cv-role mt-3 text-lg text-[var(--muted)]">{content.profile.positioning}</p>
          <ProfileSummary
            locale={locale}
            className="cv-summary prose-links mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:leading-7"
          />
          <div className="cv-contact mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="cv-chip text-[var(--muted)]">{content.meta.location}</span>
            {contactLinks.map((link) => (
              <a
                key={link.href}
                className="cv-chip inline-flex min-h-11 items-center text-[var(--foreground)] underline decoration-[var(--line-strong)] underline-offset-[6px] transition-colors hover:text-[var(--accent-text)] hover:decoration-[var(--accent)]"
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
        </div>
      </Section>

      <Section className="cv-section section-band">
        <h2 className="cv-section-title text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {copy.experienceTitle}
        </h2>

        {/* Aquí había dos gráficas de lo mismo, una en la cabecera y esta: la
            misma trayectoria contada dos veces seguidas, con dos formas
            distintas. Se queda la barra, que es la que enseña los dos tracks
            corriendo a la vez.

            Solo en pantalla: en el PDF la lista ya va en orden y una gráfica
            gastaría media página sin decir nada que no diga el texto. */}
        <div className="cv-screen-only mt-10">
          <CareerSpan
            items={content.experience}
            currentLabel={content.pages.experience.spanLegend}
          />
        </div>

        <div className="cv-entries cv-timeline mt-12">
          {content.experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="cv-entry">
              <p className="cv-period text-sm text-[var(--muted)]">{item.period}</p>
              <h3 className="cv-entry-title mt-2 text-[1.625rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--foreground)]">
                {item.headline ?? `${item.role} - ${item.company}`}
              </h3>
              <p className="cv-entry-meta mt-1 text-sm text-[var(--muted)]">
                {item.client ? `${item.client} · ${item.company}` : item.context}
              </p>
              <p className="cv-entry-summary mt-5 text-base leading-relaxed text-[var(--muted)] sm:leading-7">
                {item.summary}
              </p>
              <ul className="cv-bullets mt-5 grid gap-2.5 text-[15px] leading-[1.6] text-[var(--muted)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="cv-bullet-dot mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="cv-section">
        <div className="grid gap-14 sm:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="cv-section-title text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {copy.educationTitle}
            </h2>
            <div className="cv-entries mt-8">
              {content.education.map((item) => (
                <div key={item.title} className="cv-entry">
                  <h3 className="cv-entry-title text-xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="cv-entry-meta mt-1 text-sm text-[var(--muted)]">
                    {item.url ? (
                      <a
                        className="underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--accent-text)]"
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.org}
                      </a>
                    ) : (
                      item.org
                    )}
                  </p>
                  {item.note ? (
                    <p className="cv-entry-summary mt-3 text-sm leading-6 text-[var(--muted)]">
                      {item.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="cv-section-title text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {copy.languagesTitle}
            </h2>
            <dl className="cv-langs mt-8 space-y-3">
              {content.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="cv-lang flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-3"
                >
                  <dt className="text-base font-medium text-[var(--foreground)]">{lang.name}</dt>
                  <dd className="text-sm text-[var(--muted)]">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section className="cv-section">
        <h2 className="cv-section-title text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {copy.stackTitle}
        </h2>
        <p className="cv-section-text mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:leading-7">
          {copy.stackText}
        </p>
        <div className="cv-skills mt-12 grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {content.skills.map((group) => (
            <div key={group.title} className="cv-skill">
              <h3 className="cv-skill-title text-xl font-semibold text-[var(--foreground)]">{group.title}</h3>
              <p className="cv-skill-items mt-3 text-[15px] leading-[1.6] text-[var(--muted)]">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
