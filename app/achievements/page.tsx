import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import AchievementsPage from "@/components/pages/AchievementsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Rizky Sandi Pratama",
  description: "Penghargaan, sertifikasi, dan pencapaian kompetisi nasional Rizky Sandi Pratama.",
};

export default function Achievements() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <AchievementsPage />
      <ArchiveFooter />
    </main>
  );
}
