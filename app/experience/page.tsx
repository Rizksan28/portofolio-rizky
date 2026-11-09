import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import ExperiencePage from "@/components/pages/ExperiencePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Rizky Sandi Pratama",
  description: "Perjalanan karier dan organisasi Rizky Sandi Pratama.",
};

export default function Experience() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <ExperiencePage />
      <ArchiveFooter />
    </main>
  );
}
