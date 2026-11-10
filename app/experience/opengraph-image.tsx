import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "Career timeline of Rizky Sandi Pratama";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "ON RECORD",
    title: "CAREER TIMELINE.",
    subtitle: "Organizations, internships, and leadership",
    accent: "#6FC6BE",
  });
}
