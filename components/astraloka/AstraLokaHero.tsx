"use client";
import { Play } from "lucide-react";
import CRTMonitor from "@/components/analog/CRTMonitor";
import AstraLokaCassette from "@/components/astraloka/AstraLokaCassette";
import { astraloka } from "@/lib/astraloka";

export default function AstraLokaHero({ onPlay }: { onPlay: () => void }) {
  const { green, sage, rust, forest } = astraloka.colors;

  return (
    <section className="relative overflow-hidden bg-[#0a1810] pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 70% at 80% 35%, ${green}2e, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 90%, ${sage}26, transparent 70%)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4] mb-8 md:mb-12">
          <span className="flex items-center gap-2 text-[#FF718E]">
            <span className="w-2 h-2 rounded-full bg-[#FF718E] animate-glow-pulse" aria-hidden="true" />
            REC
          </span>
          <span>{astraloka.archiveId}</span>
          <span className="timecode" style={{ color: sage }}>00:07:00</span>
          <span className="ml-auto uppercase">Case study · Tape 007</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-tape text-[11px] font-bold tracking-[0.2em] mb-6">
              <span className="px-2 py-1 text-[#0a1810]" style={{ background: sage }}>{astraloka.archiveId}</span>
              <span className="text-[#F1E5D0]">{astraloka.category}</span>
              <span className="text-[#B8ADB4]">{astraloka.year}</span>
            </div>
            <h1 className="text-[clamp(3.4rem,10vw,7.6rem)] leading-[0.88] mb-6">
              <span className="text-[#F1E5D0]">ASTRA</span>
              <span style={{ color: sage, textShadow: `0 0 28px ${sage}55` }}>LOKA</span>
            </h1>
            <p className="font-display text-[clamp(1.1rem,2.3vw,1.6rem)] leading-[1.15] text-[#F1E5D0] mb-4 max-w-xl">{astraloka.tagline}</p>
            <p className="text-base md:text-lg text-[#D6CDD2] leading-relaxed max-w-xl mb-8">
              {astraloka.subtitle}. {astraloka.summary}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onPlay}
                className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-colors"
              >
                <Play size={14} fill="currentColor" aria-hidden="true" /> PLAY PROJECT
              </button>
            </div>
            <p className="font-tape text-[11px] text-[#B8ADB4] mt-5 max-w-md">
              AstraLoka is an award-winning business proposal. Some data and projections are from the competition pitch deck.
            </p>
          </div>

          <div className="relative md:pb-12">
            <CRTMonitor
              label="NOW PLAYING · ASTRALOKA"
              osd={
                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between font-tape text-[11px] md:text-[13px] font-bold text-[#F1E5D0]">
                  <div className="flex justify-between">
                    <span className="timecode bg-black/55 px-1" style={{ color: sage }}>PLAY ▶</span>
                    <span className="timecode bg-black/55 px-1">SP 0:07:00</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="bg-black/55 px-1">CH 07</span>
                    <span className="bg-black/55 px-1 text-[#F5BA60]">★ 2ND PLACE BMC</span>
                  </div>
                </div>
              }
            >
              <div className="absolute inset-0 overflow-hidden" style={{ background: `linear-gradient(135deg, ${forest} 0%, #0c2a18 55%, ${green}88 100%)` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={astraloka.heroImage.src}
                  alt="Five AstraLoka app screens: Home, Smart Itinerary, Cultural Map, Travel Plan, and Explore"
                  width={astraloka.heroImage.width}
                  height={astraloka.heroImage.height}
                  fetchPriority="high"
                  className="absolute left-1/2 top-[3%] h-[128%] w-auto max-w-none -translate-x-1/2"
                />
              </div>
            </CRTMonitor>
            <div className="relative mt-8 mx-auto w-[82%] max-w-[420px] rotate-[-4deg] md:absolute md:-bottom-2 md:-left-10 md:mt-0 md:w-[60%] md:max-w-none md:rotate-[-7deg] z-20">
              <AstraLokaCassette interactive={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
