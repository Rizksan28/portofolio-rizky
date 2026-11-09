"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects, techStack } from "@/lib/data";
import PageHero from "@/components/layout/PageHero";

const catColors: Record<string, string> = {
  Frontend: "#FF718E",
  Backend: "#B18BF7",
  "UI/UX Design": "#F5BA60",
  "Tools & Productivity": "#6FC6BE",
};

const tapesUsing = (tool: string) => projects.filter((p) => p.tech.includes(tool));

function Led({ on, color }: { on: boolean; color: string }) {
  return (
    <span
      className="w-2.5 h-5 rounded-[2px] border border-black/60"
      style={{ background: on ? color : "#2a252f", boxShadow: on ? `0 0 8px ${color}` : "none" }}
      aria-hidden="true"
    />
  );
}

export default function SkillsPageComponent() {
  const [selected, setSelected] = useState<string | null>(null);
  const total = techStack.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      <PageHero
        channel="CH-05"
        room="Equipment Room · Rack 1"
        kicker="Equipment catalog"
        accent="#F5BA60"
        timecode="00:05:00"
        title={<>THE EQUIPMENT<br /><span className="text-[#F5BA60]">ROOM.</span></>}
        sub="Every tool that produced the tapes, racked and labelled. Select a tool to see which tapes it was used on."
      >
        <div className="bg-gradient-to-b from-[#2a262e] to-[#17141b] border border-black p-4 shadow-[0_24px_40px_-16px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" role="img" aria-label={`${total} tools across ${techStack.length} racks`}>
          <p className="font-tape text-[10px] font-bold tracking-[0.22em] text-[#B8ADB4] mb-3 flex justify-between"><span>RSP-RACK / {techStack.length} UNITS</span><span>{total} CHANNELS</span></p>
          {techStack.map((c) => (
            <div key={c.category} className="flex items-center gap-3 py-2 border-t border-black/70">
              <span className="font-tape text-[11px] font-bold tracking-wider w-28 sm:w-40 shrink-0" style={{ color: catColors[c.category] }}>{c.category}</span>
              <div className="flex gap-1 flex-1">
                {Array.from({ length: 6 }).map((_, i) => <Led key={i} on={i < c.items.length} color={catColors[c.category]} />)}
              </div>
              <span className="font-tape text-[12px] text-[#F1E5D0] timecode">{String(c.items.length).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-[#0d0b10] border-y border-white/[0.06] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
          {techStack.map((cat, ci) => {
            const color = catColors[cat.category] ?? "#B8ADB4";
            return (
              <motion.section
                key={cat.category}
                aria-label={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (ci % 2) * 0.08 }}
                className="bg-gradient-to-b from-[#221e27] to-[#17141b] border border-black shadow-[0_20px_36px_-16px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <header className="flex items-center justify-between px-5 py-3 border-b border-black/80" style={{ background: `linear-gradient(90deg, ${color}33, transparent)` }}>
                  <h2 className="text-[17px] text-[#F1E5D0]">{cat.category.toUpperCase()}</h2>
                  <span className="font-tape text-[11px] font-bold tracking-wider" style={{ color }}>UNIT {String(ci + 1).padStart(2, "0")}</span>
                </header>
                <ul className="p-3">
                  {cat.items.map((item) => {
                    const used = tapesUsing(item);
                    const open = selected === item;
                    return (
                      <li key={item}>
                        <button
                          onClick={() => setSelected(open ? null : item)}
                          aria-expanded={open}
                          className="w-full flex items-center gap-3 px-3 py-3 text-left hover:bg-white/[0.05] transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 8px ${color}` }} aria-hidden="true" />
                          <span className="font-tape text-[14px] font-semibold text-[#F1E5D0] flex-1">{item}</span>
                          <span className="flex gap-1" aria-hidden="true">
                            {projects.map((p) => <Led key={p.id} on={p.tech.includes(item)} color={color} />)}
                          </span>
                          <span className="font-tape text-[11px] text-[#B8ADB4] w-16 text-right">{used.length ? `${used.length} TAPE${used.length > 1 ? "S" : ""}` : "IN KIT"}</span>
                        </button>
                        {open && (
                          <div className="mx-3 mb-2 px-4 py-3 bg-black/40 border-l-2" style={{ borderColor: color }}>
                            {used.length ? (
                              <>
                                <p className="font-tape text-[10px] tracking-[0.2em] text-[#B8ADB4] mb-1">USED ON</p>
                                {used.map((p) => (
                                  <Link key={p.id} href={`/projects/${p.slug}`} className="block font-tape text-[13px] text-[#F1E5D0] hover:text-[#F5BA60] py-1 underline-offset-4 hover:underline">
                                    ▶ {p.archiveId} · {p.title}
                                  </Link>
                                ))}
                              </>
                            ) : (
                              <p className="font-tape text-[12px] text-[#B8ADB4]">Not yet used on a featured tape.</p>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.section>
            );
          })}
        </div>
        <p className="max-w-6xl mx-auto px-6 mt-8 font-tape text-[11px] text-[#B8ADB4]">LED columns map to the {projects.length} tapes in the archive: lit means the tool was used on that tape. IN KIT means it is part of the toolset but not on a featured tape.</p>
      </section>
    </>
  );
}
