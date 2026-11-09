import { Reel } from "@/components/analog/VHSTape";

export default function PharviaCassette({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group relative [container-type:inline-size] aspect-[188/104] rounded-[12px] bg-gradient-to-b from-[#26222b] to-[#14111a] border border-black shadow-[0_30px_50px_-18px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-2px_0_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="absolute inset-x-4 top-1.5 h-[3px] rounded-full bg-black/50" />
      {["left-2 top-2", "right-2 top-2", "left-2 bottom-2", "right-2 bottom-2"].map((pos) => (
        <span key={pos} className={`absolute ${pos} w-2.5 h-2.5 rounded-full bg-[#0b090e] border border-white/10`} aria-hidden="true">
          <span className="absolute inset-x-[2px] top-1/2 h-px bg-white/20" />
        </span>
      ))}

      <div className="paper absolute left-[5%] right-[5%] top-[8%] h-[53%] rounded-[3px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-r from-[#1B7FD4] via-[#2BD4B4] to-[#6EDC7C]" aria-hidden="true" />
        <div className="absolute inset-x-[5%] top-[22%] bottom-[7%] flex flex-col justify-between">
          <div className="flex items-center justify-between font-tape font-bold tracking-[0.14em] text-[#151319]/75" style={{ fontSize: "max(8px, 2.8cqw)" }}>
            <span>RSP-001</span>
            <span>2026 · T-120</span>
          </div>
          <p className="font-display leading-none tracking-tight whitespace-nowrap" style={{ fontSize: "12.5cqw" }}>
            <span className="text-[#0B3A5C]">PHAR</span>
            <span className="text-[#12B79A]">VIA</span>
          </p>
          <p className="font-tape font-bold tracking-[0.14em] text-[#0B3A5C] whitespace-nowrap" style={{ fontSize: "max(7.5px, 2.6cqw)" }}>
            SCAN · RETURN · TRACE
          </p>
        </div>
      </div>

      <div className="absolute left-[18%] right-[18%] top-[64%] h-[22%] rounded-[4px] bg-[#0a080d] border border-white/10 overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent" aria-hidden="true" />
        <Reel wound={16} className="tape-reel absolute -left-[4%] top-1/2 -translate-y-1/2 h-[140%] aspect-square" />
        <Reel wound={13} className="tape-reel absolute -right-[4%] top-1/2 -translate-y-1/2 h-[140%] aspect-square" />
      </div>
      <div className="absolute inset-x-[22%] bottom-0 h-[10%] bg-[#0b090e] [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]" aria-hidden="true" />
    </div>
  );
}
