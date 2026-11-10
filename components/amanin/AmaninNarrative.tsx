"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneFrame from "@/components/pharvia/PhoneFrame";
import { amanin } from "@/lib/amanin";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;
const { cyan, red, amber, green, blue } = amanin.colors;

export function SubHead({ label, color, title }: { label: string; color: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="flex items-center gap-3 font-tape text-[11px] font-bold tracking-[0.22em]" style={{ color }}>
        <span className="h-px w-10" style={{ background: `${color}99` }} aria-hidden="true" />{label}
      </p>
      <h3 className="text-[clamp(1.5rem,3vw,2.3rem)] leading-[1] text-[#F1E5D0] mt-3">{title}</h3>
    </div>
  );
}

function Stamp({ children, color = red }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="inline-block -rotate-3 border-2 px-2 py-0.5 font-tape text-[10px] font-bold tracking-[0.2em]" style={{ color, borderColor: color }} aria-hidden="true">
      {children}
    </span>
  );
}

function DotGrid({ lit }: { lit: number }) {
  return (
    <div className="grid grid-cols-10 gap-1" aria-hidden="true">
      {Array.from({ length: 100 }).map((_, i) => (
        <span key={i} className="aspect-square rounded-full" style={{ background: i < lit ? amber : "#243148", boxShadow: i < lit ? `0 0 6px ${amber}66` : "none" }} />
      ))}
    </div>
  );
}

