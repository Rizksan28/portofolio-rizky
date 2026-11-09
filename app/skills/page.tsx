import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import SkillsPageComponent from "@/components/pages/SkillsPageComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Rizky Sandi Pratama",
  description: "Teknologi, tools, dan keahlian yang dikuasai Rizky Sandi Pratama.",
};

export default function SkillsPage() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <SkillsPageComponent />
      <ArchiveFooter />
    </main>
  );
}
