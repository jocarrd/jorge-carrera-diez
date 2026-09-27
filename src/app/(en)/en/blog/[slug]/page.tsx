import type { Metadata } from "next";
import { blogPostPath } from "@/i18n/routes";
import { getPost, getPostSlugs } from "@/lib/blog/posts";
import { createPageMetadata } from "@/lib/seo";
import { BlogPostView } from "@/views/BlogPostView";

const locale = "en" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs(locale).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(locale, slug);
  if (!post) return {};
  return createPageMetadata({
    locale,
    paths: { es: blogPostPath("es", slug), en: blogPostPath("en", slug) },
    title: post.title,
    description: post.description,
    image: post.cover,
    imageSize: { width: 1500, height: 600 },
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPostView locale={locale} slug={slug} />;
}
