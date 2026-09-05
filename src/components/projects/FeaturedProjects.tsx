import Image from "next/image";
import Link from "next/link";
import { ButtonLink, TechTag } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type FeaturedProjectsProps = {
  locale: Locale;
  level?: HeadingLevel;
};

export function FeaturedProjects({ locale, level = 3 }: FeaturedProjectsProps) {
  const Heading = headingTags[level];
  const copy = getCopy(locale);
  const labels = copy.featuredProjects;
  const snowy = copy.projects.find((project) => project.slug === "snowy");
  const lariojaMeteo = copy.projects.find((project) => project.slug === "lariojameteo");

  if (!snowy || !lariojaMeteo) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
      <article className="overflow-hidden rounded-2xl lvl-2 border transition-colors duration-300 hover:border-[var(--line-strong)]">
        <div className="grid gap-6 p-5 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8 lg:p-8">
          <div className="flex flex-col">
            <Image
              src={snowy.logo ?? ""}
              alt="Snowy"
              width={150}
              height={48}
              className="h-10 w-auto object-contain object-left sm:h-12"
            />
            <Heading className="mt-5 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-6 sm:text-3xl">
              {snowy.name}
            </Heading>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:leading-7">{snowy.description}</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{snowy.impact}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {snowy.stack.slice(0, 6).map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={routePath(locale, "snowy")}>{labels.snowyCta}</ButtonLink>
            </div>
          </div>

          <div className="shot-frame group/shot relative overflow-hidden rounded-xl border border-[var(--line)] bg-black">
            <Image
              src={snowy.image ?? "/images/snowy-home.webp"}
              alt={labels.snowyImageAlt}
              width={1365}
              height={1049}
              className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover/shot:scale-100 sm:h-full sm:min-h-72"
            />
          </div>
        </div>
      </article>

      <article className="overflow-hidden rounded-2xl lvl-2 border transition-colors duration-300 hover:border-[var(--line-strong)]">
        <div className="shot-frame relative h-52 border-b border-[var(--line)] bg-[var(--panel)] sm:h-56">
          <Image
            src={lariojaMeteo.image ?? "/images/lariojameteo-home.webp"}
            alt={labels.lariojaImageAlt}
            width={1230}
            height={923}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-[var(--panel)] to-transparent" />
          <Image
            src={lariojaMeteo.logo ?? ""}
            alt="LaRiojaMeteo"
            width={120}
            height={120}
            className="absolute bottom-4 left-5 h-16 w-auto object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 lg:p-8">
          <Heading className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {lariojaMeteo.name}
          </Heading>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{lariojaMeteo.description}</p>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{lariojaMeteo.impact}</p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-white/10">
            {lariojaMeteo.metrics?.slice(0, 4).map((metric) => (
              <div key={metric.label} className="bg-[var(--panel)] p-4">
                <p className="font-mono text-xl font-semibold text-[var(--foreground)]">{metric.value}</p>
                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{metric.label}</p>
              </div>
            ))}
          </div>
          <Link
            href={routePath(locale, "lariojameteo")}
            className="mt-8 text-sm font-medium text-[var(--accent-text)] hover:text-[var(--accent-text)]"
          >
            {labels.lariojaCta}
          </Link>
        </div>
      </article>
    </div>
  );
}