export function Threat() {
  const { threat } = amanin;
  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <SubHead label="THE THREAT" color={red} title="EVIDENCE OF A DIGITAL CRIME WAVE." />
        <p className="text-[18px] md:text-[20px] leading-relaxed text-[#F1E5D0] max-w-3xl mb-12">{threat.intro}</p>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start mb-6">
          {threat.exhibits.map((e, i) => (
            <motion.article
              key={e.id}
              {...reveal}
              transition={{ delay: i * 0.1 }}
              className="paper relative p-6 shadow-[0_22px_38px_-16px_rgba(0,0,0,0.95)]"
              style={{ transform: `rotate(${[-0.8, 0.6, -0.4][i]}deg)` }}
            >
              <span className="masking-tape absolute -top-3 left-8 w-16 h-6 rotate-[-3deg]" aria-hidden="true" />
              <div className="flex items-center justify-between mb-4">
                <p className="font-tape text-[10px] font-bold tracking-[0.22em] text-[#151319]/70">EXHIBIT {e.id}</p>
                <Stamp>CITED</Stamp>
              </div>
              <p className="font-display leading-none text-[#0a1f3d] timecode text-[clamp(2.8rem,5.4vw,4.2rem)]">
                {e.value}
                {e.id === "B" && <span className="text-[0.6em]">%</span>}
              </p>
              <p className="font-tape text-[12px] font-semibold text-[#151319] mt-3 leading-snug min-h-[48px]">{e.label}</p>

              <div className="mt-4 mb-4">
                {e.id === "A" && (
                  <div aria-hidden="true">
                    <div className="h-3 bg-[#151319]/15"><div className="h-full w-full" style={{ background: `repeating-linear-gradient(90deg, ${red} 0 6px, transparent 6px 9px)` }} /></div>
                    <p className="font-tape text-[10px] tracking-[0.14em] text-[#151319]/70 mt-1.5">LAPORAN MASUK · 1,27 JUTA REKENING</p>
                  </div>
                )}
                {e.id === "B" && <DotGrid lit={66} />}
                {e.id === "C" && (
                  <div className="space-y-2" aria-hidden="true">
                    <div><div className="h-3 bg-[#151319]/15"><div className="h-full" style={{ width: "66.46%", background: blue }} /></div><p className="font-tape text-[10px] text-[#151319]/75 mt-1">LITERASI 66,46%</p></div>
                    <div><div className="h-3 bg-[#151319]/15"><div className="h-full" style={{ width: "80.51%", background: "#0a1f3d" }} /></div><p className="font-tape text-[10px] text-[#151319]/75 mt-1">INKLUSI 80,51%</p></div>
                  </div>
                )}
              </div>
              <p className="text-[13px] leading-relaxed text-[#151319]/85">{e.detail}</p>
              <p className="font-tape text-[10px] leading-relaxed text-[#151319]/70 mt-3 pt-3 border-t border-dashed border-[#151319]/35">SUMBER: {e.source}</p>
            </motion.article>
          ))}
        </div>
        <p className="font-tape text-[12px] leading-relaxed text-[#B8ADB4] border-l-2 pl-4 max-w-3xl mb-16" style={{ borderColor: amber }}>{threat.note}</p>

        <h3 className="font-display text-xl text-[#F1E5D0] mb-6">FIVE PROBLEMS IN THE FILE</h3>
        <ol className="border-t border-white/20">
          {threat.problems.map((p) => (
            <li key={p.n} className="grid gap-x-6 gap-y-1 md:grid-cols-[72px_minmax(0,0.9fr)_1.4fr] items-baseline py-5 border-b border-white/15">
              <span className="font-display text-[30px] leading-none timecode" style={{ color: red }}>{p.n}</span>
              <h4 className="font-display text-[18px] text-[#F1E5D0]">{p.title}</h4>
              <p className="text-[15px] leading-relaxed text-[#D6CDD2]">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Idea() {
  const { idea, liveShots } = amanin;
  const [active, setActive] = useState(0);
  const step = idea.steps[active];
  const shot = liveShots.find((s) => s.id === step.shotId)!;
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = idea.steps.length;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    else return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`idea-tab-${idea.steps[next].id}`)?.focus();
  };

  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <SubHead label="THE IDEA" color={cyan} title={idea.statement} />
        <p className="text-[18px] leading-relaxed text-[#F1E5D0] max-w-3xl mb-12">{idea.text}</p>

        <div role="tablist" aria-label="AMANIN user journey" className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20 border border-white/20 mb-10">
          {idea.steps.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.id}
                id={`idea-tab-${s.id}`}
                role="tab"
                aria-selected={on}
                aria-controls="idea-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`relative text-left px-4 py-4 transition-colors ${on ? "bg-[#F1E5D0] text-[#0a1f3d]" : "bg-[#0d1626] text-[#F1E5D0] hover:bg-[#13213a]"}`}
              >
                <span className="font-display text-[26px] leading-none timecode" style={{ color: on ? "#C22F54" : cyan }}>{s.n}</span>
                <span className="block font-display text-[clamp(1rem,2vw,1.4rem)] mt-1.5">{s.label}</span>
                {i < idea.steps.length - 1 && (
                  <span className="hidden md:flex absolute -right-[13px] top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full font-tape text-[10px] font-bold text-[#04202a]" style={{ background: amber }} aria-hidden="true">▶</span>
                )}
              </button>
            );
          })}
        </div>

        <div id="idea-panel" role="tabpanel" aria-labelledby={`idea-tab-${step.id}`}>
          <AnimatePresence mode="wait">
            <motion.div key={step.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="grid gap-10 md:grid-cols-[1fr_minmax(0,260px)] items-center">
              <div>
                <p className="font-tape text-[11px] font-bold tracking-[0.22em] mb-3" style={{ color: cyan }}>STEP {step.n} / 04 · {step.label}</p>
                <h3 className="text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1] text-[#F1E5D0] mb-5">{step.title}</h3>
                <p className="text-[17px] leading-[1.75] text-[#F1E5D0]/90 max-w-xl">{step.text}</p>
              </div>
              <div className="mx-auto w-full max-w-[240px]">
                <PhoneFrame src={shot.src} alt={`${shot.label}: ${shot.caption}`} width={shot.width} height={shot.height} />
                <p className="mt-3 font-tape text-[10px] font-bold tracking-[0.16em] text-center" style={{ color: cyan }}>● LIVE APP CAPTURE · SAMPLE DATA</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function Solution() {
  const { solution } = amanin;
  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <SubHead label="THE SOLUTION" color={green} title="FIVE LAYERS OF DECISION SUPPORT." />
        <ul className="grid gap-px bg-white/15 border border-white/15 md:grid-cols-5 mb-16">
          {solution.capabilities.map((c, i) => (
            <motion.li key={c.title} {...reveal} transition={{ delay: i * 0.06 }} className="bg-[#0b1220] p-5">
              <span className="font-display text-[26px] leading-none timecode" style={{ color: green }}>0{i + 1}</span>
              <h3 className="font-display text-[16px] text-[#F1E5D0] mt-3 mb-2 leading-tight">{c.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#D6CDD2]">{c.text}</p>
            </motion.li>
          ))}
        </ul>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="p-6 border border-[#3AE0B0]/50 bg-[#0e1f22]" style={{ borderTop: `4px solid ${green}` }}>
            <p className="font-tape text-[10px] font-bold tracking-[0.2em] mb-3 text-[#04202a] inline-block px-2 py-0.5" style={{ background: green }}>WHAT THE PROTOTYPE DOES</p>
            <ul className="space-y-3">
              {solution.reality.prototype.map((t) => (
                <li key={t} className="flex gap-3 text-[14px] leading-relaxed text-[#F1E5D0]/90"><span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: green }} aria-hidden="true" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 border border-[#F7B955]/50 bg-[#211c12]" style={{ borderTop: `4px solid ${amber}` }}>
            <p className="font-tape text-[10px] font-bold tracking-[0.2em] mb-3 inline-block px-2 py-0.5 border" style={{ color: amber, borderColor: amber }}>PROPOSED IN THE PRESENTATION</p>
            <ul className="space-y-3">
              {solution.reality.proposed.map((t) => (
                <li key={t} className="flex gap-3 text-[14px] leading-relaxed text-[#F1E5D0]/90"><span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: amber }} aria-hidden="true" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-tape text-[12px] leading-relaxed text-[#F1E5D0] border-l-2 pl-4 mt-8 max-w-3xl" style={{ borderColor: cyan }}>{solution.reality.verifiedNote}</p>
      </div>
    </div>
  );
}
