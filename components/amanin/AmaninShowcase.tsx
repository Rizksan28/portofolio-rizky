"use client";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import Lightbox from "@/components/pharvia/Lightbox";
import PhoneFrame from "@/components/pharvia/PhoneFrame";
import { SubHead } from "@/components/amanin/AmaninNarrative";
import { amanin, type Availability, type Shot } from "@/lib/amanin";

const { cyan, amber, green, red, blue } = amanin.colors;
const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;

const toItem = (s: Shot, tag: string) => ({
  src: s.src,
  alt: `${s.label}: ${s.caption}`,
  caption: `${tag} · ${s.label}: ${s.caption}`,
  width: s.width,
  height: s.height,
});
const liveItems = amanin.liveShots.map((s) => toItem(s, "Live app"));
const presItems = amanin.presShots.map((s) => toItem(s, "Presentation mockup"));

const AVAIL: Record<Availability, { label: string; color: string; solid: boolean }> = {
  prototype: { label: "IN PROTOTYPE", color: green, solid: true },
  planned: { label: "PLANNED", color: amber, solid: false },
};

function Badge({ a }: { a: Availability }) {
  const v = AVAIL[a];
  return v.solid ? (
    <span className="font-tape text-[10px] font-bold tracking-[0.14em] px-2 py-0.5 text-[#04202a]" style={{ background: v.color }}>{v.label}</span>
  ) : (
    <span className="font-tape text-[10px] font-bold tracking-[0.14em] px-2 py-0.5 border" style={{ borderColor: v.color, color: v.color }}>{v.label}</span>
  );
}

