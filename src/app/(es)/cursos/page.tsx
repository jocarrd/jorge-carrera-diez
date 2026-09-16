import { redirect } from "next/navigation";
import { routePath } from "@/i18n/routes";

// Con un solo curso, el listado sobra: /cursos lleva directamente a él.
export default function Page() {
  redirect(routePath("es", "grokBotCourse"));
}
