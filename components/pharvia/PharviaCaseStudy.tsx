"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ColorBars from "@/components/analog/ColorBars";
import PharviaHero from "@/components/pharvia/PharviaHero";
import { Problem, Solution, Story } from "@/components/pharvia/Narrative";
import { Features, Gallery } from "@/components/pharvia/Showcase";
import { Achievement, BusinessModel, LiveExperience, NextTape, Team } from "@/components/pharvia/Business";
import { pharvia } from "@/lib/pharvia";

const chapters = [
  { id: "story", n: "01", label: "STORY" },
  { id: "problem", n: "02", label: "PROBLEM" },
  { id: "solution", n: "03", label: "SOLUTION" },
  { id: "features", n: "04", label: "FEATURES" },
  { id: "screens", n: "05", label: "SCREENS" },
  { id: "business", n: "06", label: "BUSINESS" },
  { id: "team", n: "07", label: "TEAM" },
  { id: "award", n: "08", label: "AWARD" },
  { id: "live", n: "09", label: "LIVE" },
];

export default function PharviaCaseStudy() {
  const [active, setActive] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    return () => {
      obs.disconnect();
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const play = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      go("story");
      return;
    }
    setLoading(true);
    timer.current = setTimeout(() => {
      go("story");
      timer.current = setTimeout(() => setLoading(false), 350);
    }, 900);
  }, [go]);

  return (
    <>
      {loading && (
        <div role="status" aria-live="polite" className="fixed inset-0 z-[96] bg-[#07060a] flex flex-col items-center justify-center gap-6 px-6">
          <ColorBars className="absolute inset-x-0 top-0 h-[38%] opacity-90" />
          <p className="relative font-display text-[clamp(1.8rem,5vw,3.2rem)] text-[#F1E5D0]">
            LOADING TAPE<span className="animate-glow-pulse">…</span>
          </p>
          <div className="relative w-64 max-w-full h-2 bg-white/15 overflow-hidden" aria-hidden="true">
            <motion.span className="block h-full bg-[#2BD4B4]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.9, ease: "linear" }} />
          </div>
          <p className="relative font-tape text-[12px] tracking-[0.22em] text-[#2BD4B4]">▶ PLAY · RSP-001</p>
        </div>
      )}

      <PharviaHero onPlay={play} />

      <div className="sticky top-[70px] z-40 bg-[#0d0b10]/95 backdrop-blur border-y border-white/10">
        <motion.div className="absolute left-0 top-0 h-[3px] w-full origin-left" style={{ scaleX: progress, background: pharvia.colors.teal }} aria-hidden="true" />
        <nav aria-label="Case study chapters" className="max-w-6xl mx-auto px-6 flex items-center gap-1 overflow-x-auto py-2">
          <Link href="/projects" aria-label="Back to the project archive" className="shrink-0 hidden md:flex items-center gap-2 mr-3 font-tape text-[11px] font-bold tracking-[0.14em] text-[#B8ADB4] hover:text-[#F1E5D0] whitespace-nowrap">
            <ArrowLeft size={13} aria-hidden="true" /> ARCHIVE
          </Link>
          {chapters.map((c) => (
            <button
              key={c.id}
              onClick={() => go(c.id)}
              aria-current={active === c.id ? "true" : undefined}
              className={`font-tape text-[11px] font-bold tracking-[0.14em] px-3 py-2 whitespace-nowrap transition-colors ${active === c.id ? "bg-[#F1E5D0] text-[#151319]" : "text-[#B8ADB4] hover:text-[#F1E5D0]"}`}
            >
              {c.n} {c.label}
            </button>
          ))}
        </nav>
      </div>

      <Story />
      <Problem />
      <Solution />
      <Features />
      <Gallery />
      <BusinessModel />
      <Team />
      <Achievement />
      <LiveExperience />
      <NextTape />
    </>
  );
}
