import { getCopy, organizations, site } from "@/content";
import { locales } from "@/i18n/config";
import { allPathsFor, routeKeys } from "@/i18n/routes";

const routeLabels: Record<string, string> = {
  home: "Inicio / Home",
  projects: "Proyectos / Projects",
  snowy: "Snowy — plataforma meteorológica / weather platform",
  eqx: "EQx — Elite Quality Index, cliente en Suiza / client in Switzerland",
  lariojameteo: "LaRiojaMeteo — portal regional / regional portal",
  experience: "Experiencia / Experience",
  cv: "Currículum / CV",
  contact: "Trabajemos juntos — servicios y contratación / Work with me — services and hiring",
};

export const dynamic = "force-static";

function absolute(path: string) {
  return new URL(path, site.url).toString();
}

function section(locale: (typeof locales)[number]) {
  const copy = getCopy(locale);
  const heading = locale === "es" ? "## Español" : "## English";

  return [
    heading,
    "",
    copy.profile.headline,
    "",
    ...copy.profile.focus.map((item) => `- ${item}`),
    "",
    ...routeKeys.map((key) => `- [${routeLabels[key]}](${absolute(allPathsFor(key)[locale])})`),
  ].join("\n");
}

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    "> Ingeniero de software freelance en Logroño (España). React, Next.js, TypeScript,",
    "> Node.js y NestJS. Disponible para proyectos en remoto, en horario europeo, en",
    "> español o en inglés.",
    "",
    "> Freelance software engineer based in Logroño, Spain. Available for remote work",
    "> in European hours.",
    "",
    "## Contratar / Hiring",
    "",
    `- Correo / Email: ${site.email}`,
    `- Perfil de Malt / Malt profile: ${site.malt}`,
    `- LinkedIn: ${site.linkedin}`,
    `- GitHub: ${site.github}`,
    "",
    "Trabajo habitual: asumir el relevo técnico de productos que ya están en producción,",
    "desarrollo de producto web y acompañamiento de arquitectura frontend.",
    "",
    ...locales.map((locale) => `${section(locale)}\n`),
    "## Proyectos / Projects",
    "",
    `- Snowy — ${site.snowy}`,
    `- EQx (Elite Quality Index) — ${organizations.eqx.url}`,
    `- LaRiojaMeteo — ${site.lariojameteo}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
