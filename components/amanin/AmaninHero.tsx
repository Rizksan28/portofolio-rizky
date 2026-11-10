"use client";
import { ArrowUpRight, Play, ShieldAlert } from "lucide-react";
import CRTMonitor from "@/components/analog/CRTMonitor";
import AmaninCassette from "@/components/amanin/AmaninCassette";
import { amanin } from "@/lib/amanin";

export default function AmaninHero({ onExplore }: { onExplore: () => void }) {
  const { cyan, blue, navy, amber } = amanin.colors;
  const rows: [string, string][] = [
    ["CASE FILE", amanin.archiveId],
    ["YEAR", amanin.year],
    ["CATEGORY", "Digital Innovation"],
    ["FIELD", amanin.category],
    ["TEAM", amanin.teamName],
    ["STATUS", "Concept + working prototype"],
  ];

  return (
    <section className="relative overflow-hidden bg-[#0b1220] pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 55% 65% at 82% 30%, ${blue}33, transparent 70%), radial-gradient(ellipse 40% 45% at 8% 95%, ${cyan}1f, transparent 70%)` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#38D5F3 1px, transparent 1px), linear-gradient(90deg, #38D5F3 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4] mb-8 md:mb-12">
          <span className="flex items-center gap-2 text-[#FF718E]">
            <span className="w-2 h-2 rounded-full bg-[#FF718E] animate-glow-pulse" aria-hidden="true" /> REC
          </span>
          <span>{amanin.archiveId}</span>
          <span className="timecode" style={{ color: cyan }}>00:05:00</span>
          <span className="ml-auto uppercase">Digital Threat Files · Case study</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] items-center">
          <div>
            <p className="inline-flex items-center gap-2 font-tape text-[11px] font-bold tracking-[0.22em] px-2.5 py-1 mb-6" style={{ color: cyan, border: `1px solid ${cyan}66`, background: `${cyan}14` }}>
              <ShieldAlert size={13} aria-hidden="true" /> CLASSIFICATION: PUBLIC DEMO
            </p>
            <h1 className="text-[clamp(3.4rem,10vw,7.6rem)] leading-[0.88] mb-6 text-[#F1E5D0]">
              AMANIN<span style={{ color: cyan }}>.</span>
            </h1>
            <p className="font-display text-[clamp(1.5rem,3.6vw,2.6rem)] leading-[1.02] mb-5" style={{ color: cyan }}>
              {amanin.heroLine[0]}<br />
              <span className="text-[#F1E5D0]">{amanin.heroLine[1]}</span>
            </p>
            <p className="text-base md:text-lg text-[#D6CDD2] leading-relaxed max-w-xl mb-8">{amanin.subtitle} {amanin.tagline}</p>

            <div className="flex flex-wrap gap-3">
              <button onClick={onExplore} className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-colors">
                <Play size={14} fill="currentColor" aria-hidden="true" /> EXPLORE CASE STUDY
              </button>
              <a href={amanin.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#04202a] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-[filter] hover:brightness-110" style={{ background: cyan }}>
                LAUNCH LIVE APP <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <p className="font-tape text-[11px] text-[#B8ADB4] mt-5 max-w-md leading-relaxed">
              Safety note: never enter a real PIN, OTP, password, or private message into any demo. Results are risk indications, not a guarantee of safety.
            </p>
          </div>

          <div className="relative md:pb-14">
            <CRTMonitor
              aspect="aspect-[16/9]"
              label="EVIDENCE MONITOR · AMANIN"
              osd={
                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between font-tape text-[11px] md:text-[13px] font-bold text-[#E8F7FF]">
                  <div className="flex justify-between">
                    <span className="timecode bg-black/60 px-1" style={{ color: cyan }}>● PLAY ▶</span>
                    <span className="timecode bg-black/60 px-1">CASE {amanin.archiveId}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="bg-black/60 px-1">CH 05</span>
                    <span className="bg-black/60 px-1" style={{ color: amber }}>RISK INDICATION ONLY</span>
                  </div>
                </div>
              }
            >
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}, #0a1424)` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={amanin.assets.overview.src}
                  alt="Five AMANIN app screens: landing page, QR scam check, chat scam check, smart recommendation and cyber news"
                  width={amanin.assets.overview.width}
                  height={amanin.assets.overview.height}
                  fetchPriority="high"
                  className="absolute inset-x-[3%] top-[12%] bottom-[12%] w-[94%] h-[76%] object-contain"
                />
              </div>
            </CRTMonitor>
            <div className="relative mt-8 mx-auto w-[82%] max-w-[420px] rotate-[-4deg] md:absolute md:-bottom-3 md:-left-10 md:mt-0 md:w-[58%] md:max-w-none md:rotate-[-7deg] z-20">
              <AmaninCassette interactive={false} />
            </div>
          </div>
        </div>

        <dl className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-6 gap-px bg-white/15 border border-white/15 font-tape">
          {rows.map(([k, v]) => (
            <div key={k} className="bg-[#0d1626] px-4 py-3">
              <dt className="text-[10px] tracking-[0.2em] text-[#B8ADB4]">{k}</dt>
              <dd className="text-[12px] font-semibold text-[#F1E5D0] mt-1 leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
