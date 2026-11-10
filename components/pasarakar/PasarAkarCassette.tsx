import { Reel } from "@/components/analog/VHSTape";
import { pasarakar } from "@/lib/pasarakar";

interface Props {
  className?: string;
  interactive?: boolean;
}

export default function PasarAkarCassette({ className = "", interactive = true }: Props) {
  const { forest, deep, earth, gold } = pasarakar.colors;
  const glow = interactive
    ? "group-hover:shadow-[0_0_0_1px_rgba(217,164,65,0.7),0_0_30px_rgba(217,164,65,0.35),0_30px_50px_-18px_rgba(0,0,0,0.95)] group-focus-visible:shadow-[0_0_0_2px_rgba(217,164,65,0.9)]"
    : "";

  return (
    <div
      className={`relative [container-type:inline-size] aspect-[188/104] rounded-[12px] bg-gradient-to-b from-[#1c4a36] via-[#12301f] to-[#0a1a12] border border-black shadow-[0_30px_50px_-18px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(140,220,170,0.15),inset_0_-2px_0_rgba(0,0,0,0.6)] transition-shadow duration-300 ${glow} ${className}`}
    >
      <div className="absolute inset-x-4 top-1.5 h-[3px] rounded-full bg-black/50" aria-hidden="true" />
      {["left-2 top-2", "right-2 top-2", "left-2 bottom-2", "right-2 bottom-2"].map((pos) => (
        <span key={pos} className={`absolute ${pos} w-2.5 h-2.5 rounded-full bg-[#06100a] border border-white/10`} aria-hidden="true">
          <span className="absolute inset-x-[2px] top-1/2 h-px bg-white/20" />
        </span>
      ))}

      <div className="paper absolute left-[5%] right-[5%] top-[8%] h-[54%] rounded-[3px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-x-0 top-0 h-[17%] flex items-center justify-between px-[4%] text-[#F1E5D0]" style={{ background: `linear-gradient(90deg, ${earth}, ${forest})` }}>
          <span className="font-tape font-bold tracking-[0.2em] whitespace-nowrap" style={{ fontSize: "max(10px, 2.5cqw)" }}>AGRITECH</span>
          <span className="font-tape font-bold tracking-[0.12em] whitespace-nowrap" style={{ fontSize: "max(10px, 2.4cqw)", color: gold }}>{pasarakar.archiveId}</span>
        </div>
        <div className="absolute inset-x-[5%] top-[24%] bottom-[7%] flex flex-col justify-between">
          <p className="font-display leading-none tracking-tight whitespace-nowrap" style={{ fontSize: "10.5cqw", color: deep }}>
            PASAR<span style={{ color: forest }}>AKAR</span>
          </p>
          <p className="font-tape font-bold tracking-[0.1em] uppercase leading-tight" style={{ fontSize: "max(10px, 2.6cqw)", color: earth }}>
            Dari desa untuk Indonesia
          </p>
        </div>
      </div>

      <div className="absolute left-[18%] right-[18%] top-[66%] h-[20%] rounded-[4px] bg-[#06100a] border border-white/10 overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" aria-hidden="true" />
        <Reel wound={16} className="tape-reel absolute -left-[4%] top-1/2 -translate-y-1/2 h-[140%] aspect-square" />
        <Reel wound={13} className="tape-reel absolute -right-[4%] top-1/2 -translate-y-1/2 h-[140%] aspect-square" />
      </div>
      <div className="absolute inset-x-[22%] bottom-0 h-[10%] bg-[#06100a] [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]" aria-hidden="true" />

      {interactive && (
        <div className="absolute left-[7%] top-[63%] -translate-y-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity font-tape font-bold tracking-[0.12em] text-[#2a1b05] px-1.5 py-0.5 rounded-sm" style={{ background: gold, fontSize: "max(10px, 2.4cqw)" }}>
          ★ 1ST PLACE · NACOPS 7.0
        </div>
      )}
    </div>
  );
}
