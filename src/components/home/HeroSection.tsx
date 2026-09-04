import { ProfileSummary } from "@/components/ProfileSummary";
import { ProfileVisual } from "@/components/home/ProfileVisual";
import { ButtonLink, Container } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-12 sm:py-20 lg:py-24">
        <div className="orbital-ring right-[-18rem] top-20 h-[34rem] w-[34rem]" />
        <div className="orbital-ring right-[-10rem] top-36 h-[22rem] w-[22rem]" />

        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h1 className="rise rise-1 max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-7xl lg:text-[5.5rem]">
              {site.name}
            </h1>
            <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:mt-7 sm:text-xl sm:leading-8">
              {copy.profile.headline}
            </p>
            <div className="rise rise-3 mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
              <ButtonLink href={routePath(locale, "snowy")}>{copy.hero.ctaPrimary}</ButtonLink>
              <ButtonLink href={routePath(locale, "cv")} variant="secondary">
                {copy.hero.ctaSecondary}
              </ButtonLink>
            </div>
            <ProfileSummary
              locale={locale}
              className="prose-links rise rise-4 mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-10 sm:leading-7"
            />
          </div>

          <ProfileVisual locale={locale} />
        </div>
      </Container>
    </section>
  );
}
