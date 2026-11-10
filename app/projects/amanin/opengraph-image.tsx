import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "AMANIN \u2014 AI Anti-Scam Decision Assistant";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "DIGITAL THREAT FILES",
    title: "AMANIN.",
    subtitle: "AI Anti-Scam Decision Assistant",
    accent: "#38D5F3",
    badge: "RSP-005",
  });
}
