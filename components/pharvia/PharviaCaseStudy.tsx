"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectDetailNav, { scrollToSection } from "@/components/layout/ProjectDetailNav";
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
  const [loading, setLoading] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const go = useCallback((id: string) => scrollToSection(id), []);

  const play = useCallback(() => {
    if (loading) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      go("story");
      return;
    }
    setLoading(true);
    timers.current.forEach(clearTimeout);
    timers.current = [];
    timers.current.push(
      setTimeout(() => {
        go("story");
        timers.current.push(setTimeout(() => setLoading(false), 350));
      }, 900),
      setTimeout(() => setLoading(false), 2400),
    );
  }, [go, loading]);

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

      <ProjectDetailNav chapters={chapters} accent={pharvia.colors.teal} />

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
