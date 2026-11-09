"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { experiences } from "@/lib/data";

const typeIcon = { work: Briefcase, org: Users };
const typeDot: Record<string, string> = {
  work: "bg-[#2563EB]",
  org: "bg-indigo-500",
};

export default function HomeExperienceTeaser() {
  const preview = experiences.slice(0, 3);

  return (
    <section className="py-24 bg-[#102047] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
      <div className="absolute right-4 top-8 text-[120px] font-extrabold text-white/[0.025] select-none leading-none pointer-events-none hidden lg:block">03</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#B5C8FF]/40 tracking-wider">03</span>
              <div className="h-px bg-white/10 w-8" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B5C8FF] uppercase">Perjalanan Karier</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Pengalaman & <span className="text-[#B5C8FF]">Organisasi</span>
            </h2>
          </div>
          <Link
            href="/experience"
            className="flex items-center gap-1.5 text-sm font-semibold text-white/50 hover:text-white transition-colors group"
          >
            Lihat Semua
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-5">
          {preview.map((exp, i) => {
            const Icon = typeIcon[exp.type as keyof typeof typeIcon] ?? Briefcase;
            const dotClass = typeDot[exp.type] ?? typeDot.work;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 md:gap-6"
              >
                <div className="hidden md:flex flex-col items-center pt-1 flex-shrink-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dotClass}`}>
                    <Icon size={16} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 pb-5 border-b border-white/5 last:border-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-bold text-white text-sm md:text-base leading-snug">{exp.title}</h3>
                      <p className="text-sm text-[#B5C8FF] font-medium mt-0.5">{exp.org}</p>
                    </div>
                    <span className="text-[11px] text-white/40 font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-lg whitespace-nowrap flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mt-2 line-clamp-2">{exp.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
