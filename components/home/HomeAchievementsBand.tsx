"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, ArrowRight } from "lucide-react";
import { awards } from "@/lib/data";

const placeColor: Record<string, { bg: string; text: string; icon: string }> = {
  "1st": { bg: "bg-amber-400/15", text: "text-amber-300", icon: "bg-amber-400 text-amber-900" },
  "2nd": { bg: "bg-slate-300/15", text: "text-slate-300", icon: "bg-slate-300 text-slate-700" },
  "3rd": { bg: "bg-orange-400/15", text: "text-orange-300", icon: "bg-orange-300 text-orange-800" },
  silver: { bg: "bg-slate-300/15", text: "text-slate-300", icon: "bg-slate-400 text-white" },
  harapan: { bg: "bg-blue-400/15", text: "text-blue-300", icon: "bg-blue-200 text-blue-800" },
};

export default function HomeAchievementsBand() {
  const items = [...awards, ...awards];

  return (
    <section className="py-20 bg-[#102047] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]" />

      <div className="relative max-w-6xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#B5C8FF]/40">
                03
              </span>
              <div className="h-px bg-white/10 w-8" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B5C8FF] uppercase">
                Pencapaian
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {awards.length} Penghargaan{" "}
              <span className="text-[#B5C8FF]">Nasional.</span>
            </h2>
          </motion.div>
          <Link
            href="/projects#pencapaian"
            className="flex items-center gap-1.5 text-sm font-semibold text-white/40 hover:text-white transition-colors group"
          >
            Lihat Semua
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#102047] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#102047] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
          {items.map((award, i) => {
            const style = placeColor[award.place] ?? placeColor.harapan;
            return (
              <Link
                key={`${award.id}-${i}`}
                href={`/achievements/${award.slug}`}
                className={`flex-shrink-0 w-80 ${style.bg} border border-white/[0.06] rounded-2xl p-5 hover:border-white/15 transition-all group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${style.icon}`}
                  >
                    <Trophy size={16} />
                  </div>
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider ${style.text}`}
                  >
                    {award.label}
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm leading-snug line-clamp-2 group-hover:text-[#B5C8FF] transition-colors">
                  {award.title}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs text-white/30 font-medium">
                    {award.issuer.length > 30
                      ? award.issuer.slice(0, 30) + "…"
                      : award.issuer}
                  </p>
                  <span className="text-[10px] text-white/20 font-mono">
                    {award.date}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
