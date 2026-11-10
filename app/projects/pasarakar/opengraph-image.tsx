import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "PasarAkar \u2014 Agritech super-app for villages";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "AGRITECH",
    title: "PASARAKAR.",
    subtitle: "Dari desa untuk Indonesia",
    accent: "#D9A441",
    badge: "RSP-006",
  });
}
