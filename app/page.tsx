import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveHero from "@/components/home/ArchiveHero";
import FeaturedTapes from "@/components/home/FeaturedTapes";
import HomePreview from "@/components/home/HomePreview";
import ArchiveFooter from "@/components/layout/ArchiveFooter";

export default function Home() {
  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <ArchiveHero />
      <FeaturedTapes />
      <HomePreview />
      <ArchiveFooter />
    </main>
  );
}
