// El estado de la red de estaciones de Snowy, leído en directo.
//
// Es lo único de esta web que no se puede copiar: el resto describe el trabajo
// y esto lo enseña funcionando. Los números que salen en la portada los está
// sirviendo ahora mismo la API que se explica tres secciones más abajo.
//
// Se pide SIEMPRE desde el servidor. El engine exige `x-api-key` y una clave
// que viaje al navegador no es una clave: cualquier `NEXT_PUBLIC_*` apuntando
// aquí se hornea en el bundle que descarga el visitante. Además, con `revalidate`
// hay una petición cada diez minutos para todas las visitas y no una por
// visitante, que sobre un payload de casi un mega importa.

const ENDPOINT = "https://api.snowy.es/stations/markers";
const REVALIDAR_SEGUNDOS = 600;

// Una estación que lleva más de tres horas sin reportar no está "ahora mismo".
// El umbral no es caprichoso: la antigüedad mediana de la red ronda los 80
// minutos porque AEMET publica por horas y varias redes van con retraso propio.
const FRESCURA_MS = 3 * 60 * 60 * 1000;

export type Extremo = {
  temperatura: number;
  estacion: string;
  zona: string | null;
};

export type EstadoRed = {
  reportando: number;
  total: number;
  redes: number;
  minima: Extremo;
  maxima: Extremo;
  /** Reparto de las lecturas por tramos de un grado, de RANGO_MIN a RANGO_MAX. */
  reparto: number[];
  leidoEn: string;
};

// El rango que dibuja la escala. Vive aquí y no en el componente porque el
// reparto se calcula contra él: las dos cosas tienen que usar el mismo.
export const RANGO_MIN = -5;
export const RANGO_MAX = 45;

type Marcador = {
  stationName?: string;
  network?: string;
  state?: string | null;
  current?: number | null;
  lastUpdate?: number | null;
};

const esFresca = (m: Marcador, ahora: number) =>
  typeof m.current === "number" &&
  Number.isFinite(m.current) &&
  typeof m.lastUpdate === "number" &&
  ahora - m.lastUpdate < FRESCURA_MS;

// Algunos nombres llegan ya cortados del origen ("Cooperativa Olivarera Santa
// Marina de Ag") porque la red los guarda con un límite de campo. Cortar en
// seco otra vez queda peor: se recorta por la última palabra entera y se marca
// con puntos suspensivos, que al menos dice que hay más.
const NOMBRE_MAX = 34;

function acortar(nombre: string): string {
  if (nombre.length <= NOMBRE_MAX) return nombre;
  const corte = nombre.slice(0, NOMBRE_MAX);
  const espacio = corte.lastIndexOf(" ");
  return `${(espacio > 18 ? corte.slice(0, espacio) : corte).trimEnd()}…`;
}

const aExtremo = (m: Marcador): Extremo => ({
  temperatura: m.current as number,
  estacion: acortar((m.stationName ?? "").trim()),
  zona: m.state?.trim() || null,
});

// Devuelve null en cuanto algo no cuadra, y quien lo llama no pinta el bloque.
// Un dato en vivo que falla no puede tumbar la portada ni dejar un hueco con un
// mensaje de error: contaría justo lo contrario de lo que viene a decir.
export async function leerEstadoRed(): Promise<EstadoRed | null> {
  const clave = process.env.SNOWY_API_KEY;
  if (!clave) return null;

  try {
    const respuesta = await fetch(ENDPOINT, {
      headers: { "x-api-key": clave },
      next: { revalidate: REVALIDAR_SEGUNDOS },
      signal: AbortSignal.timeout(6000),
    });

    if (!respuesta.ok) return null;

    const marcadores = (await respuesta.json()) as Marcador[];
    if (!Array.isArray(marcadores) || marcadores.length === 0) return null;

    const ahora = Date.now();
    const frescas = marcadores.filter((m) => esFresca(m, ahora));

    // Con cuatro estaciones vivas el titular sería falso. Si la red está caída
    // o el formato ha cambiado, mejor no decir nada.
    if (frescas.length < 100) return null;

    let minima = frescas[0];
    let maxima = frescas[0];
    for (const m of frescas) {
      if ((m.current as number) < (minima.current as number)) minima = m;
      if ((m.current as number) > (maxima.current as number)) maxima = m;
    }

    // Con 1.181 lecturas se puede enseñar algo más que los dos extremos: por
    // dónde se agrupa hoy la temperatura del país. Se reduce aquí a un tramo
    // por grado —cincuenta números— para no mandar mil doscientos al navegador.
    const reparto = new Array<number>(RANGO_MAX - RANGO_MIN).fill(0);
    for (const m of frescas) {
      const tramo = Math.floor((m.current as number) - RANGO_MIN);
      if (tramo >= 0 && tramo < reparto.length) reparto[tramo] += 1;
    }

    return {
      reportando: frescas.length,
      reparto,
      total: marcadores.length,
      redes: new Set(marcadores.map((m) => m.network).filter(Boolean)).size,
      minima: aExtremo(minima),
      maxima: aExtremo(maxima),
      leidoEn: new Date(ahora).toISOString(),
    };
  } catch {
    return null;
  }
}
