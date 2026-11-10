"use client";
import Link from "next/link";
import { ArrowUpRight, FileText, Play } from "lucide-react";
import CRTMonitor from "@/components/analog/CRTMonitor";
import PasarAkarCassette from "@/components/pasarakar/PasarAkarCassette";
import { pasarakar } from "@/lib/pasarakar";

export default function PasarAkarHero({ onPlay }: { onPlay: () => void }) {
  const { gold, forest, deep, earth } = pasarakar.colors;

  return (
    <section className="relative overflow-hidden bg-[#151319] pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 70% at 80% 35%, ${forest}44, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 90%, ${gold}22, transparent 70%)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4] mb-8 md:mb-12">
          <span className="flex items-center gap-2 text-[#FF718E]">
            <span className="w-2 h-2 rounded-full bg-[#FF718E] animate-glow-pulse" aria-hidden="true" />
            REC
          </span>
          <span>{pasarakar.archiveId}</span>
          <span className="timecode" style={{ color: gold }}>00:06:00</span>
          <span className="ml-auto uppercase">Case study · Tape 006</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-tape text-[11px] font-bold tracking-[0.2em] mb-6">
              <span className="px-2 py-1 text-[#151319]" style={{ background: gold }}>{pasarakar.archiveId}</span>
              <span className="text-[#F1E5D0]">{pasarakar.category}</span>
              <span className="text-[#B8ADB4]">{pasarakar.year}</span>
            </div>
            <h1 className="text-[clamp(2.8rem,9vw,6.6rem)] leading-[0.88] mb-6">
              <span className="text-[#F1E5D0]">PASAR</span>
              <span style={{ color: "#3FBF7A", textShadow: "0 0 28px rgba(63,191,122,0.35)" }}>AKAR</span>
            </h1>
            <p className="font-display text-[clamp(1.05rem,2.2vw,1.55rem)] leading-[1.15] text-[#F1E5D0] mb-4 max-w-xl">
              {pasarakar.tagline[0]}
              <br />
              <span style={{ color: gold }}>{pasarakar.tagline[1]}</span>
            </p>
            <p className="text-base md:text-lg text-[#D6CDD2] leading-relaxed max-w-xl mb-6">{pasarakar.description}</p>
            <p className="font-tape text-[11px] tracking-[0.16em] text-[#B8ADB4] mb-8">TEAM · {pasarakar.teamName}</p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onPlay}
                className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-colors"
              >
                <Play size={14} fill="currentColor" aria-hidden="true" /> PLAY PROJECT
              </button>
              <a
                href={pasarakar.deckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2a1b05] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-[filter] hover:brightness-110"
                style={{ background: gold }}
              >
                <FileText size={14} aria-hidden="true" /> VIEW DOCUMENTATION
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
            </div>
            <p className="font-tape text-[11px] text-[#B8ADB4] mt-5 max-w-md">
              No public app has been released. The screens shown are prototype designs.{" "}
              <Link href="/achievements/nacops-7-2026" className="underline underline-offset-4 hover:text-[#F5BA60]">1st Place · Best Presentation →</Link>
            </p>
          </div>

          <div className="relative md:pb-12">
            <CRTMonitor
              label="NOW PLAYING · PASARAKAR"
              osd={
                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between font-tape text-[11px] md:text-[13px] font-bold text-[#F1E5D0]">
                  <div className="flex justify-between">
                    <span className="timecode text-[#6FC6BE] bg-black/55 px-1">PLAY ▶</span>
                    <span className="timecode bg-black/55 px-1">SP 0:06:00</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="bg-black/55 px-1">CH 06</span>
                    <span className="bg-black/55 px-1" style={{ color: gold }}>OFFLINE-FIRST</span>
                  </div>
                </div>
              }
            >
              <div className="absolute inset-0 overflow-hidden" style={{ background: `linear-gradient(135deg, ${deep} 0%, ${forest} 60%, ${earth} 130%)` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pasarakar.hero.src}
                  alt="Two PasarAkar prototype screens: the dashboard and the AgroPrice AI price prediction"
                  width={pasarakar.hero.width}
                  height={pasarakar.hero.height}
                  fetchPriority="high"
                  className="absolute left-1/2 top-[4%] h-[120%] w-auto max-w-none -translate-x-1/2"
                />
              </div>
            </CRTMonitor>
            <div className="relative mt-8 mx-auto w-[82%] max-w-[420px] rotate-[-4deg] md:absolute md:-bottom-2 md:-left-10 md:mt-0 md:w-[60%] md:max-w-none md:rotate-[-7deg] z-20">
              <PasarAkarCassette interactive={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
