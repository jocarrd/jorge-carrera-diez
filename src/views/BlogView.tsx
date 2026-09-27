import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Reveal, Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { blogPostPath, routePath } from "@/i18n/routes";
import { formatPostDate } from "@/lib/blog/format";
import { getPosts, type PostSummary } from "@/lib/blog/posts";

function PostMeta({
  locale,
  post,
  minutesLabel,
}: {
  locale: Locale;
  post: PostSummary;
  minutesLabel: string;
}) {
  return (
    <p className="post-meta">
      <time dateTime={post.date}>{formatPostDate(locale, post.date)}</time>
      <span aria-hidden>·</span>
      <span>
        {post.minutes} {minutesLabel}
      </span>
    </p>
  );
}

export function BlogView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.blog;
  const posts = getPosts(locale);
  const [latest] = posts;

  return (
    <main className="blog-page">
      <Section>
        <SectionHeader title={copy.heading} text={copy.lead} level={1} />
        <a className="blog-feed" href={`${routePath(locale, "blog")}/feed.xml`}>
          {copy.feedLabel}
        </a>

        {latest ? (
          <Reveal>
            <article className="proj-feature blog-feature mt-12">
              <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
                <div>
                  <p className="proj-card-kicker">{copy.latestLabel}</p>
                  <h2 className="t-block mt-3 max-w-[22ch]">
                    <Link href={blogPostPath(locale, latest.slug)}>
                      {latest.title}
                    </Link>
                  </h2>
                  <p className="proj-feature-text mt-4 max-w-[46ch] text-[17px] leading-[1.5]">
                    {latest.description}
                  </p>
                  <PostMeta
                    locale={locale}
                    post={latest}
                    minutesLabel={copy.minutesLabel}
                  />
                  <div className="mt-8">
                    <ButtonLink
                      href={blogPostPath(locale, latest.slug)}
                      tone="dark"
                    >
                      {copy.readLabel}
                    </ButtonLink>
                  </div>
                </div>
                <div className="proj-feature-shot">
                  <Image
                    src={latest.preview}
                    alt={latest.previewAlt}
                    width={1600}
                    height={1076}
                    className="blog-feature-image"
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        {posts.length > 1 ? (
          <section className="blog-list">
            <div className="blog-list-head">
              <h2 className="t-block">{copy.moreLabel}</h2>
            </div>
            <ol>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={blogPostPath(locale, post.slug)}
                    className="blog-row"
                  >
                    <time className="blog-row-date" dateTime={post.date}>
                      {formatPostDate(locale, post.date)}
                    </time>
                    <div>
                      <h3 className="t-card">{post.title}</h3>
                      <p className="blog-row-text">{post.description}</p>
                      <p className="blog-row-minutes">
                        {post.minutes} {copy.minutesLabel}
                      </p>
                    </div>
                    <span className="blog-row-arrow" aria-hidden>
                      &rsaquo;
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ) : null}
      </Section>
    </main>
  );
}
