import { blogFeed } from "@/lib/blog/feed";

export const dynamic = "force-static";

export function GET() {
  return blogFeed("es");
}
