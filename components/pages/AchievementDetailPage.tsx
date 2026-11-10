"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Polaroid from "@/components/analog/Polaroid";
import { projects } from "@/lib/data";

interface Award {
  id: string;
  slug: string;
  place: string;
  label: string;
  title: string;
  issuer: string;
  date: string;
  role: string;
  team: string;
  product: string;
  desc: string;
  photos: { src: string; caption: string }[];
  projectSlug?: string;
  organizer?: string;
  eventDates?: string;
  certificateNo?: string;
  recipient?: string;
}

interface Props {
  award: Award;
  prev: Award | null;
  next: Award | null;
}

const tilts = [-2, 1.4, -0.8, 2, -1.2];

export default function AchievementDetailPage({ award, prev, next }: Props) {
  const color = award.place === "1st" ? "#F5BA60" : award.place === "2nd" || award.place === "silver" ? "#D5D0D8" : "#6FC6BE";
  const lead = award.photos[0];
  const related = award.projectSlug ? projects.find((p) => p.slug === award.projectSlug) : undefined;
  const rest = award.photos.slice(1);

  return (
    <>
      <PageHero
        channel="CH-06"
        room={`Hall of Fame · ${award.label}`}
        kicker={`${award.label} · ${award.date}`}
        accent={color}
        timecode="00:06:12"
        title={<span className="block text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1]">{award.title}</span>}
        sub={award.issuer}
      >
        {lead && <Polaroid src={lead.src} alt={lead.caption} caption={lead.caption} rotate={2} aspect="aspect-[4/3]" fit={lead.src.includes("certificate") ? "contain" : "cover"} />}
      </PageHero>

      <section className="bg-[#0d0b10] border-y border-white/[0.06] py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Link href="/achievements" className="md:col-span-2 inline-flex items-center gap-2 text-[#B8ADB4] hover:text-[#F1E5D0] font-tape text-[11px] tracking-[0.18em] transition-colors group w-fit">
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" /> BACK TO THE HALL OF FAME
          </Link>

          <dl className="paper relative self-start p-6 rotate-[-0.8deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)] font-tape">
            <span className="masking-tape absolute -top-3 left-8 w-16 h-6 rotate-[-4deg]" aria-hidden="true" />
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 mb-3">AWARD RECORD</p>
            {[
              ["RESULT", award.label],
              ["ROLE", award.role],
              ["TEAM", award.team],
              ["PRODUCT", award.product || "—"],
              ["DATE", award.eventDates ?? award.date],
              ...(award.organizer ? [["ORGANIZER", award.organizer]] : []),
              ...(award.certificateNo ? [["CERTIFICATE NO.", award.certificateNo]] : []),
              ...(award.recipient ? [["RECIPIENT", award.recipient]] : []),
            ].map(([k, v]) => (
              <div key={k} className="py-2.5 border-b border-dashed border-[#151319]/35">
                <dt className="text-[10px] tracking-[0.2em] text-[#151319]/65">{k}</dt>
                <dd className="text-[14px] font-semibold mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>

          <div>
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] mb-3" style={{ color }}>THE STORY</p>
            <p className="text-[18px] leading-[1.8] text-[#F1E5D0]/92">{award.desc}</p>
            {related && (
              <Link href={`/projects/${related.slug}`} className="group mt-8 flex items-center justify-between gap-4 border border-[#2BD4B4]/60 hover:border-[#F5BA60] bg-[#2BD4B4]/[0.07] p-5 transition-colors">
                <span>
                  <span className="block font-tape text-[11px] font-bold tracking-[0.2em] text-[#2BD4B4] mb-1">RELATED PROJECT · {related.archiveId}</span>
                  <span className="block font-display text-[20px] text-[#F1E5D0] group-hover:text-[#F5BA60] transition-colors">{related.title}: view the case study</span>
                </span>
                <ArrowRight size={18} className="shrink-0 text-[#F1E5D0]" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="bg-[#151319] py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#B18BF7] mb-2">DOCUMENTATION</p>
            <h2 className="text-2xl md:text-3xl text-[#F1E5D0] mb-12">FROM THE FILM ROLL.</h2>
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
              {rest.map((p, i) => (
                <motion.div key={p.src} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
                  <Polaroid src={p.src} alt={p.caption} caption={p.caption} rotate={tilts[i % tilts.length]} aspect="aspect-[4/3]" fit={p.src.includes("certificate") ? "contain" : "cover"} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0d0b10] border-t border-white/10 py-12">
        <div className="max-w-5xl mx-auto px-6 grid gap-6 sm:grid-cols-2">
          {prev ? (
            <Link href={`/achievements/${prev.slug}`} className="group block border border-white/20 hover:border-[#F5BA60] p-5 transition-colors">
              <p className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#B8ADB4] mb-2">◀◀ PREVIOUS</p>
              <p className="font-display text-[17px] leading-tight text-[#F1E5D0] group-hover:text-[#F5BA60] transition-colors">{prev.title}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/achievements/${next.slug}`} className="group block border border-white/20 hover:border-[#F5BA60] p-5 sm:text-right transition-colors">
              <p className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#B8ADB4] mb-2">NEXT ▶▶</p>
              <p className="font-display text-[17px] leading-tight text-[#F1E5D0] group-hover:text-[#F5BA60] transition-colors">{next.title}</p>
            </Link>
          ) : <div />}
        </div>
      </section>
    </>
  );
}
