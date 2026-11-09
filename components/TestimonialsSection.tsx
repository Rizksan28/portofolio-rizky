"use client";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const process = [
  {
    number: "01",
    title: "Riset & Perencanaan",
    desc: "Setiap proyek dimulai dari memahami masalah secara mendalam. Saya melakukan riset kebutuhan pengguna, mendefinisikan ruang lingkup, dan menyusun rencana kerja yang realistis sebelum menulis satu baris kode pun.",
    tags: ["User Research", "Scoping", "Roadmap"],
    accent: "bg-[#2563EB]",
    lightAccent: "bg-[#E9EEFA]",
    textAccent: "text-[#2563EB]",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    desc: "Saya merancang pengalaman pengguna di Figma sebelum masuk ke pengembangan. Wireframe, mockup, dan prototype interaktif memastikan semua pihak selaras pada visi produk yang sama.",
    tags: ["Figma", "UI/UX", "Prototype"],
    accent: "bg-indigo-500",
    lightAccent: "bg-indigo-50",
    textAccent: "text-indigo-600",
  },
  {
    number: "03",
    title: "Build & Iterate",
    desc: "Pengembangan dilakukan secara iteratif dengan pendekatan agile. Setiap sprint menghasilkan nilai nyata, dengan komunikasi transparan dan dokumentasi yang jelas sepanjang prosesnya.",
    tags: ["Agile", "Full-Stack", "Review"],
    accent: "bg-sky-500",
    lightAccent: "bg-sky-50",
    textAccent: "text-sky-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="process" className="py-28 bg-[#F8F9FD] relative overflow-hidden">
      {/* Section number decoration */}
      <div className="absolute left-4 top-8 text-[120px] font-extrabold text-[#102047]/3 select-none leading-none pointer-events-none hidden lg:block">
        06
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#102047]/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="06"
          label="CARA SAYA BEKERJA"
          title="Proses Kolaborasi "
          highlight="Saya"
          center
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              {/* Thin top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${step.accent} opacity-80`} />

              {/* Large ghost number */}
              <span className="absolute -top-2 -right-1 text-7xl font-extrabold text-[#102047]/5 select-none leading-none group-hover:text-[#102047]/8 transition-colors">
                {step.number}
              </span>

              <div className="relative flex-1 flex flex-col">
                {/* Number chip */}
                <div className={`w-9 h-9 rounded-xl ${step.lightAccent} flex items-center justify-center mb-4`}>
                  <span className={`text-xs font-extrabold font-mono ${step.textAccent}`}>{step.number}</span>
                </div>

                <h3 className="font-bold text-[#102047] text-lg leading-snug">{step.title}</h3>
                <p className="mt-3 text-sm text-[#64748B] leading-relaxed flex-1">{step.desc}</p>

                {/* Thin divider before tags */}
                <div className="mt-5 mb-4 h-px bg-slate-100" />

                <div className="flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span key={tag} className={`text-[11px] font-semibold ${step.lightAccent} ${step.textAccent} px-2.5 py-1 rounded-lg`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom editorial connector — visual link to footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-sm text-[#64748B] font-medium text-center max-w-sm">
            Siap memulai sesuatu yang bermakna bersama?
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#102047] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
          >
            Hubungi Saya
            <span className="text-xs">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
