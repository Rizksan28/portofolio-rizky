import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import ProjectsPage from "@/components/pages/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rizky Sandi Pratama",
  description: "Semua proyek pengembangan web dan aplikasi oleh Rizky Sandi Pratama.",
};

export default function Projects() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <ProjectsPage />
      <ArchiveFooter />
    </main>
  );
}
