import Link from "next/link";
import ColorBars from "@/components/analog/ColorBars";
import CRTMonitor from "@/components/analog/CRTMonitor";

export default function NotFound() {
  return (
    <main id="main" className="min-h-screen bg-[#151319] flex items-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto w-full grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#FF718E] flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF718E] animate-glow-pulse" aria-hidden="true" /> SIGNAL LOST
          </p>
          <h1 className="text-[clamp(4.5rem,14vw,9rem)] leading-[0.85] text-[#F1E5D0]">404</h1>
          <p className="font-display text-[clamp(1.2rem,2.6vw,1.8rem)] text-[#F5BA60] mt-3">TAPE NOT FOUND IN THE ARCHIVE.</p>
          <p className="text-[16px] text-[#B8ADB4] leading-relaxed mt-4 max-w-md">The page you asked for isn&apos;t on any shelf. It may have been moved, renamed, or never recorded.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/" className="font-tape text-[12px] font-bold tracking-[0.12em] text-[#151319] bg-[#F1E5D0] hover:bg-[#FF718E] px-5 py-3 transition-colors">BACK TO THE ARCHIVE</Link>
            <Link href="/projects" className="font-tape text-[12px] font-bold tracking-[0.12em] text-[#F1E5D0] border border-white/30 hover:border-[#F5BA60] px-5 py-3 transition-colors">BROWSE TAPES</Link>
          </div>
        </div>
        <CRTMonitor
          label="NO SIGNAL · CH-404"
          osd={
            <div className="absolute inset-0 p-4 flex flex-col justify-between font-tape text-[13px] font-bold text-white">
              <span className="timecode bg-black/65 px-1.5 w-fit">NO SIGNAL</span>
              <span className="timecode bg-black/65 px-1.5 w-fit">CH 404</span>
            </div>
          }
        >
          <ColorBars className="absolute inset-0" />
        </CRTMonitor>
      </div>
    </main>
  );
}
