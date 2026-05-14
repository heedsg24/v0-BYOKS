import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "BYOKS — be your own kind of sober."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const cormorantItalic = await fetch(
    new URL("./CormorantGaramond-Italic.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f5f0e8",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Soft sage glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 400,
            height: 400,
            borderRadius: "9999px",
            backgroundColor: "#6b8e72",
            opacity: 0.12,
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        {/* Soft terracotta glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 360,
            height: 360,
            borderRadius: "9999px",
            backgroundColor: "#c5836b",
            opacity: 0.1,
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            zIndex: 1,
          }}
        >
          <div style={{ width: 36, height: 1, backgroundColor: "rgba(45,37,32,0.3)", display: "flex" }} />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 8,
              color: "#6b8e72",
              textTransform: "uppercase",
            }}
          >
            BYOKS
          </div>
          <div style={{ width: 36, height: 1, backgroundColor: "rgba(45,37,32,0.3)", display: "flex" }} />
        </div>

        {/* Center thesis */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontFamily: "Cormorant",
              fontStyle: "italic",
              fontSize: 124,
              fontWeight: 500,
              lineHeight: 1.02,
              color: "#2d2520",
              letterSpacing: -1,
              display: "flex",
              textAlign: "center",
            }}
          >
            be your own kind of sober.
          </div>
        </div>

        {/* Bottom product line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 5,
              color: "rgba(45,37,32,0.6)",
              textTransform: "uppercase",
            }}
          >
            Open Me When
          </div>
          <div style={{ width: 6, height: 6, borderRadius: "9999px", backgroundColor: "rgba(45,37,32,0.35)", display: "flex" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 5,
              color: "rgba(45,37,32,0.6)",
              textTransform: "uppercase",
            }}
          >
            a guided journal
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant",
          data: cormorantItalic,
          style: "italic",
          weight: 500,
        },
      ],
    }
  )
}
