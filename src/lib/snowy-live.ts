const ENDPOINT = "https://api.snowy.es/stations/markers";
const REVALIDAR_SEGUNDOS = 600;

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

  reparto: number[];
  leidoEn: string;
};

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

    if (frescas.length < 100) return null;

    let minima = frescas[0];
    let maxima = frescas[0];
    for (const m of frescas) {
      if ((m.current as number) < (minima.current as number)) minima = m;
      if ((m.current as number) > (maxima.current as number)) maxima = m;
    }

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
