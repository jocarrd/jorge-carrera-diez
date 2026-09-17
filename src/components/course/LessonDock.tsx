"use client";

import { track } from "@vercel/analytics";
import { useEffect, useRef, useState } from "react";
import type { TocEntry } from "@/lib/courses/markdown";

type Labels = { contents: string; minutesLeft: string; resume: string; resumeButton: string; close: string };

const positionKey = (courseId: string, lessonId: string) => `curso:${courseId}:posicion:${lessonId}`;

function readPosition(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writePosition(key: string, id: string | null) {
  try {
    if (id) window.localStorage.setItem(key, id);
    else window.localStorage.removeItem(key);
  } catch {
    // Sin almacenamiento no se recuerda la posición, y la lección se lee igual.
  }
}

/**
 * Barra inferior de lectura en el móvil: en qué sección vas, cuánto queda y el
 * índice a mano. Recuerda la sección y, al volver a la lección, ofrece seguir ahí.
 */
export function LessonDock({ courseId, lessonId, toc, minutes, labels }: { courseId: string; lessonId: string; toc: TocEntry[]; minutes: number; labels: Labels }) {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [resume, setResume] = useState<TocEntry | null>(null);
  const key = positionKey(courseId, lessonId);
  const resumeChecked = useRef(false);
  const halfTracked = useRef(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const body = document.querySelector<HTMLElement>(".lesson-body");
      const footer = document.querySelector<HTMLElement>(".lesson-footer");
      if (!body) return;
      const rect = body.getBoundingClientRect();
      const footerTop = footer?.getBoundingClientRect().top ?? Infinity;
      setVisible(rect.top < window.innerHeight * 0.4 && footerTop > window.innerHeight * 0.85);
      const total = rect.height - window.innerHeight * 0.6;
      const value = Math.min(1, Math.max(0, -rect.top / Math.max(total, 1)));
      setProgress(value);
      // Mitad de la lección leída: sirve para ver dónde abandona la gente.
      if (value >= 0.5 && !halfTracked.current) {
        halfTracked.current = true;
        track("lesson_half", { lesson: lessonId });
      }
      let index = 0;
      toc.forEach((entry, i) => {
        const el = document.getElementById(entry.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) index = i;
      });
      setCurrent(index);
      if (resumeChecked.current && rect.top < 0) writePosition(key, index > 0 ? toc[index].id : null);
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
  }, [toc, key, lessonId]);

  // Al abrir la lección desde arriba, si la última vez se quedó a mitad, se ofrece volver.
  useEffect(() => {
    // Se lee tras el primer pintado: el almacenamiento no existe en el servidor.
    const frame = requestAnimationFrame(() => {
      const saved = readPosition(key);
      const entry = toc.find((t) => t.id === saved);
      if (entry && window.scrollY < 200 && !window.location.hash) setResume(entry);
      resumeChecked.current = true;
    });
    return () => cancelAnimationFrame(frame);
  }, [key, toc]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (toc.length === 0) return null;
  const left = Math.max(1, Math.round(minutes * (1 - progress)));

  return (
    <>
      {resume && !visible ? (
        <div className="lesson-resume" role="status">
          <p>
            {labels.resume} <strong>{resume.text}</strong>
          </p>
          <a
            href={`#${resume.id}`}
            className="lesson-resume-button"
            onClick={() => setResume(null)}
          >
            {labels.resumeButton} ↓
          </a>
          <button type="button" className="lesson-resume-close" aria-label={labels.close} onClick={() => setResume(null)}>
            ×
          </button>
        </div>
      ) : null}

      <div className={`lesson-dock ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
        <div className="lesson-dock-progress" style={{ transform: `scaleX(${progress})` }} />
        <button type="button" className="lesson-dock-main" onClick={() => setOpen(true)} tabIndex={visible ? 0 : -1} aria-haspopup="dialog">
          <span className="lesson-dock-count">
            {current + 1}/{toc.length}
          </span>
          <span className="lesson-dock-title">{toc[current]?.text}</span>
          <span className="lesson-dock-left">
            {left} {labels.minutesLeft}
          </span>
        </button>
      </div>

      {open ? (
        <div className="lesson-sheet" role="dialog" aria-modal="true" aria-label={labels.contents} onClick={() => setOpen(false)}>
          <div className="lesson-sheet-panel" onClick={(e) => e.stopPropagation()}>
            <div className="lesson-sheet-head">
              <p>{labels.contents}</p>
              <button type="button" onClick={() => setOpen(false)} aria-label={labels.close}>
                ×
              </button>
            </div>
            <ol>
              {toc.map((entry, i) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`} className={i === current ? "is-current" : undefined} onClick={() => setOpen(false)}>
                    <span>{i + 1}</span>
                    {entry.text}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : null}
    </>
  );
}
