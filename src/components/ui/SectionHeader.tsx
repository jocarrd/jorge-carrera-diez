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
        <p className="t-eyebrow">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="t-section">
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
