"use client";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import Polaroid from "@/components/analog/Polaroid";

const chapters = [
  { num: "01", title: "WHO I AM", color: "#FF718E", content: "Rizky Sandi Pratama — mahasiswa aktif Sistem Informasi Telkom University Jakarta (semester 7), dengan minat kuat di full-stack development, UI/UX design, dan product management. Memiliki IPK 3.77/4.00 dan aktif di berbagai kompetisi bisnis nasional maupun internasional." },
  { num: "02", title: "MY BACKGROUND", color: "#F5BA60", content: "Memulai perjalanan di dunia teknologi sejak SMA Labschool Cibubur, di mana saya memimpin organisasi Pramuka sebagai Ketua Dewan Ambalan. Kini di Telkom University Jakarta, saya menjabat sebagai Ketua Himpunan Mahasiswa Sistem Informasi (HIMSI TUJ) 2026, memimpin 200+ mahasiswa dengan 6 departemen. Pengalaman organisasi membentuk kemampuan leadership dan strategic planning saya." },
  { num: "03", title: "HOW I WORK", color: "#6FC6BE", content: "Saya percaya bahwa produk digital terbaik lahir dari perpaduan pemahaman bisnis yang kuat, desain yang berpusat pada pengguna, dan implementasi teknis yang solid. Pendekatan saya selalu dimulai dari memahami masalah, melakukan riset, merancang solusi secara visual, lalu mengembangkan produk secara iteratif. Saya terbiasa bekerja dalam tim maupun mandiri, dengan tools seperti Figma, React/Next.js, dan Notion." },
  { num: "04", title: "WHAT DRIVES ME", color: "#B18BF7", content: "Passion saya ada di intersection antara teknologi dan dampak nyata. Melalui berbagai kompetisi BMC dan business plan — mulai dari PasarAkar (agritech), Pharvia (healthtech), hingga AETHER (wearable AI) — saya belajar bahwa teknologi harus melayani kebutuhan manusia, bukan sebaliknya. Tujuan saya adalah menjadi product developer yang mampu menjembatani ide dengan eksekusi, menciptakan solusi yang bermakna dan berkelanjutan." },
];

const meta = [
  ["FULL NAME", "Rizky Sandi Pratama"],
  ["ROLE", "Full-Stack Developer & UI/UX Enthusiast"],
  ["UNIVERSITY", "Telkom University Jakarta"],
  ["PROGRAM", "Information Systems (S1)"],
  ["GPA", "3.77 / 4.00"],
  ["CURRENT POSITION", "Chairperson, HIMSI TUJ 2026"],
];

export default function AboutPage() {
  return (
    <>
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a2330] to-[#151319] flex flex-col items-center justify-center gap-3">
              <span className="w-24 h-24 rounded-full border-2 border-[#B18BF7]/60 flex items-center justify-center font-display text-3xl text-[#F1E5D0]">RSP</span>
              <span className="font-tape text-[11px] tracking-[0.2em] text-[#B8ADB4]">PORTRAIT · TO BE ADDED</span>
            </div>
          </Polaroid>
          <div className="paper absolute -bottom-6 -right-4 md:-right-10 px-3 py-2 rotate-[5deg] shadow-lg font-tape text-[11px] font-bold tracking-wider" aria-hidden="true">
            RSP-ARCHIVIST
          </div>
        </div>
      </PageHero>

      <section className="bg-[#0d0b10] py-16 md:py-24 border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-[0.8fr_1.2fr] items-start">
          <div>
            <p className="font-tape text-[11px] font-bold tracking-[0.22em] text-[#F5BA60] mb-3">FILE CARD</p>
            <h2 className="text-3xl md:text-4xl text-[#F1E5D0] leading-[0.98]">ARCHIVE<br />METADATA.</h2>
          </div>
          <dl className="paper grid sm:grid-cols-2 gap-x-8 gap-y-5 p-6 md:p-8 rotate-[0.6deg] shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)]">
            {meta.map(([k, v]) => (
              <div key={k} className="border-b border-dashed border-[#151319]/35 pb-3">
                <dt className="font-tape text-[10px] tracking-[0.2em] text-[#151319]/65">{k}</dt>
                <dd className="font-tape text-[14px] font-semibold text-[#151319] mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#151319] py-16 md:py-28">
        <div className="max-w-5xl mx-auto px-6 space-y-20 md:space-y-28">
          {chapters.map((ch, i) => (
            <motion.article
              key={ch.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`grid gap-6 md:gap-12 md:grid-cols-[180px_1fr] ${i % 2 ? "md:[&>div:first-child]:order-2 md:grid-cols-[1fr_180px]" : ""}`}
            >
              <div className={i % 2 ? "md:text-right" : ""}>
                <span className="font-display text-[clamp(4rem,9vw,7rem)] leading-[0.85] timecode block" style={{ color: ch.color }} aria-hidden="true">{ch.num}</span>
                <h2 className="font-tape text-[12px] font-bold tracking-[0.22em] mt-2" style={{ color: ch.color }}>CHAPTER {ch.num}</h2>
              </div>
              <div>
                <h3 className="text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1] text-[#F1E5D0] mb-5">{ch.title}.</h3>
                <p className="text-[17px] leading-[1.8] text-[#F1E5D0]/88 max-w-2xl">{ch.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
