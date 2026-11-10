import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import PasarAkarCaseStudy from "@/components/pasarakar/PasarAkarCaseStudy";
import { pasarakar } from "@/lib/pasarakar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PASARAKAR — Agritech Super-App | Rizky Sandi Pratama",
  description: `${pasarakar.fullConcept} Juara 1 dan Presentasi Terbaik, NACOPS 7.0 2026.`,
  openGraph: {
    title: "PASARAKAR — Case Study",
    description: pasarakar.tagline.join(" "),
    type: "article",
    images: [{ url: pasarakar.hero.src, width: pasarakar.hero.width, height: pasarakar.hero.height }],
  },
};

export default function PasarAkarPage() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <PasarAkarCaseStudy />
      <ArchiveFooter />
    </main>
  );
}
