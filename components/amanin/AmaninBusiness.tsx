"use client";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Maximize2 } from "lucide-react";
import Lightbox from "@/components/pharvia/Lightbox";
import { SubHead } from "@/components/amanin/AmaninNarrative";
import VHSTape from "@/components/analog/VHSTape";
import { amanin } from "@/lib/amanin";
import { projects } from "@/lib/data";

const { cyan, amber, green, blue, red } = amanin.colors;
const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;

export function BusinessModel() {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const b = amanin.business;
  const max = Math.max(...b.years.map((y) => y.revenue));
  const bmc = [{ src: amanin.assets.bmc.src, alt: "AMANIN Business Model Canvas poster", caption: "AMANIN Business Model Canvas by Halte Terminal Rawamangun", width: amanin.assets.bmc.width, height: amanin.assets.bmc.height }];

  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>

        <div className="grid gap-5 lg:grid-cols-2 mb-5">
          <motion.div {...reveal} className="bg-[#0d1626] border border-white/15 p-6" style={{ borderTop: `4px solid ${cyan}` }}>
            <h3 className="font-display text-[18px] text-[#F1E5D0] mb-4">Customer Segments</h3>
            <ul className="space-y-3">
              {b.segments.map((s) => <li key={s} className="flex gap-3 text-[15px] text-[#D6CDD2]"><span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: cyan }} aria-hidden="true" />{s}</li>)}
            </ul>
          </motion.div>
          <motion.div {...reveal} className="bg-[#0d1626] border border-white/15 p-6" style={{ borderTop: `4px solid ${amber}` }}>
            <h3 className="font-display text-[18px] text-[#F1E5D0] mb-4">Value Proposition</h3>
            <ul className="space-y-3">
              {b.valueProps.map((s) => <li key={s} className="flex gap-3 text-[15px] text-[#D6CDD2]"><span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: amber }} aria-hidden="true" />{s}</li>)}
            </ul>
          </motion.div>
        </div>

        <motion.div {...reveal} className="bg-[#0d1626] border border-white/15 p-6 mb-5" style={{ borderTop: `4px solid ${green}` }}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
            <h3 className="font-display text-[18px] text-[#F1E5D0]">Revenue Model (five proposed streams)</h3>
            <span className="font-tape text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 border" style={{ borderColor: amber, color: amber }}>PROPOSED · NOT REALIZED REVENUE</span>
          </div>
          <ul className="space-y-3">
            {b.revenue.map((r) => (
              <li key={r.name} className="grid grid-cols-[1fr_auto] md:grid-cols-[250px_1fr_96px] gap-x-4 gap-y-1.5 items-center">
                <span className="font-tape text-[12px] font-semibold text-[#F1E5D0]">{r.name}</span>
                <span className="font-tape text-[11px] text-[#B8ADB4] md:order-3 md:text-right">{r.share.toFixed(1).replace(".", ",")}%</span>
                <span className="col-span-2 md:col-span-1 md:order-2 h-3 bg-white/10 block" aria-hidden="true"><span className="block h-full" style={{ width: `${r.share}%`, background: `linear-gradient(90deg, ${blue}, ${cyan})` }} /></span>
              </li>
            ))}
          </ul>
          <p className="font-tape text-[11px] text-[#B8ADB4] mt-4">Share of projected five-year revenue, from the presentation&apos;s financial analysis.</p>
        </motion.div>

        <motion.div {...reveal} className="p-6 md:p-8 mb-8 border border-[#38D5F3]/40" style={{ background: "linear-gradient(135deg, #102C52, #0b1830)" }}>
          <p className="font-tape text-[11px] font-bold tracking-[0.22em] mb-5" style={{ color: cyan }}>FIVE-YEAR BUSINESS PROJECTION · NOT ACTUAL RESULTS</p>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {b.projection.map((p) => (
              <div key={p.label} className="flex flex-col-reverse justify-end">
                <dt className="font-tape text-[11px] tracking-[0.16em] text-[#BFD9F5] mt-2">{p.label.toUpperCase()}</dt>
                <dd className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] leading-none text-[#F1E5D0]">{p.value}</dd>
              </div>
            ))}
          </dl>
          <p className="font-tape text-[12px] leading-relaxed text-[#F1E5D0] mt-6 border-t border-white/20 pt-4">{b.projectionNote}</p>
        </motion.div>

        <button onClick={() => setExpanded((v) => !v)} aria-expanded={expanded} aria-controls="am-bmc-deep" className="w-full flex items-center justify-between gap-4 border border-[#F1E5D0]/40 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#F1E5D0] font-tape text-[12px] font-bold tracking-[0.14em] px-5 py-4 transition-colors">
          <span>{expanded ? "HIDE" : "OPEN"} THE FULL BUSINESS ANALYSIS</span>
          <ChevronDown size={18} className={`transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div id="am-bmc-deep" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="pt-8 grid gap-5 lg:grid-cols-2">
                <div className="bg-[#0d1626] border border-white/15 p-5">
                  <h4 className="font-tape text-[11px] font-bold tracking-[0.2em] mb-4 uppercase" style={{ color: cyan }}>Key partner categories (plan)</h4>
                  <ul className="space-y-3">
                    {b.partners.map((p) => (
                      <li key={p.title}><p className="font-display text-[15px] text-[#F1E5D0]">{p.title}</p><p className="text-[14px] text-[#D6CDD2] leading-snug">{p.items}</p></li>
                    ))}
                  </ul>
                  <p className="font-tape text-[11px] text-[#B8ADB4] mt-4 leading-relaxed">{b.partnersNote}</p>
                </div>
                <div className="bg-[#0d1626] border border-white/15 p-5">
                  <h4 className="font-tape text-[11px] font-bold tracking-[0.2em] mb-4 uppercase" style={{ color: cyan }}>Market sizing (from the presentation)</h4>
                  <ul className="space-y-3">
                    {b.market.map((m) => (
                      <li key={m.label} className="flex items-baseline gap-4"><span className="font-display text-[22px] w-14" style={{ color: amber }}>{m.label}</span><span><span className="font-display text-[18px] text-[#F1E5D0]">{m.value}</span> <span className="text-[14px] text-[#D6CDD2]">{m.text}</span></span></li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0d1626] border border-white/15 p-5 lg:col-span-2">
                  <h4 className="font-tape text-[11px] font-bold tracking-[0.2em] mb-1 uppercase" style={{ color: cyan }}>Projected revenue and net result (Rp miliar)</h4>
                  <p className="font-tape text-[11px] text-[#B8ADB4] mb-5">Projection only. The first two years are projected as net losses.</p>
                  <ul className="grid grid-cols-5 gap-3 items-end h-52">
                    {b.years.map((y) => (
                      <li key={y.year} className="flex flex-col justify-end items-center h-full">
                        <span className="font-tape text-[11px] font-bold text-[#F1E5D0] mb-1">{y.revenue.toFixed(2).replace(".", ",")}</span>
                        <span className="w-full max-w-[64px] block" style={{ height: `${(y.revenue / max) * 100}%`, minHeight: 6, background: `linear-gradient(0deg, ${blue}, ${cyan})` }} aria-hidden="true" />
                        <span className="font-tape text-[11px] text-[#B8ADB4] mt-2">{y.year}</span>
                        <span className="font-tape text-[10px] mt-0.5 font-semibold" style={{ color: y.net < 0 ? red : green }}>{y.net < 0 ? "−" : "+"}{Math.abs(y.net).toFixed(2).replace(".", ",")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button onClick={() => setOpen(0)} aria-label="Open the full Business Model Canvas poster" className="group relative block w-full mt-6 border border-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={amanin.assets.bmc.src} alt="AMANIN Business Model Canvas poster" width={amanin.assets.bmc.width} height={amanin.assets.bmc.height} loading="lazy" className="w-full h-auto" />
                <span className="absolute right-3 bottom-3 flex items-center gap-2 bg-[#0a1424]/90 border border-white/30 px-3 py-2 font-tape text-[11px] font-bold tracking-[0.14em] text-[#F1E5D0] group-hover:border-[#F5BA60]"><Maximize2 size={14} aria-hidden="true" /> VIEW FULL SIZE</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Lightbox items={bmc} index={open} onClose={close} onIndex={setOpen} />
    </div>
  );
}

export function Team() {
  const { team } = amanin;
  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.figure {...reveal} className="paper relative p-3 pb-4 rotate-[-1.4deg] shadow-[0_24px_40px_-16px_rgba(0,0,0,0.95)]">
            <span className="masking-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={amanin.assets.team.src} alt="Portraits of Rizky Sandi Pratama (CEO), Vassell Enha Atthayya (CFO) and Evan Octavianus Haryo Handoko (CTO)" width={amanin.assets.team.width} height={amanin.assets.team.height} loading="lazy" className="w-full h-auto block" />
            <figcaption className="mt-3 font-tape text-[11px] font-semibold text-[#151319]/80">Team portraits from the AMANIN Business Model Canvas.</figcaption>
          </motion.figure>
          <div>
            <ul className="space-y-3">
              {team.members.map((m, i) => (
                <li key={m.name} className="flex items-center gap-4 bg-[#0b1220] border border-white/15 p-4">
                  <span className="w-14 h-14 shrink-0 flex items-center justify-center font-display text-[17px] text-[#04202a]" style={{ background: [cyan, blue, green][i] }}>{m.role}</span>
                  <p className="font-display text-[17px] leading-tight text-[#F1E5D0]">{m.name}</p>
                </li>
              ))}
            </ul>
            <p className="font-tape text-[12px] leading-relaxed text-[#B8ADB4] mt-6">{team.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Future() {
  const { future } = amanin;
  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <SubHead label="REFLECTION & FUTURE DIRECTION" color={green} title="WHAT EXISTS, AND WHAT IS NEXT." />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border border-[#3AE0B0]/50 bg-[#0e1f22]" style={{ borderTop: `4px solid ${green}` }}>
            <p className="font-tape text-[10px] font-bold tracking-[0.2em] mb-4 inline-block px-2 py-0.5 text-[#04202a]" style={{ background: green }}>IMPLEMENTED IN THE PROTOTYPE</p>
            <ul className="space-y-3">{future.implemented.map((t) => <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[#F1E5D0]/90"><span className="mt-[8px] w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: green }} aria-hidden="true" />{t}</li>)}</ul>
          </div>
          <div className="p-6 border border-[#F7B955]/50 bg-[#211c12]" style={{ borderTop: `4px solid ${amber}` }}>
            <p className="font-tape text-[10px] font-bold tracking-[0.2em] mb-4 inline-block px-2 py-0.5 border" style={{ color: amber, borderColor: amber }}>PROPOSED DIRECTIONS</p>
            <ul className="space-y-3">{future.proposed.map((t) => <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[#F1E5D0]/90"><span className="mt-[8px] w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: amber }} aria-hidden="true" />{t}</li>)}</ul>
          </div>
        </div>
        <p className="font-tape text-[12px] leading-relaxed text-[#F1E5D0] border-l-2 pl-4 mt-8 max-w-3xl" style={{ borderColor: cyan }}>{future.note}</p>
      </div>
    </div>
  );
}

export function LiveDemo() {
  return (
    <div className="mt-16 md:mt-24 [&:nth-child(2)]:mt-0">
      <div>
        <motion.div {...reveal} className="relative overflow-hidden p-8 md:p-14 border border-[#38D5F3]/50" style={{ background: "linear-gradient(135deg, #102C52, #0a1830 65%, #0c2a44)" }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.35)_0,rgba(0,0,0,0.35)_1px,transparent_1px,transparent_3px)]" aria-hidden="true" />
          <div className="relative">
            <p className="font-tape text-[11px] font-bold tracking-[0.24em] text-[#BFD9F5] mb-4">LIVE DEMO</p>
            <h2 className="text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.95] text-[#F1E5D0] mb-5">DON&apos;T TRUST.<br /><span style={{ color: cyan }}>VERIFY FIRST.</span></h2>
            <p className="text-[17px] leading-relaxed text-[#F1E5D0] max-w-xl mb-6">Try the prototype with the sample messages and QR it provides.</p>
            <div className="border-l-2 pl-4 mb-8 max-w-xl font-tape text-[12px] leading-relaxed text-[#F1E5D0]" style={{ borderColor: amber }}>
              <span className="block text-[10px] font-bold tracking-[0.2em] mb-1" style={{ color: amber }}>SAFETY</span>
              Do not enter real PINs, OTPs, passwords, private messages, or bank credentials into any demo. Results are risk indications, not a guarantee of safety.
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={amanin.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[13px] font-bold tracking-[0.12em] px-6 py-4 transition-colors">
                TRY AMANIN <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link href="/projects" className="inline-flex items-center gap-2 border border-[#F1E5D0]/60 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#F1E5D0] font-tape text-[13px] font-bold tracking-[0.12em] px-6 py-4 transition-colors">
                BACK TO PROJECT ARCHIVE
              </Link>
            </div>
            <p className="font-tape text-[12px] mt-6" style={{ color: "#BFD9F5" }}>mobile-webpage-amanin.vercel.app</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function NextTape() {
  const i = projects.findIndex((p) => p.slug === "amanin");
  const items = [
    i > 0 && { p: projects[i - 1], tag: "◀◀ PREVIOUS TAPE" },
    i < projects.length - 1 && { p: projects[i + 1], tag: "NEXT TAPE ▶▶" },
  ].filter((x): x is { p: (typeof projects)[number]; tag: string } => Boolean(x));
  return (
    <section className="bg-[#0b1220] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#F5BA60] mb-2">KEEP WATCHING</p>
            <h2 className="text-2xl md:text-3xl text-[#F1E5D0]">NEXT TAPE.</h2>
          </div>
          <Link href="/projects" className="font-tape text-[12px] font-bold text-[#F1E5D0] border-b border-[#F1E5D0]/50 hover:border-[#F5BA60] hover:text-[#F5BA60] pb-0.5 transition-colors">BACK TO ARCHIVE</Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          {items.map((it, k) => (
            <div key={it.p.slug}>
              <p className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#B8ADB4] mb-3">{it.tag}</p>
              <VHSTape slug={it.p.slug} title={it.p.title} category={it.p.category} archiveId={it.p.archiveId} year={it.p.year} tech={it.p.tech.length ? it.p.tech : it.p.tags} accentColor={it.p.accent ?? "#B18BF7"} tilt={k ? 1 : -1} />
              <div className="shelf-plank mt-6" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
