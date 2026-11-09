"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CRTMonitor from "@/components/analog/CRTMonitor";
import ScreenArt from "@/components/analog/ScreenArt";
import VHSTape from "@/components/analog/VHSTape";

interface Project {
  id: string;
  slug: string;
  archiveId?: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDesc?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  tech: string[];
  role?: string;
  team?: string;
}

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

const chapters = [
  { id: "overview", n: "00", label: "INTRO" },
  { id: "problem", n: "01", label: "PROBLEM" },
  { id: "solution", n: "02", label: "SOLUTION" },
  { id: "features", n: "03", label: "TRACKS" },
  { id: "tech", n: "04", label: "GEAR" },
];

const palette = ["#FF718E", "#B18BF7", "#6FC6BE", "#F5BA60"];

function ChapterHead({ n, label, color, title }: { n: string; label: string; color: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 font-tape text-[11px] font-bold tracking-[0.22em]" style={{ color }}>
        <span className="timecode text-[28px] leading-none font-display" aria-hidden="true">{n}</span>
        <span className="h-px flex-1 max-w-[80px]" style={{ background: `${color}88` }} aria-hidden="true" />
        <span>{label}</span>
      </div>
      <h2 className="text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1] text-[#F1E5D0] mt-3">{title}</h2>
    </div>
  );
}

