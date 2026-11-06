"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

type Side = { src: string; alt: string; label: string };

export function BookToWeb({
  book,
  web,
  handleLabel,
  width,
  height,
}: {
  book: Side;
  web: Side;
  handleLabel: string;
  width: number;
  height: number;
}) {
  const [split, setSplit] = useState(50);

  return (
    <figure
      className="b2w"
      style={
        {
          "--split": `${split}%`,
          aspectRatio: `${width} / ${height}`,
        } as CSSProperties
      }
    >
      <Image
        src={web.src}
        alt={web.alt}
        width={width}
        height={height}
        className="b2w-layer"
        sizes="(max-width: 1120px) 92vw, 1056px"
      />
      <div className="b2w-book">
        <Image
          src={book.src}
          alt={book.alt}
          width={width}
          height={height}
          className="b2w-layer"
          sizes="(max-width: 1120px) 92vw, 1056px"
        />
      </div>
      <span aria-hidden className="b2w-tag b2w-tag--book">
        {book.label}
      </span>
      <span aria-hidden className="b2w-tag b2w-tag--web">
        {web.label}
      </span>
      <span aria-hidden className="b2w-handle" />
      <input
        type="range"
        min={0}
        max={100}
        value={split}
        onChange={(event) => setSplit(Number(event.target.value))}
        aria-label={handleLabel}
        className="b2w-range"
      />
    </figure>
  );
}
