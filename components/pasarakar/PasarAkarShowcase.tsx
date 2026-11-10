"use client";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Lightbox from "@/components/pharvia/Lightbox";
import { ChapterHead } from "@/components/pharvia/Narrative";
import { pasarakar, type PaStatus } from "@/lib/pasarakar";

const { gold } = pasarakar.colors;
const leaf = "#3FBF7A";

const items = pasarakar.shots.map((s) => ({
  src: s.src,
  alt: `${s.label}: ${s.caption}`,
  caption: `Prototype design · ${s.label}: ${s.caption}`,
  width: s.width,
  height: s.height,
}));

const STATUS: Record<PaStatus, { label: string; color: string; solid: boolean }> = {
  prototype: { label: "PROTOTYPE DESIGN", color: leaf, solid: true },
  partial: { label: "PARTIAL IN DESIGN", color: gold, solid: false },
  concept: { label: "PROPOSED", color: gold, solid: false },
};

function Badge({ s }: { s: PaStatus }) {
  const v = STATUS[s];
  return v.solid ? (
    <span className="font-tape text-[10px] font-bold tracking-[0.14em] px-2 py-0.5 text-[#06231d]" style={{ background: v.color }}>{v.label}</span>
  ) : (
    <span className="font-tape text-[10px] font-bold tracking-[0.14em] px-2 py-0.5 border" style={{ borderColor: v.color, color: v.color }}>{v.label}</span>
  );
}

