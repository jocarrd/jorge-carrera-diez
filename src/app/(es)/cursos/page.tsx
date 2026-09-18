import { redirect } from "next/navigation";
import { routePath } from "@/i18n/routes";

export default function Page() {
  redirect(routePath("es", "grokBotCourse"));
}
