"use client";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import Lightbox from "@/components/pharvia/Lightbox";
import PhoneFrame from "@/components/pharvia/PhoneFrame";
import { ChapterHead } from "@/components/pharvia/Narrative";
import { pharvia, type Feature } from "@/lib/pharvia";

const toItem = (s: { src: string; label: string; caption: string; width: number; height: number }, tag: string) => ({
  src: s.src,
  alt: `${s.label}: ${s.caption}`,
  caption: `${tag} · ${s.label}: ${s.caption}`,
  width: s.width,
  height: s.height,
});

const designItems = pharvia.screens.map((s) => toItem(s, "Design mockup"));
const liveItems = pharvia.liveScreens.map((s) => toItem(s, "Live app"));
const allItems = [...designItems, ...liveItems];
const { teal } = pharvia.colors;

const STATUS = {
  prototype: { label: "IN PROTOTYPE", color: teal, solid: true },
  partial: { label: "PARTIAL PROTOTYPE", color: "#F5BA60", solid: false },
  concept: { label: "PROPOSED", color: "#F5BA60", solid: false },
} as const;

function StatusBadge({ status }: { status: Feature["status"] }) {
  const s = STATUS[status];
  return s.solid ? (
    <span className="font-tape text-[10px] font-bold tracking-[0.14em] px-2 py-0.5 text-[#06231d]" style={{ background: s.color }}>{s.label}</span>
  ) : (
    <span className="font-tape text-[10px] font-bold tracking-[0.14em] px-2 py-0.5 border" style={{ borderColor: s.color, color: s.color }}>{s.label}</span>
  );
}

