import type { CSSProperties } from "react";
import { PlayOnView } from "@/components/ui";
import type { TitledText } from "@/types/content";

export function AuditChecklist({ items }: { items: TitledText[] }) {
  return (
    <PlayOnView
      as="ol"
      className="audit-list mt-10 grid gap-x-12 sm:mt-14 sm:grid-cols-2"
    >
      {items.map((item, index) => (
        <li
          key={item.title}
          className="audit-item"
          style={{ "--i": index } as CSSProperties}
        >
          <span aria-hidden className="audit-check">
            <svg viewBox="0 0 16 16">
              <path
                d="m3.5 8.5 3 3 6-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
              />
            </svg>
          </span>
          <span>
            <span className="area-title block">{item.title}</span>
            <span className="area-text block">{item.text}</span>
          </span>
        </li>
      ))}
    </PlayOnView>
  );
}
