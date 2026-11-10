import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "About Rizky Sandi Pratama";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "BEHIND THE TAPE",
    title: "THE CREATOR.",
    subtitle: "Information Systems \u00b7 Telkom University Jakarta",
    accent: "#B18BF7",
  });
}
