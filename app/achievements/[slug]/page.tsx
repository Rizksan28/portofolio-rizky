import { notFound } from "next/navigation";
import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import AchievementDetailPage from "@/components/pages/AchievementDetailPage";
import { awards } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return awards.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const award = awards.find((a) => a.slug === slug);
  if (!award) return { title: "Achievement Not Found" };
  return {
    title: `${award.title} | Rizky Sandi Pratama`,
    description: award.desc,
  };
}

export default async function AchievementDetail({ params }: Props) {
  const { slug } = await params;
  const award = awards.find((a) => a.slug === slug);
  if (!award) notFound();

  const currentIndex = awards.findIndex((a) => a.slug === slug);
  const prev = currentIndex > 0 ? awards[currentIndex - 1] : null;
  const next = currentIndex < awards.length - 1 ? awards[currentIndex + 1] : null;

  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <AchievementDetailPage award={award} prev={prev} next={next} />
      <ArchiveFooter />
    </main>
  );
}
