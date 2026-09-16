import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/i18n/config";
import { grokBotCourse, type CourseLessonRef } from "@/content/courses/grok-bot/meta";
import { parseFrontMatter, renderLesson, type LessonFrontMatter, type TocEntry } from "./markdown";

export type LessonSummary = LessonFrontMatter & { slug: string; ref: CourseLessonRef };
export type Lesson = LessonSummary & { html: string; toc: TocEntry[] };

const LESSONS_DIR = join(process.cwd(), "src/content/courses/grok-bot/lessons");
const STORY_DIR = join(process.cwd(), "src/content/courses/grok-bot/story");

const CALLOUTS = {
  es: { NOTE: "Nota", TIP: "Consejo", WARNING: "Atención" },
  en: { NOTE: "Note", TIP: "Tip", WARNING: "Warning" },
} as const;

function fileFor(locale: Locale, ref: CourseLessonRef) {
  return join(LESSONS_DIR, locale, `${ref.id}-${ref.slug[locale]}.md`);
}

const cache = new Map<string, Lesson>();

export function getLesson(locale: Locale, slug: string): Lesson | null {
  const ref = grokBotCourse.lessons.find((l) => l.slug[locale] === slug);
  if (!ref) return null;
  const key = `${locale}:${ref.id}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const file = fileFor(locale, ref);
  // Una lección que falta rompe el build: una página vacía publicada es peor.
  const source = readFileSync(file, "utf8");
  const { data, body } = parseFrontMatter(source, file);
  const copy = grokBotCourse.copy[locale];
  const { html, toc } = renderLesson(body, {
    liveUrl: grokBotCourse.liveUrl,
    labels: { copy: copy.copy, prompt: copy.prompt, live: copy.live },
    calloutLabels: CALLOUTS[locale],
  });
  const lesson: Lesson = { ...data, slug: ref.slug[locale], ref, html, toc };
  cache.set(key, lesson);
  return lesson;
}

export function getCourse(locale: Locale) {
  const lessons = grokBotCourse.lessons.map((ref) => {
    const lesson = getLesson(locale, ref.slug[locale])!;
    const summary: LessonSummary = { ...lesson };
    delete (summary as Partial<Lesson>).html;
    delete (summary as Partial<Lesson>).toc;
    return summary;
  });
  const modules = grokBotCourse.modules.map((m) => ({
    ...m,
    lessons: lessons.filter((l) => l.ref.module === m.number),
  }));
  const totalMinutes = lessons.reduce((sum, l) => sum + l.minutes, 0);
  return { lessons, modules, totalMinutes };
}

export function neighbours(locale: Locale, id: string) {
  const { lessons } = getCourse(locale);
  const i = lessons.findIndex((l) => l.id === id);
  return { previous: lessons[i - 1] ?? null, next: lessons[i + 1] ?? null, index: i, total: lessons.length };
}

export type StorySegment = { module: number; day: number; html: string };
export type StoryDay = { day: number; html: string; segments: StorySegment[] };

const storyCache = new Map<Locale, StoryDay[]>();

/**
 * La historia del directo vive en un solo fichero por idioma, con secciones
 * `## day N` (resumen del día) y `## module M · day N` (el tramo que abre cada
 * módulo). Se escribe una vez y sirve para las lecciones y para el diario.
 */
export function getStory(locale: Locale): StoryDay[] {
  const hit = storyCache.get(locale);
  if (hit) return hit;

  const file = join(STORY_DIR, `${locale}.md`);
  const source = readFileSync(file, "utf8");
  const copy = grokBotCourse.copy[locale];
  const render = (body: string) =>
    renderLesson(body, {
      liveUrl: grokBotCourse.liveUrl,
      labels: { copy: copy.copy, prompt: copy.prompt, live: copy.live },
      calloutLabels: CALLOUTS[locale],
    }).html;

  const days = new Map<number, StoryDay>();
  const dayFor = (day: number) => {
    if (!days.has(day)) days.set(day, { day, html: "", segments: [] });
    return days.get(day)!;
  };

  for (const block of source.split(/^## /m).slice(1)) {
    const newline = block.indexOf("\n");
    const heading = block.slice(0, newline).trim();
    const body = block.slice(newline + 1).trim();
    const summary = heading.match(/^day (\d+)$/);
    const segment = heading.match(/^module (\d+) · day (\d+)$/);
    if (summary) {
      dayFor(Number(summary[1])).html = render(body);
    } else if (segment) {
      dayFor(Number(segment[2])).segments.push({ module: Number(segment[1]), day: Number(segment[2]), html: render(body) });
    } else {
      throw new Error(`${file}: cabecera de historia no reconocida "## ${heading}"`);
    }
  }

  const result = [...days.values()].sort((a, b) => a.day - b.day);
  for (const day of result) day.segments.sort((a, b) => a.module - b.module);
  storyCache.set(locale, result);
  return result;
}

export function storyForModule(locale: Locale, module: number): StorySegment[] {
  return getStory(locale).flatMap((day) => day.segments.filter((segment) => segment.module === module));
}
