import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import AmaninCaseStudy from "@/components/amanin/AmaninCaseStudy";
import { amanin } from "@/lib/amanin";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMANIN — AI Anti-Scam Decision Assistant | Rizky Sandi Pratama",
  description: `${amanin.fullConcept} Konsep dan prototipe dari tim ${amanin.teamName}.`,
  openGraph: {
    title: "AMANIN — Case Study",
    description: amanin.tagline,
    type: "article",
    images: [{ url: amanin.assets.overview.src, width: amanin.assets.overview.width, height: amanin.assets.overview.height }],
  },
};

export default function AmaninPage() {
  return (
    <main id="main" className="bg-[#0b1220]">
      <ArchiveNavbar />
      <AmaninCaseStudy />
      <ArchiveFooter />
    </main>
  );
}