export default function ProjectDetailPage({ project, prev, next }: Props) {
  const [active, setActive] = useState("overview");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const accent = palette[project.slug.charCodeAt(0) % palette.length];
  const idx = Number(project.archiveId?.split("-")[1] ?? 1);

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#151319] pt-28 md:pt-32 pb-14 md:pb-20">
        <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 70% at 78% 30%, ${accent}26, transparent 70%)` }} aria-hidden="true" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-[#B8ADB4] hover:text-[#F1E5D0] font-tape text-[11px] tracking-[0.18em] mb-8 transition-colors group">
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" /> BACK TO THE SHELF
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 font-tape text-[11px] font-bold tracking-[0.2em] mb-5">
                <span className="px-2 py-1 text-[#151319]" style={{ background: accent }}>{project.archiveId}</span>
                <span className="text-[#F1E5D0]">{project.category}</span>
                <span className="text-[#B8ADB4]">{project.year}</span>
              </div>
              <h1 className="text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.94] text-[#F1E5D0] mb-6">{project.title}</h1>
              <p className="text-base md:text-lg text-[#B8ADB4] leading-relaxed max-w-xl mb-8">{project.description}</p>

              <dl className="paper inline-grid grid-cols-2 gap-x-8 gap-y-3 p-4 pr-8 rotate-[-0.8deg] shadow-[0_14px_28px_-10px_rgba(0,0,0,0.85)] font-tape">
                <div><dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">ROLE</dt><dd className="text-[13px] font-semibold">{project.role}</dd></div>
                <div><dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">TEAM</dt><dd className="text-[13px] font-semibold">{project.team}</dd></div>
                <div><dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">FORMAT</dt><dd className="text-[13px] font-semibold">VHS · T-120 · SP</dd></div>
                <div><dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">YEAR</dt><dd className="text-[13px] font-semibold">{project.year}</dd></div>
              </dl>
            </div>

            <CRTMonitor
              label={`NOW PLAYING · ${project.archiveId}`}
              osd={
                <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-between font-tape text-[12px] md:text-[14px] font-bold text-[#F1E5D0]">
                  <div className="flex justify-between">
                    <span className="timecode text-[#6FC6BE]">PLAY ▶</span>
                    <span className="timecode">SP  0:0{idx}:12</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="bg-black/65 px-1.5">CH 0{idx + 3}</span>
                    <span className="bg-black/65 px-1.5 text-[#F5BA60]">TRACKING OK</span>
                  </div>
                </div>
              }
            >
              <ScreenArt slug={project.slug} accent={accent} />
            </CRTMonitor>
          </div>
        </div>
      </section>

      <div className="sticky top-[70px] z-40 bg-[#0d0b10]/95 backdrop-blur border-y border-white/10">
        <motion.div className="absolute left-0 top-0 h-[3px] w-full origin-left" style={{ scaleX: progress, background: accent }} aria-hidden="true" />
        <nav aria-label="Case study chapters" className="max-w-6xl mx-auto px-6 flex items-center gap-1 overflow-x-auto py-2">
          <span className="hidden md:inline font-tape text-[11px] font-bold tracking-[0.18em] text-[#FF718E] mr-3 whitespace-nowrap">■ ▶ ▶▶</span>
          {chapters.map((c) => (
            <button
              key={c.id}
              onClick={() => go(c.id)}
              aria-current={active === c.id ? "true" : undefined}
              className={`font-tape text-[11px] font-bold tracking-[0.14em] px-3 py-2 whitespace-nowrap transition-colors ${active === c.id ? "bg-[#F1E5D0] text-[#151319]" : "text-[#B8ADB4] hover:text-[#F1E5D0]"}`}
            >
              {c.n} {c.label}
            </button>
          ))}
        </nav>
      </div>

      <section className="bg-[#0d0b10] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-24 md:space-y-32">
          <div id="overview" className="scroll-mt-36 grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <ChapterHead n="00" label="INTRO" color="#B18BF7" title="THE STORY SO FAR." />
              <p className="text-[17px] leading-[1.75] text-[#F1E5D0]/90">{project.longDesc ?? project.description}</p>
            </div>
            <aside className="paper relative self-start p-5 rotate-[1.2deg] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.9)]">
              <span className="masking-tape absolute -top-3 right-6 w-16 h-6 rotate-[4deg]" aria-hidden="true" />
              <p className="font-tape text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 mb-3">TAPE SPEC SHEET</p>
              {[
                ["ARCHIVE ID", project.archiveId],
                ["CATEGORY", project.category],
                ["STACK", project.tech.slice(0, 3).join(" / ")],
                ["FEATURES", `${project.features?.length ?? 0} tracks`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2 border-b border-dashed border-[#151319]/35 font-tape text-[12px]">
                  <span className="text-[#151319]/70">{k}</span>
                  <span className="font-semibold text-right">{v}</span>
                </div>
              ))}
            </aside>
          </div>

          {(project.problem || project.solution) && (
            <div className="grid gap-6 md:grid-cols-2 relative">
              <motion.div id="problem" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="scroll-mt-36 relative overflow-hidden p-7 md:p-9 border border-[#FF718E]/40 bg-[#1a1015]">
                <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ background: "repeating-linear-gradient(0deg, #FF718E 0 2px, transparent 2px 6px)" }} aria-hidden="true" />
                <div className="relative">
                  <ChapterHead n="01" label="BEFORE · NOISY SIGNAL" color="#FF718E" title="THE PROBLEM." />
                  <p className="text-[16px] leading-[1.75] text-[#F1E5D0]/90">{project.problem}</p>
                </div>
              </motion.div>
              <motion.div id="solution" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: 0.1 }} className="scroll-mt-36 relative p-7 md:p-9 border border-[#6FC6BE]/50 bg-[#0e1a1a]">
                <ChapterHead n="02" label="AFTER · TRACKING OK" color="#6FC6BE" title="THE FIX." />
                <p className="text-[16px] leading-[1.75] text-[#F1E5D0]/90">{project.solution}</p>
              </motion.div>
              <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#F5BA60] text-[#151319] font-tape text-[13px] font-bold items-center justify-center shadow-lg z-10" aria-hidden="true">◀◀</span>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div id="features" className="scroll-mt-36">
              <ChapterHead n="03" label="SIDE A · TRACK LISTING" color="#F5BA60" title="WHAT'S ON THE TAPE." />
              <motion.ol initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="paper shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)] p-5 md:p-8">
                <li className="flex justify-between gap-4 font-tape text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 pb-3 border-b-2 border-[#151319]" aria-hidden="true">
                  <span>SIDE A</span><span className="text-right">{project.archiveId} · {project.title.toUpperCase()}</span>
                </li>
                {project.features.map((f, i) => (
                  <li key={f} className="flex items-baseline gap-4 py-3.5 border-b border-dashed border-[#151319]/35">
                    <span className="font-display text-[22px] text-[#C22F54] w-9 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[16px] font-medium text-[#151319] leading-snug">{f}</span>
                  </li>
                ))}
              </motion.ol>
            </div>
          )}

          <div id="tech" className="scroll-mt-36">
            <ChapterHead n="04" label="EQUIPMENT USED" color="#B18BF7" title="THE GEAR." />
            <div className="flex flex-wrap gap-4">
              {project.tech.map((t, i) => (
                <span
                  key={t}
                  className="paper font-tape text-[13px] font-bold tracking-wide px-4 py-2.5 shadow-[0_8px_16px_-8px_rgba(0,0,0,0.9)]"
                  style={{ transform: `rotate(${[-2, 1.5, -1, 2, -1.5, 1][i % 6]}deg)`, borderBottom: `4px solid ${palette[i % 4]}` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#151319] border-t border-white/10 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#F5BA60] mb-2">KEEP WATCHING</p>
              <h2 className="text-2xl md:text-3xl text-[#F1E5D0]">NEXT FROM THE SHELF.</h2>
            </div>
            <Link href="/projects" className="font-tape text-[12px] font-bold text-[#F1E5D0] border-b border-[#F1E5D0]/50 hover:border-[#F5BA60] hover:text-[#F5BA60] pb-0.5 transition-colors">ALL TAPES</Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {[
              prev && { p: prev, tag: "◀◀ PREVIOUS TAPE" },
              next && { p: next, tag: "NEXT TAPE ▶▶" },
            ]
              .filter((x): x is { p: Project; tag: string } => Boolean(x))
              .map((item, i) => (
                <div key={item.p.slug}>
                  <p className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#B8ADB4] mb-3">{item.tag}</p>
                  <VHSTape slug={item.p.slug} title={item.p.title} category={item.p.category} archiveId={item.p.archiveId ?? ""} year={item.p.year} tech={item.p.tech} accentColor={palette[(i + 1) % 4]} tilt={i ? 1 : -1} />
                  <div className="shelf-plank mt-6" aria-hidden="true" />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
