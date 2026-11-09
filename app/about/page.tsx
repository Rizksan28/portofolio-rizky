import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import AboutPage from "@/components/pages/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rizky Sandi Pratama",
  description: "Tentang Rizky Sandi Pratama — mahasiswa, builder, dan kompetitor di bidang teknologi dan bisnis digital.",
};

export default function About() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <AboutPage />
      <ArchiveFooter />
    </main>
  );
}
