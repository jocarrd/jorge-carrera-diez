import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/profile";

export const alt = `${site.name} - Ingeniero de software`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const profileImageBuffer = await readFile(
    join(process.cwd(), "public/images/jorge-carrera-diez.png"),
  );
  const profileImage = `data:image/png;base64,${profileImageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #02040a 0%, #07111f 50%, #02040a 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -150,
            top: -150,
            width: 620,
            height: 620,
            borderRadius: 999,
            border: "1px solid rgba(103,232,249,.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 92,
            top: 92,
            width: 10,
            height: 10,
            borderRadius: 999,
            background: "#67e8f9",
            boxShadow: "0 0 36px rgba(103,232,249,.9)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 68,
            width: "100%",
            padding: "72px 78px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28, width: 668 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "rgba(255,255,255,.045)",
                  color: "#fff",
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                JC
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontSize: 24, color: "#94a3b8" }}>{site.domain}</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                border: "1px solid rgba(255,255,255,.14)",
                borderRadius: 999,
                padding: "9px 18px",
                color: "#dbeafe",
                fontSize: 20,
              }}
            >
              Ingeniero de software
            </div>
            <div style={{ fontSize: 78, lineHeight: 0.98, fontWeight: 760, letterSpacing: -1.4 }}>
              Jorge Carrera Diez
            </div>
            <div style={{ maxWidth: 640, fontSize: 28, lineHeight: 1.34, color: "#cbd5e1" }}>
              Tech Lead en VidaCaixa. Creador de Snowy.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
              {[
                ["actual", "VidaCaixa · agentes"],
                ["producto", "Snowy · backend · SEO"],
                ["foco", "arquitectura · datos · agentes"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    width: 560,
                    borderTop: "1px solid rgba(255,255,255,.1)",
                    paddingTop: 12,
                  }}
                >
                  <span style={{ width: 95, color: "#64748b", fontSize: 18 }}>{label}</span>
                  <span style={{ color: "#e2e8f0", fontSize: 21 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: 338,
              height: 430,
              display: "flex",
              position: "relative",
              overflow: "hidden",
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(255,255,255,.035)",
              boxShadow: "0 24px 90px rgba(0,0,0,.58)",
            }}
          >
            <img
              src={profileImage}
              alt=""
              width={338}
              height={430}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 31%",
                borderRadius: 28,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 55%, rgba(2,4,10,.45) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
