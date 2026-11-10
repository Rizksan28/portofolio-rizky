import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "Project archive of Rizky Sandi Pratama";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "TAPE COLLECTION",
    title: "PROJECT ARCHIVE.",
    subtitle: "Every build, on record",
    accent: "#F5BA60",
  });
}
