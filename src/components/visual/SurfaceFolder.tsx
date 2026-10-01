import Image from "next/image";
import type { CSSProperties } from "react";

type Surface = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

const TINTS: Record<string, string> = {
  "snowy-ai-assistant": "#8640ee",
  "snowy-reservoirs": "#0b7897",
  "snowy-climate": "#c42b22",
  "snowy-earthquakes": "#a35f05",
  "snowy-station-detail": "#2c6c82",
  "snowy-ski": "#1e4fa8",
};

const keyOf = (path: string) =>
  path
    .split("/")
    .pop()
    ?.replace(/\.\w+$/, "") ?? "";

export function SurfaceFolder({ items }: { items: Surface[] }) {
  const middle = (items.length - 1) / 2;

  return (
    <div className="folder">
      {items.map((item, index) => {
        const offset = index - middle;
        const style = {
          "--tint": TINTS[keyOf(item.image)] ?? "#4d7c0f",
          "--i": index,
          "--n": items.length,
          "--rot": `${offset * 3}deg`,
          "--drop": `${Math.abs(offset) * 14}px`,
        } as CSSProperties;
        return (
          <article key={item.title} className="folder-card" style={style}>
            <header className="folder-tab">
              <span aria-hidden className="folder-dot" />
              <h3>{item.title}</h3>
            </header>
            <div className="folder-shot">
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={1000}
                sizes="(min-width: 1024px) 22rem, 90vw"
              />
            </div>
            <p className="folder-text">{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}
