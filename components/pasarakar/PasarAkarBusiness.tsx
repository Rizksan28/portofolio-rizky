"use client";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, FileText } from "lucide-react";
import Lightbox from "@/components/pharvia/Lightbox";
import { ChapterHead } from "@/components/pharvia/Narrative";
import Polaroid from "@/components/analog/Polaroid";
import VHSTape from "@/components/analog/VHSTape";
import { projects } from "@/lib/data";
import { pasarakar } from "@/lib/pasarakar";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;
const { gold, forest } = pasarakar.colors;
const leaf = "#3FBF7A";
const fmt = (n: number) => Math.abs(n).toFixed(2).replace(".", ",");

export function BusinessModel() {
  const [expanded, setExpanded] = useState(false);
  const b = pasarakar.business;
  const max = Math.max(...b.years.map((y) => y.revenue));
  const c = b.contribution;

  return (
    <section id="business" className="scroll-mt-36 bg-[#0d0b10] border-y border-white/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="06" label="BUSINESS MODEL" color={gold} title="HOW PASARAKAR COULD SUSTAIN ITSELF." />

        <motion.div {...reveal} className="bg-[#17141b] border border-white/15 p-6 mb-5" style={{ borderTop: `4px solid ${leaf}` }}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
            <h3 className="font-display text-[18px] text-[#F1E5D0]">Potential Revenue Sources</h3>
            <span className="font-tape text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 border" style={{ borderColor: gold, color: gold }}>PROPOSED · NOT REALIZED REVENUE</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {b.revenue.map((r, i) => (
              <div key={r.name} className="border-l-2 pl-4" style={{ borderColor: leaf }}>
                <p className="font-tape text-[11px] font-bold tracking-[0.1em] text-[#F1E5D0]"><span style={{ color: leaf }}>0{i + 1}</span> {r.name.toUpperCase()}</p>
                <p className="text-[14px] leading-relaxed text-[#D6CDD2] mt-1">{r.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} className="grid gap-5 md:grid-cols-3 mb-2">
          {b.market.map((m) => (
            <div key={m.label} className="bg-[#17141b] border border-white/15 p-5">
              <p className="font-display text-[22px] leading-none" style={{ color: gold }}>{m.label}</p>
              <p className="font-display text-[clamp(1.6rem,3vw,2.2rem)] text-[#F1E5D0] mt-2 leading-none">{m.value}</p>
              <p className="text-[14px] leading-snug text-[#D6CDD2] mt-2">{m.text}</p>
            </div>
          ))}
        </motion.div>
        <p className="font-tape text-[12px] text-[#B8ADB4] mb-8 border-l-2 pl-4" style={{ borderColor: gold }}>{b.marketNote}</p>

        <motion.div {...reveal} className="p-6 md:p-8 mb-8 border border-[#3FBF7A]/40" style={{ background: "linear-gradient(135deg, #123D2C, #0b2418)" }}>
          <p className="font-tape text-[11px] font-bold tracking-[0.22em] mb-5" style={{ color: leaf }}>FIVE-YEAR FINANCIAL PROJECTION · NOT ACTUAL RESULTS</p>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {b.projection.map((p) => (
              <div key={p.label} className="flex flex-col-reverse justify-end">
                <dt className="font-tape text-[11px] tracking-[0.14em] text-[#BFE8CF] mt-2">{p.label.toUpperCase()}</dt>
                <dd className="font-display text-[clamp(1.5rem,3vw,2.2rem)] leading-none text-[#F1E5D0]">{p.value}</dd>
              </div>
            ))}
          </dl>
          <p className="font-tape text-[12px] leading-relaxed text-[#F1E5D0] mt-6 border-t border-white/20 pt-4">{b.projectionNote}</p>
        </motion.div>

        <motion.aside {...reveal} className="paper relative p-6 md:p-8 mb-8 rotate-[-0.4deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)]" aria-labelledby="pa-contribution">
          <span className="masking-tape absolute -top-3 left-10 w-20 h-6 rotate-[-3deg]" aria-hidden="true" />
          <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#C22F54] mb-2">★ {c.role.toUpperCase()}</p>
          <h3 id="pa-contribution" className="font-display text-[clamp(1.3rem,2.6vw,2rem)] leading-[1.05] text-[#151319] mb-5">{c.title}</h3>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {c.items.map((it, i) => (
              <li key={it} className="flex gap-3 text-[15px] font-medium text-[#151319] border-b border-dashed border-[#151319]/35 pb-2">
                <span className="font-display text-[16px]" style={{ color: "#C22F54" }}>{String(i + 1).padStart(2, "0")}</span>{it}
              </li>
            ))}
          </ul>
          <p className="font-tape text-[11px] text-[#151319]/75 mt-4">{c.note}</p>
        </motion.aside>

        <button onClick={() => setExpanded((v) => !v)} aria-expanded={expanded} aria-controls="pa-biz-deep" className="w-full flex items-center justify-between gap-4 border border-[#F1E5D0]/40 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#F1E5D0] font-tape text-[12px] font-bold tracking-[0.14em] px-5 py-4 transition-colors">
          <span>{expanded ? "HIDE" : "OPEN"} THE FULL FINANCIAL BREAKDOWN</span>
          <ChevronDown size={18} className={`transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div id="pa-biz-deep" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="pt-8 grid gap-5 lg:grid-cols-2">
                <div className="bg-[#17141b] border border-white/15 p-5">
                  <h4 className="font-tape text-[11px] font-bold tracking-[0.2em] mb-4 uppercase" style={{ color: leaf }}>Planned funding sources</h4>
                  <ul className="space-y-3">
                    {b.funding.map((f) => (
                      <li key={f.name}>
                        <div className="flex justify-between gap-3 text-[14px] text-[#F1E5D0]"><span>{f.name}</span><span className="font-tape text-[12px] text-[#D6CDD2]">{f.value} · {f.share}%</span></div>
                        <div className="h-2 bg-white/10 mt-1" aria-hidden="true"><div className="h-full" style={{ width: `${f.share}%`, background: `linear-gradient(90deg, ${forest}, ${gold})` }} /></div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#17141b] border border-white/15 p-5">
                  <h4 className="font-tape text-[11px] font-bold tracking-[0.2em] mb-4 uppercase" style={{ color: leaf }}>Cost structure (plan)</h4>
                  <dl className="divide-y divide-white/10">
                    {b.costs.map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3 py-2.5 text-[14px]"><dt className="text-[#D6CDD2]">{k}</dt><dd className="font-tape text-[12px] text-[#F1E5D0] font-semibold">{v}</dd></div>
                    ))}
                  </dl>
                </div>
                <div className="bg-[#17141b] border border-white/15 p-5 lg:col-span-2">
                  <h4 className="font-tape text-[11px] font-bold tracking-[0.2em] mb-1 uppercase" style={{ color: leaf }}>Projected revenue and net result (Rp miliar)</h4>
                  <p className="font-tape text-[11px] text-[#B8ADB4] mb-5">Projection only. The first two years are projected as net losses; the plan shows positive profit from year 3.</p>
                  <ul className="grid grid-cols-5 gap-3 items-end h-52">
                    {b.years.map((y) => (
                      <li key={y.year} className="flex flex-col justify-end items-center h-full">
                        <span className="font-tape text-[11px] font-bold text-[#F1E5D0] mb-1">{fmt(y.revenue)}</span>
                        <span className="w-full max-w-[64px] block" style={{ height: `${(y.revenue / max) * 100}%`, minHeight: 6, background: `linear-gradient(0deg, ${forest}, ${leaf})` }} aria-hidden="true" />
                        <span className="font-tape text-[11px] text-[#B8ADB4] mt-2">{y.year}</span>
                        <span className="font-tape text-[10px] mt-0.5 font-semibold" style={{ color: y.net < 0 ? "#FF8FA5" : leaf }}>{y.net < 0 ? "−" : "+"}{fmt(y.net)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export function Team() {
  const { team } = pasarakar;
  const colors = [gold, leaf, "#6FC6BE"];
  return (
    <section id="team" className="scroll-mt-36 bg-[#151319] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ChapterHead n="07" label="OUR TEAM" color="#6FC6BE" title="THE CREW BEHIND THE TAPE." />
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <motion.div {...reveal} className="max-w-[340px] mx-auto w-full">
            <Polaroid src={team.photo.src} alt="The three members of the KAMI AKAN MENANG team celebrating with a trophy and medals" caption={team.photoCaption} rotate={-2} aspect="aspect-[3/4]" />
            <div className="mt-6 inline-block font-tape text-[10px] font-bold tracking-[0.18em] px-2 py-1 text-[#151319] rotate-[2deg]" style={{ background: gold }} aria-hidden="true">{team.name} · RSP-006</div>
          </motion.div>
          <div>
            <p className="font-display text-[26px] text-[#F1E5D0] mb-6">{team.name}</p>
            <ul className="space-y-3 mb-6">
              {team.members.map((m, i) => (
                <li key={m.name} className="flex items-center gap-4 bg-[#17141b] border border-white/15 p-4">
                  <span className="w-14 h-14 shrink-0 flex items-center justify-center font-display text-[17px] text-[#06231d]" style={{ background: colors[i] }}>{m.role}</span>
                  <span>
                    <span className="block font-display text-[17px] leading-tight text-[#F1E5D0]">{m.name}</span>
                    <span className="block font-tape text-[11px] tracking-[0.12em] text-[#B8ADB4] mt-1">{m.full}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-tape text-[12px] leading-relaxed text-[#B8ADB4] border-l-2 pl-4" style={{ borderColor: gold }}>{team.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Award() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const a = pasarakar.award;
  const t = pasarakar.team;
  const gallery = [
    { src: a.photo.src, alt: "Rizky Sandi Pratama holding the trophy, the medal and the two NACOPS certificates", caption: "Foto penghargaan: piala, medali, dan sertifikat", width: a.photo.width, height: a.photo.height },
    { src: t.photo.src, alt: "The KAMI AKAN MENANG team celebrating with a trophy and medals", caption: "Momen perayaan tim KAMI AKAN MENANG", width: t.photo.width, height: t.photo.height },
    { src: a.certJuara1.src, alt: `Certificate ${a.certificateNo}: Juara 1, awarded to ${a.recipient}`, caption: `Sertifikat Juara 1 · ${a.certificateNo}`, width: a.certJuara1.width, height: a.certJuara1.height },
    { src: a.certPresentasi.src, alt: `Certificate ${a.certificateNo}: Presentasi Terbaik, awarded to ${a.recipient}`, caption: `Sertifikat Presentasi Terbaik · ${a.certificateNo}`, width: a.certPresentasi.width, height: a.certPresentasi.height },
  ];
  const rows = [
    ["EVENT", a.event],
    ["ORGANIZER", a.organizer],
    ["DATE", a.date],
    ["THEME", `“${a.theme}”`],
    ["TEAM", pasarakar.team.name],
    ["CERTIFICATE NO.", a.certificateNo],
  ];

  return (
    <section id="award" className="scroll-mt-36 bg-[#0d0b10] border-y border-white/[0.06] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 25% 40%, rgba(217,164,65,0.16), transparent 70%)" }} aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6">
        <ChapterHead n="08" label="HALL OF FAME ENTRY" color={gold} title={`${a.title} ${a.title2}`} />

        <div className="flex flex-wrap gap-4 mb-12">
          {a.highlights.map((h) => (
            <div key={h.big} className="flex items-center gap-4 px-5 py-3 text-[#2a1b05]" style={{ background: `linear-gradient(135deg, ${gold}, #f3cf7b)` }}>
              <span className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-none">{h.big}</span>
              <span>
                <span className="block font-tape text-[12px] font-bold tracking-[0.16em]">{h.label}</span>
                <span className="block font-tape text-[11px] tracking-[0.1em] opacity-80">{h.sub}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] items-start mb-14">
          <motion.figure {...reveal}>
            <button onClick={() => setOpen(0)} aria-label="Open the award photo full size" className="group block w-full text-left">
              <Polaroid src={a.photo.src} alt={gallery[0].alt} caption="Piala, medali, dan sertifikat" rotate={-1.4} aspect="aspect-[16/9]" />
            </button>
          </motion.figure>
          <motion.figure {...reveal} transition={{ delay: 0.1 }} className="max-w-[300px] mx-auto w-full">
            <button onClick={() => setOpen(1)} aria-label="Open the team celebration photo full size" className="group block w-full text-left">
              <Polaroid src={t.photo.src} alt={gallery[1].alt} caption="Perayaan tim" rotate={2} aspect="aspect-[3/4]" />
            </button>
          </motion.figure>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <dl className="paper p-6 rotate-[0.6deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)] font-tape">
            {rows.map(([k, v]) => (
              <div key={k} className="py-2.5 border-b border-dashed border-[#151319]/35 last:border-0">
                <dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">{k}</dt>
                <dd className="text-[14px] font-semibold mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>
          <div>
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] mb-3" style={{ color: gold }}>AWARD SUMMARY</p>
            <p className="text-[17px] leading-[1.8] text-[#F1E5D0]/92 mb-5">
              PasarAkar meraih Juara 1 dan Presentasi Terbaik pada kompetisi nasional bertema “{a.theme}”. Dalam tim, saya bertanggung jawab atas strategi keuangan: kelayakan finansial, valuasi, dan struktur unit economics.
            </p>
            <p className="font-tape text-[12px] text-[#B8ADB4] mb-6">{a.note}</p>
            <p className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#B8ADB4] mb-3">SERTIFIKAT RESMI</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[2, 3].map((idx) => (
                <button key={idx} onClick={() => setOpen(idx)} aria-label={`Open ${gallery[idx].caption} full size`} className="group relative block border border-white/20 hover:border-[#F5BA60] transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={gallery[idx].src} alt={gallery[idx].alt} width={gallery[idx].width} height={gallery[idx].height} loading="lazy" className="w-full h-auto block" />
                </button>
              ))}
            </div>
            <Link href={`/achievements/${a.slug}`} className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[12px] font-bold tracking-[0.12em] px-5 py-3.5 transition-colors">
              VIEW ACHIEVEMENT RECORD <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <Lightbox items={gallery} index={open} onClose={close} onIndex={setOpen} />
    </section>
  );
}

export function Live() {
  const { gold: g } = pasarakar.colors;
  return (
    <section id="live" className="scroll-mt-36 bg-[#151319] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...reveal} className="relative overflow-hidden p-8 md:p-14 border border-[#3FBF7A]/50" style={{ background: "linear-gradient(135deg, #123D2C, #166534 70%, #68442D 140%)" }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.35)_0,rgba(0,0,0,0.35)_1px,transparent_1px,transparent_3px)]" aria-hidden="true" />
          <div className="relative">
            <p className="font-tape text-[11px] font-bold tracking-[0.24em] text-[#BFE8CF] mb-4">09 · LIVE</p>
            <h2 className="text-[clamp(2rem,5.4vw,4rem)] leading-[0.95] text-[#F1E5D0] mb-5">
              {pasarakar.live.title}<br /><span style={{ color: g }}>{pasarakar.live.title2}</span>
            </h2>
            <p className="text-[17px] leading-relaxed text-[#F1E5D0] max-w-xl mb-8">{pasarakar.live.text}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[13px] font-bold tracking-[0.12em] px-6 py-4 transition-colors">
                BACK TO PROJECT ARCHIVE
              </Link>
              <a href={pasarakar.deckUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#F1E5D0]/60 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#F1E5D0] font-tape text-[13px] font-bold tracking-[0.12em] px-6 py-4 transition-colors">
                <FileText size={15} aria-hidden="true" /> VIEW DOCUMENTATION
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
              <a href={pasarakar.prototypeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#F1E5D0]/60 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#F1E5D0] font-tape text-[13px] font-bold tracking-[0.12em] px-6 py-4 transition-colors">
                VIEW FIGMA PROTOTYPE <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <p className="font-tape text-[11px] text-[#BFE8CF] mt-6 max-w-lg">The Figma link comes from the QR code printed on the team deck. It is a design prototype, not a deployed application.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function NextTape() {
  const i = projects.findIndex((p) => p.slug === "pasarakar");
  const items = [
    i > 0 && { p: projects[i - 1], tag: "◀◀ PREVIOUS TAPE" },
    i < projects.length - 1 && { p: projects[i + 1], tag: "NEXT TAPE ▶▶" },
  ].filter((x): x is { p: (typeof projects)[number]; tag: string } => Boolean(x));
  return (
    <section className="bg-[#0d0b10] border-t border-white/10 py-16 md:py-20">
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
