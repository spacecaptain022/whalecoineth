import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "WhalecoinETH. The Deep Moves First. A mythic Ethereum token shaped by conviction, silence, and unseen market force.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#C8B38D",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#14283D",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: "#14283D",
              opacity: 0.5,
            }}
          />
            <span>Ethereum · The Signal Beneath</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            gap: 24,
            color: "#14283D",
          }}
        >
          <div
            style={{
              fontSize: 120,
              lineHeight: 1,
              letterSpacing: -2,
              maxWidth: 960,
              fontFamily: "serif",
              fontWeight: 500,
            }}
          >
            The Deep Moves First.
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.7,
              letterSpacing: 0,
              maxWidth: 860,
            }}
          >
            WhalecoinETH · A silent giant on Ethereum.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 80,
            top: 80,
            fontSize: 24,
            letterSpacing: 6,
            color: "#14283D",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Whalecoin<span style={{ opacity: 0.55 }}>ETH</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
