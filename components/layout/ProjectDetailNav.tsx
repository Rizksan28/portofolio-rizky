"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export interface Chapter {
  id: string;
  n: string;
  label: string;
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ProjectDetailNav({ chapters, accent }: { chapters: Chapter[]; accent: string }) {
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [chapters]);

  return (
    <div className="sticky top-[70px] z-40 bg-[#0d0b10]/95 backdrop-blur border-y border-white/10">
      <motion.div className="absolute left-0 top-0 h-[3px] w-full origin-left" style={{ scaleX: progress, background: accent }} aria-hidden="true" />
      <nav aria-label="Case study chapters" className="max-w-6xl mx-auto px-6 flex items-center gap-1 overflow-x-auto py-2">
        <Link href="/projects" aria-label="Back to the project archive" className="shrink-0 hidden md:flex items-center gap-2 mr-3 font-tape text-[11px] font-bold tracking-[0.14em] text-[#B8ADB4] hover:text-[#F1E5D0] whitespace-nowrap">
          <ArrowLeft size={13} aria-hidden="true" /> ARCHIVE
        </Link>
        {chapters.map((c) => (
          <button
            key={c.id}
            onClick={() => scrollToSection(c.id)}
            aria-current={active === c.id ? "true" : undefined}
            className={`font-tape text-[11px] font-bold tracking-[0.14em] px-3 py-2 whitespace-nowrap transition-colors ${active === c.id ? "bg-[#F1E5D0] text-[#151319]" : "text-[#B8ADB4] hover:text-[#F1E5D0]"}`}
          >
            {c.n} {c.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
