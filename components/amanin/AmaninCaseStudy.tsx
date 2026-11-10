"use client";
import AmaninHero from "@/components/amanin/AmaninHero";
import ProjectDetailNav, { scrollToSection } from "@/components/layout/ProjectDetailNav";
import { ChapterHead } from "@/components/pharvia/Narrative";
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
  return (
    <>
      <AmaninHero onExplore={() => scrollToSection("story")} />
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

      <section id="award" className="scroll-mt-36 bg-[#0b1220] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="08" label="AWARD" color={cyan} title="RECOGNIZED BY THE JUDGES." />
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
