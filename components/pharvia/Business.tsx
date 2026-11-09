"use client";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Download, Maximize2 } from "lucide-react";
import Lightbox from "@/components/pharvia/Lightbox";
import { ChapterHead } from "@/components/pharvia/Narrative";
import Polaroid from "@/components/analog/Polaroid";
import VHSTape from "@/components/analog/VHSTape";
import { projects } from "@/lib/data";
import { pharvia } from "@/lib/pharvia";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;

export function BusinessModel() {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const { business: b, colors } = pharvia;
  const columns = [
    { title: "Customer Segments", color: colors.teal, items: b.segments },
    { title: "Value Proposition", color: "#F5BA60", items: b.valueProps },
    { title: "Key Partners", color: colors.blue, items: b.partners },
  ];
  const bmc = [{ src: b.bmcImage.src, alt: "Pharvia Business Model Canvas, full poster", caption: "Pharvia Business Model Canvas by Halte Terminal Corruscant", width: b.bmcImage.width, height: b.bmcImage.height }];

  return (
    <section id="business" className="scroll-mt-36 bg-[#151319] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="06" label="BUSINESS MODEL" color="#F5BA60" title="HOW PHARVIA COULD SUSTAIN ITSELF." />

        <div className="grid gap-5 lg:grid-cols-3 mb-5">
          {columns.map((c, i) => (
            <motion.div key={c.title} {...reveal} transition={{ delay: i * 0.08 }} className="bg-[#17141b] border border-white/15 p-6" style={{ borderTop: `4px solid ${c.color}` }}>
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

        <motion.div {...reveal} className="bg-[#17141b] border border-white/15 p-6 mb-5" style={{ borderTop: `4px solid ${colors.green}` }}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
            <h3 className="font-display text-[18px] text-[#F1E5D0]">Revenue Concepts</h3>
            <span className="font-tape text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 border border-[#F5BA60] text-[#F5BA60]">PROPOSED · NOT REALIZED REVENUE</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {b.revenue.map((r, i) => (
              <div key={r.name} className="border-l-2 pl-4" style={{ borderColor: colors.green }}>
                <p className="font-tape text-[11px] font-bold tracking-[0.12em] text-[#F1E5D0]"><span style={{ color: colors.green }}>0{i + 1}</span> {r.name.toUpperCase()}</p>
                <p className="text-[14px] leading-relaxed text-[#D6CDD2] mt-1">{r.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} className="bg-[#0B3A5C] border border-[#2BD4B4]/40 p-6 md:p-8 mb-8">
          <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#2BD4B4] mb-4">5-YEAR FINANCIAL PROJECTION · PITCH DECK SCENARIO</p>
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

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls="bmc-deep"
          className="w-full flex items-center justify-between gap-4 border border-[#F1E5D0]/40 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#F1E5D0] font-tape text-[12px] font-bold tracking-[0.14em] px-5 py-4 transition-colors"
        >
          <span>{expanded ? "HIDE" : "OPEN"} THE FULL CANVAS BREAKDOWN</span>
          <ChevronDown size={18} className={`transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div id="bmc-deep" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="pt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {b.deep.map((g) => (
                  <div key={g.title} className="bg-[#0d0b10] border border-white/15 p-5">
                    <h4 className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#2BD4B4] mb-3 uppercase">{g.title}</h4>
                    <ul className="space-y-2">
                      {g.items.map((it) => (
                        <li key={it} className="text-[14px] leading-snug text-[#F1E5D0]/90">{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button onClick={() => setOpen(0)} aria-label="Open the full Business Model Canvas poster" className="group relative block w-full mt-6 border border-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.bmcImage.src} alt="Pharvia Business Model Canvas poster" width={b.bmcImage.width} height={b.bmcImage.height} loading="lazy" className="w-full h-auto" />
                <span className="absolute right-3 bottom-3 flex items-center gap-2 bg-[#151319]/90 border border-white/30 px-3 py-2 font-tape text-[11px] font-bold tracking-[0.14em] text-[#F1E5D0] group-hover:border-[#F5BA60]">
                  <Maximize2 size={14} aria-hidden="true" /> VIEW FULL SIZE
                </span>
              </button>
              <a href={pharvia.deckUrl} download className="inline-flex items-center gap-2 mt-5 font-tape text-[12px] font-bold tracking-[0.12em] text-[#F1E5D0] border-b border-[#F1E5D0]/50 hover:text-[#F5BA60] hover:border-[#F5BA60] pb-0.5 transition-colors">
                <Download size={14} aria-hidden="true" /> DOWNLOAD THE PITCH DECK (PDF)
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Lightbox items={bmc} index={open} onClose={close} onIndex={setOpen} />
    </section>
  );
}

export function Team() {
  const { team, colors } = pharvia;
  return (
    <section id="team" className="scroll-mt-36 bg-[#0d0b10] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="07" label="OUR TEAM" color={colors.blue} title="THE CREW BEHIND THE TAPE." />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div {...reveal}>
            <Polaroid src={team.photo.src} alt="The three members of Halte Terminal Corruscant holding their USK Pharmacy Fair certificates" caption={team.photoCaption} rotate={-1.6} aspect="aspect-[1600/962]" />
          </motion.div>
          <div>
            <p className="font-display text-[22px] text-[#F1E5D0] mb-6">{team.name}</p>
            <ul className="space-y-3">
              {team.members.map((m, i) => (
                <li key={m.name} className="flex items-center gap-4 bg-[#17141b] border border-white/15 p-4">
                  <span className="w-14 h-14 shrink-0 flex items-center justify-center font-display text-[17px] text-[#06231d]" style={{ background: [colors.teal, colors.blue, colors.green][i] }}>{m.role}</span>
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

export function Achievement() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const { award } = pharvia;
  const images = [
    { src: award.certificate.src, alt: `Certificate number ${award.certificateNo}, 1st place Business Model Canvas, awarded to ${award.recipient}`, caption: `Sertifikat ${award.certificateNo}`, width: award.certificate.width, height: award.certificate.height },
    { src: award.announcement.src, alt: "Online ceremony slide announcing Halte Terminal Corruscant as 1st place in the Business Model Canvas competition", caption: "Pengumuman Juara 1 Lomba Business Model Canvas", width: award.announcement.width, height: award.announcement.height },
  ];
  const rows = [
    ["RESULT", award.result],
    ["EVENT", award.event],
    ["ORGANIZER", award.organizer],
    ["DATES", award.dates],
    ["CERTIFICATE NO.", award.certificateNo],
    ["RECIPIENT", award.recipient],
  ];

  return (
    <section id="award" className="scroll-mt-36 bg-[#151319] py-20 md:py-28 relative overflow-hidden">
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
            <div className="inline-flex items-center gap-3 font-display text-[#151319] bg-[#F5BA60] px-4 py-2 mb-6">
              <span className="text-[28px] leading-none">1ST</span>
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
                WINNER ANNOUNCEMENT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Lightbox items={images} index={open} onClose={close} onIndex={setOpen} />
    </section>
  );
}

export function LiveExperience() {
  const { teal, navy } = pharvia.colors;
  return (
    <section id="live" className="scroll-mt-36 bg-[#0d0b10] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...reveal} className="relative overflow-hidden p-8 md:p-14 border border-[#2BD4B4]/50" style={{ background: `linear-gradient(135deg, ${navy}, #0c5560 60%, #118a76)` }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.35)_0,rgba(0,0,0,0.35)_1px,transparent_1px,transparent_3px)]" aria-hidden="true" />
          <div className="relative">
            <p className="font-tape text-[11px] font-bold tracking-[0.24em] text-[#B8E8DE] mb-4">09 · LIVE EXPERIENCE</p>
            <h2 className="text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.95] text-[#F1E5D0] mb-5">EXPERIENCE <span style={{ color: teal }}>PHARVIA.</span></h2>
            <p className="text-[17px] leading-relaxed text-[#F1E5D0] max-w-xl mb-8">
              Explore the web prototype: Scan, Cari Titik, daftar setoran, and EcoPoints. Some data and flows in the demo are sample or simulated.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={pharvia.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[13px] font-bold tracking-[0.12em] px-6 py-4 transition-colors">
                LAUNCH APPLICATION <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <p className="font-tape text-[12px] text-[#B8E8DE] mt-6">pharvia.vercel.app</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function NextTape() {
  const next = projects.find((p) => p.slug !== "pharvia");
  return (
    <section className="bg-[#151319] py-16 md:py-20">
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
