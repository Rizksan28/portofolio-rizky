import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
const BARS = ["#F1E5D0", "#F5BA60", "#6FC6BE", "#3AE0B0", "#B18BF7", "#FF718E", "#1578FF"];

interface OgCardProps {
  kicker: string;
  title: string;
  subtitle?: string;
  accent: string;
  badge?: string;
}

export function ogCard({ kicker, title, subtitle, accent, badge }: OgCardProps) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", backgroundColor: "#151319" }}>
        <div style={{ width: 18, backgroundColor: accent, display: "flex" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "52px 64px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#B8ADB4", fontWeight: 700 }}>
              RSP — THE ANALOG VHS ARCHIVE
            </div>
            {badge ? (
              <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: accent, border: `3px solid ${accent}`, padding: "8px 20px", fontWeight: 700 }}>
                {badge}
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", fontSize: 24, letterSpacing: 4, color: "#FF718E", fontWeight: 700 }}>
                ● REC
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: accent, fontWeight: 700, marginBottom: 20 }}>
              {kicker}
            </div>
            <div style={{ display: "flex", fontSize: 92, lineHeight: 1.02, color: "#F1E5D0", fontWeight: 700, letterSpacing: -2 }}>
              {title}
            </div>
            {subtitle && (
              <div style={{ display: "flex", fontSize: 30, color: "#B8ADB4", marginTop: 22 }}>{subtitle}</div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", height: 28, width: "100%" }}>
              {BARS.map((c) => (
                <div key={c} style={{ flex: 1, backgroundColor: c, display: "flex" }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, fontSize: 22, letterSpacing: 3, color: "#B8ADB4", fontWeight: 700 }}>
              <div style={{ display: "flex" }}>PORTFOLIO OF RIZKY SANDI PRATAMA</div>
              <div style={{ display: "flex" }}>EST. 2023 · VHS · SP</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
