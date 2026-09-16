import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/i18n/config";
import { grokBotCourse, type CourseLessonRef } from "@/content/courses/grok-bot/meta";
import { parseFrontMatter, renderLesson, type LessonFrontMatter, type TocEntry } from "./markdown";

export type LessonSummary = LessonFrontMatter & { slug: string; ref: CourseLessonRef };
export type Lesson = LessonSummary & { html: string; toc: TocEntry[] };

const LESSONS_DIR = join(process.cwd(), "src/content/courses/grok-bot/lessons");

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
