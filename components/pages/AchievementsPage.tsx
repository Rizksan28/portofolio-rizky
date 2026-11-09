"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { awards, certificates } from "@/lib/data";
import PageHero from "@/components/layout/PageHero";
import Polaroid from "@/components/analog/Polaroid";

type Tab = "awards" | "certificates";

const placeColor = (place: string) => {
  if (place === "1st") return "#F5BA60";
  if (place === "2nd" || place === "silver") return "#D5D0D8";
  return "#6FC6BE";
};

const tilts = [-1.4, 1, -0.6, 1.5, -1, 0.7];

export default function AchievementsPage() {
  const [tab, setTab] = useState<Tab>("awards");
  const golds = awards.filter((a) => a.place === "1st").length;

  return (
    <>
      <PageHero
        channel="CH-06"
        room="Hall of Fame · Trophy Wall"
        kicker="Awards & certificates"
        accent="#FF718E"
        timecode="00:06:00"
        title={<>HALL OF<br /><span className="text-[#F5BA60]">FAME.</span></>}
        sub="Competition wins and certifications, mounted on the wall. Open an award to see the documentation."
      >
        <div className="grid grid-cols-3 gap-3" role="list" aria-label="Summary">
          {[
            [golds, "1ST PLACE", "#F5BA60"],
            [awards.length, "AWARDS", "#FF718E"],
            [certificates.length, "CERTIFICATES", "#6FC6BE"],
          ].map(([n, label, c]) => (
            <div key={label as string} role="listitem" className="relative paper pt-6 pb-4 text-center shadow-[0_16px_28px_-12px_rgba(0,0,0,0.9)]">
              <span className="absolute -top-0 left-1/2 -translate-x-1/2 w-5 h-8" style={{ background: c as string, clipPath: "polygon(0 0,100% 0,100% 100%,50% 78%,0 100%)" }} aria-hidden="true" />
              <p className="font-display text-[clamp(2rem,4.5vw,3.2rem)] leading-none text-[#151319]">{n}</p>
              <p className="font-tape text-[10px] font-bold tracking-[0.16em] text-[#151319]/75 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-[#0d0b10] border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 flex gap-2 py-3" role="tablist" aria-label="Achievement type">
          {(["awards", "certificates"] as Tab[]).map((t) => (
            <button
              key={t}
              role="tab"
              id={`tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`panel-${t}`}
              onClick={() => setTab(t)}
              className={`font-tape text-[12px] font-bold tracking-[0.14em] px-5 py-2.5 transition-colors ${tab === t ? "bg-[#F1E5D0] text-[#151319]" : "text-[#B8ADB4] hover:text-[#F1E5D0]"}`}
            >
              {t === "awards" ? `AWARDS (${awards.length})` : `CERTIFICATES (${certificates.length})`}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#151319] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {tab === "awards" ? (
            <div role="tabpanel" id="panel-awards" aria-labelledby="tab-awards" className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              {awards.map((a, i) => {
                const color = placeColor(a.place);
                const photo = a.photos?.[0];
                return (
                  <motion.div key={a.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
                    <Link href={`/achievements/${a.slug}`} className="group block focus-visible:outline-offset-8">
                      <Polaroid
                        src={photo?.src}
                        alt={photo?.caption ?? a.title}
                        caption={`${a.label} · ${a.date}`}
                        rotate={tilts[i % tilts.length]}
                        aspect="aspect-[16/10]"
                      />
                      <div className="mt-6 px-1">
                        <p className="inline-block font-tape text-[11px] font-bold tracking-[0.16em] px-2 py-0.5 text-[#151319] mb-3" style={{ background: color }}>{a.label.toUpperCase()}</p>
                        <h2 className="text-[clamp(1.1rem,2vw,1.45rem)] leading-tight text-[#F1E5D0] group-hover:text-[#F5BA60] transition-colors mb-2">{a.title}</h2>
                        <p className="font-tape text-[12px] text-[#B8ADB4]">{a.issuer}</p>
                        <p className="font-tape text-[12px] text-[#F1E5D0]/85 mt-1">{a.role}{a.product ? ` · ${a.product}` : ""}</p>
                        <p className="font-tape text-[11px] font-bold tracking-wider text-[#F5BA60] mt-3">VIEW DOCUMENTATION ▶</p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div role="tabpanel" id="panel-certificates" aria-labelledby="tab-certificates" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((c, i) => (
                <motion.div key={c.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
                  <Polaroid src={c.image} alt={`${c.title} certificate`} caption={`${c.issuer} · ${c.date}`} rotate={tilts[i % tilts.length]} aspect="aspect-[4/3]" />
                  <p className="font-tape text-[13px] font-semibold text-[#F1E5D0] mt-5 px-1 leading-snug">{c.title}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
