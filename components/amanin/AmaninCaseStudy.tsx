"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectDetailNav, { scrollToSection } from "@/components/layout/ProjectDetailNav";
import ColorBars from "@/components/analog/ColorBars";
import { ChapterHead } from "@/components/pharvia/Narrative";
import AmaninHero from "@/components/amanin/AmaninHero";
import { Idea, Solution, Story, Threat } from "@/components/amanin/AmaninNarrative";
import { Experience, Features, Gallery, Personas } from "@/components/amanin/AmaninShowcase";
import { Achievement, BusinessModel, Future, LiveDemo, NextTape, Team } from "@/components/amanin/AmaninBusiness";
import { amanin } from "@/lib/amanin";

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

const { cyan, blue, amber, green, red } = amanin.colors;

export default function AmaninCaseStudy() {
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
    if (reduce) { go("story"); return; }
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
            <motion.span className="block h-full" style={{ background: cyan }} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.9, ease: "linear" }} />
          </div>
          <p className="relative font-tape text-[12px] tracking-[0.22em]" style={{ color: cyan }}>▶ PLAY · {amanin.archiveId}</p>
        </div>
      )}

      <AmaninHero onPlay={play} />
      <ProjectDetailNav chapters={chapters} accent={cyan} />

      <section id="story" className="scroll-mt-36 bg-[#0d1626] border-y border-white/[0.06] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <ChapterHead n="01" label="THE STORY" color={cyan} title="FROM SUSPICIOUS TO SAFER." />
          <Story />
        </div>
      </section>

      <section id="problem" className="scroll-mt-36 bg-[#0b1220] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="02" label="THE PROBLEM" color={red} title="EVIDENCE OF A DIGITAL CRIME WAVE." />
          <Threat />
        </div>
      </section>

      <section id="solution" className="scroll-mt-36 bg-[#0d1626] border-y border-white/[0.06] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="03" label="THE SOLUTION" color={green} title="FOUR STEPS, FIVE SAFEGUARDS." />
          <Idea />
          <Solution />
        </div>
      </section>

      <section id="features" className="scroll-mt-36 bg-[#0b1220] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="04" label="FEATURE FILES" color={cyan} title="EIGHT FILES. SIX IN THE PROTOTYPE." />
          <Features />
        </div>
      </section>

      <section id="screens" className="scroll-mt-36 bg-[#0d1626] border-y border-white/[0.06] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="05" label="PRODUCT EXPERIENCE" color={blue} title="THE APP, FRAME BY FRAME." />
          <Gallery />
          <Experience />
        </div>
      </section>

      <section id="business" className="scroll-mt-36 bg-[#0b1220] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="06" label="BUSINESS MODEL" color={amber} title="WHO IT IS FOR, AND HOW IT COULD SUSTAIN ITSELF." />
          <Personas />
          <BusinessModel />
        </div>
      </section>

      <section id="team" className="scroll-mt-36 bg-[#0d1626] border-y border-white/[0.06] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="07" label="THE TEAM" color={blue} title="HALTE TERMINAL RAWAMANGUN." />
          <Team />
        </div>
      </section>

      <section id="award" className="scroll-mt-36 bg-[#0b1220] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 25% 45%, rgba(56,213,243,0.10), transparent 70%)" }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ChapterHead n="08" label="HALL OF FAME ENTRY" color="#F5BA60" title="AN AWARD-WINNING PROPOSAL." />
          <Achievement />
        </div>
      </section>

      <section id="live" className="scroll-mt-36 bg-[#0d1626] border-y border-white/[0.06] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="09" label="LIVE" color={green} title="WHAT IS NEXT, AND TRY IT." />
          <Future />
          <LiveDemo />
        </div>
      </section>

      <NextTape />
    </>
  );
}
