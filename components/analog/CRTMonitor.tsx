interface CRTMonitorProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  osd?: React.ReactNode;
  aspect?: string;
}

const knob = "w-4 h-4 rounded-full bg-gradient-to-b from-[#4a444f] to-[#1b171f] border border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]";

export default function CRTMonitor({ children, className = "", label, osd, aspect = "aspect-[4/3]" }: CRTMonitorProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[26px] p-3 md:p-4 pb-2 bg-gradient-to-b from-[#2d2832] via-[#221e27] to-[#19151d] border border-black shadow-[0_30px_50px_-20px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.09),inset_0_-3px_0_rgba(0,0,0,0.5)]">
        <div className="relative rounded-[20px] p-[7px] bg-[#0a080c] shadow-[inset_0_3px_8px_rgba(0,0,0,0.95),0_1px_0_rgba(255,255,255,0.06)]">
          <div className={`relative ${aspect} rounded-[16px] overflow-hidden bg-[#07060a] isolate`}>
            <div className="absolute inset-0 z-[1]">{children}</div>
            <div className="absolute inset-0 pointer-events-none z-[5] bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(0,0,0,0.55)_100%)]" />
            <div className="absolute inset-0 pointer-events-none z-[6]" style={{ background: "repeating-linear-gradient(0deg,rgba(0,0,0,0.22) 0,rgba(0,0,0,0.22) 1px,transparent 1px,transparent 3px)" }} />
            <div className="absolute left-0 right-0 h-[26%] z-[7] pointer-events-none animate-scanline bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
            <div className="absolute -top-[8%] -left-[6%] w-[70%] h-[45%] z-[8] pointer-events-none rotate-[-8deg] rounded-[50%] bg-gradient-to-br from-white/[0.12] to-transparent blur-[2px]" />
            <div className="absolute inset-0 z-[9] pointer-events-none rounded-[16px] shadow-[inset_0_0_30px_rgba(0,0,0,0.7)]" />
            {osd && <div className="absolute inset-0 z-[10] pointer-events-none">{osd}</div>}
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3 px-2">
          <span className="font-tape text-[10px] tracking-[0.2em] text-[#B8ADB4]/70 uppercase">{label || "RSP ARCHIVE"}</span>
          <div className="flex-1 flex flex-col gap-[3px] max-w-[70px] ml-auto" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => <span key={i} className="h-[2px] rounded-full bg-black/60" />)}
          </div>
          <span className={knob} aria-hidden="true" />
          <span className={knob} aria-hidden="true" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#6FC6BE] shadow-[0_0_8px_#6FC6BE]" aria-hidden="true" />
        </div>
      </div>
      <div className="flex justify-between px-[12%]" aria-hidden="true">
        <span className="w-10 h-2 bg-[#14111a] rounded-b-md" />
        <span className="w-10 h-2 bg-[#14111a] rounded-b-md" />
      </div>
    </div>
  );
}
