import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import ContactPage from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rizky Sandi Pratama",
  description: "Hubungi Rizky Sandi Pratama untuk kolaborasi, proyek, atau diskusi.",
};

export default function Contact() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <ContactPage />
      <ArchiveFooter compact />
    </main>
  );
}