export function Features() {
  const [active, setActive] = useState(amanin.features[0].id);
  const [open, setOpen] = useState<number | null>(null);
  const f = amanin.features.find((x) => x.id === active)!;
  const shotIndex = amanin.liveShots.findIndex((s) => s.id === f.shotId);
  const shot = shotIndex >= 0 ? amanin.liveShots[shotIndex] : null;

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = amanin.features.length;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else return;
    e.preventDefault();
    setActive(amanin.features[next].id);
    document.getElementById(`am-feature-${amanin.features[next].id}`)?.focus();
  };

  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <SubHead label="FEATURE FILES" color={cyan} title="EIGHT FILES. SIX IN THE PROTOTYPE." />
        <div className="grid gap-8 lg:grid-cols-[330px_1fr]">
          <div role="tablist" aria-label="AMANIN features" aria-orientation="vertical" className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
            {amanin.features.map((x, i) => {
              const on = x.id === active;
              return (
                <button
                  key={x.id}
                  id={`am-feature-${x.id}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls="am-feature-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(x.id)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`shrink-0 text-left flex items-center gap-3 px-4 py-3 border transition-colors min-w-[220px] lg:min-w-0 ${on ? "bg-[#F1E5D0] text-[#0a1f3d] border-[#F1E5D0]" : "bg-[#0d1626] text-[#F1E5D0] border-white/20 hover:border-[#F1E5D0]"}`}
                >
                  <span className="font-display text-[20px] leading-none" style={{ color: on ? "#C22F54" : cyan }}>{x.n}</span>
                  <span className="flex-1">
                    <span className="block font-display text-[14px] leading-tight">{x.name}</span>
                    <span className={`block font-tape text-[10px] tracking-[0.14em] mt-1 ${on ? "text-[#0a1f3d]/75" : "text-[#B8ADB4]"}`}>{AVAIL[x.availability].label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id="am-feature-panel" role="tabpanel" aria-labelledby={`am-feature-${active}`} className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div key={f.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="grid gap-8 md:grid-cols-[minmax(0,250px)_1fr] items-start">
                <div className="mx-auto w-full max-w-[250px]">
                  {shot ? (
                    <>
                      <button onClick={() => setOpen(shotIndex)} aria-label={`Enlarge ${shot.label} screenshot`} className="group relative block w-full">
                        <PhoneFrame src={shot.src} alt={`${shot.label}: ${shot.caption}`} width={shot.width} height={shot.height} className="group-hover:-translate-y-1 transition-transform" />
                        <span className="absolute right-3 bottom-3 w-9 h-9 flex items-center justify-center bg-[#0a1424]/85 border border-white/30 text-[#F1E5D0]" aria-hidden="true"><Maximize2 size={15} /></span>
                      </button>
                      <p className="mt-3 font-tape text-[10px] font-bold tracking-[0.16em] text-center" style={{ color: cyan }}>● LIVE APP CAPTURE · SAMPLE DATA</p>
                    </>
                  ) : (
                    <div className="aspect-[9/19] border-2 border-dashed bg-[#F7B955]/[0.05] flex flex-col items-center justify-center text-center p-6 gap-3" style={{ borderColor: `${amber}99` }}>
                      <span className="font-display text-[44px]" style={{ color: amber }}>{f.n}</span>
                      <span className="font-tape text-[11px] font-bold tracking-[0.18em]" style={{ color: amber }}>PLANNED</span>
                      <span className="font-tape text-[12px] text-[#F1E5D0] leading-relaxed">No screen exists. Shown as a proposed capability.</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge a={f.availability} />
                    <span className="font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4]">FILE {f.n} / 08</span>
                  </div>
                  <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1] text-[#F1E5D0] mb-4">{f.name}</h3>
                  <p className="font-display text-[17px] leading-snug mb-4" style={{ color: cyan }}>{f.summary}</p>
                  <p className="text-[16px] leading-[1.75] text-[#F1E5D0]/90 mb-6">{f.detail}</p>
                  <div className="border-l-2 pl-4 py-1 font-tape text-[12px] leading-relaxed text-[#D6CDD2]" style={{ borderColor: AVAIL[f.availability].color }}>
                    <span className="block text-[10px] font-bold tracking-[0.2em] mb-1" style={{ color: AVAIL[f.availability].color }}>HONEST NOTE</span>
                    {f.note}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Lightbox items={liveItems} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </div>
  );
}

export function Gallery() {
  const [tab, setTab] = useState<"live" | "pres">("live");
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const holes = Array.from({ length: 28 });
  const frames = tab === "live" ? amanin.liveShots : amanin.presShots;
  const items = tab === "live" ? liveItems : presItems;

  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <SubHead label="APPLICATION SHOWCASE" color={blue} title="THE APP, FRAME BY FRAME." />
        <p className="text-[16px] leading-relaxed text-[#D6CDD2] max-w-2xl mb-8">
          Captures taken straight from the live prototype, plus the mockups from the team presentation. Swipe or scroll the strip and open any frame full size. Messages and QR shown here are the app&apos;s built-in samples.
        </p>
        <div role="tablist" aria-label="Screenshot set" className="flex flex-wrap gap-2 mb-10">
          {([["live", `LIVE APP CAPTURES (${amanin.liveShots.length})`], ["pres", `PRESENTATION MOCKUPS (${amanin.presShots.length})`]] as const).map(([k, label]) => (
            <button key={k} role="tab" id={`am-gallery-tab-${k}`} aria-selected={tab === k} aria-controls="am-gallery-panel" onClick={() => setTab(k)} className={`font-tape text-[12px] font-bold tracking-[0.14em] px-5 py-2.5 transition-colors ${tab === k ? "bg-[#F1E5D0] text-[#0a1f3d]" : "border border-white/25 text-[#B8ADB4] hover:text-[#F1E5D0]"}`}>
              {label}
            </button>
          ))}
          {tab === "live" && (
            <a href={amanin.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-tape text-[12px] font-bold tracking-[0.14em] px-3 py-2.5 hover:text-[#F5BA60] transition-colors" style={{ color: cyan }}>
              mobile-webpage-amanin.vercel.app <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>

      <div id="am-gallery-panel" role="tabpanel" aria-labelledby={`am-gallery-tab-${tab}`} className="bg-[#050a14] border-y-[10px] border-[#050a14] shadow-[0_20px_40px_-16px_rgba(0,0,0,0.9)]">
        <div className="flex justify-between px-1 py-1.5 overflow-hidden" aria-hidden="true">{holes.map((_, i) => <span key={i} className="w-2.5 h-3 shrink-0 rounded-[2px] bg-[#1c2a44]" />)}</div>
        <ul className="max-w-6xl mx-auto px-6 py-8 flex gap-5 overflow-x-auto snap-x snap-mandatory lg:justify-start" tabIndex={0} aria-label="Screenshot strip, scroll horizontally">
          {frames.map((s, i) => (
            <li key={`${tab}-${s.id}`} className="snap-center shrink-0 w-[62%] sm:w-[34%] lg:w-[19%]">
              <button onClick={() => setOpen(i)} aria-label={`Open ${s.label} full size`} className="group block w-full text-left">
                {tab === "live" ? (
                  <PhoneFrame src={s.src} alt={`${s.label}: ${s.caption}`} width={s.width} height={s.height} className="group-hover:-translate-y-2 transition-transform duration-300" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.src} alt={`${s.label}: ${s.caption}`} width={s.width} height={s.height} loading="lazy" className="w-full h-auto drop-shadow-[0_18px_24px_rgba(0,0,0,0.65)] group-hover:-translate-y-2 transition-transform duration-300" />
                )}
                <span className="flex items-center gap-2 mt-4 font-tape text-[11px] font-bold tracking-[0.14em] text-[#F1E5D0]">
                  <span style={{ color: cyan }}>{String(i + 1).padStart(2, "0")}</span> {s.label.toUpperCase()}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between px-1 py-1.5 overflow-hidden" aria-hidden="true">{holes.map((_, i) => <span key={i} className="w-2.5 h-3 shrink-0 rounded-[2px] bg-[#1c2a44]" />)}</div>
      </div>
      <Lightbox items={items} index={open} onClose={close} onIndex={setOpen} />
    </div>
  );
}

export function Experience() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <SubHead label="PRODUCT EXPERIENCE" color={green} title="SIX STEPS FROM DOUBT TO DECISION." />
        <ol className="relative">
          <span className="absolute left-[19px] md:left-[27px] top-2 bottom-2 w-px bg-white/20" aria-hidden="true" />
          {amanin.experience.map((s, i) => {
            const shotIndex = amanin.liveShots.findIndex((x) => x.id === s.shotId);
            const shot = amanin.liveShots[shotIndex];
            return (
              <motion.li key={s.n} {...reveal} className="relative grid gap-4 md:gap-8 grid-cols-[40px_1fr] md:grid-cols-[56px_1fr_150px] pb-10 last:pb-0">
                <span className="relative z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center font-display text-[16px] md:text-[22px] text-[#04202a]" style={{ background: i % 2 ? cyan : green }}>{s.n}</span>
                <div>
                  <h3 className="font-display text-[clamp(1.1rem,2vw,1.5rem)] text-[#F1E5D0] mb-2 leading-tight">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#D6CDD2] max-w-xl">{s.text}</p>
                </div>
                <button onClick={() => setOpen(shotIndex)} aria-label={`Open ${shot.label} full size`} className="hidden md:block self-start group">
                  <PhoneFrame src={shot.src} alt={`${shot.label}: ${shot.caption}`} width={shot.width} height={shot.height} className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.li>
            );
          })}
        </ol>
      </div>
      <Lightbox items={liveItems} index={open} onClose={close} onIndex={setOpen} />
    </div>
  );
}

export function Personas() {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <SubHead label="USER PERSONAS" color={red} title="THREE NAMES ON THE CASE BOARD." />
        <div className="grid gap-6 lg:grid-cols-3">
          {amanin.personas.map((p, i) => {
            const on = active === i;
            return (
              <motion.article key={p.id} {...reveal} transition={{ delay: i * 0.08 }} className="paper relative self-start shadow-[0_22px_38px_-16px_rgba(0,0,0,0.95)]" style={{ transform: `rotate(${[-0.8, 0.5, -0.4][i]}deg)` }}>
                <span className="masking-tape absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rotate-[-2deg]" aria-hidden="true" />
                <div className="flex items-end gap-3 px-5 pt-6" style={{ borderTop: `6px solid ${p.color}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={`Illustration of the persona ${p.name}`} width={420} height={500} loading="lazy" className="w-[104px] h-[118px] object-contain object-bottom shrink-0" />
                  <div className="pb-3 min-w-0">
                    <h3 className="font-display text-[26px] leading-none text-[#0a1f3d]">{p.name}</h3>
                    <p className="font-tape text-[11px] font-bold tracking-[0.12em] mt-1" style={{ color: "#8a1f3a" }}>{p.role.toUpperCase()}</p>
                    <p className="font-tape text-[10px] text-[#151319]/75 mt-1 leading-snug">{p.meta}</p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <p className="text-[14px] leading-relaxed italic text-[#151319]/90 border-l-2 pl-3 my-4" style={{ borderColor: p.color }}>&ldquo;{p.quote}&rdquo;</p>
                  <button onClick={() => setActive(on ? -1 : i)} aria-expanded={on} className="w-full flex items-center justify-between font-tape text-[11px] font-bold tracking-[0.14em] text-[#0a1f3d] border-2 border-[#0a1f3d] px-3 py-2 hover:bg-[#0a1f3d] hover:text-[#F1E5D0] transition-colors">
                    {on ? "HIDE FILE" : "OPEN FILE"} <span aria-hidden="true">{on ? "−" : "+"}</span>
                  </button>
                  {[["GOALS", p.goals], ["BARRIERS", p.barriers]].map(([title, list]) => (
                    <div key={title as string} className={on ? "mt-4" : "sr-only"}>
                      <p className="font-tape text-[10px] font-bold tracking-[0.2em] text-[#151319]/70 mb-1.5">{title as string}</p>
                      <ul className="space-y-1.5">{(list as string[]).map((g) => <li key={g} className="text-[13px] leading-snug text-[#151319]/90 flex gap-2"><span className="mt-[6px] w-1 h-1 rounded-full shrink-0 bg-[#151319]" aria-hidden="true" />{g}</li>)}</ul>
                    </div>
                  ))}
                  <div className="mt-4">
                    <p className="font-tape text-[10px] font-bold tracking-[0.2em] text-[#151319]/70 mb-2">RELEVANT AMANIN FEATURES</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.needs.map((n) => <span key={n} className="font-tape text-[11px] font-semibold text-[#F1E5D0] px-2 py-0.5" style={{ background: "#0a1f3d" }}>{n}</span>)}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        <p className="font-tape text-[12px] leading-relaxed text-[#B8ADB4] border-l-2 pl-4 mt-10 max-w-3xl" style={{ borderColor: amber }}>{amanin.personaNote}</p>
      </div>
    </div>
  );
}
