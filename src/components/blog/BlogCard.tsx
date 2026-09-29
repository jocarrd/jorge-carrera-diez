import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { blogPostPath } from "@/i18n/routes";
import { formatPostDate } from "@/lib/blog/format";
import type { PostSummary } from "@/lib/blog/posts";

export function BlogCard({
  locale,
  post,
  minutesLabel,
}: {
  locale: Locale;
  post: PostSummary;
  minutesLabel: string;
}) {
  return (
    <Link href={blogPostPath(locale, post.slug)} className="blog-prev-card">
      <div className="blog-prev-shot">
        <Image
          src={post.preview}
          alt={post.previewAlt}
          width={1600}
          height={1076}
          sizes="(min-width: 768px) 360px, 100vw"
        />
      </div>
      <p className="blog-prev-meta">
        {formatPostDate(locale, post.date)} · {post.minutes} {minutesLabel}
      </p>
      <div className="blog-prev-row">
        <h3>{post.title}</h3>
        <span aria-hidden className="boton-circulo">
          <svg viewBox="0 0 16 10">
            <path
              d="M10.5 1 15 5l-4.5 4M15 5H1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="square"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
