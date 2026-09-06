import type { HeadingLevel } from "@/lib/heading";
import { headingTags } from "@/lib/heading";

type SectionHeaderProps = {
  indice?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  level?: HeadingLevel;
  align?: "center" | "left";
};

// Alineada a la izquierda por defecto. Centrar todas las cabeceras es la
// retórica de Apple —una idea por sección, anunciada en el centro— y era lo que
// más quedaba de ellos después de cambiar la paleta. A la izquierda la página
// se lee como una publicación y no como una página de producto.
//
// Centradas se quedan sólo los cuatro momentos de impacto, que llevan su propio
// titular y no pasan por aquí: el hero de la portada, la banda de Snowy, la
// cifra grande y el cierre. Eso conserva el golpe y quita la cadencia.
//
// El renglón superior va en la mono: un eyebrow es un metadato —dice de qué
// sección se trata—, y en esta web el metadato vive en la monoespaciada. El
// índice es opcional y se pasa a mano donde las secciones se leen como un
// recorrido; en el CV no, que es un documento y no un itinerario.
export function SectionHeader({
  indice,
  eyebrow,
  title,
  text,
  level = 2,
  align = "left",
}: SectionHeaderProps) {
  const Heading = headingTags[level];
  const alignClassName = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-[46rem] ${alignClassName}`}>
      {indice || eyebrow ? (
        <p className="t-eyebrow">
          {indice ? (
            <>
              <span className="t-indice">{indice}</span>
              <span aria-hidden className="t-eyebrow-sep">
                —
              </span>
            </>
          ) : null}
          {eyebrow}
        </p>
      ) : null}
      <Heading className="t-section">{title}</Heading>
      {text ? (
        <p
          className={`mt-4 text-[1.0625rem] leading-[1.5] text-[var(--muted)] sm:mt-5 sm:text-[1.3125rem] ${align === "center" ? "mx-auto" : ""}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
