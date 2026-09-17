"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { CourseCopy } from "@/content/courses/grok-bot/meta";
import { useCourseProgress } from "./progress";

export type ClientLesson = { id: string; title: string; href: string; minutes: number; module: number };
export type ClientModule = { number: number; title: string; level: string };

function formatMinutes(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} h ${rest} min` : `${hours} h`;
}

function Check({ done }: { done: boolean }) {
  return (
    <span className={`course-check ${done ? "is-done" : ""}`} aria-hidden="true">
      {done ? (
        <svg viewBox="0 0 12 12" width="10" height="10">
          <path d="M2.5 6.2l2.3 2.3 4.7-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </span>
  );
}

/** Botón principal del temario: empezar, continuar o repasar según el progreso. */
export function CourseStart({ courseId, lessons, copy }: { courseId: string; lessons: ClientLesson[]; copy: CourseCopy }) {
  const { progress, ready } = useCourseProgress(courseId);
  const done = progress.completed.filter((id) => lessons.some((l) => l.id === id)).length;
  const lastIndex = lessons.findIndex((l) => l.id === progress.last);
  const nextPending = lessons.find((l) => !progress.completed.includes(l.id));
  const target = lastIndex >= 0 ? lessons[lastIndex] : lessons[0];
  const allDone = done === lessons.length;
  const label = !ready || (done === 0 && lastIndex < 0) ? copy.start : allDone ? copy.review : copy.continue;
  const href = allDone ? lessons[0].href : lastIndex >= 0 ? target.href : (nextPending ?? lessons[0]).href;

  return (
    <div className="course-start">
      <Link href={href} className="course-start-button">
        {label}
        <span aria-hidden="true">→</span>
      </Link>
      <div className="course-progress" aria-live="polite">
        <div className="course-progress-bar" role="progressbar" aria-label={`${done}/${lessons.length} ${copy.progressLabel}`} aria-valuemin={0} aria-valuemax={lessons.length} aria-valuenow={done}>
          <span style={{ width: `${(done / lessons.length) * 100}%` }} />
        </div>
        <p>
          {done}/{lessons.length} {copy.progressLabel}
          {ready ? <span className="course-progress-left"> · {formatMinutes(lessons.filter((l) => !progress.completed.includes(l.id)).reduce((sum, l) => sum + l.minutes, 0))} {copy.toRead}</span> : null}
        </p>
      </div>
    </div>
  );
}

/** El temario completo con la marca de cada lección leída. */
export function Syllabus({
  courseId,
  modules,
  lessons,
  copy,
  currentId,
  compact = false,
}: {
  courseId: string;
  modules: ClientModule[];
  lessons: ClientLesson[];
  copy: CourseCopy;
  currentId?: string;
  compact?: boolean;
}) {
  const { progress } = useCourseProgress(courseId);
  const listRef = useRef<HTMLOListElement>(null);
  const moduleAnchorPrefix = copy.moduleLabel.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // En la barra lateral, la lección actual tiene que verse sin buscarla: se centra dentro de su caja, sin mover la página.
  useEffect(() => {
    const list = listRef.current;
    const box = list?.closest<HTMLElement>(".lesson-aside-desktop");
    const current = list?.querySelector<HTMLElement>(".is-current");
    if (!box || !current) return;
    const offset = current.getBoundingClientRect().top - box.getBoundingClientRect().top;
    box.scrollTop += offset - box.clientHeight / 2 + current.offsetHeight / 2;
  }, [currentId]);

  return (
    <ol ref={listRef} className={`syllabus ${compact ? "syllabus--compact" : ""}`}>
      {modules.map((module) => {
        const items = lessons.filter((l) => l.module === module.number);
        const done = items.filter((l) => progress.completed.includes(l.id)).length;
        return (
          <li
            key={module.number}
            id={compact ? undefined : `${moduleAnchorPrefix}-${module.number}`}
            className={`syllabus-module ${module.number === 0 ? "syllabus-module--intro" : ""}`}
          >
            <div className="syllabus-module-head">
              <span className="syllabus-module-number">
                {module.number === 0 ? copy.introModule : `${copy.moduleLabel} ${module.number}`}
              </span>
              {!compact ? <span className="syllabus-level">{module.level}</span> : null}
              <span className="syllabus-module-count">
                {done}/{items.length}
              </span>
            </div>
            {!compact && items[0] ? (
              <Link href={items[0].href} className="syllabus-module-title syllabus-module-link">
                {module.title}
                <span className="syllabus-module-start">
                  {copy.syllabusStart} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ) : (
              <p className="syllabus-module-title">{module.title}</p>
            )}
            <ol className="syllabus-lessons">
              {items.map((lesson) => {
                const isDone = progress.completed.includes(lesson.id);
                const isCurrent = lesson.id === currentId;
                return (
                  <li key={lesson.id}>
                    <Link
                      href={lesson.href}
                      className={`syllabus-lesson ${isCurrent ? "is-current" : ""} ${isDone ? "is-done" : ""}`}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      <Check done={isDone} />
                      <span className="syllabus-lesson-number">{lesson.id}</span>
                      <span className="syllabus-lesson-title">{lesson.title}</span>
                      {!compact ? (
                        <span className="syllabus-lesson-minutes">
                          {lesson.minutes} {copy.minutesLabel}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}

/** Registra la visita, marca la lección como completada y activa los botones de copiar. */
export function LessonTracker({ courseId, lessonId, copy }: { courseId: string; lessonId: string; copy: CourseCopy }) {
  const { progress, ready, markVisited, toggleCompleted, markCompleted } = useCourseProgress(courseId);
  const done = progress.completed.includes(lessonId);

  useEffect(() => {
    markVisited(lessonId);
    track("lesson_view", { lesson: lessonId });
  }, [lessonId, markVisited]);

  // Un término ya consultado deja de subrayarse: al quinto Bot subrayado solo estorba.
  useEffect(() => {
    const key = `curso:${courseId}:terminos`;
    let seen: string[] = [];
    try {
      seen = JSON.parse(window.localStorage.getItem(key) ?? "[]");
    } catch {
      seen = [];
    }
    const mark = () =>
      document.querySelectorAll<HTMLButtonElement>(".lesson-term").forEach((b) => {
        const id = b.getAttribute("popovertarget")?.replace("termino-", "");
        if (id && seen.includes(id)) b.classList.add("is-seen");
      });
    mark();
    const onToggle = (event: Event) => {
      const pop = event.target as HTMLElement;
      if (!pop.classList?.contains("lesson-term-pop") || (event as ToggleEvent).newState !== "open") return;
      const id = pop.id.replace("termino-", "");
      if (seen.includes(id)) return;
      seen = [...seen, id];
      try {
        window.localStorage.setItem(key, JSON.stringify(seen));
      } catch {
        // Sin almacenamiento, el término sigue subrayado y no pasa nada.
      }
    };
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, [courseId]);

  // Llegar al resumen cuenta como haber leído la lección: nadie vuelve arriba a pulsar un botón.
  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>(".lesson-body > h2");
    const recap = headings[headings.length - 1];
    if (!recap) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        markCompleted(lessonId);
        track("lesson_complete", { lesson: lessonId });
        observer.disconnect();
      }
    });
    observer.observe(recap);
    return () => observer.disconnect();
  }, [lessonId, markCompleted]);

  useEffect(() => {
    const onClick = async (event: MouseEvent) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-copy]");
      if (!button) return;
      const code = button.closest(".lesson-prompt")?.querySelector("code")?.textContent ?? "";
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = copy.copied;
        window.setTimeout(() => (button.textContent = copy.copy), 1600);
      } catch {
        // Sin portapapeles el texto sigue ahí para seleccionarlo a mano.
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [copy.copied, copy.copy]);

  return (
    <button
      type="button"
      className={`lesson-complete ${done ? "is-done" : ""}`}
      onClick={() => toggleCompleted(lessonId)}
      aria-pressed={done}
      disabled={!ready}
    >
      <Check done={done} />
      {done ? copy.completed : copy.markComplete}
    </button>
  );
}

/** Barra fina arriba que dice cuánto queda de la lección. */
export function ReadingProgress() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const article = document.querySelector<HTMLElement>(".lesson-body");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      setValue(Math.min(1, Math.max(0, -rect.top / Math.max(total, 1))));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div className="reading-progress" style={{ transform: `scaleX(${value})` }} aria-hidden="true" />;
}

export type DiaryNavItem = { anchor: string; label: string; note?: string; live?: boolean };

/** Barra fija del diario: saltar entre días y volver al temario sin subir hasta arriba. */
export function DiaryNav({
  items,
  label,
  syllabusHref,
  syllabusLabel,
  shortSyllabusLabel,
}: {
  items: DiaryNavItem[];
  label: string;
  syllabusHref: string;
  syllabusLabel: string;
  shortSyllabusLabel: string;
}) {
  const [active, setActive] = useState(items[0]?.anchor);
  const listRef = useRef<HTMLOListElement>(null);

  // En el móvil la fila de días se desliza: el día activo tiene que quedar a la vista.
  useEffect(() => {
    const link = listRef.current?.querySelector<HTMLElement>(".is-active");
    const list = listRef.current;
    if (!link || !list) return;
    list.scrollTo({ left: link.offsetLeft - 8, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.anchor)).filter((e): e is HTMLElement => !!e);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="diary-nav" aria-label={label}>
      <ol ref={listRef} className="diary-nav-days">
        {items.map((item) => (
          <li key={item.anchor}>
            <a href={`#${item.anchor}`} className={active === item.anchor ? "is-active" : undefined} aria-current={active === item.anchor ? "true" : undefined}>
              {item.label}
              {item.note ? <span className={`diary-nav-note ${item.live ? "is-live" : ""}`}>{item.note}</span> : null}
            </a>
          </li>
        ))}
      </ol>
      <Link href={syllabusHref} className="diary-nav-syllabus">
        <span className="diary-nav-syllabus-long">{syllabusLabel}</span>
        <span className="diary-nav-syllabus-short">{shortSyllabusLabel}</span> <span aria-hidden="true">→</span>
      </Link>
    </nav>
  );
}

