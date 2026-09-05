import Image from "next/image";

export type Surface = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

type SurfaceTilesProps = {
  items: Surface[];
  className?: string;
};

// El tinte de cada superficie no es una eleccion de gusto: sale del color
// dominante de su propia interfaz, muestreado de la captura. El asistente es
// morado, los embalses cian, el clima rojo, los terremotos ambar y las
// estaciones azul. Asi la seccion tiene color sin inventarselo.
const TINTES: Record<string, string> = {
  "snowy-ai-assistant": "#8640ee",
  "snowy-reservoirs": "#62cfed",
  "snowy-climate": "#e23229",
  "snowy-earthquakes": "#f0a020",
  "snowy-station-detail": "#5ba5be",
};

const clave = (ruta: string) => ruta.split("/").pop()?.replace(/\.\w+$/, "") ?? "";

export function SurfaceTiles({ items, className = "" }: SurfaceTilesProps) {
  const [hero, ...resto] = items;
  if (!hero) return null;

  return (
    <div className={`tiles ${className}`}>
      <SurfaceTile item={hero} hero />
      <div className="tiles-grid">
        {resto.map((item) => (
          <SurfaceTile key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

function SurfaceTile({ item, hero = false }: { item: Surface; hero?: boolean }) {
  const tinte = TINTES[clave(item.image)] ?? "#0f766e";

  return (
    <article
      className={`tile ${hero ? "is-hero" : ""}`}
      style={{ ["--tinte" as string]: tinte }}
    >
      <div className="tile-body">
        <h3 className="tile-title">{item.title}</h3>
        <p className="tile-text">{item.text}</p>
      </div>
      {/* La captura se sale por el borde en vez de terminar dentro: recortada
          contra el canto parece una ventana al producto; encajada, una foto. */}
      <div className="tile-shot">
        <Image
          src={item.image}
          alt={item.alt}
          width={1200}
          height={1000}
          className="h-auto w-full"
          sizes={hero ? "(min-width: 1024px) 44rem, 90vw" : "(min-width: 1024px) 26rem, 90vw"}
        />
      </div>
    </article>
  );
}
