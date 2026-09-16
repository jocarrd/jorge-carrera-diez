"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CourseCopy } from "@/content/courses/grok-bot/meta";
import { useCourseProgress } from "./progress";

export type ClientLesson = { id: string; title: string; href: string; minutes: number; module: number };
export type ClientModule = { number: number; title: string; level: string };

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
          <li key={module.number} className="syllabus-module">
            <div className="syllabus-module-head">
              <span className="syllabus-module-number">
                {copy.moduleLabel} {module.number}
              </span>
              {!compact ? <span className="syllabus-level">{module.level}</span> : null}
              <span className="syllabus-module-count">
                {done}/{items.length}
              </span>
            </div>
            <p className="syllabus-module-title">{module.title}</p>
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
  const { progress, ready, markVisited, toggleCompleted } = useCourseProgress(courseId);
  const done = progress.completed.includes(lessonId);

  useEffect(() => {
    markVisited(lessonId);
  }, [lessonId, markVisited]);

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
