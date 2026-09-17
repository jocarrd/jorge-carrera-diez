import { courseFeed } from "@/lib/courses/feed";

export const dynamic = "force-static";

export function GET() {
  return courseFeed("en");
}