export type NextLesson = { href: string; title: string; description: string; minutes: number; id: string; module: number; moduleTitle: string };

/** Final de la lección: la siguiente en grande, con un botón que la marca leída y avanza. */
export function NextUp({
  courseId,
  lessonId,
  lessonModule,
  next,
  courseHref,
  copy,
}: {
  courseId: string;
  lessonId: string;
  lessonModule: number;
  next: NextLesson | null;
  courseHref: string;
  copy: CourseCopy;
}) {
  const router = useRouter();
  const { progress, markCompleted } = useCourseProgress(courseId);
  const done = progress.completed.includes(lessonId);

  if (!next) {
    return (
      <section className="next-up next-up--finish">
        <p className="next-up-eyebrow">{copy.finish}</p>
        <Link href={courseHref} className="next-up-button">
          {copy.backToCourse} <span aria-hidden="true">→</span>
        </Link>
      </section>
    );
  }

  const newModule = next.module !== lessonModule;
  return (
    <section className="next-up" aria-label={copy.nextUp}>
      <p className="next-up-eyebrow">
        {newModule && lessonModule > 0 ? (
          <>
            <span className="next-up-done">✓ {copy.moduleDone.replace("{n}", String(lessonModule))}</span> ·{" "}
            {copy.nextModule.replace("{n}", String(next.module))}
          </>
        ) : (
          copy.nextUp
        )}
      </p>
      <Link href={next.href} className="next-up-title">
        <span className="next-up-number">{next.id}</span>
        {next.title}
      </Link>
      {newModule ? <p className="next-up-module">{next.moduleTitle}</p> : null}
      <p className="next-up-description">{next.description}</p>
      <div className="next-up-actions">
        <button
          type="button"
          className="next-up-button"
          onClick={() => {
            markCompleted(lessonId);
            track("next_lesson", { from: lessonId, to: next.id });
            router.push(next.href);
          }}
        >
          {done ? copy.continueNext : copy.completeAndContinue} <span aria-hidden="true">→</span>
        </button>
        <span className="next-up-minutes">
          {next.minutes} {copy.minutesLabel}
        </span>
      </div>
    </section>
  );
}
