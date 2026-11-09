export default function ColorBars({ className = "" }: { className?: string }) {
  const top = ["#c9c9c9", "#c9c92b", "#2bc9c9", "#2bc92b", "#c92bc9", "#c92b2b", "#2b2bc9"];
  const mid = ["#2b2bc9", "#111", "#c92bc9", "#111", "#2bc9c9", "#111", "#c9c9c9"];
  return (
    <div className={`flex flex-col ${className}`} aria-hidden="true">
      <div className="flex flex-[7]">{top.map((c, i) => <span key={i} className="flex-1" style={{ background: c }} />)}</div>
      <div className="flex flex-[1]">{mid.map((c, i) => <span key={i} className="flex-1" style={{ background: c }} />)}</div>
      <div className="flex flex-[2]">
        <span className="flex-[5] bg-[#0c1a3a]" />
        <span className="flex-[5] bg-[#f4f4f4]" />
        <span className="flex-[5] bg-[#33085a]" />
        <span className="flex-[7] bg-[#111]" />
        <span className="flex-[1] bg-[#000]" />
        <span className="flex-[1] bg-[#222]" />
        <span className="flex-[1] bg-[#333]" />
        <span className="flex-[4] bg-[#111]" />
      </div>
    </div>
  );
}
