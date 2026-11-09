"use client";
import { motion } from "framer-motion";
import { pharvia } from "@/lib/pharvia";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;

export function ChapterHead({ n, label, color, title }: { n: string; label: string; color: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 font-tape text-[11px] font-bold tracking-[0.22em]" style={{ color }}>
        <span className="timecode text-[30px] leading-none font-display" aria-hidden="true">{n}</span>
        <span className="h-px w-16" style={{ background: `${color}99` }} aria-hidden="true" />
        <span>{label}</span>
      </div>
      <h2 className="text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[0.98] text-[#F1E5D0] mt-4">{title}</h2>
    </div>
  );
}

export function Story() {
  const { teal } = pharvia.colors;
  return (
    <section id="story" className="scroll-mt-36 bg-[#0d0b10] py-20 md:py-28 border-y border-white/[0.06]">
      <motion.div {...reveal} className="max-w-5xl mx-auto px-6">
        <ChapterHead n="01" label="THE STORY" color={teal} title="WHY THIS TAPE EXISTS." />
        <blockquote className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-[1.05] text-[#F1E5D0] border-l-4 pl-6 md:pl-8 mb-12" style={{ borderColor: teal }}>
          <span style={{ color: teal }}>&ldquo;</span>
          {pharvia.quote}
          <span style={{ color: teal }}>&rdquo;</span>
        </blockquote>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-start">
          <div className="space-y-6 text-[17px] leading-[1.85] text-[#F1E5D0]/90">
            {pharvia.story.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#2BD4B4]" : ""}
              >
                {p}
              </p>
            ))}
          </div>
          <aside className="paper relative p-5 rotate-[1.4deg] shadow-[0_20px_36px_-14px_rgba(0,0,0,0.9)] font-tape">
            <span className="masking-tape absolute -top-3 right-6 w-16 h-6 rotate-[4deg]" aria-hidden="true" />
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 mb-3">ARCHIVE CARD</p>
            {[
              ["TITLE", "PHARVIA"],
              ["ARCHIVE ID", pharvia.archiveId],
              ["FORMAT", "VHS · T-120 · SP"],
              ["FILMED BY", pharvia.team.name],
              ["YEAR", pharvia.year],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-dashed border-[#151319]/35 text-[12px]">
                <span className="text-[#151319]/70">{k}</span>
                <span className="font-semibold text-right">{v}</span>
              </div>
            ))}
          </aside>
        </div>
        <p className="mt-12 font-tape text-[12px] text-[#B8ADB4] max-w-2xl leading-relaxed">{pharvia.fullConcept}</p>
      </motion.div>
    </section>
  );
}

function Meter({ lit, color }: { lit: number; color: string }) {
  return (
    <div className="flex gap-[3px]" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="h-6 flex-1 rounded-[1px] border border-black/60"
          style={{ background: i < lit ? color : "#2a252f", boxShadow: i < lit ? `0 0 8px ${color}88` : "none" }}
        />
      ))}
    </div>
  );
}

