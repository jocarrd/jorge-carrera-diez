import { BlogCard } from "@/components/blog/BlogCard";
import {
  ButtonLink,
  Container,
  RevealChildren,
  SectionHeader,
} from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { getPosts } from "@/lib/blog/posts";

export function BlogPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.blog;
  const posts = getPosts(locale).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          label={getCopy(locale).sectionLabels.blog}
          title={copy.heading}
          text={copy.lead}
        />

        <RevealChildren as="ul" className="blog-prev-grid mt-12">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard
                locale={locale}
                post={post}
                minutesLabel={copy.minutesLabel}
              />
            </li>
          ))}
        </RevealChildren>

        <div className="mt-10">
          <ButtonLink href={routePath(locale, "blog")} variant="secondary">
            {copy.moreLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
