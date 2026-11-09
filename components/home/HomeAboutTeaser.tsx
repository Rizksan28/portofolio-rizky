"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "3.77", label: "GPA" },
  { value: "8+", label: "Penghargaan" },
  { value: "5+", label: "Proyek" },
  { value: "3+", label: "Tahun Aktif" },
];

export default function HomeAboutTeaser() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — editorial text block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-[#2563EB]/50 tracking-wider">01</span>
              <div className="h-px bg-[#2563EB]/20 w-8" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#2563EB] uppercase">Tentang Saya</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102047] leading-tight">
              Mahasiswa, Builder,{" "}
              <span className="text-[#2563EB]">Kompetitor.</span>
            </h2>

            <p className="mt-6 text-[#64748B] leading-relaxed border-l-2 border-[#2563EB]/20 pl-4">
              Saya Rizky Sandi Pratama — mahasiswa Sistem Informasi semester 6 di
              Telkom University Jakarta. Saya membangun produk digital, memimpin
              organisasi, dan berkompetisi di tingkat nasional dengan semangat yang
              sama: menciptakan sesuatu yang bermakna.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 bg-[#102047] hover:bg-[#2563EB] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm group text-sm"
            >
              Pelajari Lebih Lanjut
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`bg-white p-8 hover:bg-[#F8F9FD] transition-colors ${i % 2 === 1 ? "bg-[#F8F9FD]" : ""}`}
              >
                <p className={`text-3xl font-extrabold leading-none ${i % 2 === 1 ? "text-[#2563EB]" : "text-[#102047]"}`}>
                  {s.value}
                </p>
                <p className="text-xs text-[#64748B] mt-2 font-medium uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
