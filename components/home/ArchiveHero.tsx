"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import CRTMonitor from "@/components/analog/CRTMonitor";
import ColorBars from "@/components/analog/ColorBars";
import RecordingIndicator from "@/components/analog/RecordingIndicator";

export default function ArchiveHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-[#151319] overflow-hidden pt-20">
      <div className="absolute inset-0 film-grain pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y: contentY, opacity: fade }} className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        {/* Meta bar */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <RecordingIndicator />
            <span className="font-tape text-[11px] text-[#B8ADB4]/70 tracking-[0.2em]">CH-01</span>
          </div>
          <span className="font-tape text-[11px] text-[#B8ADB4]/65 tracking-[0.15em]">TAPE 001 OF 001</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-6">
              <span className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#B18BF7] bg-[#B18BF7]/[0.12] px-3 py-1.5 border border-[#B18BF7]/40">
                THE ANALOG VHS ARCHIVE
              </span>
            </motion.div>

            <div className="mb-6">
              {["RIZKY", "SANDI", "PRATAMA."].map((w, i) => (
                <motion.div key={w} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                  <h1 className={`text-[clamp(3.2rem,9vw,7rem)] leading-[0.9] ${i === 2 ? "text-[#FF718E]" : "text-[#F1E5D0]"}`}>{w}</h1>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="font-tape text-[15px] font-semibold text-[#F5BA60] tracking-wide mb-4">
              Full-Stack Developer &amp; UI/UX Enthusiast
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-base md:text-lg text-[#D6CDD2] leading-relaxed max-w-lg mb-8">
              Saya membangun solusi digital melalui perpaduan teknologi, desain, dan pemecahan masalah yang berorientasi pada pengguna.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap gap-3">
              <Link href="/projects" className="group flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#FF718E] text-[#151319] hover:text-white font-tape text-[12px] font-bold tracking-[0.1em] px-6 py-3.5 rounded-md transition-all duration-200">
                <span className="w-0 h-0 border-l-[6px] border-l-current border-y-[4px] border-y-transparent" />
                EXPLORE TAPES
              </Link>
              <Link href="/about" className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#F1E5D0] font-tape text-[12px] font-bold tracking-[0.1em] px-6 py-3.5 rounded-md transition-all duration-200">
                ABOUT THE CREATOR
              </Link>
            </motion.div>
          </div>

          {/* Right — CRT */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex justify-center lg:justify-end">
            <CRTMonitor
              className="w-full max-w-md"
              label="RSP MONITOR · CH-01"
              osd={
                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between font-tape text-[11px] md:text-[13px] font-bold text-white">
                  <div className="flex justify-between"><span className="timecode text-[#6FC6BE] bg-black/55 px-1">PLAY ▶</span><span className="timecode bg-black/55 px-1">SP 0:00:01</span></div>
                  <span className="bg-black/55 px-1 w-fit">CH 01</span>
                </div>
              }
            >
              <div className="absolute inset-0 flex flex-col">
                <ColorBars className="h-[46%]" />
                <div className="flex-1 bg-[#12101a] flex flex-col items-center justify-center text-center px-4">
                  <p className="font-display text-[clamp(1.1rem,2.4vw,1.6rem)] text-[#F1E5D0] leading-none">RSP ARCHIVE</p>
                  <p className="font-tape text-[11px] text-[#F5BA60] tracking-[0.22em] mt-2">RIZKY SANDI PRATAMA</p>
                  <p className="font-tape text-[10px] text-[#B8ADB4] tracking-[0.2em] mt-1">INFORMATION SYSTEMS · TELKOM UNIVERSITY JAKARTA</p>
                </div>
              </div>
            </CRTMonitor>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "PROJECTS", value: "3", suffix: "TAPES" },
            { label: "AWARDS", value: "8", suffix: "WINS" },
            { label: "EXPERIENCE", value: "5", suffix: "RECORDS" },
            { label: "GPA", value: "3.77", suffix: "/4.00" },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
              <p className="font-tape text-[10px] text-[#B8ADB4]/70 tracking-[0.2em] mb-1">{s.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl text-[#F1E5D0]">{s.value}</span>
                <span className="font-tape text-[11px] text-[#B8ADB4]/75 tracking-wider">{s.suffix}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Side decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`w-px h-6 ${i === 3 ? "bg-[#FF718E]/30" : "bg-white/[0.06]"}`} />
        ))}
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="font-tape text-[10px] text-[#B8ADB4]/60 tracking-[0.3em]" style={{ writingMode: "vertical-rl" }}>
          THE ANALOG VHS ARCHIVE &mdash; 2026
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-tape text-[10px] text-[#B8ADB4]/65 tracking-[0.2em]">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-6 bg-gradient-to-b from-[#B8ADB4]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