export function Problem() {
  const colors = ["#FF718E", "#F5BA60", "#2BD4B4"];
  const { problem } = pharvia;
  return (
    <section id="problem" className="scroll-mt-36 bg-[#151319] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="02" label="THE PROBLEM" color="#FF718E" title="WHERE UNUSED MEDICINES GO." />
        <p className="text-[18px] md:text-[20px] leading-relaxed text-[#F1E5D0] max-w-3xl mb-12">{problem.core}</p>

        <div className="grid gap-5 md:grid-cols-3 mb-6">
          {problem.stats.map((s, i) => (
            <motion.div
              key={s.value}
              {...reveal}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-b from-[#221e27] to-[#17141b] border border-black p-6 shadow-[0_20px_36px_-16px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <p className="font-tape text-[10px] font-bold tracking-[0.22em] text-[#B8ADB4] mb-3">STAT 0{i + 1} · CITED RESEARCH</p>
              <p className="font-display leading-none timecode flex items-baseline gap-1" style={{ color: colors[i] }}>
                <span className="text-[clamp(3.2rem,7vw,5rem)]">{s.value}</span>
                <span className="text-[clamp(1.6rem,3vw,2.4rem)]">{s.unit}</span>
              </p>
              <p className="text-[15px] leading-snug text-[#F1E5D0] mt-3 mb-5 min-h-[44px]">{s.label}</p>
              <Meter lit={s.lit} color={colors[i]} />
            </motion.div>
          ))}
        </div>
        <p className="font-tape text-[12px] leading-relaxed text-[#B8ADB4] border-l-2 border-[#F5BA60] pl-4 max-w-3xl mb-16">{problem.sourceNote}</p>

        <h3 className="font-display text-xl text-[#F1E5D0] mb-6">THREE RISKS TO ADDRESS</h3>
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {problem.risks.map((r, i) => (
            <motion.div key={r.id} {...reveal} transition={{ delay: i * 0.08 }} className="paper relative p-5 shadow-[0_16px_28px_-12px_rgba(0,0,0,0.9)]" style={{ transform: `rotate(${[-1, 0.8, -0.5][i]}deg)` }}>
              <span className="font-display text-[34px] leading-none text-[#C22F54]">{r.id}</span>
              <h4 className="font-display text-[19px] mt-2 mb-2 text-[#151319]">{r.title}</h4>
              <p className="text-[14px] leading-relaxed text-[#151319]/85">{r.text}</p>
            </motion.div>
          ))}
        </div>
        <p className="font-tape text-[13px] font-semibold text-[#06231d] bg-[#2BD4B4] px-4 py-3 inline-block">{problem.opportunity}</p>
      </div>
    </section>
  );
}

export function Solution() {
  const { solution, colors } = pharvia;
  return (
    <section id="solution" className="scroll-mt-36 bg-[#0d0b10] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="03" label="THE SOLUTION" color={colors.teal} title="ONE ECOSYSTEM, FOUR STEPS." />
        <p className="text-[18px] leading-relaxed text-[#F1E5D0] max-w-3xl mb-12">{solution.intro}</p>

        <ol className="grid gap-4 md:grid-cols-4 mb-16">
          {solution.steps.map((s, i) => (
            <motion.li key={s.n} {...reveal} transition={{ delay: i * 0.08 }} className="relative border border-white/20 bg-[#17141b] p-5">
              <span className="font-display text-[40px] leading-none timecode" style={{ color: colors.teal }}>{s.n}</span>
              <h3 className="font-display text-[18px] text-[#F1E5D0] mt-3 mb-2">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#D6CDD2]">{s.text}</p>
              {i < solution.steps.length - 1 && (
                <span className="hidden md:flex absolute -right-[18px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-[#F5BA60] text-[#151319] font-tape text-[11px] font-bold" aria-hidden="true">▶▶</span>
              )}
            </motion.li>
          ))}
        </ol>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h3 className="font-display text-xl text-[#F1E5D0] mb-6">FOUR BENEFITS</h3>
            <ul className="space-y-4">
              {solution.benefits.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="mt-2 w-2.5 h-2.5 shrink-0 rounded-full" style={{ background: colors.teal, boxShadow: `0 0 8px ${colors.teal}` }} aria-hidden="true" />
                  <div>
                    <p className="font-display text-[17px] text-[#F1E5D0]">{b.title}</p>
                    <p className="text-[15px] leading-relaxed text-[#D6CDD2]">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl text-[#F1E5D0] mb-6">FOUR ROLES</h3>
            <ol className="space-y-3">
              {solution.stakeholders.map((s, i) => (
                <li key={s.n} className="flex items-center gap-4 bg-[#17141b] border border-white/15 p-4">
                  <span className="w-10 h-10 shrink-0 flex items-center justify-center font-display text-[16px] text-[#06231d]" style={{ background: [colors.teal, colors.blue, colors.blue, colors.teal][i] }}>{s.n}</span>
                  <div>
                    <p className="font-display text-[16px] text-[#F1E5D0]">{s.title}</p>
                    <p className="text-[14px] text-[#D6CDD2]">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="border border-[#F5BA60]/50 bg-[#F5BA60]/[0.06] p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex flex-wrap gap-2 shrink-0 font-tape text-[11px] font-bold tracking-[0.14em]">
            <span className="px-2 py-1 text-[#06231d]" style={{ background: colors.teal }}>IN PROTOTYPE</span>
            <span className="px-2 py-1 border border-[#F5BA60] text-[#F5BA60]">PROPOSED</span>
          </div>
          <p className="text-[14px] leading-relaxed text-[#F1E5D0]">{solution.statusNote}</p>
        </div>
      </div>
    </section>
  );
}
