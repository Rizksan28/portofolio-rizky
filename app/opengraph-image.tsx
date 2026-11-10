import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "Rizky Sandi Pratama \u2014 The Analog VHS Archive";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "PORTFOLIO · EST. 2023",
    title: "RIZKY SANDI PRATAMA.",
    subtitle: "Full-Stack Developer & UI/UX Enthusiast",
    accent: "#FF718E",
  });
}
