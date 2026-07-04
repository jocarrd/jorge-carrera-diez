import { ImageResponse } from "next/og";
import { profile, site } from "@/content/profile";

export const alt = `${site.name} - Product Software Engineer`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
              "linear-gradient(rgba(103,232,249,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 999,
            border: "1px solid rgba(103,232,249,.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 78,
            top: 96,
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "#67e8f9",
            boxShadow: "0 0 36px rgba(103,232,249,.9)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px 84px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(103,232,249,.38)",
                background: "rgba(103,232,249,.11)",
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              JC
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 32, fontWeight: 700 }}>{site.name}</div>
              <div style={{ fontSize: 22, color: "#67e8f9" }}>{profile.positioning}</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 880 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                border: "1px solid rgba(103,232,249,.34)",
                borderRadius: 999,
                padding: "9px 18px",
                color: "#a5f3fc",
                fontSize: 20,
              }}
            >
              Arquitectura · Full stack · IA aplicada · Snowy
            </div>
            <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 760, letterSpacing: -1 }}>
              Producto, software e IA sobre sistemas reales.
            </div>
            <div style={{ maxWidth: 820, fontSize: 26, lineHeight: 1.45, color: "#cbd5e1" }}>
              {profile.summary}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", color: "#94a3b8", fontSize: 22 }}>
            <span>{site.domain}</span>
            <span>Snowy · VidaCaixa · Openbank</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
