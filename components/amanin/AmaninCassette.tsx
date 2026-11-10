import { Reel } from "@/components/analog/VHSTape";
import { amanin } from "@/lib/amanin";

interface Props {
  className?: string;
  interactive?: boolean;
}

export default function AmaninCassette({ className = "", interactive = true }: Props) {
  const { cyan, navy, blue, green } = amanin.colors;
  const hoverGlow = interactive
    ? "group-hover:shadow-[0_0_0_1px_rgba(56,213,243,0.75),0_0_34px_rgba(56,213,243,0.4),0_30px_50px_-18px_rgba(0,0,0,0.95)] group-focus-visible:shadow-[0_0_0_2px_rgba(56,213,243,0.9),0_0_34px_rgba(56,213,243,0.4)]"
    : "";

  return (
    <div
      className={`relative [container-type:inline-size] aspect-[188/104] rounded-[12px] bg-gradient-to-b from-[#1b3358] via-[#10213e] to-[#0a1424] border border-black shadow-[0_30px_50px_-18px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(120,180,255,0.18),inset_0_-2px_0_rgba(0,0,0,0.6)] transition-shadow duration-300 ${hoverGlow} ${className}`}
    >
      <div className="absolute inset-x-4 top-1.5 h-[3px] rounded-full bg-black/50" aria-hidden="true" />
      {["left-2 top-2", "right-2 top-2", "left-2 bottom-2", "right-2 bottom-2"].map((pos) => (
        <span key={pos} className={`absolute ${pos} w-2.5 h-2.5 rounded-full bg-[#050b16] border border-white/10`} aria-hidden="true">
          <span className="absolute inset-x-[2px] top-1/2 h-px bg-white/20" />
        </span>
      ))}

      <div className="paper absolute left-[5%] right-[5%] top-[8%] h-[54%] rounded-[3px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-x-0 top-0 h-[17%] flex items-center justify-between px-[4%] text-[#E8F7FF]" style={{ background: `linear-gradient(90deg, ${navy}, ${blue})` }}>
          <span className="font-tape font-bold tracking-[0.2em] whitespace-nowrap" style={{ fontSize: "max(10px, 2.5cqw)" }}>DIGITAL THREAT FILES</span>
          <span className="font-tape font-bold tracking-[0.12em] whitespace-nowrap" style={{ fontSize: "max(10px, 2.4cqw)", color: cyan }}>RSP-005</span>
        </div>

        <div className="absolute inset-x-[5%] top-[24%] bottom-[7%] flex flex-col justify-between">
          <div className="flex items-center gap-[3%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={amanin.assets.shield.src} alt="" width={amanin.assets.shield.width} height={amanin.assets.shield.height} className="h-[clamp(20px,9cqw,40px)] w-auto shrink-0" aria-hidden="true" />
            <p className="font-display leading-none tracking-tight text-[#0a1f3d] whitespace-nowrap" style={{ fontSize: "11.5cqw" }}>AMANIN</p>
          </div>
          <p className="font-tape font-semibold uppercase tracking-[0.1em] text-[#0a1f3d]/85 leading-tight" style={{ fontSize: "max(10px, 2.6cqw)" }}>
            AI Anti-Scam Decision Assistant
          </p>
        </div>

      </div>

      <div className="absolute left-[18%] right-[18%] top-[66%] h-[20%] rounded-[4px] bg-[#050b16] border border-white/10 overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" aria-hidden="true" />
        <Reel wound={16} className="tape-reel absolute -left-[4%] top-1/2 -translate-y-1/2 h-[140%] aspect-square" />
        <Reel wound={13} className="tape-reel absolute -right-[4%] top-1/2 -translate-y-1/2 h-[140%] aspect-square" />
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3AE0B0] shadow-[0_0_8px_#3AE0B0]" style={{ background: green }} aria-hidden="true" />
      </div>

      <div className="absolute inset-x-[22%] bottom-0 h-[10%] bg-[#050b16] [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]" aria-hidden="true" />

      {interactive && (
        <>
          <div className="absolute left-[7%] top-[63%] -translate-y-full opacity-0 translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity font-tape font-bold tracking-[0.12em] text-[#04202a] px-1.5 py-0.5 rounded-sm flex items-center gap-1.5" style={{ background: cyan, fontSize: "max(10px, 2.4cqw)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#04202a]" aria-hidden="true" /> SECURITY STATUS: ARCHIVED
          </div>
          <div className="absolute right-[7%] bottom-[2.5%] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity font-tape font-semibold tracking-[0.1em] text-[#BFEFFF] whitespace-nowrap" style={{ fontSize: "max(10px, 2.2cqw)" }}>
            AI / CYBERSECURITY · 2026 · PROTOTYPE
          </div>
        </>
      )}
    </div>
  );
}
