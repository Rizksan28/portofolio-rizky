"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/lib/data";
import PageHero from "@/components/layout/PageHero";
import FilmStrip from "@/components/analog/FilmStrip";

const frames = [
  { label: "2021", sub: "Scout council" },
  { label: "2023", sub: "Telkom Univ." },
  { label: "2024", sub: "HIMSI PR" },
  { label: "2026", sub: "HIMSI Chair" },
  { label: "2026", sub: "BPJS Intern" },
];

function yearOf(period: string) {
  return period.match(/\d{4}/)?.[0] ?? "";
}

export default function ExperiencePage() {
  const [open, setOpen] = useState<string | null>(experiences[0]?.id ?? null);
  const work = experiences.filter((e) => e.type === "work").length;
  const orgs = experiences.filter((e) => e.type === "org").length;

  return (
    <>
      <PageHero
        channel="CH-04"
        room="Career Timeline · Reel Room"
        kicker="Career records"
        accent="#6FC6BE"
        timecode="00:04:00"
        title={<>MY JOURNEY,<br />ON <span className="text-[#6FC6BE]">RECORD.</span></>}
        sub="Five entries, filmed frame by frame. Open any frame to read the full record."
      >
        <FilmStrip frames={frames} accent="#6FC6BE" />
      </PageHero>

      <section className="bg-[#0d0b10] border-y border-white/[0.06] py-6">
        <dl className="max-w-6xl mx-auto px-6 flex flex-wrap gap-x-10 gap-y-3">
          {[["RECORDS", experiences.length], ["WORK", work], ["ORGANIZATIONS", orgs]].map(([k, v]) => (
            <div key={k} className="flex flex-row-reverse justify-end items-baseline gap-3">
              <dt className="font-tape text-[11px] tracking-[0.2em] text-[#B8ADB4]">{k}</dt>
              <dd className="font-display text-3xl text-[#F1E5D0]">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-[#151319] py-16 md:py-24">
        <ol className="max-w-5xl mx-auto px-6 space-y-6">
          {experiences.map((exp, i) => {
            const isOpen = open === exp.id;
            const color = exp.type === "work" ? "#6FC6BE" : "#B18BF7";
            return (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="grid md:grid-cols-[110px_1fr] gap-x-8 gap-y-2"
              >
                <div className="md:text-right pt-2">
                  <span className="font-display text-[clamp(2rem,4vw,3rem)] leading-none timecode" style={{ color }}>{yearOf(exp.period)}</span>
                  <p className="font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4] mt-1">REEL {String(i + 1).padStart(2, "0")}</p>
                </div>
                <div className="relative bg-[#1b1720] border border-white/15" style={{ borderLeft: `6px solid ${color}` }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : exp.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${exp.id}-panel`}
                    className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="inline-block font-tape text-[10px] font-bold tracking-[0.2em] px-2 py-0.5 mb-3 text-[#151319]" style={{ background: color }}>
                        {exp.type === "work" ? "WORK" : "ORGANIZATION"}
                      </span>
                      <h2 className="text-[clamp(1.1rem,2vw,1.5rem)] leading-tight text-[#F1E5D0]">{exp.title}</h2>
                      <p className="font-tape text-[12px] text-[#B8ADB4] mt-2">{exp.org}</p>
                      <p className="font-tape text-[12px] text-[#F1E5D0]/80 mt-1">{exp.period} · {exp.location}</p>
                    </div>
                    <ChevronDown size={20} className={`shrink-0 mt-1 text-[#F1E5D0] transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${exp.id}-panel`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-6 pt-4 border-t border-dashed border-white/25">
                          <p className="text-[16px] leading-[1.75] text-[#F1E5D0]/90 mb-4">{exp.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((t) => (
                              <span key={t} className="font-tape text-[11px] text-[#F1E5D0] border border-white/30 px-2 py-0.5">{t}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
