import Link from "next/link";
import type { RichSegment } from "@/types/content";

type RichTextProps = {
  segments: RichSegment[];
  linkClassName?: string;
};

const defaultLinkClassName =
  "text-cyan-300 underline-offset-4 hover:text-cyan-100 hover:underline";

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
