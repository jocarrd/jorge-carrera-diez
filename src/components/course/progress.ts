"use client";

import { useCallback, useSyncExternalStore } from "react";

export type CourseProgress = { completed: string[]; last: string | null };

const EMPTY: CourseProgress = { completed: [], last: null };
const EVENT = "course-progress";

// El progreso vive en el navegador: no hay cuentas, y leer un curso gratis no
// debería pedir registrarse. Si el almacenamiento no está disponible (modo
// privado, bloqueado), el curso se lee igual y simplemente no recuerda.
function read(courseId: string): CourseProgress {
  try {
    const raw = window.localStorage.getItem(`curso:${courseId}`);
    if (!raw) return EMPTY;
    const data = JSON.parse(raw) as Partial<CourseProgress>;
    return { completed: Array.isArray(data.completed) ? data.completed : [], last: data.last ?? null };
  } catch {
    return EMPTY;
  }
}

function write(courseId: string, progress: CourseProgress) {
  try {
    window.localStorage.setItem(`curso:${courseId}`, JSON.stringify(progress));
  } catch {
    // Sin almacenamiento no se recuerda nada, y no pasa nada más.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: courseId }));
}
// La instantánea tiene que ser estable entre lecturas: se reutiliza mientras el texto guardado no cambie.
const snapshots = new Map<string, { raw: string | null; value: CourseProgress }>();

function snapshot(courseId: string): CourseProgress {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(`curso:${courseId}`);
  } catch {
    return EMPTY;
  }
  const hit = snapshots.get(courseId);
  if (hit && hit.raw === raw) return hit.value;
  const value = read(courseId);
  snapshots.set(courseId, { raw, value });
  return value;
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useCourseProgress(courseId: string) {
  const progress = useSyncExternalStore(
    subscribe,
    () => snapshot(courseId),
    () => EMPTY,
  );
  const ready = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );


  const markVisited = useCallback(
    (id: string) => {
      const current = read(courseId);
      if (current.last !== id) write(courseId, { ...current, last: id });
    },
    [courseId],
  );

  const toggleCompleted = useCallback(
    (id: string) => {
      const current = read(courseId);
      const done = current.completed.includes(id);
      write(courseId, {
        ...current,
        completed: done ? current.completed.filter((c) => c !== id) : [...current.completed, id],
      });
    },
    [courseId],
  );

  const markCompleted = useCallback(
    (id: string) => {
      const current = read(courseId);
      if (!current.completed.includes(id)) write(courseId, { ...current, completed: [...current.completed, id] });
    },
    [courseId],
  );

  return { progress, ready, markVisited, toggleCompleted, markCompleted };
}
