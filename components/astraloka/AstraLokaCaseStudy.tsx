"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Maximize2 } from "lucide-react";
import ProjectDetailNav, { scrollToSection } from "@/components/layout/ProjectDetailNav";
import ColorBars from "@/components/analog/ColorBars";
import Polaroid from "@/components/analog/Polaroid";
import VHSTape from "@/components/analog/VHSTape";
import Lightbox from "@/components/pharvia/Lightbox";
import { ChapterHead } from "@/components/pharvia/Narrative";
import AstraLokaHero from "@/components/astraloka/AstraLokaHero";
import { astraloka } from "@/lib/astraloka";
import { projects } from "@/lib/data";

const { green, sage, rust, forest, amber } = astraloka.colors;
const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;

const chapters = [
  { id: "story", n: "01", label: "STORY" },
  { id: "problem", n: "02", label: "PROBLEM" },
  { id: "solution", n: "03", label: "SOLUTION" },
  { id: "features", n: "04", label: "FEATURES" },
  { id: "screens", n: "05", label: "SCREENS" },
  { id: "business", n: "06", label: "BUSINESS" },
  { id: "team", n: "07", label: "TEAM" },
  { id: "award", n: "08", label: "AWARD" },
];

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

export default function AstraLokaCaseStudy() {
  const [loading, setLoading] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const go = useCallback((id: string) => scrollToSection(id), []);

  const play = useCallback(() => {
    if (loading) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { go("story"); return; }
    setLoading(true);
    timers.current.forEach(clearTimeout);
    timers.current = [];
    timers.current.push(
      setTimeout(() => {
        go("story");
        timers.current.push(setTimeout(() => setLoading(false), 350));
      }, 900),
      setTimeout(() => setLoading(false), 2400),
    );
  }, [go, loading]);

  return (
    <>
      {loading && (
        <div role="status" aria-live="polite" className="fixed inset-0 z-[96] bg-[#07060a] flex flex-col items-center justify-center gap-6 px-6">
          <ColorBars className="absolute inset-x-0 top-0 h-[38%] opacity-90" />
          <p className="relative font-display text-[clamp(1.8rem,5vw,3.2rem)] text-[#F1E5D0]">
            LOADING TAPE<span className="animate-glow-pulse">…</span>
          </p>
          <div className="relative w-64 max-w-full h-2 bg-white/15 overflow-hidden" aria-hidden="true">
            <motion.span className="block h-full" style={{ background: sage }} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.9, ease: "linear" }} />
          </div>
          <p className="relative font-tape text-[12px] tracking-[0.22em]" style={{ color: sage }}>▶ PLAY · {astraloka.archiveId}</p>
        </div>
      )}

      <AstraLokaHero onPlay={play} />
      <ProjectDetailNav chapters={chapters} accent={sage} />

      <Story />
      <Problem />
      <Solution />
      <Features />
      <Gallery />
      <BusinessModel />
      <Team />
      <Achievement />
      <NextTape />
    </>
  );
}

/* ─── 01 STORY ─── */
function Story() {
  return (
    <section id="story" className="scroll-mt-36 bg-[#0d1810] py-20 md:py-28 border-y border-white/[0.06]">
      <motion.div {...reveal} className="max-w-5xl mx-auto px-6">
        <ChapterHead n="01" label="THE STORY" color={sage} title="WHY THIS TAPE EXISTS." />
        <blockquote className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-[1.05] text-[#F1E5D0] border-l-4 pl-6 md:pl-8 mb-12" style={{ borderColor: sage }}>
          <span style={{ color: sage }}>&ldquo;</span>
          {astraloka.quote}
          <span style={{ color: sage }}>&rdquo;</span>
        </blockquote>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-start">
          <div className="space-y-6 text-[17px] leading-[1.85] text-[#F1E5D0]/90">
            {astraloka.story.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#5BAF83]" : ""}
              >
                {p}
              </p>
            ))}
          </div>
          <aside className="paper relative p-5 rotate-[1.4deg] shadow-[0_20px_36px_-14px_rgba(0,0,0,0.9)] font-tape">
            <span className="masking-tape absolute -top-3 right-6 w-16 h-6 rotate-[4deg]" aria-hidden="true" />
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 mb-3">ARCHIVE CARD</p>
            {([
              ["TITLE", "ASTRALOKA"],
              ["ARCHIVE ID", astraloka.archiveId],
              ["FORMAT", "VHS · T-120 · SP"],
              ["FILMED BY", astraloka.teamName],
              ["YEAR", astraloka.year],
            ] as const).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-dashed border-[#151319]/35 text-[12px]">
                <span className="text-[#151319]/70">{k}</span>
                <span className="font-semibold text-right">{v}</span>
              </div>
            ))}
          </aside>
        </div>
        <p className="mt-12 font-tape text-[12px] text-[#B8ADB4] max-w-2xl leading-relaxed">{astraloka.fullConcept}</p>
      </motion.div>
    </section>
  );
}

