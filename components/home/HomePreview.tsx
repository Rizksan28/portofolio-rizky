"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { awards, experiences, techStack } from "@/lib/data";
import { useT } from "@/lib/i18n";
import FilmStrip from "@/components/analog/FilmStrip";
import Polaroid from "@/components/analog/Polaroid";

const frames = [
  { label: "2021", sub: "Scout council" },
  { label: "2023", sub: "Telkom Univ." },
  { label: "2024", sub: "HIMSI PR" },
  { label: "2026", sub: "HIMSI Chair" },
  { label: "2026", sub: "BPJS Intern" },
];

const rackColors = ["#FF718E", "#B18BF7", "#F5BA60", "#6FC6BE"];
const reveal = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;

function Heading({ kicker, title, color, href, cta }: { kicker: string; title: string; color: string; href: string; cta: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
      <div>
        <p className="font-tape text-[11px] font-bold tracking-[0.22em] mb-2" style={{ color }}>{kicker}</p>
        <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[0.98]" style={{ color: "var(--warm-paper)" }}>{title}</h2>
      </div>
      <Link href={href} className="font-tape text-[12px] font-bold tracking-[0.1em] hover:text-[#F5BA60] hover:border-[#F5BA60] pb-0.5 transition-colors" style={{ color: "var(--warm-paper)", borderBottom: "1px solid var(--warm-paper)", opacity: 0.9 }}>
        {cta} &rarr;
      </Link>
    </div>
  );
}

export default function HomePreview() {
  const t = useT();
  const photos = awards.slice(0, 3).map((a) => ({ a, photo: a.photos?.[0] }));

  return (
    <>
      <section className="border-y py-20 md:py-28" style={{ background: "var(--bg-deep)", borderColor: "var(--border-subtle)" }}>
        <motion.div {...reveal} className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-[1fr_1fr] items-center">
          <div>
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#B18BF7] mb-2">BEHIND THE TAPE</p>
            <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[0.98] mb-5" style={{ color: "var(--warm-paper)" }}>THE CREATOR.</h2>
            <p className="text-[17px] leading-[1.75] mb-6 max-w-md" style={{ color: "var(--text-secondary)" }}>
              {t({
                id: "Mahasiswa Sistem Informasi Telkom University Jakarta semester 7 dengan minat kuat di pengembangan produk digital, UI/UX, dan manajemen proyek.",
                en: "A 7th-semester Information Systems student at Telkom University Jakarta with a strong interest in digital product development, UI/UX, and project management.",
              })}
            </p>
            <Link href="/about" className="font-tape text-[12px] font-bold tracking-[0.1em] text-[#B18BF7] hover:text-[#F5BA60] transition-colors">READ THE FULL STORY &rarr;</Link>
          </div>
          <dl className="paper relative p-6 md:p-8 rotate-[1.2deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)] font-tape">
            <span className="masking-tape absolute -top-3 left-10 w-20 h-6 rotate-[-3deg]" aria-hidden="true" />
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 mb-3">ARCHIVE FILE CARD</p>
            {[
              ["NAME", "Rizky Sandi Pratama"],
              ["UNIVERSITY", "Telkom University Jakarta"],
              ["PROGRAM", "Information Systems"],
              ["GPA", "3.77 / 4.00"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between items-baseline gap-4 py-3 border-b border-dashed border-[#151319]/35 last:border-0">
                <dt className="text-[11px] tracking-[0.18em] text-[#151319]/70">{k}</dt>
                <dd className="text-[14px] font-semibold text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </section>

      <section className="py-20 md:py-28" style={{ background: "var(--bg-primary)" }}>
        <motion.div {...reveal} className="max-w-6xl mx-auto px-6">
          <Heading kicker="ON RECORD" title="CAREER TIMELINE." color="#6FC6BE" href="/experience" cta="VIEW FULL RECORD" />
          <FilmStrip frames={frames} accent="#6FC6BE" />
          <ul className="mt-8 grid gap-3 md:grid-cols-3">
            {experiences.slice(0, 3).map((e) => (
              <li key={e.id} className="border-l-4 border-[#6FC6BE] px-4 py-3" style={{ background: "var(--bg-secondary)" }}>
                <p className="text-[15px] font-semibold leading-snug" style={{ color: "var(--warm-paper)" }}>{e.title}</p>
                <p className="font-tape text-[12px] mt-1" style={{ color: "var(--muted-text)" }}>{e.org}</p>
                <p className="font-tape text-[11px] text-[#6FC6BE] mt-1">{e.period.split("·")[0].trim()}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="border-y py-20 md:py-28" style={{ background: "var(--bg-deep)", borderColor: "var(--border-subtle)" }}>
        <motion.div {...reveal} className="max-w-6xl mx-auto px-6">
          <Heading kicker="EQUIPMENT" title="TECH STACK." color="#F5BA60" href="/skills" cta="ENTER EQUIPMENT ROOM" />
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 shadow-[0_24px_40px_-16px_rgba(0,0,0,0.95)]" style={{ background: "var(--bg-deep)", border: "1px solid var(--bg-deep)" }}>
            {techStack.map((cat, i) => (
              <div key={cat.category} className="p-5" style={{ background: "var(--bg-secondary)" }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-tape text-[11px] font-bold tracking-[0.18em]" style={{ color: rackColors[i] }}>{cat.category.toUpperCase()}</p>
                  <span className="flex gap-1" aria-hidden="true">
                    {Array.from({ length: 6 }).map((_, n) => (
                      <span key={n} className="w-1.5 h-4 rounded-[1px]" style={{ background: n < cat.items.length ? rackColors[i] : "#2a252f", boxShadow: n < cat.items.length ? `0 0 6px ${rackColors[i]}` : "none" }} />
                    ))}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="font-tape text-[13px] flex items-center gap-2" style={{ color: "var(--warm-paper)", opacity: 0.9 }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: rackColors[i] }} aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-28" style={{ background: "var(--bg-primary)" }}>
        <motion.div {...reveal} className="max-w-6xl mx-auto px-6">
          <Heading kicker="HALL OF FAME" title="SELECTED AWARDS." color="#FF718E" href="/achievements" cta="VIEW ALL AWARDS" />
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {photos.map(({ a, photo }, i) => (
              <Link key={a.id} href={`/achievements/${a.slug}`} className="group block">
                <Polaroid src={photo?.src} alt={photo?.caption ?? a.title} caption={`${a.label} · ${a.date}`} rotate={[-2, 1.2, -1][i]} aspect="aspect-[4/3]" />
                <p className="text-[16px] font-semibold group-hover:text-[#F5BA60] transition-colors mt-5 leading-snug" style={{ color: "var(--warm-paper)" }}>{a.title}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
