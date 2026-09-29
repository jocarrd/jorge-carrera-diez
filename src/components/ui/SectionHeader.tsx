import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type SectionHeaderProps = {
  title: string;
  text?: string;
  label?: string;
  accent?: string;
  level?: HeadingLevel;
  align?: "center" | "left";
};

export function SectionHeader({
  title,
  text,
  label,
  accent,
  level = 2,
  align = "left",
}: SectionHeaderProps) {
  const Heading = headingTags[level];
  const centered = align === "center";

  return (
    <div className={centered ? "sh sh--center" : "sh"}>
      {label ? (
        <p className="sh-label">
          {label}
          <span aria-hidden className="sh-line" />
        </p>
      ) : null}
      <div className={text && !centered ? "sh-split" : undefined}>
        <Heading className="t-section">
          {accent && title.includes(accent) ? (
            <>
              {title.slice(0, title.lastIndexOf(accent))}
              <span className="sh-accent">{accent}</span>
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
