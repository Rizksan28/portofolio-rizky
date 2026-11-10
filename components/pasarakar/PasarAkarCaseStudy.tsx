"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ColorBars from "@/components/analog/ColorBars";
import ProjectDetailNav, { scrollToSection } from "@/components/layout/ProjectDetailNav";
import PasarAkarHero from "@/components/pasarakar/PasarAkarHero";
import { Problem, Solution, Story } from "@/components/pasarakar/PasarAkarNarrative";
import { Features, Screens } from "@/components/pasarakar/PasarAkarShowcase";
import { Award, BusinessModel, Live, NextTape, Team } from "@/components/pasarakar/PasarAkarBusiness";
import { pasarakar } from "@/lib/pasarakar";

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

export default function PasarAkarCaseStudy() {
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const play = useCallback(() => {
    if (loading) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollToSection("story");
      return;
    }
    setLoading(true);
    timer.current = setTimeout(() => {
      scrollToSection("story");
      timer.current = setTimeout(() => setLoading(false), 350);
    }, 900);
  }, [loading]);

  return (
    <>
      {loading && (
        <div role="status" aria-live="polite" className="fixed inset-0 z-[96] bg-[#07060a] flex flex-col items-center justify-center gap-6 px-6">
          <ColorBars className="absolute inset-x-0 top-0 h-[38%] opacity-90" />
          <p className="relative font-display text-[clamp(1.8rem,5vw,3.2rem)] text-[#F1E5D0]">
            LOADING TAPE<span className="animate-glow-pulse">…</span>
          </p>
          <div className="relative w-64 max-w-full h-2 bg-white/15 overflow-hidden" aria-hidden="true">
            <motion.span className="block h-full" style={{ background: pasarakar.colors.gold }} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.9, ease: "linear" }} />
          </div>
          <p className="relative font-tape text-[12px] tracking-[0.22em]" style={{ color: pasarakar.colors.gold }}>▶ PLAY · {pasarakar.archiveId}</p>
        </div>
      )}

      <PasarAkarHero onPlay={play} />
      <ProjectDetailNav chapters={chapters} accent={pasarakar.colors.gold} />

      <Story />
      <Problem />
      <Solution />
      <Features />
      <Screens />
      <BusinessModel />
      <Team />
      <Award />
      <Live />
      <NextTape />
    </>
  );
}
