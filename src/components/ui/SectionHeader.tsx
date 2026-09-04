import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  level?: HeadingLevel;
};

export function SectionHeader({ eyebrow, title, text, level = 2 }: SectionHeaderProps) {
  const Heading = headingTags[level];

  return (
    <div className="max-w-3xl">
      {/* El eyebrow llegaba desde las vistas y se descartaba: la firma
          monoespaciada del sitio no aparecía en ninguna cabecera de sección. */}
      {eyebrow ? (
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80">
          <span aria-hidden className="h-px w-6 bg-cyan-300/50" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
        {title}
      </Heading>
      {text ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
          {text}
        </p>
      ) : null}
    </div>
  );
}