export function Features() {
  const [active, setActive] = useState(pasarakar.features[0].id);
  const [open, setOpen] = useState<number | null>(null);
  const f = pasarakar.features.find((x) => x.id === active)!;
  const shotIndex = pasarakar.shots.findIndex((s) => s.id === f.shotId);
  const shot = shotIndex >= 0 ? pasarakar.shots[shotIndex] : null;

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = pasarakar.features.length;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else return;
    e.preventDefault();
    setActive(pasarakar.features[next].id);
    document.getElementById(`pa-feature-${pasarakar.features[next].id}`)?.focus();
  };

  return (
    <section id="features" className="scroll-mt-36 bg-[#151319] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="04" label="FEATURE SHOWCASE" color={gold} title="SIX FEATURES ON THE TAPE." />
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="PasarAkar features" aria-orientation="vertical" className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
            {pasarakar.features.map((x, i) => {
              const on = x.id === active;
              return (
                <button
                  key={x.id}
                  id={`pa-feature-${x.id}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls="pa-feature-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(x.id)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`shrink-0 text-left flex items-center gap-3 px-4 py-3.5 border transition-colors min-w-[220px] lg:min-w-0 ${on ? "bg-[#F1E5D0] text-[#151319] border-[#F1E5D0]" : "bg-[#17141b] text-[#F1E5D0] border-white/20 hover:border-[#F1E5D0]"}`}
                >
                  <span className="font-display text-[22px] leading-none" style={{ color: on ? "#C22F54" : gold }}>{x.n}</span>
                  <span className="flex-1">
                    <span className="block font-display text-[15px] leading-tight">{x.name}</span>
                    <span className={`block font-tape text-[10px] tracking-[0.14em] mt-1 ${on ? "text-[#151319]/75" : "text-[#B8ADB4]"}`}>{STATUS[x.status].label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id="pa-feature-panel" role="tabpanel" aria-labelledby={`pa-feature-${active}`} className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div key={f.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="grid gap-8 md:grid-cols-[minmax(0,260px)_1fr] items-start">
                <div className="mx-auto w-full max-w-[260px]">
                  {shot ? (
                    <>
                      <button onClick={() => setOpen(shotIndex)} aria-label={`Enlarge ${shot.label} screenshot`} className="group relative block w-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={shot.src} alt={`${shot.label}: ${shot.caption}`} width={shot.width} height={shot.height} loading="lazy" className="w-full h-auto drop-shadow-[0_24px_30px_rgba(0,0,0,0.6)] group-hover:-translate-y-1 transition-transform" />
                        <span className="absolute right-3 bottom-3 w-9 h-9 flex items-center justify-center bg-[#151319]/85 border border-white/30 text-[#F1E5D0]" aria-hidden="true"><Maximize2 size={15} /></span>
                      </button>
                      <p className="mt-3 font-tape text-[10px] font-bold tracking-[0.16em] text-center text-[#B8ADB4]">
                        PROTOTYPE DESIGN · SAMPLE DATA
                      </p>
                    </>
                  ) : (
                    <div className="aspect-[9/19] border-2 border-dashed bg-[#D9A441]/[0.05] flex flex-col items-center justify-center text-center p-6 gap-3" style={{ borderColor: `${gold}99` }}>
                      <span className="font-display text-[44px]" style={{ color: gold }}>{f.n}</span>
                      <span className="font-tape text-[11px] font-bold tracking-[0.18em]" style={{ color: gold }}>CONCEPT</span>
                      <span className="font-tape text-[12px] text-[#F1E5D0] leading-relaxed">No screen yet. Shown as a proposed capability.</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge s={f.status} />
                    <span className="font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4]">FEATURE {f.n} / 06</span>
                  </div>
                  <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1] text-[#F1E5D0] mb-4">{f.name}</h3>
                  <p className="font-display text-[17px] leading-snug mb-4" style={{ color: gold }}>{f.summary}</p>
                  <p className="text-[16px] leading-[1.75] text-[#F1E5D0]/90 mb-6">{f.detail}</p>
                  <div className="border-l-2 pl-4 py-1 font-tape text-[12px] leading-relaxed text-[#D6CDD2]" style={{ borderColor: STATUS[f.status].color }}>
                    <span className="block text-[10px] font-bold tracking-[0.2em] mb-1" style={{ color: STATUS[f.status].color }}>HONEST NOTE</span>
                    {f.note}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  );
}

export function Screens() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const holes = Array.from({ length: 28 });
  return (
    <section id="screens" className="scroll-mt-36 bg-[#0d0b10] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="05" label="APPLICATION SCREENS" color="#B18BF7" title="THE APP, FRAME BY FRAME." />
        <p className="text-[16px] leading-relaxed text-[#D6CDD2] max-w-2xl mb-10">
          Five screens from the PasarAkar prototype design. Swipe or scroll the strip and open any frame full size. Prices, buyers, and volumes shown are sample data.
        </p>
      </div>
      <div className="bg-[#07060a] border-y-[10px] border-[#07060a] shadow-[0_20px_40px_-16px_rgba(0,0,0,0.9)]">
        <div className="flex justify-between px-1 py-1.5 overflow-hidden" aria-hidden="true">{holes.map((_, i) => <span key={i} className="w-2.5 h-3 shrink-0 rounded-[2px] bg-[#2a252f]" />)}</div>
        <ul className="max-w-6xl mx-auto px-6 py-8 flex lg:grid lg:grid-cols-5 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory" tabIndex={0} aria-label="Screenshot strip, scroll horizontally">
          {pasarakar.shots.map((s, i) => (
            <li key={s.id} className="snap-center shrink-0 w-[62%] sm:w-[40%] lg:w-auto">
              <button onClick={() => setOpen(i)} aria-label={`Open ${s.label} full size`} className="group block w-full text-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={`${s.label}: ${s.caption}`} width={s.width} height={s.height} loading="lazy" className="w-full h-auto drop-shadow-[0_18px_24px_rgba(0,0,0,0.65)] group-hover:-translate-y-2 transition-transform duration-300" />
                <span className="flex items-center gap-2 mt-4 font-tape text-[11px] font-bold tracking-[0.14em] text-[#F1E5D0]">
                  <span style={{ color: gold }}>{String(i + 1).padStart(2, "0")}</span> {s.label.toUpperCase()}
                </span>
                <span className="block mt-1 font-tape text-[11px] leading-snug text-[#B8ADB4]">{s.caption}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between px-1 py-1.5 overflow-hidden" aria-hidden="true">{holes.map((_, i) => <span key={i} className="w-2.5 h-3 shrink-0 rounded-[2px] bg-[#2a252f]" />)}</div>
      </div>
      <Lightbox items={items} index={open} onClose={close} onIndex={setOpen} />
    </section>
  );
}
