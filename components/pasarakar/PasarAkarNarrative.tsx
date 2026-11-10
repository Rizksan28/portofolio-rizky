"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChapterHead } from "@/components/pharvia/Narrative";
import { pasarakar } from "@/lib/pasarakar";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;
const { gold, forest } = pasarakar.colors;
const leaf = "#3FBF7A";

export function Story() {
  return (
    <section id="story" className="scroll-mt-36 bg-[#0d0b10] py-20 md:py-28 border-y border-white/[0.06]">
      <motion.div {...reveal} className="max-w-5xl mx-auto px-6">
        <ChapterHead n="01" label="THE STORY" color={leaf} title="FROM THE VILLAGE, FOR THE FUTURE." />
        <blockquote className="font-display text-[clamp(1.5rem,3.6vw,2.7rem)] leading-[1.08] text-[#F1E5D0] border-l-4 pl-6 md:pl-8 mb-12" style={{ borderColor: gold }}>
          Petani menggerakkan rantai pasok pangan. <span style={{ color: gold }}>Seharusnya mereka juga menikmatinya.</span>
        </blockquote>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-start">
          <div className="space-y-6 text-[17px] leading-[1.85] text-[#F1E5D0]/90">
            {pasarakar.story.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#D9A441]" : ""}>{p}</p>
            ))}
          </div>
          <aside className="paper relative p-5 rotate-[1.4deg] shadow-[0_20px_36px_-14px_rgba(0,0,0,0.9)] font-tape">
            <span className="masking-tape absolute -top-3 right-6 w-16 h-6 rotate-[4deg]" aria-hidden="true" />
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 mb-3">ARCHIVE CARD</p>
            {[
              ["TITLE", "PASARAKAR"],
              ["ARCHIVE ID", pasarakar.archiveId],
              ["FORMAT", "VHS · T-120 · SP"],
              ["FILMED BY", pasarakar.teamName],
              ["PILOT AREA", "Maluku Tengah (usulan)"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-dashed border-[#151319]/35 text-[12px]">
                <span className="text-[#151319]/70">{k}</span>
                <span className="font-semibold text-right">{v}</span>
              </div>
            ))}
          </aside>
        </div>
        <p className="mt-12 font-tape text-[12px] text-[#B8ADB4] max-w-2xl leading-relaxed">{pasarakar.fullConcept}</p>
        <p className="mt-3 font-tape text-[12px] text-[#B8ADB4] max-w-2xl leading-relaxed">{pasarakar.pillarsNote}</p>
      </motion.div>
    </section>
  );
}

export function Problem() {
  const { problem } = pasarakar;
  return (
    <section id="problem" className="scroll-mt-36 bg-[#151319] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="02" label="THE PROBLEM" color="#FF718E" title="WHO PAYS WHEN THE CHAIN IS UNFAIR." />

        <div className="grid gap-5 lg:grid-cols-3 lg:items-start mb-6">
          {problem.stats.map((s, i) => (
            <motion.div key={s.id} {...reveal} transition={{ delay: i * 0.1 }} className="bg-gradient-to-b from-[#221e27] to-[#17141b] border border-black p-6 shadow-[0_20px_36px_-16px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <p className="font-tape text-[10px] font-bold tracking-[0.22em] text-[#B8ADB4] mb-3">DATA {s.id} · CITED RESEARCH</p>
              <p className="font-display leading-[1.05] timecode flex flex-wrap items-baseline gap-x-1" style={{ color: [gold, leaf, "#FF718E"][i] }}>
                <span className="text-[clamp(1.8rem,3.4vw,2.6rem)]">{s.big}</span>
                <span className="text-[clamp(1rem,1.8vw,1.4rem)]">{s.unit}</span>
              </p>
              <p className="text-[15px] leading-snug text-[#F1E5D0] mt-3 mb-4">{s.label}</p>
              {s.id === "A" && (
                <div className="space-y-2" aria-hidden="true">
                  <div><div className="h-3 bg-white/10"><div className="h-full" style={{ width: "20%", background: leaf }} /></div><p className="font-tape text-[10px] text-[#B8ADB4] mt-1">PANEN RAYA Rp10.000</p></div>
                  <div><div className="h-3 bg-white/10"><div className="h-full" style={{ width: "100%", background: "#FF718E" }} /></div><p className="font-tape text-[10px] text-[#B8ADB4] mt-1">PRODUKSI MENURUN Rp50.000</p></div>
                </div>
              )}
              {s.id === "B" && (
                <div aria-hidden="true">
                  <div className="h-4 flex"><div className="h-full" style={{ width: "69.5%", background: gold }} /><div className="h-full" style={{ width: "30.5%", background: forest }} /></div>
                  <p className="font-tape text-[10px] text-[#B8ADB4] mt-1">PERKOTAAN 69,5% · PERDESAAN 30,5%</p>
                </div>
              )}
              {s.id === "C" && (
                <div className="grid grid-cols-10 gap-1" aria-hidden="true">
                  {Array.from({ length: 30 }).map((_, k) => <span key={k} className="aspect-square rounded-full" style={{ background: k < 24 ? "#FF718E" : "#2a252f" }} />)}
                </div>
              )}
              <p className="font-tape text-[10px] leading-relaxed text-[#B8ADB4] mt-4 pt-3 border-t border-dashed border-white/20">SUMBER: {s.source}</p>
            </motion.div>
          ))}
        </div>
        <p className="font-tape text-[12px] leading-relaxed text-[#B8ADB4] border-l-2 pl-4 max-w-3xl mb-16" style={{ borderColor: gold }}>{problem.note}</p>

        <h3 className="font-display text-xl text-[#F1E5D0] mb-6">SIX PROBLEMS ON THE RECORD</h3>
        <ol className="grid gap-px bg-white/15 border border-white/15 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {problem.items.map((p) => (
            <li key={p.n} className="bg-[#17141b] p-5">
              <span className="font-display text-[28px] leading-none timecode" style={{ color: "#FF718E" }}>{p.n}</span>
              <h4 className="font-display text-[17px] text-[#F1E5D0] mt-3 mb-2 leading-tight">{p.title}</h4>
              <p className="text-[14px] leading-relaxed text-[#D6CDD2]">{p.text}</p>
            </li>
          ))}
        </ol>
        <p className="font-tape text-[13px] font-semibold text-[#2a1b05] px-4 py-3 inline-block" style={{ background: gold }}>{problem.opportunity}</p>
      </div>
    </section>
  );
}

