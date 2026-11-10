import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "Awards and certificates of Rizky Sandi Pratama";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "HALL OF FAME",
    title: "AWARDS & CERTIFICATES.",
    subtitle: "Competition wins, on the trophy wall",
    accent: "#FF718E",
  });
}
