"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { id: string; title: string; href: string; updated: string };
type Visit = { at: string; lessons: string[] };

/**
 * Qué ha cambiado desde la última visita a la portada: lecciones nuevas y
 * lecciones actualizadas. Solo se ve si ya habías estado y hay algo.
 */
export function WhatsNew({ courseId, lessons, labels }: { courseId: string; lessons: Item[]; labels: { title: string; added: string; updated: string } }) {
  const [found, setFound] = useState<{ added: Item[]; updated: Item[] } | null>(null);

  useEffect(() => {
    const key = `curso:${courseId}:visita`;
    const frame = requestAnimationFrame(() => {
      let previous: Visit | null = null;
      try {
        previous = JSON.parse(window.localStorage.getItem(key) ?? "null");
      } catch {
        previous = null;
      }
      if (previous) {
        const added = lessons.filter((l) => !previous!.lessons.includes(l.id));
        const updated = lessons.filter((l) => previous!.lessons.includes(l.id) && l.updated > previous!.at.slice(0, 10));
        if (added.length || updated.length) setFound({ added, updated });
      }
      try {
        window.localStorage.setItem(key, JSON.stringify({ at: new Date().toISOString(), lessons: lessons.map((l) => l.id) }));
      } catch {
        // Sin almacenamiento no hay «qué hay nuevo», y el curso se lee igual.
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [courseId, lessons]);

  if (!found) return null;
  const list = (items: Item[], label: string) =>
    items.length ? (
      <div className="whats-new-group">
        <p className="whats-new-label">
          {label} · {items.length}
        </p>
        <ul>
          {items.slice(0, 5).map((l) => (
            <li key={l.id}>
              <Link href={l.href}>
                <span>{l.id}</span> {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : null;

  return (
    <aside className="whats-new" aria-label={labels.title}>
      <p className="whats-new-title">{labels.title}</p>
      {list(found.added, labels.added)}
      {list(found.updated, labels.updated)}
    </aside>
  );
}
