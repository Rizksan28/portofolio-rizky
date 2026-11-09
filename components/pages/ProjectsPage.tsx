"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import VHSTape from "@/components/analog/VHSTape";
import CRTMonitor from "@/components/analog/CRTMonitor";
import ScreenArt from "@/components/analog/ScreenArt";
import PageHero from "@/components/layout/PageHero";
import { projects } from "@/lib/data";

type ViewMode = "shelf" | "catalog";
const tapeColors = ["#FF718E", "#B18BF7", "#6FC6BE", "#F5BA60"];
const tilts = [-1.6, 1.1, -0.7, 1.4];
const topicsOf = (p: (typeof projects)[number]) => [...p.tech, ...(p.tags ?? [])];
const allTech = Array.from(new Set(projects.flatMap(topicsOf))).sort();
const accentOf = (p: (typeof projects)[number], i: number) => p.accent ?? tapeColors[i % tapeColors.length];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [tech, setTech] = useState<string | null>(null);
  const [view, setView] = useState<ViewMode>("shelf");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      const matchTech = !tech || topicsOf(p).includes(tech);
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        topicsOf(p).some((t) => t.toLowerCase().includes(q));
      return matchTech && matchQ;
    });
  }, [search, tech]);

  const pick = projects[0];

  return (
    <>
      <PageHero
        channel="CH-03"
        room="Video Rental · Aisle 03"
        kicker={`Now showing · ${projects.length} tapes`}
        accent="#FF718E"
        timecode="00:03:00"
        title={<>THE PROJECT<br /><span className="text-[#FF718E]">ARCHIVE.</span></>}
        sub="Every project is a tape on the shelf. Pull one out to watch the full case study: the problem, the build, and what shipped."
      >
        <div className="paper relative mx-auto lg:ml-auto max-w-[380px] w-full p-5 rotate-[2deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)] font-tape">
          <span className="masking-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6" aria-hidden="true" />
          <p className="text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 mb-1">RSP VIDEO RENTAL</p>
          <p className="font-display text-xl text-[#151319] mb-3">RENTAL CARD</p>
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className="flex items-baseline justify-between gap-3 py-2 border-b border-dashed border-[#151319]/40 text-[12px] text-[#151319] hover:bg-[#151319]/[0.07] px-1">
              <span className="font-bold shrink-0">{p.archiveId}</span>
              <span className="truncate flex-1">{p.title}</span>
              <span className="shrink-0 text-[#151319]/70">{p.year}</span>
            </Link>
          ))}
          <p className="text-[10px] tracking-[0.14em] text-[#C22F54] font-bold mt-3">DUE BACK: NEVER · PLEASE REWIND</p>
        </div>
      </PageHero>

      <section className="bg-[#0d0b10] py-14 md:py-20 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <CRTMonitor
            label={`STAFF PICK · ${pick.archiveId}`}
            osd={
              <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between font-tape text-[11px] md:text-[13px] font-bold text-[#F1E5D0]">
                <div className="flex justify-between"><span className="timecode text-[#6FC6BE]">PLAY ▶</span><span className="timecode">SP 00:00:14</span></div>
                <div className="flex justify-between"><span className="bg-black/60 px-1.5">CH 03</span><span className="bg-black/60 px-1.5">{pick.archiveId}</span></div>
              </div>
            }
          >
            {pick.cover ? (
              <div className="absolute inset-0 overflow-hidden" style={{ background: `linear-gradient(135deg, #0B3A5C, #0c5560 55%, ${pick.accent ?? "#118a76"}66)` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pick.cover} alt={`${pick.title} app screens`} width={1291} height={1700} className="absolute left-1/2 top-[3%] h-[128%] w-auto max-w-none -translate-x-1/2" />
              </div>
            ) : (
              <ScreenArt slug={pick.slug} accent="#FF718E" />
            )}
          </CRTMonitor>

          <div className="paper relative p-6 md:p-8 rotate-[0.8deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)]">
            <span className="masking-tape absolute -top-3 left-8 w-20 h-6 rotate-[-3deg]" aria-hidden="true" />
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#C22F54]">★ STAFF PICK</p>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[0.98] mt-2 mb-3 text-[#151319]">{pick.title}</h2>
            <p className="text-[15px] leading-relaxed text-[#151319]/85 mb-5">{pick.description}</p>
            <dl className="grid grid-cols-2 gap-3 mb-5 font-tape text-[12px] text-[#151319]">
              <div><dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">ROLE</dt><dd className="font-semibold">{pick.role}</dd></div>
              <div><dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">TEAM</dt><dd className="font-semibold">{pick.team}</dd></div>
            </dl>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {topicsOf(pick).map((t) => (
                <span key={t} className="font-tape text-[11px] font-medium border border-[#151319]/40 text-[#151319] px-2 py-0.5">{t}</span>
              ))}
            </div>
            <Link href={`/projects/${pick.slug}`} className="inline-flex items-center gap-2 bg-[#151319] hover:bg-[#C22F54] text-[#F1E5D0] font-tape text-[12px] font-bold tracking-wider px-5 py-3 transition-colors">
              ▶ PLAY TAPE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#151319] pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#F5BA60] mb-2">THE SHELF</p>
              <h2 className="text-2xl md:text-3xl text-[#F1E5D0]">FIND A TAPE.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="relative block">
                <span className="sr-only">Search tapes</span>
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8ADB4]" aria-hidden="true" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search title, stack..."
                  className="w-56 bg-[#1b1720] border border-white/20 pl-9 pr-3 py-2.5 font-tape text-[12px] text-[#F1E5D0] placeholder:text-[#B8ADB4]/70 focus:border-[#F5BA60] focus:outline-none"
                />
              </label>
              <div role="group" aria-label="View mode" className="flex border border-white/20">
                {(["shelf", "catalog"] as ViewMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setView(m)}
                    aria-pressed={view === m}
                    className={`font-tape text-[11px] font-bold tracking-[0.12em] px-4 py-2.5 transition-colors ${view === m ? "bg-[#F5BA60] text-[#151319]" : "text-[#B8ADB4] hover:text-[#F1E5D0]"}`}
                  >
                    {m === "shelf" ? "SHELF" : "CATALOG"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by technology or topic">
            <button
              onClick={() => setTech(null)}
              aria-pressed={tech === null}
              className={`font-tape text-[11px] px-3 py-1 border transition-colors ${tech === null ? "bg-[#F1E5D0] text-[#151319] border-[#F1E5D0]" : "text-[#F1E5D0]/85 border-white/25 hover:border-[#F1E5D0]"}`}
            >
              ALL
            </button>
            {allTech.map((t) => (
              <button
                key={t}
                onClick={() => setTech(tech === t ? null : t)}
                aria-pressed={tech === t}
                className={`font-tape text-[11px] px-3 py-1 border transition-colors ${tech === t ? "bg-[#F1E5D0] text-[#151319] border-[#F1E5D0]" : "text-[#F1E5D0]/85 border-white/25 hover:border-[#F1E5D0]"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="font-tape text-[11px] text-[#B8ADB4] tracking-wider mt-5" aria-live="polite">
            {filtered.length} / {projects.length} TAPES ON THE SHELF
          </p>
        </div>
      </section>

      <section className="bg-[#151319] pb-24 pt-4">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {view === "shelf" ? (
              <motion.div key="shelf" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14">
                {filtered.map((p, i) => (
                  <motion.div key={p.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="px-4 pt-6">
                    <VHSTape
                      slug={p.slug}
                      title={p.title}
                      category={p.category}
                      archiveId={p.archiveId}
                      year={p.year}
                      tech={p.tech.length ? p.tech : p.tags}
                      accentColor={accentOf(p, i)}
                      tilt={tilts[i % tilts.length]}
                    />
                    <div className="shelf-plank -mx-4 mt-6" aria-hidden="true" />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="paper shadow-[0_20px_40px_-16px_rgba(0,0,0,0.9)] p-4 md:p-6">
                <div className="hidden md:grid grid-cols-[90px_1.4fr_1fr_60px_1.2fr_80px] gap-4 font-tape text-[10px] font-bold tracking-[0.2em] text-[#151319]/70 pb-3 border-b-2 border-[#151319]">
                  <span>ID</span><span>TITLE</span><span>CATEGORY</span><span>YEAR</span><span>STACK</span><span />
                </div>
                {filtered.map((p, i) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.slug}`}
                    className="group grid md:grid-cols-[90px_1.4fr_1fr_60px_1.2fr_80px] gap-x-4 gap-y-1 py-4 border-b border-[#151319]/25 hover:bg-[#151319]/[0.07] px-1 transition-colors"
                  >
                    <span className="font-tape text-[12px] font-bold text-[#151319]/75">{p.archiveId}</span>
                    <span className="font-display text-[17px] text-[#151319] flex items-center gap-2">
                      <span className="w-1.5 h-5" style={{ background: accentOf(p, i) }} aria-hidden="true" />{p.title}
                    </span>
                    <span className="font-tape text-[12px] text-[#151319]/85">{p.category}</span>
                    <span className="font-tape text-[12px] text-[#151319]/85">{p.year}</span>
                    <span className="font-tape text-[12px] text-[#151319]/85">{topicsOf(p).slice(0, 3).join(" / ")}</span>
                    <span className="font-tape text-[12px] font-bold text-[#C22F54] md:text-right group-hover:underline">▶ PLAY</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 border border-dashed border-white/25 mt-6">
              <p className="font-display text-xl text-[#F1E5D0]">NO TAPES MATCH.</p>
              <p className="font-tape text-[12px] text-[#B8ADB4] mt-2">Clear the search or pick another technology.</p>
              <button onClick={() => { setSearch(""); setTech(null); }} className="mt-5 font-tape text-[12px] font-bold bg-[#F1E5D0] text-[#151319] px-4 py-2 hover:bg-[#F5BA60] transition-colors">
                RESET FILTERS
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
