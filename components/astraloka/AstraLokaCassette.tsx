import { Reel } from "@/components/analog/VHSTape";

interface Props {
  className?: string;
  interactive?: boolean;
}

const colors = {
  forest:  "#0F2318",
  green:   "#2D8B5A",
  sage:    "#5BAF83",
  rust:    "#C07830",
  cream:   "#F5EDD8",
};

export default function AstraLokaCassette({ className = "", interactive = true }: Props) {
  const glow = interactive
    ? "group-hover:shadow-[0_0_0_1px_rgba(45,139,90,0.75),0_0_32px_rgba(45,139,90,0.38),0_30px_50px_-18px_rgba(0,0,0,0.95)] group-focus-visible:shadow-[0_0_0_2px_rgba(45,139,90,0.9)]"
    : "";

  return (
    <div
      className={`relative [container-type:inline-size] aspect-[188/104] rounded-[12px] border border-black shadow-[0_30px_50px_-18px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(90,180,120,0.14),inset_0_-2px_0_rgba(0,0,0,0.6)] transition-shadow duration-300 ${glow} ${className}`}
      style={{ background: `linear-gradient(160deg, ${colors.forest} 0%, #0a1a10 55%, #060e09 100%)` }}
    >
      {/* top spine groove */}
      <div className="absolute inset-x-4 top-1.5 h-[3px] rounded-full bg-black/60" aria-hidden="true" />

      {/* corner screws */}
      {["left-2 top-2", "right-2 top-2", "left-2 bottom-2", "right-2 bottom-2"].map((pos) => (
        <span key={pos} className={`absolute ${pos} w-2.5 h-2.5 rounded-full border border-white/10`} style={{ background: colors.forest }} aria-hidden="true">
          <span className="absolute inset-x-[2px] top-1/2 h-px bg-white/15" />
        </span>
      ))}

      {/* subtle horizontal texture lines */}
      <div className="absolute inset-0 rounded-[12px] pointer-events-none" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(255,255,255,0.013) 5px, rgba(255,255,255,0.013) 6px)" }} aria-hidden="true" />

      {/* paper label */}
      <div className="paper absolute left-[5%] right-[5%] top-[8%] h-[54%] rounded-[3px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.65)]">
        {/* label header stripe */}
        <div
          className="absolute inset-x-0 top-0 h-[17%] flex items-center justify-between px-[4%]"
          style={{ background: `linear-gradient(90deg, ${colors.forest}, ${colors.green})` }}
        >
          <span className="font-tape font-bold tracking-[0.18em] text-[#B8F0CC] whitespace-nowrap" style={{ fontSize: "max(10px, 2.4cqw)" }}>
            ECO-TRAVEL REGISTRY
          </span>
          <span className="font-tape font-bold tracking-[0.12em] whitespace-nowrap" style={{ fontSize: "max(10px, 2.4cqw)", color: colors.rust }}>
            RSP-007
          </span>
        </div>

        {/* label body */}
        <div className="absolute inset-x-[5%] top-[24%] bottom-[7%] flex flex-col justify-between">
          {/* title */}
          <p className="font-display leading-none tracking-tight whitespace-nowrap" style={{ fontSize: "11cqw" }}>
            <span style={{ color: colors.forest }}>ASTR</span>
            <span style={{ color: colors.green }}>A</span>
            <span style={{ color: colors.rust }}>L</span>
            <span style={{ color: colors.forest }}>OKA</span>
          </p>
          <p className="font-tape font-bold tracking-[0.12em] uppercase leading-tight" style={{ fontSize: "max(10px, 2.5cqw)", color: `${colors.forest}CC` }}>
            PLAN · CONNECT · MEASURE
          </p>
        </div>

        {/* decorative batik-inspired corner pattern */}
        <span
          className="absolute right-0 bottom-0 w-[18%] h-[36%] opacity-25"
          style={{ background: `repeating-linear-gradient(-45deg, transparent 0 3px, ${colors.green} 3px 4px)` }}
          aria-hidden="true"
        />
      </div>

      {/* tape window */}
      <div
        className="absolute left-[18%] right-[18%] top-[66%] h-[20%] rounded-[4px] border border-white/10 overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)]"
        style={{ background: colors.forest }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent" aria-hidden="true" />
        <Reel wound={15} className="tape-reel absolute -left-[4%] top-1/2 -translate-y-1/2 h-[140%] aspect-square" />
        <Reel wound={14} className="tape-reel absolute -right-[4%] top-1/2 -translate-y-1/2 h-[140%] aspect-square" />
      </div>

      {/* bottom tab */}
      <div className="absolute inset-x-[22%] bottom-0 h-[10%] [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)]" style={{ background: colors.forest }} aria-hidden="true" />

      {/* hover badge */}
      {interactive && (
        <div
          className="absolute left-[7%] top-[63%] -translate-y-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity font-tape font-bold tracking-[0.12em] px-1.5 py-0.5 rounded-sm"
          style={{ background: colors.sage, color: colors.forest, fontSize: "max(10px, 2.3cqw)" }}
        >
          ★ 2ND PLACE · BMC UNDIP 2026
        </div>
      )}
    </div>
  );
}
