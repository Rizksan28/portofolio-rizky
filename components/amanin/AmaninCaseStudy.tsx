"use client";
import AmaninHero from "@/components/amanin/AmaninHero";
import ProjectDetailNav, { scrollToSection } from "@/components/layout/ProjectDetailNav";
import { ChapterHead } from "@/components/pharvia/Narrative";
import { Idea, Solution, Threat } from "@/components/amanin/AmaninNarrative";
import { Experience, Features, Gallery, Personas } from "@/components/amanin/AmaninShowcase";
import { Achievement, BusinessModel, Future, LiveDemo, NextTape, Team } from "@/components/amanin/AmaninBusiness";
import { amanin } from "@/lib/amanin";

const chapters = [
  { id: "story", n: "01", label: "STORY" },
  { id: "features", n: "02", label: "FEATURES" },
  { id: "business", n: "03", label: "BUSINESS" },
  { id: "team", n: "04", label: "TEAM" },
  { id: "award", n: "05", label: "AWARD" },
  { id: "live", n: "06", label: "LIVE" },
];

const { cyan, blue, amber, green } = amanin.colors;

export default function AmaninCaseStudy() {
  return (
    <>
      <AmaninHero onExplore={() => scrollToSection("story")} />
      <ProjectDetailNav chapters={chapters} accent={cyan} />

      <section id="story" className="scroll-mt-36 bg-[#0d1626] border-y border-white/[0.06] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="01" label="THE STORY" color={cyan} title="FROM SUSPICIOUS TO SAFER." />
          <Threat />
          <Idea />
          <Solution />
        </div>
      </section>

      <section id="features" className="scroll-mt-36 bg-[#0b1220] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="02" label="FEATURES" color={blue} title="WHAT THE PROTOTYPE DOES." />
          <Features />
          <Gallery />
          <Experience />
        </div>
      </section>

      <section id="business" className="scroll-mt-36 bg-[#0d1626] border-y border-white/[0.06] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="03" label="BUSINESS MODEL" color={amber} title="WHO IT IS FOR, AND HOW IT COULD SUSTAIN ITSELF." />
          <Personas />
          <BusinessModel />
        </div>
      </section>

      <section id="team" className="scroll-mt-36 bg-[#0b1220] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="04" label="THE TEAM" color={blue} title="HALTE TERMINAL RAWAMANGUN." />
          <Team />
        </div>
      </section>

      <section id="award" className="scroll-mt-36 bg-[#0b1220] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="05" label="AWARD" color={cyan} title="RECOGNIZED BY THE JUDGES." />
          <Achievement />
        </div>
      </section>

      <section id="live" className="scroll-mt-36 bg-[#0d1626] border-y border-white/[0.06] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ChapterHead n="06" label="LIVE" color={green} title="WHAT IS NEXT, AND TRY IT." />
          <Future />
          <LiveDemo />
        </div>
      </section>

      <NextTape />
    </>
  );
}
