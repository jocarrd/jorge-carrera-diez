import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type SectionHeaderProps = {
  title: string;
  text?: string;
  level?: HeadingLevel;
  align?: "center" | "left";
};

export function SectionHeader({
  title,
  text,
  level = 2,
  align = "left",
}: SectionHeaderProps) {
  const Heading = headingTags[level];
  const alignClassName =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-[46rem] ${alignClassName}`}>
      <Heading className="t-section">{title}</Heading>
      {text ? (
        <p
          className={`mt-4 text-[1.0625rem] leading-[1.5] text-[var(--muted)] sm:mt-5 sm:text-[1.3125rem] ${align === "center" ? "mx-auto" : ""}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
