import Image from "next/image";
import Link from "next/link";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { ButtonLink, Container, Section } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { blogPostPath, routePath } from "@/i18n/routes";
import { formatPostDate } from "@/lib/blog/format";
import { getPost, getPosts } from "@/lib/blog/posts";

export function BlogView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.blog;
  const posts = getPosts(locale);
  const [latest, ...rest] = posts;
  const toc = latest ? (getPost(locale, latest.slug)?.toc ?? []) : [];

  return (
    <main className="blog-page">
      <h1 className="sr-only">{copy.heading}</h1>
      {latest ? (
        <section className="blog-cover on-dark">
          <Image
            src={latest.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="blog-cover-image"
          />
          <Container className="blog-cover-inner">
            <p className="sh-label">
              {copy.heading}
              <span aria-hidden className="sh-line" />
            </p>
            <div className="blog-cover-grid">
              <div>
                <p className="blog-cover-issue">
                  {copy.latestLabel} ·{" "}
                  <time dateTime={latest.date}>
                    {formatPostDate(locale, latest.date)}
                  </time>{" "}
                  · {latest.minutes} {copy.minutesLabel}
                </p>
                <h2 className="blog-cover-title">
                  <Link href={blogPostPath(locale, latest.slug)}>
                    {latest.title}
                  </Link>
                </h2>
                <p className="blog-cover-lead">{latest.description}</p>
                <div className="blog-cover-actions">
                  <ButtonLink
                    href={blogPostPath(locale, latest.slug)}
                    className="boton-lima"
                  >
                    {copy.readLabel}
                  </ButtonLink>
                </div>
              </div>
              {toc.length > 1 ? (
                <nav className="blog-cover-toc" aria-label={copy.tocLabel}>
                  <p className="blog-cover-toc-title">{copy.tocLabel}</p>
                  <ol>
                    {toc.map((entry) => (
                      <li key={entry.id}>
                        <Link
                          href={`${blogPostPath(locale, latest.slug)}#${entry.id}`}
                        >
                          <span>{entry.text}</span>
                          <span aria-hidden>→</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      <Section>
        <div className="blog-intro">
          <p className="sh-text">{copy.lead}</p>
          <a
            className="blog-feed"
            href={`${routePath(locale, "blog")}/feed.xml`}
          >
            {copy.feedLabel}
          </a>
        </div>

        {rest.length > 0 ? (
          <section className="blog-list">
            <p className="sh-label">
              {copy.moreLabel}
              <span aria-hidden className="sh-line" />
            </p>
            <ServiceIndex
              linkLabel={copy.readLabel}
              items={rest.map((post) => ({
                title: post.title,
                text: `${formatPostDate(locale, post.date)} · ${post.minutes} ${copy.minutesLabel}. ${post.description}`,
                href: blogPostPath(locale, post.slug),
                image: { src: post.preview, w: 1600, h: 1076 },
              }))}
            />
          </section>
        ) : null}
      </Section>
    </main>
  );
}
