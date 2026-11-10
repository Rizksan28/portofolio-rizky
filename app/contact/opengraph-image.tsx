import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "Contact Rizky Sandi Pratama";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "RECORDING STUDIO",
    title: "RECORD A MESSAGE.",
    subtitle: "Open for collaboration, internships, and ideas",
    accent: "#FF718E",
  });
}
