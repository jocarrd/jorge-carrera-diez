import type { CSSProperties } from "react";
import { PlayOnView } from "@/components/ui";

type SearchMockupProps = {
  query: string;
  domain: string;
  path: string;
  title: string;
  snippet: string;
  badge: string;
};

export function SearchMockup({
  query,
  domain,
  path,
  title,
  snippet,
  badge,
}: SearchMockupProps) {
  return (
    <PlayOnView
      className="serp"
      style={{ "--chars": query.length } as CSSProperties}
    >
      <div className="serp-bar">
        <svg viewBox="0 0 20 20" aria-hidden className="serp-icon">
          <circle
            cx="8.5"
            cy="8.5"
            r="5.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m13 13 4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <span className="serp-query">
          <span className="serp-typed">{query}</span>
        </span>
      </div>

      <div className="serp-hit">
        <p className="serp-domain">
          <span className="serp-favicon" aria-hidden>
            S
          </span>
          <span>
            <span className="serp-site">{domain}</span>
            <span className="serp-path">{path}</span>
          </span>
        </p>
        <p className="serp-title">{title}</p>
        <p className="serp-snippet">{snippet}</p>
        <p className="serp-badge">{badge}</p>
      </div>

      <div aria-hidden className="serp-ghost">
        <span />
        <span />
        <span />
      </div>
      <div aria-hidden className="serp-ghost">
        <span />
        <span />
        <span />
      </div>
    </PlayOnView>
  );
}
