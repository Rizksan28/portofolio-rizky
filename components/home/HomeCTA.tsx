"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#102047]/8 to-transparent" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.02] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#2563EB] uppercase">— Mulai Kolaborasi</span>
          <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#102047] leading-[0.95] tracking-tight">
            ADA IDE YANG<br />
            INGIN <span className="text-[#2563EB]">DIWUJUDKAN?</span>
          </h2>
          <p className="mt-6 text-[#64748B] leading-relaxed max-w-lg mx-auto">
            Saya terbuka untuk proyek kolaborasi, magang, atau diskusi seputar
            teknologi, desain, dan bisnis digital.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="group flex items-center gap-2 bg-[#102047] hover:bg-[#2563EB] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 shadow-sm"
            >
              <Mail size={16} />
              Hubungi Saya
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 border border-[#102047]/15 hover:border-[#2563EB]/40 hover:bg-[#E9EEFA] text-[#102047] font-semibold px-7 py-4 rounded-xl transition-all duration-200"
            >
              Lihat Proyek
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
