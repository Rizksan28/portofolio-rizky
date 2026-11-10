"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Polaroid from "@/components/analog/Polaroid";
import { awards, experiences, projects } from "@/lib/data";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
} as const;

const stats = [
  { value: "3.77", unit: "/4.00", label: "GPA" },
  { value: "9", unit: "WINS", label: "AWARDS" },
  { value: "200+", unit: "MEMBERS", label: "LED" },
  { value: "6", unit: "PROJECTS", label: "ARCHIVED" },
];

const featured = projects.filter((p) => p.featured).slice(0, 4);

const topAwards = awards.slice(0, 5);

const placeColor: Record<string, string> = {
  "1st": "#F5BA60",
  "2nd": "#B18BF7",
  "3rd": "#6FC6BE",
  silver: "#B8ADB4",
  harapan: "#FF718E",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        channel="CH-02"
        room="Behind the Tape · Director's Office"
        kicker="Personal archive"
        accent="#B18BF7"
        timecode="00:02:00"
        title={<>BEHIND<br />THE <span className="text-[#B18BF7]">TAPE.</span></>}
        sub="Every archive has someone who kept recording. This is the story of the person behind the camera."
      >
        <div className="relative mx-auto max-w-[320px] lg:ml-auto">
          <Polaroid alt="Portrait placeholder" caption="RIZKY SANDI P. — 2026" rotate={-3} aspect="aspect-[4/5]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)" }}>
              <span className="w-24 h-24 rounded-full border-2 border-[#B18BF7]/60 flex items-center justify-center font-display text-3xl" style={{ color: "var(--warm-paper)" }}>RSP</span>
              <span className="font-tape text-[11px] tracking-[0.2em]" style={{ color: "var(--muted-text)" }}>PORTRAIT · TO BE ADDED</span>
            </div>
          </Polaroid>
          <div className="paper absolute -bottom-6 -right-4 md:-right-10 px-3 py-2 rotate-[5deg] shadow-lg font-tape text-[11px] font-bold tracking-wider" aria-hidden="true">
            RSP-ARCHIVIST
          </div>
        </div>
      </PageHero>

      {/* ── STAT BROADCAST STRIP ── */}
      <div style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <motion.div {...reveal} className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="relative overflow-hidden px-5 py-4" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#B18BF7]/40" />
                <p className="font-tape text-[9px] font-bold tracking-[0.22em] mb-1.5" style={{ color: "var(--muted-text)" }}>{s.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[2.2rem] leading-none" style={{ color: "var(--warm-paper)" }}>{s.value}</span>
                  <span className="font-tape text-[10px] font-bold tracking-wider" style={{ color: "var(--muted-text)" }}>{s.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── ARCHIVE FILE CARD ── */}
      <section style={{ background: "var(--bg-primary)", borderBottom: "1px solid var(--border-subtle)" }}>
        <motion.div {...reveal} className="max-w-5xl mx-auto px-6 py-16 md:py-20 grid gap-10 md:grid-cols-[0.85fr_1.15fr] items-start">
          <div>
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#F5BA60] mb-3">◈ FILE CARD</p>
            <h2 className="text-3xl md:text-4xl leading-[0.98] mb-4" style={{ color: "var(--warm-paper)" }}>ARCHIVE<br />METADATA.</h2>
            <p className="font-tape text-[12px] leading-relaxed" style={{ color: "var(--muted-text)" }}>
              Semua data teknis tentang arsivist. Update berkala.
            </p>
          </div>
          <dl className="paper grid sm:grid-cols-2 gap-x-8 gap-y-4 p-6 md:p-8 rotate-[0.6deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)]">
            {([
              ["FULL NAME", "Rizky Sandi Pratama"],
              ["ROLE", "Full-Stack Developer & UI/UX"],
              ["UNIVERSITY", "Telkom University Jakarta"],
              ["PROGRAM", "Information Systems (S1)"],
              ["GPA", "3.77 / 4.00"],
              ["POSITION", "Chairperson, HIMSI TUJ 2026"],
            ] as [string, string][]).map(([k, v]) => (
              <div key={k} className="border-b border-dashed border-[#151319]/35 pb-3">
                <dt className="font-tape text-[10px] tracking-[0.2em] text-[#151319]/65">{k}</dt>
                <dd className="font-tape text-[13px] font-semibold text-[#151319] mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <section style={{ background: "var(--bg-deep)" }}>
        <motion.div {...reveal} className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-10">
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#6FC6BE] mb-2">◈ ON RECORD</p>
            <h2 className="text-3xl md:text-4xl leading-[0.98]" style={{ color: "var(--warm-paper)" }}>CAREER TIMELINE.</h2>
          </div>

          <div className="relative">
            {/* vertical rule */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px hidden md:block" style={{ background: "var(--border-subtle)" }} />

            <div className="space-y-5">
              {experiences.map((e) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4 }}
                  className="grid gap-3 md:grid-cols-[80px_1fr] md:gap-6 items-start"
                >
                  <div className="hidden md:block text-right">
                    <span className="font-tape text-[10px] font-bold tracking-[0.1em]" style={{ color: e.type === "org" ? "#B18BF7" : "#6FC6BE" }}>
                      {e.period.split("·")[0].trim().split("–")[0].trim().slice(-4) || e.period.slice(0, 4)}
                    </span>
                  </div>
                  <div
                    className="px-4 py-3.5"
                    style={{
                      background: "var(--bg-secondary)",
                      borderLeft: `3px solid ${e.type === "org" ? "#B18BF7" : "#6FC6BE"}`,
                      border: `1px solid var(--border-subtle)`,
                      borderLeftWidth: "3px",
                      borderLeftColor: e.type === "org" ? "#B18BF7" : "#6FC6BE",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <p className="text-[14px] font-semibold leading-snug" style={{ color: "var(--warm-paper)" }}>{e.title}</p>
                      <span
                        className="font-tape text-[9px] font-bold tracking-[0.1em] px-1.5 py-0.5 flex-shrink-0"
                        style={{
                          color: e.type === "org" ? "#B18BF7" : "#6FC6BE",
                          background: e.type === "org" ? "rgba(177,139,247,0.1)" : "rgba(111,198,190,0.1)",
                        }}
                      >
                        {e.type === "org" ? "ORG" : "WORK"}
                      </span>
                    </div>
                    <p className="font-tape text-[11px] mb-1" style={{ color: "var(--muted-text)" }}>{e.org}</p>
                    <p className="font-tape text-[10px]" style={{ color: "var(--muted-text)", opacity: 0.65 }}>{e.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── HOW I WORK + WHAT DRIVES ME ── */}
      <section style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <motion.div {...reveal} className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {([
              {
                color: "#6FC6BE",
                label: "HOW I WORK",
                title: "Process First.",
                body: "Produk terbaik lahir dari memahami masalah secara mendalam sebelum menyentuh kode atau desain. Pendekatan saya selalu dimulai dari riset, lalu visual (Figma), lalu iterasi teknis. Saya terbiasa di keduanya — solo maupun kolaborasi tim.",
                tags: ["Research → Figma → Build", "User-first", "Iteratif"],
              },
              {
                color: "#B18BF7",
                label: "WHAT DRIVES ME",
                title: "Tech × Impact.",
                body: "Passion saya ada di irisan antara teknologi dan dampak nyata. Melalui Pharvia, PasarAkar, AMANIN — saya belajar bahwa teknologi harus melayani kebutuhan manusia. Tujuan saya: menjadi product developer yang menjembatani ide dengan eksekusi.",
                tags: ["Agritech", "Healthtech", "Wearable AI"],
              },
            ]).map((item) => (
              <div key={item.label} className="p-6 md:p-7" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                  <span className="font-tape text-[10px] font-bold tracking-[0.2em]" style={{ color: item.color }}>{item.label}</span>
                </div>
                <h3 className="text-[1.5rem] leading-[1.05] mb-3" style={{ color: "var(--warm-paper)" }}>{item.title}</h3>
                <p className="text-[14px] leading-[1.75] mb-5" style={{ color: "var(--muted-text)" }}>{item.body}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="font-tape text-[10px] px-2.5 py-1" style={{ color: item.color, background: `${item.color}14`, border: `1px solid ${item.color}33` }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ background: "var(--bg-deep)" }}>
        <motion.div {...reveal} className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#FF718E] mb-2">◈ PROJECT TAPES</p>
              <h2 className="text-3xl md:text-4xl leading-[0.98]" style={{ color: "var(--warm-paper)" }}>KARYA UNGGULAN.</h2>
            </div>
            <Link href="/projects" className="flex items-center gap-1.5 font-tape text-[11px] font-bold tracking-[0.1em] hover:text-[#F5BA60] transition-colors" style={{ color: "var(--muted-text)" }}>
              SEMUA TAPES <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <Link href={`/projects/${p.slug}`} className="group block h-full">
                  <div
                    className="h-full flex flex-col p-5 transition-all duration-200 group-hover:translate-y-[-2px]"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      borderTop: `3px solid ${p.accent ?? "#B18BF7"}`,
                    }}
                  >
                    {/* tape ID */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-tape text-[9px] font-bold tracking-[0.2em]" style={{ color: "var(--muted-text)" }}>{p.archiveId}</span>
                      <span className="font-tape text-[9px] tracking-[0.1em]" style={{ color: "var(--muted-text)", opacity: 0.6 }}>{p.year}</span>
                    </div>

                    {/* title */}
                    <h3 className="font-display text-[1.4rem] leading-[0.95] mb-2 group-hover:opacity-90 transition-opacity" style={{ color: "var(--warm-paper)" }}>{p.title}</h3>
                    <p className="font-tape text-[10px] font-bold tracking-[0.12em] mb-3" style={{ color: p.accent ?? "#B18BF7" }}>{p.category}</p>

                    {/* desc */}
                    <p className="text-[13px] leading-[1.65] flex-1 mb-5" style={{ color: "var(--muted-text)" }}>{p.description}</p>

                    {/* tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(p.tags ?? p.tech).slice(0, 3).map((t) => (
                        <span key={t} className="font-tape text-[9px] px-2 py-0.5" style={{ color: "var(--muted-text)", border: "1px solid var(--border-subtle)" }}>{t}</span>
                      ))}
                    </div>

                    {/* role + cta */}
                    <div className="flex items-center justify-between">
                      <span className="font-tape text-[10px]" style={{ color: "var(--muted-text)", opacity: 0.7 }}>{p.role}</span>
                      <span className="flex items-center gap-1 font-tape text-[10px] font-bold group-hover:gap-2 transition-all" style={{ color: p.accent ?? "#B18BF7" }}>
                        VIEW <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── AWARDS ── */}
      <section style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}>
        <motion.div {...reveal} className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#F5BA60] mb-2">◈ HALL OF RECORDS</p>
              <h2 className="text-3xl md:text-4xl leading-[0.98]" style={{ color: "var(--warm-paper)" }}>PRESTASI.</h2>
            </div>
            <Link href="/achievements" className="flex items-center gap-1.5 font-tape text-[11px] font-bold tracking-[0.1em] hover:text-[#F5BA60] transition-colors" style={{ color: "var(--muted-text)" }}>
              SEMUA AWARDS <ArrowRight size={12} />
            </Link>
          </div>

          <div className="space-y-3">
            {topAwards.map((a, i) => {
              const col = placeColor[a.place] ?? "#B8ADB4";
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link href={`/achievements/${a.slug}`} className="group flex items-start gap-4 md:gap-6 px-5 py-4 transition-all duration-200 hover:translate-x-1" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)", borderLeft: `3px solid ${col}` }}>
                    {/* medal */}
                    <div className="flex-shrink-0 w-14 text-center">
                      <div className="font-tape text-[9px] font-bold tracking-[0.1em] mb-0.5" style={{ color: col }}>{a.label}</div>
                      <div className="font-tape text-[9px]" style={{ color: "var(--muted-text)", opacity: 0.6 }}>{a.date}</div>
                    </div>

                    {/* body */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <p className="text-[14px] font-semibold leading-snug group-hover:text-[#F5BA60] transition-colors" style={{ color: "var(--warm-paper)" }}>{a.title}</p>
                        <ArrowRight size={13} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: col }} />
                      </div>
                      <p className="font-tape text-[11px] mb-1.5" style={{ color: "var(--muted-text)" }}>{a.issuer}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="font-tape text-[9px] px-2 py-0.5" style={{ color: col, background: `${col}14`, border: `1px solid ${col}33` }}>{a.product || a.role}</span>
                        <span className="font-tape text-[9px] px-2 py-0.5" style={{ color: "var(--muted-text)", border: "1px solid var(--border-subtle)" }}>{a.role}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* award count banner */}
          <motion.div {...reveal} className="mt-8 flex items-center gap-4 px-5 py-4" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}>
            <div className="font-display text-[2.5rem] leading-none text-[#F5BA60]">{awards.length}</div>
            <div>
              <div className="font-tape text-[11px] font-bold tracking-[0.12em]" style={{ color: "var(--warm-paper)" }}>TOTAL PENGHARGAAN TERCATAT</div>
              <div className="font-tape text-[10px]" style={{ color: "var(--muted-text)" }}>Nasional & Internasional · 2025 – 2026</div>
            </div>
            <Link href="/achievements" className="ml-auto flex items-center gap-1.5 font-tape text-[11px] font-bold tracking-[0.1em] text-[#F5BA60] hover:gap-3 transition-all">
              LIHAT SEMUA <ArrowRight size={12} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border-subtle)" }}>
        <motion.div {...reveal} className="max-w-5xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] mb-2" style={{ color: "var(--muted-text)" }}>READY TO COLLABORATE?</p>
            <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[0.98]" style={{ color: "var(--warm-paper)" }}>
              LET&apos;S MAKE SOMETHING<br /><span className="text-[#FF718E]">WORTH REPLAYING.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/contact" className="font-tape text-[12px] font-bold tracking-[0.1em] px-6 py-3.5 rounded-sm transition-all hover:bg-[#FF718E] hover:text-white" style={{ background: "var(--warm-paper)", color: "var(--bg-primary)" }}>
              RECORD A MESSAGE
            </Link>
            <Link href="/projects" className="font-tape text-[12px] font-bold tracking-[0.1em] px-6 py-3.5 rounded-sm transition-all hover:border-[#F5BA60] hover:text-[#F5BA60]" style={{ border: "1px solid var(--border-subtle)", color: "var(--muted-text)" }}>
              EXPLORE TAPES
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