/* ─── 02 PROBLEM ─── */
function Problem() {
  const colors = ["#FF718E", "#F5BA60", sage];
  const { problem } = astraloka;
  return (
    <section id="problem" className="scroll-mt-36 bg-[#0a1810] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="02" label="THE PROBLEM" color="#FF718E" title="GROWTH WITHOUT DISTRIBUTION." />
        <p className="text-[18px] md:text-[20px] leading-relaxed text-[#F1E5D0] max-w-3xl mb-12">{problem.core}</p>

        <div className="grid gap-5 md:grid-cols-3 mb-6">
          {problem.stats.map((s, i) => (
            <motion.div
              key={s.value}
              {...reveal}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-b from-[#1a2418] to-[#0d1810] border border-black p-6 shadow-[0_20px_36px_-16px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <p className="font-tape text-[10px] font-bold tracking-[0.22em] text-[#B8ADB4] mb-3">STAT 0{i + 1} · CITED RESEARCH</p>
              <p className="font-display leading-none timecode flex items-baseline gap-1" style={{ color: colors[i] }}>
                <span className="text-[clamp(3.2rem,7vw,5rem)]">{s.value}</span>
                {s.unit && <span className="text-[clamp(1.6rem,3vw,2.4rem)]">{s.unit}</span>}
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
        <p className="font-tape text-[13px] font-semibold text-[#0a1810] px-4 py-3 inline-block" style={{ background: sage }}>{problem.opportunity}</p>
      </div>
    </section>
  );
}

/* ─── 03 SOLUTION ─── */
function Solution() {
  const { solution } = astraloka;
  return (
    <section id="solution" className="scroll-mt-36 bg-[#0d1810] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="03" label="THE SOLUTION" color={sage} title="ONE ECOSYSTEM, FOUR STEPS." />
        <p className="text-[18px] leading-relaxed text-[#F1E5D0] max-w-3xl mb-12">{solution.intro}</p>

        <ol className="grid gap-4 md:grid-cols-4 mb-16">
          {solution.steps.map((s, i) => (
            <motion.li key={s.n} {...reveal} transition={{ delay: i * 0.08 }} className="relative border border-white/20 bg-[#0f1e14] p-5">
              <span className="font-display text-[40px] leading-none timecode" style={{ color: sage }}>{s.n}</span>
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
                  <span className="mt-2 w-2.5 h-2.5 shrink-0 rounded-full" style={{ background: sage, boxShadow: `0 0 8px ${sage}` }} aria-hidden="true" />
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
                <li key={s.n} className="flex items-center gap-4 bg-[#0f1e14] border border-white/15 p-4">
                  <span className="w-10 h-10 shrink-0 flex items-center justify-center font-display text-[16px] text-[#0a1810]" style={{ background: [sage, green, green, sage][i] }}>{s.n}</span>
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
            <span className="px-2 py-1 border border-[#F5BA60] text-[#F5BA60]">PROPOSAL</span>
          </div>
          <p className="text-[14px] leading-relaxed text-[#F1E5D0]">{solution.statusNote}</p>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#B8ADB4] mb-3">ALIGNED WITH UN SUSTAINABLE DEVELOPMENT GOALS</p>
          <div className="flex flex-wrap gap-2">
            {solution.sdgs.map((sdg) => (
              <span key={sdg} className="font-tape text-[11px] px-2.5 py-1 border" style={{ color: sage, borderColor: `${sage}50` }}>{sdg}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 04 FEATURES ─── */
function Features() {
  return (
    <section id="features" className="scroll-mt-36 bg-[#0a1810] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="04" label="FEATURE SHOWCASE" color={sage} title="SIX FEATURES ON THE TAPE." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {astraloka.features.map((f, i) => (
            <motion.div key={f.id} {...reveal} transition={{ delay: i * 0.06 }} className="border border-white/15 bg-[#0f1e14] p-6 hover:border-[#2D8B5A]/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-[22px] leading-none" style={{ color: sage }}>{f.n}</span>
                <span className="font-tape text-[10px] font-bold tracking-[0.14em] text-[#B8ADB4]">PROPOSED</span>
              </div>
              <h3 className="font-display text-[18px] text-[#F1E5D0] mb-2 leading-tight">{f.name}</h3>
              <p className="font-display text-[14px] leading-snug mb-3" style={{ color: sage }}>{f.summary}</p>
              <p className="text-[14px] leading-[1.75] text-[#F1E5D0]/90">{f.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 05 SCREENS ─── */
function Gallery() {
  const holes = Array.from({ length: 28 });
  return (
    <section id="screens" className="scroll-mt-36 bg-[#0d1810] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="05" label="PRODUCT EXPERIENCE" color="#B18BF7" title="THE APP, FRAME BY FRAME." />
        <p className="text-[16px] leading-relaxed text-[#D6CDD2] max-w-2xl mb-8">
          Design mockups of the AstraLoka concept: Home, Smart Itinerary, Cultural Map, Travel Planner, and Explore. These are presentation visuals, not a live product.
        </p>
      </div>

      <div className="bg-[#060e09] border-y-[10px] border-[#060e09] shadow-[0_20px_40px_-16px_rgba(0,0,0,0.9)]">
        <div className="flex justify-between px-1 py-1.5 overflow-hidden" aria-hidden="true">
          {holes.map((_, i) => <span key={i} className="w-2.5 h-3 shrink-0 rounded-[2px] bg-[#1a2418]" />)}
        </div>
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={astraloka.heroImage.src}
            alt="Five AstraLoka app screens: Home, Smart Itinerary, Cultural Map, Travel Planner, and Explore"
            width={astraloka.heroImage.width}
            height={astraloka.heroImage.height}
            loading="lazy"
            className="w-full h-auto"
          />
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-3">
            {["Home", "Smart Itinerary", "Cultural Map", "Rencana Perjalanan", "Eksplorasi"].map((label, i) => (
              <span key={label} className="flex items-center gap-2 font-tape text-[11px] font-bold tracking-[0.14em] text-[#F1E5D0]">
                <span style={{ color: sage }}>{String(i + 1).padStart(2, "0")}</span> {label.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between px-1 py-1.5 overflow-hidden" aria-hidden="true">
          {holes.map((_, i) => <span key={i} className="w-2.5 h-3 shrink-0 rounded-[2px] bg-[#1a2418]" />)}
        </div>
      </div>
    </section>
  );
}

/* ─── 06 BUSINESS ─── */
function BusinessModel() {
  const { business: b } = astraloka;
  const columns = [
    { title: "Customer Segments", color: sage, items: b.segments },
    { title: "Value Proposition", color: "#F5BA60", items: b.valueProps },
    { title: "Key Partners", color: green, items: b.partners },
  ];

  return (
    <section id="business" className="scroll-mt-36 bg-[#0a1810] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="06" label="BUSINESS MODEL" color="#F5BA60" title="HOW ASTRALOKA COULD SUSTAIN ITSELF." />

        <div className="grid gap-5 lg:grid-cols-3 mb-5">
          {columns.map((c, i) => (
            <motion.div key={c.title} {...reveal} transition={{ delay: i * 0.08 }} className="bg-[#0f1e14] border border-white/15 p-6" style={{ borderTop: `4px solid ${c.color}` }}>
              <h3 className="font-display text-[18px] text-[#F1E5D0] mb-4">{c.title}</h3>
              <ul className="space-y-3">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] leading-snug text-[#D6CDD2]">
                    <span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: c.color }} aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className="bg-[#0f1e14] border border-white/15 p-6 mb-5" style={{ borderTop: `4px solid ${green}` }}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
            <h3 className="font-display text-[18px] text-[#F1E5D0]">Revenue Concepts</h3>
            <span className="font-tape text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 border border-[#F5BA60] text-[#F5BA60]">PROPOSED · NOT REALIZED REVENUE</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {b.revenue.map((r, i) => (
              <div key={r.name} className="border-l-2 pl-4" style={{ borderColor: green }}>
                <p className="font-tape text-[11px] font-bold tracking-[0.12em] text-[#F1E5D0]"><span style={{ color: green }}>0{i + 1}</span> {r.name.toUpperCase()}</p>
                <p className="text-[14px] leading-relaxed text-[#D6CDD2] mt-1">{r.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} className="border border-[#2D8B5A]/40 p-6 md:p-8 mb-8" style={{ background: `linear-gradient(135deg, ${forest}, #0c2a18)` }}>
          <p className="font-tape text-[11px] font-bold tracking-[0.22em] mb-4" style={{ color: sage }}>5-YEAR FINANCIAL PROJECTION · PITCH DECK SCENARIO</p>
          <dl className="grid gap-6 sm:grid-cols-3">
            {b.projection.map((p) => (
              <div key={p.label} className="flex flex-col-reverse justify-end">
                <dt className="font-tape text-[11px] tracking-[0.2em] text-[#B8E8DE] mt-2">{p.label}</dt>
                <dd className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-none text-[#F1E5D0]">{p.value}</dd>
              </div>
            ))}
          </dl>
          <p className="font-tape text-[12px] leading-relaxed text-[#F1E5D0] mt-6 border-t border-white/20 pt-4">{b.projectionNote}</p>
        </motion.div>

        <div className="pt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {b.deep.map((g) => (
            <div key={g.title} className="bg-[#060e09] border border-white/15 p-5">
              <h4 className="font-tape text-[11px] font-bold tracking-[0.2em] mb-3 uppercase" style={{ color: sage }}>{g.title}</h4>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-[14px] leading-snug text-[#F1E5D0]/90">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 07 TEAM ─── */
function Team() {
  const { team } = astraloka;
  return (
    <section id="team" className="scroll-mt-36 bg-[#0d1810] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="07" label="OUR TEAM" color={green} title="THE CREW BEHIND THE TAPE." />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div {...reveal}>
            <Polaroid src={team.photo.src} alt="Tim Jembatan Bellingham x Halland at BMC UNDIP 2026" caption={team.photoCaption} rotate={-1.6} aspect="aspect-[1600/900]" />
          </motion.div>
          <div>
            <p className="font-display text-[22px] text-[#F1E5D0] mb-6">{team.name}</p>
            <ul className="space-y-3">
              {team.members.map((m, i) => (
                <li key={m.name} className="flex items-center gap-4 bg-[#0f1e14] border border-white/15 p-4">
                  <span className="w-14 h-14 shrink-0 flex items-center justify-center font-display text-[17px] text-[#0a1810]" style={{ background: [sage, green, rust][i] }}>{m.role}</span>
                  <p className="font-display text-[17px] leading-tight text-[#F1E5D0]">{m.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 08 AWARD ─── */
function Achievement() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const { award } = astraloka;
  const images = [
    { src: award.certificate.src, alt: `Certificate for 2nd place BMC, awarded to ${award.recipient}`, caption: "Piagam Penghargaan Juara 2 BMC UNDIP 2026", width: award.certificate.width, height: award.certificate.height },
    { src: award.announcement.src, alt: "Photo of Rizky Sandi Pratama at BMC UNDIP 2026", caption: "Foto Sendiri BMC UNDIP 2026", width: award.announcement.width, height: award.announcement.height },
  ];
  const rows = [
    ["RESULT", award.result],
    ["EVENT", award.event],
    ["ORGANIZER", award.organizer],
    ["DATES", award.dates],
    ["RECIPIENT", award.recipient],
  ];

  return (
    <section id="award" className="scroll-mt-36 bg-[#0a1810] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 25% 45%, rgba(245,186,96,0.14), transparent 70%)" }} aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6">
        <ChapterHead n="08" label="HALL OF FAME ENTRY" color="#F5BA60" title={award.title} />
        <p className="font-display text-[clamp(1.1rem,2.2vw,1.5rem)] leading-snug text-[#F5BA60] -mt-6 mb-12 max-w-2xl">{award.subtitle}</p>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <motion.div initial={{ opacity: 0, scale: 0.94, rotate: -3 }} whileInView={{ opacity: 1, scale: 1, rotate: -1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="relative p-3 md:p-4 bg-gradient-to-br from-[#F5BA60] via-[#c98d2e] to-[#F5BA60] shadow-[0_30px_50px_-20px_rgba(0,0,0,0.95)]">
              <button onClick={() => setOpen(0)} aria-label="Open the certificate full size" className="group relative block w-full bg-[#0d0b10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={award.certificate.src} alt={images[0].alt} width={award.certificate.width} height={award.certificate.height} loading="lazy" className="w-full h-auto block" />
                <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.1)_1px,transparent_1px,transparent_3px)]" aria-hidden="true" />
                <span className="absolute right-3 bottom-3 flex items-center gap-2 bg-[#151319]/90 border border-white/30 px-3 py-2 font-tape text-[11px] font-bold tracking-[0.14em] text-[#F1E5D0] group-hover:border-[#F5BA60]">
                  <Maximize2 size={14} aria-hidden="true" /> VIEW FULL SIZE
                </span>
              </button>
              <span className="masking-tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rotate-[-2deg]" aria-hidden="true" />
            </div>
            <p className="font-tape text-[12px] text-[#B8ADB4] mt-4">Official certificate, shown unedited.</p>
          </motion.div>

          <div>
            <div className="inline-flex items-center gap-3 font-display text-[#151319] bg-[#B18BF7] px-4 py-2 mb-6">
              <span className="text-[28px] leading-none">2ND</span>
              <span className="font-tape text-[11px] font-bold tracking-[0.16em]">PLACE · BMC</span>
            </div>
            <dl className="paper p-6 rotate-[0.8deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)] font-tape">
              {rows.map(([k, v]) => (
                <div key={k} className="py-2.5 border-b border-dashed border-[#151319]/35 last:border-0">
                  <dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">{k}</dt>
                  <dd className="text-[14px] font-semibold mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href={`/achievements/${award.slug}`} className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-colors">
                VIEW ACHIEVEMENT RECORD <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <button onClick={() => setOpen(1)} className="inline-flex items-center gap-2 border border-[#F1E5D0]/40 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#F1E5D0] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-colors">
                PERSONAL PHOTO
              </button>
            </div>
          </div>
        </div>
      </div>
      <Lightbox items={images} index={open} onClose={close} onIndex={setOpen} />
    </section>
  );
}

/* ─── NEXT TAPE ─── */
function NextTape() {
  const next = projects.find((p) => p.slug !== "astraloka" && p.featured);
  return (
    <section className="bg-[#0a1810] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#F5BA60] mb-2">KEEP WATCHING</p>
            <h2 className="text-2xl md:text-3xl text-[#F1E5D0]">NEXT TAPE.</h2>
          </div>
          <Link href="/projects" className="font-tape text-[12px] font-bold text-[#F1E5D0] border-b border-[#F1E5D0]/50 hover:border-[#F5BA60] hover:text-[#F5BA60] pb-0.5 transition-colors">
            BACK TO ARCHIVE
          </Link>
        </div>
        {next && (
          <div className="max-w-md">
            <p className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#B8ADB4] mb-3">NEXT TAPE ▶▶</p>
            <VHSTape slug={next.slug} title={next.title} category={next.category} archiveId={next.archiveId} year={next.year} tech={next.tech.length ? next.tech : next.tags} accentColor="#B18BF7" tilt={1} />
            <div className="shelf-plank mt-6" aria-hidden="true" />
          </div>
        )}
      </div>
    </section>
  );
}