export function Solution() {
  const { solution } = pasarakar;
  const [active, setActive] = useState(0);
  const step = solution.flow[active];
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = solution.flow.length;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    else return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`pa-flow-${next}`)?.focus();
  };

  return (
    <section id="solution" className="scroll-mt-36 bg-[#0d0b10] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="03" label="THE SOLUTION" color={gold} title="ONE ECOSYSTEM, SIX PILLARS." />
        <p className="text-[18px] leading-relaxed text-[#F1E5D0] max-w-3xl mb-12">{solution.intro}</p>

        <ul className="grid gap-px bg-white/15 border border-white/15 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {solution.pillars.map((p, i) => (
            <motion.li key={p.title} {...reveal} transition={{ delay: i * 0.05 }} className="bg-[#0d0b10] p-5">
              <span className="font-display text-[24px] leading-none timecode" style={{ color: leaf }}>0{i + 1}</span>
              <h3 className="font-display text-[16px] text-[#F1E5D0] mt-3 mb-2 leading-tight">{p.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#D6CDD2]">{p.text}</p>
            </motion.li>
          ))}
        </ul>

        <h3 className="font-display text-xl text-[#F1E5D0] mb-6">THE PATH OF ONE HARVEST</h3>
        <div role="tablist" aria-label="PasarAkar workflow" className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/20 border border-white/20 mb-8">
          {solution.flow.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.n}
                id={`pa-flow-${i}`}
                role="tab"
                aria-selected={on}
                aria-controls="pa-flow-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`relative text-left px-3 py-3.5 transition-colors ${on ? "bg-[#F1E5D0] text-[#151319]" : "bg-[#151319] text-[#F1E5D0] hover:bg-[#1d1a22]"}`}
              >
                <span className="font-display text-[20px] leading-none timecode" style={{ color: on ? "#C22F54" : gold }}>{s.n}</span>
                <span className="block font-tape text-[10px] font-bold tracking-[0.12em] mt-1.5">{s.label}</span>
                {i < solution.flow.length - 1 && (
                  <span className="hidden md:flex absolute -right-[11px] top-1/2 -translate-y-1/2 z-10 w-5 h-5 items-center justify-center rounded-full font-tape text-[10px] font-bold text-[#2a1b05]" style={{ background: gold }} aria-hidden="true">▶</span>
                )}
              </button>
            );
          })}
        </div>
        <div id="pa-flow-panel" role="tabpanel" aria-labelledby={`pa-flow-${active}`} className="border-l-4 pl-5 py-1 mb-12 max-w-2xl" style={{ borderColor: gold }}>
          <p className="font-tape text-[11px] font-bold tracking-[0.2em] mb-1" style={{ color: gold }}>STEP {step.n} / 06 · {step.label}</p>
          <p className="text-[17px] leading-relaxed text-[#F1E5D0]">{step.text}</p>
        </div>

        <div className="border border-[#D9A441]/50 bg-[#D9A441]/[0.06] p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex flex-wrap gap-2 shrink-0 font-tape text-[11px] font-bold tracking-[0.14em]">
            <span className="px-2 py-1 text-[#06231d]" style={{ background: leaf }}>PROTOTYPE DESIGN</span>
            <span className="px-2 py-1 border" style={{ borderColor: gold, color: gold }}>PROPOSED</span>
          </div>
          <p className="text-[14px] leading-relaxed text-[#F1E5D0]">{solution.statusNote}</p>
        </div>
      </div>
    </section>
  );
}
