import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "PHARVIA \u2014 Pharmaceutical Take-Back & Traceability";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "TAKE-BACK REGISTRY",
    title: "PHARVIA.",
    subtitle: "Digital Pharmaceutical Take-Back & Traceability",
    accent: "#2BD4B4",
    badge: "RSP-001",
  });
}
