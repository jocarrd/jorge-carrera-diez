import Link from "next/link";
import type { RichSegment } from "@/types/content";

type RichTextProps = {
  segments: RichSegment[];
  linkClassName?: string;
};

// Sobre gris, el azul solo no llega a 3:1 contra el texto que lo rodea, así que
// el enlace se marcaría únicamente por color: el subrayado permanente es el que
// lo hace distinguible, y el color queda como refuerzo.
const defaultLinkClassName =
  "text-[var(--accent-text)] underline decoration-[var(--accent-text)]/35 decoration-1 underline-offset-4 transition-colors hover:decoration-[var(--accent-text)]";

export function RichText({ segments, linkClassName }: RichTextProps) {
  return (
    <>
      {segments.map((segment, index) => {
        if (!segment.href) {
          return <span key={index}>{segment.text}</span>;
        }

        const className = linkClassName ?? defaultLinkClassName;

        if (segment.external) {
          return (
            <a
              key={index}
              href={segment.href}
              target="_blank"
              rel="noreferrer"
              className={className}
            >
              {segment.text}
            </a>
          );
        }

        return (
          <Link key={index} href={segment.href} className={className}>
            {segment.text}
          </Link>
        );
      })}
    </>
  );
}
