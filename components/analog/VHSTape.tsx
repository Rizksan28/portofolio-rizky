"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface VHSTapeProps {
  slug: string;
  title: string;
  category: string;
  archiveId: string;
  year?: string;
  tech?: string[];
  accentColor?: string;
  className?: string;
  tilt?: number;
  showMeta?: boolean;
}

const defaultColors = ["#FF718E", "#B18BF7", "#6FC6BE", "#F5BA60"];

export function Reel({ wound = 13, className = "" }: { wound?: number; className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r={wound} fill="#2b2024" />
      <circle cx="20" cy="20" r={wound} fill="none" stroke="#4a3a3a" strokeWidth="0.6" />
      <circle cx="20" cy="20" r="9" fill="#e9e2d4" />
      <g className="reel-spokes" style={{ transformOrigin: "20px 20px" }}>
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <rect key={a} x="18.6" y="12" width="2.8" height="4.6" rx="0.6" fill="#17141b" transform={`rotate(${a} 20 20)`} />
        ))}
        <circle cx="20" cy="20" r="3.2" fill="#17141b" />
      </g>
    </svg>
  );
}

export default function VHSTape({
  slug, title, category, archiveId, year, tech, accentColor, className = "", tilt = 0, showMeta = true,
}: VHSTapeProps) {
  const color = accentColor || defaultColors[slug.charCodeAt(0) % defaultColors.length];
  const leftWound = 13 + (slug.length % 4);
  const rightWound = 30 - leftWound;

  return (
    <Link
      href={`/projects/${slug}`}
      aria-label={`Play tape ${archiveId}: ${title}`}
      className={`group block ${className}`}
    >
      <motion.div
        style={{ rotate: tilt }}
        whileHover={{ y: -10, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="relative aspect-[188/104] rounded-[10px] bg-gradient-to-b from-[#26222b] to-[#14111a] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-2px_0_rgba(0,0,0,0.6)] border border-black">
          <div className="absolute inset-x-3 top-1 h-[3px] rounded-full bg-black/50" />
          {["left-1.5 top-1.5", "right-1.5 top-1.5", "left-1.5 bottom-1.5", "right-1.5 bottom-1.5"].map((pos) => (
            <span key={pos} className={`absolute ${pos} w-2 h-2 rounded-full bg-[#0b090e] border border-white/10`} aria-hidden="true">
              <span className="absolute inset-x-[2px] top-1/2 h-px bg-white/20" />
            </span>
          ))}

          <div className="paper absolute left-[5%] right-[5%] top-[9%] h-[47%] rounded-[3px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-x-0 top-0 h-[16%] flex" aria-hidden="true">
              <span className="flex-1" style={{ background: color }} />
              <span className="flex-1 bg-[#F5BA60]" />
              <span className="flex-1 bg-[#6FC6BE]" />
              <span className="flex-1 bg-[#B18BF7]" />
            </div>
            <div className="absolute inset-x-[5%] top-[24%] bottom-[8%] flex flex-col justify-between">
              <div className="flex items-center justify-between font-tape text-[10px] font-bold tracking-[0.14em] text-[#151319]/70">
                <span>{archiveId}</span>
                <span>{year ?? "—"} · T-120</span>
              </div>
              <p className="font-display text-[clamp(14px,1.7vw,19px)] leading-[1.05] text-[#151319] line-clamp-2">{title}</p>
              <p className="font-tape text-[10px] tracking-[0.12em] uppercase text-[#151319]/70 truncate">{category}</p>
            </div>
            <span className="absolute right-0 bottom-0 w-[18%] h-[28%] opacity-30" style={{ background: `repeating-linear-gradient(-45deg, transparent 0 3px, ${color} 3px 4px)` }} aria-hidden="true" />
          </div>

          <div className="absolute left-[18%] right-[18%] top-[60%] h-[24%] rounded-[4px] bg-[#0a080d] border border-white/10 overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent" aria-hidden="true" />
            <Reel wound={leftWound} className="tape-reel absolute -left-[4%] top-1/2 -translate-y-1/2 h-[135%] aspect-square" />
            <Reel wound={rightWound} className="tape-reel absolute -right-[4%] top-1/2 -translate-y-1/2 h-[135%] aspect-square" />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[22%] h-[2px] bg-[#3a2c2c]" aria-hidden="true" />
          </div>

          <div className="absolute inset-x-[22%] bottom-0 h-[12%] bg-[#0b090e] [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]" aria-hidden="true" />

          <div className="absolute right-[7%] top-[57%] -translate-y-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity font-tape text-[10px] font-bold tracking-wider text-[#151319] bg-[#F5BA60] px-1.5 py-0.5 rounded-sm">
            ▶ PLAY
          </div>
        </div>

        {showMeta && (
          <div className="mt-4 px-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full" style={{ background: color }} aria-hidden="true" />
              <span className="font-tape text-[11px] tracking-[0.14em] text-[#B8ADB4]">{archiveId} · {year}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tech?.slice(0, 4).map((t) => (
                <span key={t} className="font-tape text-[11px] text-[#F1E5D0]/80 border border-white/15 px-2 py-0.5 rounded-[3px]">{t}</span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
