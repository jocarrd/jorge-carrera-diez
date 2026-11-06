import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type SectionHeaderProps = {
  title: string;
  text?: string;
  label?: string;
  accent?: string;
  accentHref?: string;
  level?: HeadingLevel;
  align?: "center" | "left";
};

export function SectionHeader({
  title,
  text,
  accent,
  accentHref,
  level = 2,
  align = "left",
}: SectionHeaderProps) {
  const Heading = headingTags[level];
  const centered = align === "center";

  return (
    <div className={centered ? "sh sh--center" : "sh"}>
      <div className={text && !centered ? "sh-split" : undefined}>
        <Heading className="t-section">
          {accent && title.includes(accent) ? (
            <>
              {title.slice(0, title.lastIndexOf(accent))}
              {accentHref ? (
                <a
                  href={accentHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sh-accent sh-accent-link"
                >
                  {accent}
                </a>
              ) : (
                <span className="sh-accent">{accent}</span>
              )}
              {title.slice(title.lastIndexOf(accent) + accent.length)}
            </>
          ) : (
            title
          )}
        </Heading>
        {text ? <p className="sh-text">{text}</p> : null}
      </div>
    </div>
  );
}
