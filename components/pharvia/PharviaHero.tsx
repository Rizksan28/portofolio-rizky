"use client";
import { ArrowUpRight, Play } from "lucide-react";
import CRTMonitor from "@/components/analog/CRTMonitor";
import PharviaCassette from "@/components/pharvia/PharviaCassette";
import { pharvia } from "@/lib/pharvia";

export default function PharviaHero({ onPlay }: { onPlay: () => void }) {
  const { teal, navy, blue } = pharvia.colors;

  return (
    <section className="relative overflow-hidden bg-[#151319] pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 70% at 80% 35%, ${teal}2e, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 90%, ${blue}26, transparent 70%)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4] mb-8 md:mb-12">
          <span className="flex items-center gap-2 text-[#FF718E]">
            <span className="w-2 h-2 rounded-full bg-[#FF718E] animate-glow-pulse" aria-hidden="true" />
            REC
          </span>
          <span>{pharvia.archiveId}</span>
          <span className="timecode" style={{ color: teal }}>00:01:00</span>
          <span className="ml-auto uppercase">Case study · Tape 001</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-tape text-[11px] font-bold tracking-[0.2em] mb-6">
              <span className="px-2 py-1 text-[#151319]" style={{ background: teal }}>{pharvia.archiveId}</span>
              <span className="text-[#F1E5D0]">{pharvia.category}</span>
              <span className="text-[#B8ADB4]">{pharvia.year}</span>
            </div>
            <h1 className="text-[clamp(3.4rem,10vw,7.6rem)] leading-[0.88] mb-6">
              <span className="text-[#F1E5D0]">PHAR</span>
              <span style={{ color: teal, textShadow: `0 0 28px ${teal}55` }}>VIA</span>
            </h1>
            <p className="font-display text-[clamp(1.1rem,2.3vw,1.6rem)] leading-[1.15] text-[#F1E5D0] mb-4 max-w-xl">{pharvia.tagline}</p>
            <p className="text-base md:text-lg text-[#D6CDD2] leading-relaxed max-w-xl mb-8">
              {pharvia.subtitle}. {pharvia.summary}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onPlay}
                className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-colors"
              >
                <Play size={14} fill="currentColor" aria-hidden="true" /> PLAY PROJECT
              </button>
              <a
                href={pharvia.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#06231d] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-[filter] hover:brightness-110"
                style={{ background: teal }}
              >
                LAUNCH LIVE APP <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <p className="font-tape text-[11px] text-[#B8ADB4] mt-5 max-w-md">
              The live app is a prototype. Some data and flows in the demo are sample or simulated.
            </p>
          </div>

          <div className="relative md:pb-12">
            <CRTMonitor
              label="NOW PLAYING · PHARVIA"
              osd={
                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between font-tape text-[11px] md:text-[13px] font-bold text-[#F1E5D0]">
                  <div className="flex justify-between">
                    <span className="timecode text-[#6FC6BE] bg-black/55 px-1">PLAY ▶</span>
                    <span className="timecode bg-black/55 px-1">SP 0:01:00</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="bg-black/55 px-1">CH 01</span>
                    <span className="bg-black/55 px-1 text-[#F5BA60]">TRACKING OK</span>
                  </div>
                </div>
              }
            >
              <div className="absolute inset-0 overflow-hidden" style={{ background: `linear-gradient(135deg, ${navy} 0%, #0c5560 55%, #118a76 100%)` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pharvia.heroImage.src}
                  alt="Two Pharvia app screens: the home dashboard and the medicine scanner"
                  width={pharvia.heroImage.width}
                  height={pharvia.heroImage.height}
                  fetchPriority="high"
                  className="absolute left-1/2 top-[3%] h-[128%] w-auto max-w-none -translate-x-1/2"
                />
              </div>
            </CRTMonitor>
            <div className="relative mt-8 mx-auto w-[82%] max-w-[420px] rotate-[-4deg] md:absolute md:-bottom-2 md:-left-10 md:mt-0 md:w-[60%] md:max-w-none md:rotate-[-7deg] z-20">
              <PharviaCassette />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
