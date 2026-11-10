import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import AstraLokaCaseStudy from "@/components/astraloka/AstraLokaCaseStudy";
import { astraloka } from "@/lib/astraloka";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASTRALOKA — Smart Eco-Cultural Travel Planner | Rizky Sandi Pratama",
  description: `${astraloka.fullConcept} Juara 2 BMC Diponegoro Economics Project 2026.`,
  openGraph: {
    title: "ASTRALOKA — Case Study",
    description: astraloka.tagline,
    type: "article",
  },
};

export default function AstraLokaPage() {
  return (
    <main id="main" className="bg-[#0a1810]">
      <ArchiveNavbar />
      <AstraLokaCaseStudy />
      <ArchiveFooter />
    </main>
  );
}
