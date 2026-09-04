import Image from "next/image";
import { ButtonLink, MetricCard } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function SnowyShowcase({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const showcase = copy.snowyShowcase;

  return (
    <section
      id="snowy-showcase"
      className="relative overflow-hidden border-y border-white/10 bg-[#030712] py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.14),transparent_34rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {showcase.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:mt-6 sm:leading-7">
              {showcase.lead}
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-400">{showcase.detail}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routePath(locale, "snowy")}>{showcase.ctaPrimary}</ButtonLink>
              <ButtonLink href={site.snowy} variant="secondary">
                {showcase.ctaSecondary}
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <Image
                src="/images/snowy-home.png"
                alt={showcase.imageAlt}
                width={1365}
                height={1049}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {copy.pages.snowy.tractionMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
