interface Frame {
  label: string;
  sub: string;
}

export default function FilmStrip({ frames, accent = "#6FC6BE" }: { frames: Frame[]; accent?: string }) {
  const holes = Array.from({ length: 22 });
  return (
    <div className="relative bg-[#0b090e] border-y-[10px] border-[#0b090e] shadow-[0_16px_30px_-12px_rgba(0,0,0,0.9)]" role="img" aria-label="Timeline film strip">
      <div className="flex justify-between px-1 py-1.5" aria-hidden="true">
        {holes.map((_, i) => <span key={i} className="w-2.5 h-3 rounded-[2px] bg-[#2a252f]" />)}
      </div>
      <div className="grid gap-1 px-1" style={{ gridTemplateColumns: `repeat(${frames.length}, minmax(0, 1fr))` }}>
        {frames.map((f, i) => (
          <div key={f.label} className="relative aspect-[4/5] bg-[#1b1720] border border-white/10 flex flex-col items-center justify-center text-center p-1">
            <span className="absolute top-1 left-1.5 font-tape text-[9px] text-[#B8ADB4]">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-[clamp(13px,2vw,22px)] leading-none" style={{ color: i % 2 ? "#F1E5D0" : accent }}>{f.label}</span>
            <span className="font-tape text-[9px] sm:text-[10px] text-[#B8ADB4] mt-1 leading-tight">{f.sub}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-1 py-1.5" aria-hidden="true">
        {holes.map((_, i) => <span key={i} className="w-2.5 h-3 rounded-[2px] bg-[#2a252f]" />)}
      </div>
    </div>
  );
}
