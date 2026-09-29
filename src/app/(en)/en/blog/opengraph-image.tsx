import { getCopy } from "@/content";
import { formatPostDate } from "@/lib/blog/format";
import { getPosts } from "@/lib/blog/posts";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "en" as const;

export const alt = getCopy(locale).pages.blog.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  const posts = getPosts(locale);
  return renderOpenGraphImage(locale, {
    eyebrow: "Blog",
    tagline: getCopy(locale).pages.blog.lead,
    stats: [
      ["Articles", String(posts.length)],
      ["Latest", posts[0] ? formatPostDate(locale, posts[0].date) : "—"],
      ["On X", "@jorgecarrera_es"],
    ],
  });
}
