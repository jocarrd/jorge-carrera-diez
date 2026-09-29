import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyLink } from "@/components/blog/CopyLink";
import { MobileToc } from "@/components/blog/MobileToc";
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
              <header className="post-header" id="post-header">
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
                  {post.xUrl ? (
                    <a
                      href={post.xUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="post-comment"
                    >
                      {copy.commentLabel}
                      <span aria-hidden> &rsaquo;</span>
                    </a>
                  ) : null}
                </div>
              </header>
              <figure className="post-cover">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  width={1500}
                  height={600}
                  priority
                  sizes="(min-width: 768px) 656px, 100vw"
                />
              </figure>

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

              <aside className="post-end on-dark">
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
                    {post.xUrl ? (
                      <ButtonLink
                        href={post.xUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {copy.commentLabel}
                      </ButtonLink>
                    ) : null}
                    <ButtonLink
                      href={site.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={post.xUrl ? "secondary" : "primary"}
                    >
                      {copy.endCta}
                    </ButtonLink>
                    <CopyLink
                      url={url}
                      label={copy.copyLinkLabel}
                      copiedLabel={copy.copiedLabel}
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </article>
      {post.toc.length > 1 ? (
        <MobileToc
          entries={post.toc}
          label={copy.tocLabel}
          closeLabel={copy.closeLabel}
          startId="post-header"
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
