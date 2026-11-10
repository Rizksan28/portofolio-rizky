"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import VHSPlayer from "@/components/home/VHSPlayer";
import { CV_URL, projects } from "@/lib/data";
import { useT } from "@/lib/i18n";
import RecordingIndicator from "@/components/analog/RecordingIndicator";

export default function ArchiveHero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-20" style={{ background: "var(--bg-primary)" }}>
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
            <span className="font-tape text-[11px] tracking-[0.2em]" style={{ color: "var(--muted-text)", opacity: 0.7 }}>CH-01</span>
          </div>
          <span className="font-tape text-[11px] tracking-[0.15em]" style={{ color: "var(--muted-text)", opacity: 0.65 }}>TAPE 001 OF 001</span>
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
                  <h1 className={`text-[clamp(3.2rem,9vw,7rem)] leading-[0.9] ${i === 2 ? "text-[#FF718E]" : ""}`} style={i !== 2 ? { color: "var(--warm-paper)" } : {}}>{w}</h1>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="font-tape text-[15px] font-semibold text-[#F5BA60] tracking-wide mb-4">
              Full-Stack Developer &amp; UI/UX Enthusiast
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: "var(--text-secondary)" }}>
              {t({
                id: "Saya membangun solusi digital melalui perpaduan teknologi, desain, dan pemecahan masalah yang berorientasi pada pengguna.",
                en: "I build digital solutions through a blend of technology, design, and user-centred problem solving.",
              })}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap gap-3">
              <Link href="/projects" className="group flex items-center gap-2 hover:bg-[#FF718E] hover:text-white font-tape text-[12px] font-bold tracking-[0.1em] px-6 py-3.5 rounded-md transition-all duration-200" style={{ background: "var(--warm-paper)", color: "var(--bg-primary)" }}>
                <span className="w-0 h-0 border-l-[6px] border-l-current border-y-[4px] border-y-transparent" />
                EXPLORE TAPES
              </Link>
              <Link href="/about" className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] font-tape text-[12px] font-bold tracking-[0.1em] px-6 py-3.5 rounded-md transition-all duration-200" style={{ border: "1px solid var(--border-subtle)", color: "var(--warm-paper)" }}>
                ABOUT THE CREATOR
              </Link>
              <a href={CV_URL} download className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-[#F5BA60]/50 hover:border-[#F5BA60] text-[#F5BA60] font-tape text-[12px] font-bold tracking-[0.1em] px-6 py-3.5 rounded-md transition-all duration-200">
                <Download size={14} aria-hidden="true" /> DOWNLOAD CV
              </a>
            </motion.div>
          </div>

          {/* Right — Interactive VHS Player */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex justify-center lg:justify-end">
            <VHSPlayer className="w-full max-w-md" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "PROJECTS", value: String(projects.length), suffix: "TAPES" },
            { label: "AWARDS", value: "8", suffix: "WINS" },
            { label: "EXPERIENCE", value: "5", suffix: "RECORDS" },
            { label: "GPA", value: "3.77", suffix: "/4.00" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg p-4" style={{ background: "rgba(128,128,128,0.06)", border: "1px solid var(--border-subtle)" }}>
              <p className="font-tape text-[10px] tracking-[0.2em] mb-1" style={{ color: "var(--muted-text)", opacity: 0.7 }}>{s.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl" style={{ color: "var(--warm-paper)" }}>{s.value}</span>
                <span className="font-tape text-[11px] tracking-wider" style={{ color: "var(--muted-text)", opacity: 0.75 }}>{s.suffix}</span>
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
        <p className="font-tape text-[10px] tracking-[0.3em]" style={{ writingMode: "vertical-rl", color: "var(--muted-text)", opacity: 0.6 }}>
          THE ANALOG VHS ARCHIVE &mdash; 2026
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-tape text-[10px] tracking-[0.2em]" style={{ color: "var(--muted-text)", opacity: 0.65 }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-6 bg-gradient-to-b from-[#B8ADB4]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
