import { NextResponse } from "next/server";

// TEMPORAL: sirve para saber por que el bloque en vivo no sale en produccion.
// No devuelve la clave, solo si existe y que contesta la API. Se borra en cuanto
// se sepa.
export const dynamic = "force-dynamic";

export async function GET() {
  const clave = process.env.SNOWY_API_KEY;
  const salida: Record<string, unknown> = {
    hayClave: Boolean(clave),
    longitud: clave?.length ?? 0,
    prefijoOk: clave?.startsWith("sk_live_") ?? false,
    region: process.env.VERCEL_REGION ?? null,
  };

  if (!clave) return NextResponse.json(salida);

  try {
    const t0 = Date.now();
    const r = await fetch("https://api.snowy.es/stations/markers", {
      headers: { "x-api-key": clave },
      cache: "no-store",
      signal: AbortSignal.timeout(9000),
    });
    salida.status = r.status;
    salida.ms = Date.now() - t0;
    salida.servidor = r.headers.get("server");
    salida.cfRay = r.headers.get("cf-ray");
    if (!r.ok) salida.cuerpo = (await r.text()).slice(0, 300);
    else {
      const d = (await r.json()) as unknown[];
      salida.estaciones = Array.isArray(d) ? d.length : "no es lista";
    }
  } catch (e) {
    salida.error = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
  }

  return NextResponse.json(salida);
}
