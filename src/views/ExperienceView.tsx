import Image from "next/image";
import { CompanyMark } from "@/components/experience/CompanyMark";
import { AiPreview } from "@/components/home/AiPreview";
import { ContactCta } from "@/components/home/ContactCta";
import {
  BrowserFrame,
  LightOnScroll,
  PageHero,
  Section,
} from "@/components/ui";
import { CareerSpan } from "@/components/visual/CareerSpan";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function ExperienceView({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const copy = content.pages.experience;

  return (
    <main>
      <PageHero
        label={content.sectionLabels.experience}
        title={copy.heading}
        lead={copy.text}
      />
      <Section>
        <div>
          <CareerSpan
            items={content.experience}
            currentLabel={copy.spanLegend}
          />
        </div>

        <LightOnScroll className="xp-list">
          {content.experience.map((item) => (
            <li key={`${item.company}-${item.role}`} className="xp-item">
              <p aria-hidden className="xp-year">
                {item.start.slice(0, 4)}
              </p>
              <article className="xp-body">
                <div className="xp-meta">
                  <CompanyMark logo={item.logo} />
                  <p className="xp-period">{item.period}</p>
                  <p className="xp-context">{item.context}</p>
                </div>
                <h2 className="xp-title">
                  {item.headline ?? `${item.role} - ${item.company}`}
                </h2>
                {item.client ? (
                  <p className="xp-client">
                    {item.client} · {item.company}
                  </p>
                ) : null}
                <p className="xp-summary">{item.summary}</p>
                {item.image ? (
                  <div className="mt-6">
                    <BrowserFrame>
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? ""}
                        width={1600}
                        height={1000}
                        className="h-auto w-full"
                        sizes="(min-width: 1024px) 640px, 100vw"
                      />
                    </BrowserFrame>
                  </div>
                ) : null}
                <ul className="xp-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </LightOnScroll>
      </Section>

      <AiPreview locale={locale} />
      <ContactCta locale={locale} />
    </main>
  );
}
