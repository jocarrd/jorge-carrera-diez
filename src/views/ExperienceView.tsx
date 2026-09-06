import Image from "next/image";
import { CompanyMark } from "@/components/experience/CompanyMark";
import { GenerativeAiSection } from "@/components/experience/GenerativeAiSection";
import { BrowserFrame, Section, SectionHeader } from "@/components/ui";
import { CareerSpan } from "@/components/visual/CareerSpan";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function ExperienceView({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const copy = content.pages.experience;

  return (
    <main>
      <Section>
        <SectionHeader eyebrow={copy.eyebrow} title={copy.heading} text={copy.text} level={1} />

        {/* La lista de puestos, por completa que sea, esconde que hay dos
            frentes a la vez. En barras se ve en un vistazo. */}
        <div className="mt-10 sm:mt-12">
          <CareerSpan items={content.experience} currentLabel={copy.spanLegend} />
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="relative">
            {/* La columna del carril medía 12rem y solo llevaba un punto: el
                contenido empezaba a un tercio del ancho y quedaba un hueco
                muerto a la izquierda. Ahora el carril ocupa lo que ocupa. */}
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-cyan-300/70 via-[var(--line)] to-transparent md:left-[7px]" />
            {content.experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="tl-entry relative grid gap-5 border-b border-[var(--line)] py-7 pl-7 last:border-b-0 md:gap-6 md:py-8"
              >
                <div
                  aria-hidden
                  className="tl-dot absolute left-0 top-8 flex h-4 w-4 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--panel)] md:top-10 md:h-4 md:w-4"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] md:h-2 md:w-2" />
                </div>

                <div>
                  <div className="grid gap-6 lg:grid-cols-[13rem_1fr]">
                    <div>
                      <CompanyMark logo={item.logo} />
                      <p className="mt-4 font-mono text-xs leading-5 text-[var(--accent-text)] sm:mt-5 sm:text-sm">{item.period}</p>
                      <p className="mt-2 text-sm text-[var(--muted)]">{item.context}</p>
                    </div>

                    <div>
                      <h2 className="t-card">
                        {item.headline ?? `${item.role} - ${item.company}`}
                      </h2>
                      {item.client ? (
                        <p className="mt-2 text-[15px] font-medium text-[var(--muted)]">
                          {item.client} · {item.company}
                        </p>
                      ) : null}
                      <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:leading-7">{item.summary}</p>
                      {item.image ? (
                        <div className="mt-5">
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
                      <ul className="mt-5 grid gap-2.5 text-base leading-[1.6] text-[var(--muted)]">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <GenerativeAiSection locale={locale} />
    </main>
  );
}
