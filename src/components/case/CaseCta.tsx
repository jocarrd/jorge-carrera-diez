import { TerminalCta } from "@/components/home/TerminalCta";
import { ButtonLink, Container } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function CaseCta({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const copy = content.caseCta;

  return (
    <section className="cta-ed on-dark">
      <Container>
        <div className="cta-ed-grid">
          <div>
            <h2 className="case-cta-title">{copy.title}</h2>
            <p className="mt-5 max-w-[48ch] text-[1.0625rem] leading-[1.55] text-[var(--muted)] sm:text-[1.25rem]">
              {copy.text}
            </p>
            <div className="mt-8">
              <ButtonLink
                href={routePath(locale, "projects")}
                variant="secondary"
                tone="dark"
              >
                {copy.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
          <TerminalCta
            email={site.email}
            command={content.contactCta.terminalCommand}
            hint={content.contactCta.terminalHint}
          />
        </div>
      </Container>
    </section>
  );
}
