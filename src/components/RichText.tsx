import Link from "next/link";
import type { RichSegment } from "@/types/content";

type RichTextProps = {
  segments: RichSegment[];
  linkClassName?: string;
};

// Tres enlaces cian seguidos dentro de un párrafo lo convertían en un texto
// que se lee a saltos. El subrayado ya dice que es un enlace; el color se
// reserva para cuando el puntero está encima.
const defaultLinkClassName =
  "text-slate-300 underline decoration-cyan-300/40 decoration-1 underline-offset-4 transition-colors hover:text-cyan-200 hover:decoration-cyan-300";

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