export function Features() {
  const [active, setActive] = useState(pharvia.features[0].id);
  const [source, setSource] = useState<"live" | "design">("live");
  const [open, setOpen] = useState<number | null>(null);

  const feature = pharvia.features.find((f) => f.id === active)!;
  const design = pharvia.screens.find((s) => s.id === feature.screenId) ?? null;
  const live = pharvia.liveScreens.find((s) => s.id === feature.liveId) ?? null;
  const showing: "live" | "design" | null = source === "live" && live ? "live" : design ? "design" : live ? "live" : null;
  const screen = showing === "live" ? live : showing === "design" ? design : null;
  const canToggle = !!(live && design);
  const openIndex = screen
    ? showing === "live"
      ? designItems.length + pharvia.liveScreens.findIndex((s) => s.id === screen.id)
      : pharvia.screens.findIndex((s) => s.id === screen.id)
    : -1;

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = pharvia.features.length;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else return;
    e.preventDefault();
    setActive(pharvia.features[next].id);
    document.getElementById(`feature-tab-${pharvia.features[next].id}`)?.focus();
  };

  return (
    <section id="features" className="scroll-mt-36 bg-[#151319] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="04" label="FEATURE SHOWCASE" color={teal} title="SIX FEATURES ON THE TAPE." />

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Pharvia features" aria-orientation="vertical" className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
            {pharvia.features.map((f, i) => {
              const on = f.id === active;
              return (
                <button
                  key={f.id}
                  id={`feature-tab-${f.id}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls="feature-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(f.id)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`shrink-0 text-left flex items-center gap-3 px-4 py-3.5 border transition-colors min-w-[220px] lg:min-w-0 ${on ? "bg-[#F1E5D0] text-[#151319] border-[#F1E5D0]" : "bg-[#17141b] text-[#F1E5D0] border-white/20 hover:border-[#F1E5D0]"}`}
                >
                  <span className="font-display text-[22px] leading-none" style={{ color: on ? "#C22F54" : teal }}>{f.n}</span>
                  <span className="flex-1">
                    <span className="block font-display text-[15px] leading-tight">{f.name}</span>
                    <span className={`block font-tape text-[10px] tracking-[0.14em] mt-1 ${on ? "text-[#151319]/75" : "text-[#B8ADB4]"}`}>{STATUS[f.status].label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id="feature-panel" role="tabpanel" aria-labelledby={`feature-tab-${active}`} className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid gap-8 md:grid-cols-[minmax(0,260px)_1fr] items-start"
              >
                <div className="mx-auto w-full max-w-[260px]">
                  {screen ? (
                    <>
                      <button onClick={() => setOpen(openIndex)} aria-label={`Enlarge ${screen.label} screenshot`} className="group relative block w-full">
                        {showing === "live" ? (
                          <PhoneFrame src={screen.src} alt={`${screen.label}: ${screen.caption}`} width={screen.width} height={screen.height} className="group-hover:-translate-y-1 transition-transform" />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={screen.src}
                            alt={`${screen.label}: ${screen.caption}`}
                            width={screen.width}
                            height={screen.height}
                            loading="lazy"
                            className="w-full h-auto drop-shadow-[0_24px_30px_rgba(0,0,0,0.6)] group-hover:-translate-y-1 transition-transform"
                          />
                        )}
                        <span className="absolute right-3 bottom-3 w-9 h-9 flex items-center justify-center bg-[#151319]/85 border border-white/30 text-[#F1E5D0]" aria-hidden="true">
                          <Maximize2 size={15} />
                        </span>
                      </button>
                      <p className="mt-3 font-tape text-[10px] font-bold tracking-[0.16em] text-center" style={{ color: showing === "live" ? teal : "#B8ADB4" }}>
                        {showing === "live" ? "● LIVE APP CAPTURE · SAMPLE DATA" : "DESIGN MOCKUP"}
                      </p>
                      {canToggle && (
                        <div role="group" aria-label="Screenshot source" className="mt-3 flex border border-white/25">
                          {(["live", "design"] as const).map((k) => (
                            <button
                              key={k}
                              onClick={() => setSource(k)}
                              aria-pressed={showing === k}
                              className={`flex-1 font-tape text-[10px] font-bold tracking-[0.14em] py-2 transition-colors ${showing === k ? "bg-[#F1E5D0] text-[#151319]" : "text-[#B8ADB4] hover:text-[#F1E5D0]"}`}
                            >
                              {k === "live" ? "LIVE APP" : "DESIGN"}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="aspect-[9/19] border-2 border-dashed border-[#F5BA60]/60 bg-[#F5BA60]/[0.05] flex flex-col items-center justify-center text-center p-6 gap-3">
                      <span className="font-display text-[44px] text-[#F5BA60]">{feature.n}</span>
                      <span className="font-tape text-[11px] font-bold tracking-[0.18em] text-[#F5BA60]">CONCEPT</span>
                      <span className="font-tape text-[12px] text-[#F1E5D0] leading-relaxed">No screen yet. Shown as a proposed ecosystem capability.</span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <StatusBadge status={feature.status} />
                    <span className="font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4]">FEATURE {feature.n} / 06</span>
                  </div>
                  <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1] text-[#F1E5D0] mb-4">{feature.name}</h3>
                  <p className="font-display text-[17px] leading-snug mb-4" style={{ color: teal }}>{feature.summary}</p>
                  <p className="text-[16px] leading-[1.75] text-[#F1E5D0]/90 mb-6">{feature.detail}</p>
                  <div className="border-l-2 pl-4 py-1 font-tape text-[12px] leading-relaxed text-[#D6CDD2]" style={{ borderColor: STATUS[feature.status].color }}>
                    <span className="block text-[10px] font-bold tracking-[0.2em] mb-1" style={{ color: STATUS[feature.status].color }}>HONEST NOTE</span>
                    {feature.note}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Lightbox items={allItems} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  );
}

type GalleryTab = "design" | "live";

export function Gallery() {
  const [tab, setTab] = useState<GalleryTab>("design");
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const holes = Array.from({ length: 28 });
  const design = pharvia.screens.slice(0, 5);
  const frames = tab === "design" ? design : pharvia.liveScreens;
  const items = tab === "design" ? designItems.slice(0, 5) : liveItems;

  return (
    <section id="screens" className="scroll-mt-36 bg-[#0d0b10] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="05" label="PRODUCT EXPERIENCE" color="#B18BF7" title="THE APP, FRAME BY FRAME." />
        <p className="text-[16px] leading-relaxed text-[#D6CDD2] max-w-2xl mb-8">
          Switch between the design mockups and captures taken straight from the live prototype. Tap or click any frame to open it full size. Medicine names, locations, and points are sample data.
        </p>
        <div role="tablist" aria-label="Screenshot set" className="flex flex-wrap gap-2 mb-10">
          {([["design", "DESIGN MOCKUPS (5)"], ["live", `LIVE APP CAPTURES (${pharvia.liveScreens.length})`]] as const).map(([k, label]) => (
            <button
              key={k}
              role="tab"
              id={`gallery-tab-${k}`}
              aria-selected={tab === k}
              aria-controls="gallery-panel"
              onClick={() => setTab(k)}
              className={`font-tape text-[12px] font-bold tracking-[0.14em] px-5 py-2.5 transition-colors ${tab === k ? "bg-[#F1E5D0] text-[#151319]" : "border border-white/25 text-[#B8ADB4] hover:text-[#F1E5D0]"}`}
            >
              {label}
            </button>
          ))}
          {tab === "live" && (
            <a href={pharvia.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-tape text-[12px] font-bold tracking-[0.14em] px-3 py-2.5 hover:text-[#F5BA60] transition-colors" style={{ color: teal }}>
              pharvia.vercel.app <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>

      <div id="gallery-panel" role="tabpanel" aria-labelledby={`gallery-tab-${tab}`} className="bg-[#07060a] border-y-[10px] border-[#07060a] shadow-[0_20px_40px_-16px_rgba(0,0,0,0.9)]">
        <div className="flex justify-between px-1 py-1.5 overflow-hidden" aria-hidden="true">
          {holes.map((_, i) => <span key={i} className="w-2.5 h-3 shrink-0 rounded-[2px] bg-[#2a252f]" />)}
        </div>
        <ul className="max-w-6xl mx-auto px-6 py-8 flex lg:grid lg:grid-cols-5 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory">
          {frames.map((s, i) => (
            <li key={`${tab}-${s.id}`} className="snap-center shrink-0 w-[62%] sm:w-[40%] lg:w-auto">
              <button onClick={() => setOpen(i)} aria-label={`Open ${s.label} full size`} className="group block w-full text-left">
                {tab === "design" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.src}
                    alt={`${s.label}: ${s.caption}`}
                    width={s.width}
                    height={s.height}
                    loading="lazy"
                    className="w-full h-auto drop-shadow-[0_18px_24px_rgba(0,0,0,0.65)] group-hover:-translate-y-2 transition-transform duration-300"
                  />
                ) : (
                  <PhoneFrame src={s.src} alt={`${s.label}: ${s.caption}`} width={s.width} height={s.height} className="group-hover:-translate-y-2 transition-transform duration-300" />
                )}
                <span className="flex items-center gap-2 mt-4 font-tape text-[11px] font-bold tracking-[0.14em] text-[#F1E5D0]">
                  <span style={{ color: teal }}>{String(i + 1).padStart(2, "0")}</span> {s.label.toUpperCase()}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between px-1 py-1.5 overflow-hidden" aria-hidden="true">
          {holes.map((_, i) => <span key={i} className="w-2.5 h-3 shrink-0 rounded-[2px] bg-[#2a252f]" />)}
        </div>
      </div>
      <Lightbox items={items} index={open} onClose={close} onIndex={setOpen} />
    </section>
  );
}
