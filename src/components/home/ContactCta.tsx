import { ButtonLink, Container, CopyEmail, Reveal } from "@/components/ui";
import { TerminalCta } from "@/components/home/TerminalCta";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function ContactCta({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const cta = copy.contactCta;
  const cut = cta.title.indexOf(", ");
  const [lead, rest] =
    cut > 0
      ? [cta.title.slice(0, cut + 1), cta.title.slice(cut + 2)]
      : ["", cta.title];
  const links = [
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
    { label: "X", href: site.x },
  ];

  return (
    <section id="contacto" className="cta-ed on-dark">
      <Container>
        <Reveal>
          <p className="sh-label">
            {copy.sectionLabels.contact}
            <span aria-hidden className="sh-line" />
          </p>
          <div className="cta-ed-grid">
            <div>
              <h2 className="cta-ed-title">
                {lead ? (
                  <span
                    className="cta-ed-fill"
                    style={{
                      backgroundImage: "url(/images/textura-lima.webp)",
                    }}
                  >
                    {lead}{" "}
                  </span>
                ) : null}
                {rest}
              </h2>
              <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.5] text-[var(--muted)] sm:text-[1.25rem]">
                {cta.text}
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3.5">
                <ButtonLink
                  href={routePath(locale, "cv")}
                  variant="secondary"
                  tone="dark"
                >
                  {copy.pages.cv.downloadCta}
                </ButtonLink>
                <CopyEmail email={site.email} label={copy.footer.contact} />
              </div>
            </div>
            <TerminalCta
              email={site.email}
              command={cta.terminalCommand}
              hint={cta.terminalHint}
            />
          </div>
          <ul className="cta-ed-links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
