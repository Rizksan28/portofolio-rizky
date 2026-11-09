import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import PharviaCaseStudy from "@/components/pharvia/PharviaCaseStudy";
import { pharvia } from "@/lib/pharvia";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PHARVIA — Digital Pharmaceutical Take-Back Platform | Rizky Sandi Pratama",
  description: `${pharvia.subtitle}. ${pharvia.summary} Juara 1 Business Model Canvas, USK Pharmacy Fair 2026.`,
  openGraph: {
    title: "PHARVIA — Case Study",
    description: pharvia.tagline,
    type: "article",
    images: [{ url: pharvia.heroImage.src, width: pharvia.heroImage.width, height: pharvia.heroImage.height }],
  },
};

export default function PharviaPage() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <PharviaCaseStudy />
      <ArchiveFooter />
    </main>
  );
}
