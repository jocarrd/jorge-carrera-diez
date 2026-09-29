"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

type ServiceItem = {
  title: string;
  text: string;
  href?: string;
  image: { src: string; w: number; h: number };
};

export function ServiceIndex({
  items,
  linkLabel,
}: {
  items: ServiceItem[];
  linkLabel: string;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (event: PointerEvent<HTMLUListElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <ul
      ref={listRef}
      className="svc-index"
      onPointerMove={onMove}
      onPointerLeave={() => setActive(null)}
    >
      {items.map((item, index) => (
        <li
          key={item.title}
          className="svc-row"
          data-active={active === index || undefined}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setActive(index);
          }}
        >
          <div className="svc-thumb">
            <Image
              src={item.image.src}
              alt=""
              width={item.image.w}
              height={item.image.h}
              sizes="96px"
            />
          </div>
          <div className="svc-copy">
            <h3 className="svc-title">{item.title}</h3>
            <p className="svc-text">{item.text}</p>
            {item.href ? (
              <Link href={item.href} className="area-link">
                {linkLabel}
                <span aria-hidden className="ml-1">
                  &rsaquo;
                </span>
              </Link>
            ) : null}
          </div>
        </li>
      ))}
      <li
        aria-hidden
        className="svc-float"
        data-shown={active !== null || undefined}
        style={
          {
            "--x": `${pos.x}px`,
            "--y": `${pos.y}px`,
          } as CSSProperties
        }
      >
        {items.map((item, index) => (
          <Image
            key={item.title}
            src={item.image.src}
            alt=""
            width={item.image.w}
            height={item.image.h}
            sizes="360px"
            data-on={active === index || undefined}
          />
        ))}
      </li>
    </ul>
  );
}
