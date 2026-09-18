"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type SearchEntry = {
  kind: "lesson" | "section" | "term";
  title: string;
  context: string;
  href: string;
  text: string;
};

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function CourseSearch({
  entries,
  labels,
}: {
  entries: SearchEntry[];
  labels: {
    placeholder: string;
    empty: string;
    kinds: Record<SearchEntry["kind"], string>;
  };
}) {
  const [query, setQuery] = useState("");
  const indexed = useMemo(
    () =>
      entries.map((e) => ({
        ...e,
        haystack: normalize(`${e.title} ${e.text}`),
      })),
    [entries],
  );
  const words = normalize(query)
    .split(/\s+/)
    .filter((w) => w.length > 1);

  const results =
    words.length === 0
      ? []
      : indexed
          .map((e) => {
            const title = normalize(e.title);
            const score = words.reduce(
              (sum, w) =>
                sum + (title.includes(w) ? 3 : e.haystack.includes(w) ? 1 : 0),
              0,
            );
            const all = words.every((w) => e.haystack.includes(w));

            return {
              e,
              score:
                score + (all ? 10 : 0) + (e.kind === "lesson" && all ? 4 : 0),
            };
          })
          .filter((r) => r.score > 0)
          .sort(
            (a, b) =>
              b.score - a.score ||
              Number(a.e.kind !== "lesson") - Number(b.e.kind !== "lesson"),
          )
          .slice(0, 8)
          .map((r) => r.e);

  return (
    <div className="course-search" role="search">
      <label className="course-search-field">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <circle
            cx="11"
            cy="11"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M20 20l-4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="sr-only">{labels.placeholder}</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={labels.placeholder}
          autoComplete="off"
          enterKeyHint="search"
        />
      </label>
      {words.length > 0 ? (
        results.length > 0 ? (
          <ul className="course-search-results" aria-live="polite">
            {results.map((r) => (
              <li key={r.href + r.kind}>
                <Link href={r.href}>
                  <span className="course-search-kind">
                    {labels.kinds[r.kind]}
                  </span>
                  <span className="course-search-title">{r.title}</span>
                  <span className="course-search-context">{r.context}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="course-search-empty" aria-live="polite">
            {labels.empty}
          </p>
        )
      ) : null}
    </div>
  );
}
