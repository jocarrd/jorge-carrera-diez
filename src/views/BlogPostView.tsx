import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostToc } from "@/components/blog/PostToc";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ButtonLink, Container } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { blogPostPath, routePath } from "@/i18n/routes";
import { formatPostDate } from "@/lib/blog/format";
import { getPost } from "@/lib/blog/posts";

export function BlogPostView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const post = getPost(locale, slug);
  if (!post) notFound();
  const copy = getCopy(locale).pages.blog;
  const url = new URL(blogPostPath(locale, slug), site.url).toString();
  const shareHref = `https://x.com/intent/post?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}&via=jorgecarrera_es`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: new URL(post.cover, site.url).toString(),
    inLanguage: locale,
    mainEntityOfPage: url,
    author: { "@id": `${site.url}/#person`, name: site.name },
  };

  return (
    <main className="post-page">
      <ReadingProgress targetId="post-article" />
      <article id="post-article">
        <Container>
          <div className="post-column">
            {post.toc.length > 1 ? (
              <PostToc entries={post.toc} label={copy.tocLabel} />
            ) : null}

            <div className="post-main">
              <header className="post-header">
                <Link href={routePath(locale, "blog")} className="post-back">
                  <span aria-hidden>&lsaquo; </span>
                  {copy.backLabel}
                </Link>
                <p className="post-meta">
                  <time dateTime={post.date}>
                    {formatPostDate(locale, post.date)}
                  </time>
                  <span aria-hidden>·</span>
                  <span>
                    {post.minutes} {copy.minutesLabel}
                  </span>
                </p>
                <h1 className="post-title">{post.title}</h1>
                <p className="post-lead">{post.description}</p>
                <ul className="post-tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="post-author">
                  <Image
                    src={site.photo}
                    alt=""
                    width={44}
                    height={44}
                    className="post-author-photo"
                  />
                  <div>
                    <p className="post-author-name">{site.name}</p>
                    <p className="post-author-role">{copy.authorRole}</p>
                  </div>
                </div>
              </header>

              {post.toc.length > 1 ? (
                <details className="post-toc">
                  <summary>{copy.tocLabel}</summary>
                  <ol>
                    {post.toc.map((entry) => (
                      <li key={entry.id}>
                        <a href={`#${entry.id}`}>{entry.text}</a>
                      </li>
                    ))}
                  </ol>
                </details>
              ) : null}
              <div
                className="post-body"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              <aside className="post-end">
                <Image
                  src={site.photo}
                  alt=""
                  width={64}
                  height={64}
                  className="post-end-photo"
                />
                <div>
                  <h2 className="t-card">{copy.endTitle}</h2>
                  <p>{copy.endText}</p>
                  <div className="post-end-actions">
                    <ButtonLink
                      href={site.x}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.endCta}
                    </ButtonLink>
                    <ButtonLink
                      href={shareHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      {copy.shareLabel}
                    </ButtonLink>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
