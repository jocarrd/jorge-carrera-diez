import { NextResponse } from "next/server";

// TEMPORAL. Mide desde donde sale Vercel y si algun camino esquiva el reto.
export const dynamic = "force-dynamic";
// Probamos si desde Europa Cloudflare no nos ve como bot.
export const preferredRegion = ["cdg1"];

async function probar(nombre: string, url: string, cabeceras: Record<string, string> = {}) {
  const t0 = Date.now();
  try {
    const r = await fetch(url, { headers: cabeceras, cache: "no-store", signal: AbortSignal.timeout(8000) });
    return { nombre, status: r.status, ms: Date.now() - t0, mitigado: r.headers.get("cf-mitigated") };
  } catch (e) {
    return { nombre, error: e instanceof Error ? e.message : String(e) };
  }
}

export async function GET() {
  const clave = process.env.SNOWY_API_KEY ?? "";
  let ip = null, asn = null;
  try {
    // cloudflare trace de OTRA zona: dice con que IP salimos y como nos ve CF
    const t = await fetch("https://one.one.one.one/cdn-cgi/trace", { cache: "no-store" }).then((r) => r.text());
    ip = t.match(/^ip=(.+)$/m)?.[1] ?? null;
    asn = t.match(/^loc=(.+)$/m)?.[1] ?? null;
  } catch {}

  const pruebas = await Promise.all([
    probar("api + clave", "https://api.snowy.es/stations/markers", { "x-api-key": clave }),
    probar("api + clave + accept json", "https://api.snowy.es/stations/markers", {
      "x-api-key": clave,
      accept: "application/json",
      "user-agent": "jorge-carrera-diez.com (+https://jorge-carrera-diez.com)",
    }),
  ]);

  return NextResponse.json({ ipSalida: ip, loc: asn, region: process.env.VERCEL_REGION, pruebas });
}
