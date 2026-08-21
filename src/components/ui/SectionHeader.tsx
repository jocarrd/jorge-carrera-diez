import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  level?: HeadingLevel;
};

export function SectionHeader({ title, text, level = 2 }: SectionHeaderProps) {
  const Heading = headingTags[level];

  return (
    <div className="max-w-3xl">
      <Heading className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </Heading>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:leading-8">{text}</p> : null}
    </div>
  );
}
