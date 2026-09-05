import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  level?: HeadingLevel;
  align?: "center" | "left";
};

// Centrada por defecto: una idea por sección, anunciada arriba y sin nada a los
// lados que compita. El eyebrow deja de ser una etiqueta con filete y pasa a ser
// simplemente la primera línea, más pequeña y en gris.
export function SectionHeader({
  eyebrow,
  title,
  text,
  level = 2,
  align = "center",
}: SectionHeaderProps) {
  const Heading = headingTags[level];
  const alignClassName =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-[46rem] ${alignClassName}`}>
      {eyebrow ? (
        <p className="mb-3 text-lg font-semibold text-[var(--muted)] sm:text-xl">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-[2rem] font-bold leading-[1.1] tracking-[-0.035em] text-[var(--foreground)] sm:text-[3.25rem]">
        {title}
      </Heading>
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
