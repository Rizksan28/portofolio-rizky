"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { featuredWork } from "@/lib/data";

export default function FeaturedWorkSection() {
  return (
    <section id="featured" className="py-28 bg-[#F8F9FD] relative overflow-hidden">
      {/* Section number decoration */}
      <div className="absolute left-4 top-10 text-[120px] font-extrabold text-[#102047]/3 select-none leading-none pointer-events-none hidden lg:block">
        02
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <SectionHeading
            number="02"
            label="FEATURED WORK"
            title="Karya "
            highlight="Unggulan"
          />
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#64748B] hover:text-[#2563EB] transition-colors group"
          >
            Lihat Semua
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Large editorial card for first project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {featuredWork[0] && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer lg:row-span-2"
            >
              <div className={`h-80 lg:h-full min-h-[320px] bg-gradient-to-br ${featuredWork[0].color} relative overflow-hidden`}>
                <img
                  src={featuredWork[0].image}
                  alt={featuredWork[0].title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-dot-grid opacity-[0.04]" />

                {/* Project number */}
                <span className="absolute top-6 left-6 text-7xl font-extrabold text-white/8 leading-none select-none">
                  01
                </span>

                {/* Top bar */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <span className="bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg border border-white/15">
                    {featuredWork[0].category}
                  </span>
                  <div className="w-9 h-9 bg-white/10 group-hover:bg-white rounded-xl flex items-center justify-center transition-all border border-white/20">
                    <ArrowUpRight size={15} className="text-white group-hover:text-[#102047] transition-colors" />
                  </div>
                </div>

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {"tech" in featuredWork[0] && Array.isArray((featuredWork[0] as { tech?: string[] }).tech) &&
                      ((featuredWork[0] as { tech?: string[] }).tech ?? []).map((t) => (
                        <span key={t} className="text-[10px] font-semibold bg-white/15 text-white px-2 py-0.5 rounded-md">
                          {t}
                        </span>
                      ))}
                  </div>
                  <h3 className="text-xl font-extrabold text-white leading-tight">{featuredWork[0].title}</h3>
                  <p className="mt-1.5 text-sm text-white/70 leading-relaxed line-clamp-2">{featuredWork[0].description}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Two smaller cards stacked */}
          <div className="flex flex-col gap-5">
            {featuredWork.slice(1).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex-1"
              >
                <div className={`h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-dot-grid opacity-[0.04]" />

                  {/* Project number */}
                  <span className="absolute top-4 left-5 text-5xl font-extrabold text-white/8 leading-none select-none">
                    {String(i + 2).padStart(2, "0")}
                  </span>

                  {/* Category + Arrow */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="bg-black/30 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg border border-white/10">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 bg-white/10 group-hover:bg-white rounded-xl flex items-center justify-center transition-all border border-white/20">
                      <ArrowUpRight size={13} className="text-white group-hover:text-[#102047] transition-colors" />
                    </div>
                  </div>

                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {"tech" in project && Array.isArray((project as { tech?: string[] }).tech) &&
                        ((project as { tech?: string[] }).tech ?? []).map((t) => (
                          <span key={t} className="text-[10px] font-semibold bg-white/15 text-white px-2 py-0.5 rounded-md">
                            {t}
                          </span>
                        ))}
                    </div>
                    <h3 className="font-bold text-white text-base leading-snug">{project.title}</h3>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed line-clamp-1">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
