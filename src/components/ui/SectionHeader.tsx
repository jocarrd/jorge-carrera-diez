import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type SectionHeaderProps = {
  indice?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  level?: HeadingLevel;
  align?: "center" | "left";
};

export function SectionHeader({
  indice,
  eyebrow,
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
      {indice || eyebrow ? (
        <p className="t-eyebrow">
          {indice ? (
            <>
              <span className="t-indice">{indice}</span>
              <span aria-hidden className="t-eyebrow-sep">
                —
              </span>
            </>
          ) : null}
          {eyebrow}
        </p>
      ) : null}
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
