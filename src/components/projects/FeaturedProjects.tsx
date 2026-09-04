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
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
        <div className="grid gap-6 p-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8 lg:p-8">
          <div className="flex flex-col">
            <Image
              src={snowy.logo ?? ""}
              alt="Snowy"
              width={150}
              height={48}
              className="h-10 w-auto object-contain object-left sm:h-12"
            />
            <Heading className="mt-5 text-2xl font-semibold tracking-tight text-white sm:mt-6 sm:text-3xl">
              {snowy.name}
            </Heading>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:leading-7">{snowy.description}</p>
            <p className="mt-4 text-sm leading-6 text-slate-400">{snowy.impact}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {snowy.stack.slice(0, 6).map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={routePath(locale, "snowy")}>{labels.snowyCta}</ButtonLink>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
            <Image
              src={snowy.image ?? "/images/snowy-home.png"}
              alt={labels.snowyImageAlt}
              width={1365}
              height={1049}
              className="h-64 w-full object-cover object-left-top sm:h-full sm:min-h-72"
            />
          </div>
        </div>
      </article>

      <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
        <div className="relative h-48 border-b border-white/10 bg-slate-950">
          <Image
            src={lariojaMeteo.image ?? "/images/lariojameteo-home.png"}
            alt={labels.lariojaImageAlt}
            width={1230}
            height={923}
            className="h-full w-full object-cover object-left-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
          <Image
            src={lariojaMeteo.logo ?? ""}
            alt="LaRiojaMeteo"
            width={120}
            height={120}
            className="absolute bottom-4 left-5 h-16 w-auto object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 lg:p-8">
          <Heading className="text-2xl font-semibold tracking-tight text-white">
            {lariojaMeteo.name}
          </Heading>
          <p className="mt-4 text-sm leading-6 text-slate-300">{lariojaMeteo.description}</p>
          <p className="mt-4 text-sm leading-6 text-slate-400">{lariojaMeteo.impact}</p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {lariojaMeteo.metrics?.slice(0, 4).map((metric) => (
              <div key={metric.label} className="bg-[#07111f] p-4">
                <p className="font-mono text-xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
          <Link
            href={routePath(locale, "lariojameteo")}
            className="mt-8 text-sm font-medium text-cyan-300 hover:text-cyan-100"
          >
            {labels.lariojaCta}
          </Link>
        </div>
      </article>
    </div>
  );
}
