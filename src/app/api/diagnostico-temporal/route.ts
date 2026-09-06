import { NextResponse } from "next/server";

// TEMPORAL: mide que deja pasar Cloudflare desde Vercel y que no. Se borra en
// cuanto se sepa. No devuelve la clave, solo si existe.
export const dynamic = "force-dynamic";

const clave = () => process.env.SNOWY_API_KEY ?? "";

async function probar(nombre: string, url: string, conClave: boolean) {
  const t0 = Date.now();
  try {
    const r = await fetch(url, {
      headers: conClave ? { "x-api-key": clave() } : {},
      cache: "no-store",
      signal: AbortSignal.timeout(9000),
    });
    const texto = r.ok ? "" : (await r.text()).slice(0, 90).replace(/\s+/g, " ");
    return { nombre, status: r.status, ms: Date.now() - t0, cf: r.headers.get("cf-mitigated"), pista: texto };
  } catch (e) {
    return { nombre, error: e instanceof Error ? e.message : String(e), ms: Date.now() - t0 };
  }
}

export async function GET() {
  const pruebas = await Promise.all([
    probar("api con clave", "https://api.snowy.es/stations/markers", true),
    probar("api widget sin clave", "https://api.snowy.es/widgets/stations/9170", false),
    probar("front snowy.es", "https://snowy.es/", false),
  ]);
  return NextResponse.json({ hayClave: clave().length > 0, region: process.env.VERCEL_REGION, pruebas });
}
