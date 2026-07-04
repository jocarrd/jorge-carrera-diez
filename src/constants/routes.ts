import { site } from "@/content/profile";

export const routes = [
  "/",
  "/cv",
  "/experiencia",
  "/proyectos",
  "/proyectos/snowy",
  "/proyectos/lariojameteo",
  "/contacto",
] as const;

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
