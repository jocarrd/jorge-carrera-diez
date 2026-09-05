import { ButtonLink, Container, CopyEmail } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function ContactCta({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const cta = copy.contactCta;

  return (
    <section id="contacto" className="py-24 sm:py-28 lg:py-32">
      <Container className="text-center">
        <h2 className="mx-auto max-w-[18ch] text-[2.125rem] font-bold leading-[1.1] tracking-[-0.035em] sm:text-[3.625rem]">
          {cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.5] text-[var(--muted)] sm:text-[1.3125rem]">
          {cta.text}
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center sm:gap-3.5">
          <ButtonLink href={`mailto:${site.email}`}>{cta.cta}</ButtonLink>
          <ButtonLink href={routePath(locale, "cv")} variant="secondary">
            {copy.pages.cv.downloadCta}
          </ButtonLink>
        </div>
        <div className="mt-7 flex flex-col items-center gap-3.5">
          <CopyEmail email={site.email} label={copy.footer.contact} />
          <p className="max-w-[52ch] text-[15px] leading-[1.5] text-[var(--muted)]">
            {copy.profile.availabilityNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
