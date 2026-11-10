import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "Tech stack of Rizky Sandi Pratama";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "EQUIPMENT ROOM",
    title: "TECH STACK.",
    subtitle: "Tools and technologies in the rack",
    accent: "#F5BA60",
  });
}
