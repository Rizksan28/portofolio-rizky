import { notFound } from "next/navigation";
import ArchiveNavbar from "@/components/layout/ArchiveNavbar";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import ProjectDetailPage from "@/components/pages/ProjectDetailPage";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.filter((p) => p.slug !== "pharvia").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Rizky Sandi Pratama`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main id="main" className="bg-[#151319]">
      <ArchiveNavbar />
      <ProjectDetailPage project={project} prev={prev} next={next} />
      <ArchiveFooter />
    </main>
  );
}
