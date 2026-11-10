interface Frame {
  label: string;
  sub: string;
}

export default function FilmStrip({ frames, accent = "#6FC6BE" }: { frames: Frame[]; accent?: string }) {
  const holes = Array.from({ length: 22 });
  return (
    <div className="relative border-y-[10px] shadow-[0_16px_30px_-12px_rgba(0,0,0,0.9)]" role="img" aria-label="Timeline film strip" style={{ background: "var(--bg-deep)", borderColor: "var(--bg-deep)" }}>
      <div className="flex justify-between px-1 py-1.5" aria-hidden="true">
        {holes.map((_, i) => <span key={i} className="w-2.5 h-3 rounded-[2px]" style={{ background: "var(--bg-secondary)" }} />)}
      </div>
      <div className="grid gap-1 px-1" style={{ gridTemplateColumns: `repeat(${frames.length}, minmax(0, 1fr))` }}>
        {frames.map((f, i) => (
          <div key={`${f.label}-${f.sub}`} className="relative aspect-[4/5] flex flex-col items-center justify-center text-center p-1" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}>
            <span className="absolute top-1 left-1.5 font-tape text-[10px]" style={{ color: "var(--muted-text)" }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-[clamp(13px,2vw,22px)] leading-none" style={{ color: i % 2 ? "var(--warm-paper)" : accent }}>{f.label}</span>
            <span className="font-tape text-[10px] mt-1 leading-tight" style={{ color: "var(--muted-text)" }}>{f.sub}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-1 py-1.5" aria-hidden="true">
        {holes.map((_, i) => <span key={i} className="w-2.5 h-3 rounded-[2px]" style={{ background: "var(--bg-secondary)" }} />)}
      </div>
    </div>
  );
}
