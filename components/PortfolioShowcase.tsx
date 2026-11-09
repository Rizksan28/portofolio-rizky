"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, Layers, Trophy } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects, certificates, techStack, awards } from "@/lib/data";

const tabs = ["Proyek", "Penghargaan", "Sertifikat", "Tech Stack"] as const;
type Tab = (typeof tabs)[number];

const placeStyle: Record<string, { badge: string; icon: string }> = {
  "1st":     { badge: "bg-amber-100 text-amber-800 border border-amber-300",  icon: "bg-amber-400 text-amber-900" },
  "2nd":     { badge: "bg-slate-100 text-slate-700 border border-slate-300",  icon: "bg-slate-300 text-slate-700" },
  "3rd":     { badge: "bg-orange-100 text-orange-800 border border-orange-300", icon: "bg-orange-300 text-orange-800" },
  "silver":  { badge: "bg-slate-100 text-slate-600 border border-slate-300",  icon: "bg-slate-400 text-white" },
  "harapan": { badge: "bg-blue-50 text-blue-700 border border-blue-200",      icon: "bg-blue-200 text-blue-800" },
};

export default function PortfolioShowcase() {
  const [active, setActive] = useState<Tab>("Proyek");

  return (
    <section id="portfolio" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute right-4 top-8 text-[120px] font-extrabold text-[#102047]/3 select-none leading-none pointer-events-none hidden lg:block">
        05
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="05"
          label="PORTFOLIO SHOWCASE"
          title="Semua "
          highlight="Karya"
          subtitle="Jelajahi berbagai proyek, penghargaan, sertifikasi, dan teknologi yang pernah saya gunakan."
          center
        />

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="bg-[#F8F9FD] rounded-xl p-1 inline-flex gap-0.5 border border-slate-200 flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  active === tab
                    ? "bg-[#102047] text-white shadow-sm"
                    : "text-[#64748B] hover:text-[#102047] hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-10"
          >
            {/* PROYEK */}
            {active === "Proyek" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {projects.map((p, i) => (
                  <div
                    key={p.id}
                    className="bg-[#F8F9FD] rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="h-44 bg-gradient-to-br from-[#102047] to-[#1e3a7a] relative overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                      <span className="absolute top-3 left-4 text-4xl font-extrabold text-white/10 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute bottom-3 left-4 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border border-white/10">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#102047]">{p.title}</h3>
                      <p className="text-sm text-[#64748B] mt-2 leading-relaxed line-clamp-2">{p.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="text-[11px] font-medium bg-[#E9EEFA] text-[#2563EB] px-2 py-0.5 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                      <button className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:gap-2.5 transition-all uppercase tracking-wide">
                        Lihat Detail <ExternalLink size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PENGHARGAAN */}
            {active === "Penghargaan" && (
              <div className="space-y-4">
                {awards.map((a, i) => {
                  const style = placeStyle[a.place] ?? placeStyle["harapan"];
                  return (
                    <motion.div
                      key={a.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="bg-[#F8F9FD] rounded-2xl p-5 md:p-6 border border-slate-100 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        {/* Place badge */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-1.5 w-16">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.icon}`}>
                            <Trophy size={20} />
                          </div>
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-lg text-center leading-tight ${style.badge}`}>
                            {a.label}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <h3 className="font-bold text-[#102047] text-sm md:text-base leading-snug flex-1">{a.title}</h3>
                            <span className="text-[11px] font-mono text-[#64748B] bg-white border border-slate-200 px-2.5 py-1 rounded-lg flex-shrink-0">
                              {a.date}
                            </span>
                          </div>
                          <p className="text-xs text-[#2563EB] font-semibold mt-1">{a.issuer}</p>

                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#64748B]">
                            {a.role && (
                              <span><span className="font-semibold text-[#102047]">Peran:</span> {a.role}</span>
                            )}
                            {a.team && (
                              <span><span className="font-semibold text-[#102047]">Tim:</span> {a.team}</span>
                            )}
                            {a.product && (
                              <span><span className="font-semibold text-[#102047]">Produk:</span> {a.product}</span>
                            )}
                          </div>

                          <p className="mt-2.5 text-sm text-[#64748B] leading-relaxed">{a.desc}</p>

                          {/* Photos */}
                          {"photos" in a && Array.isArray(a.photos) && a.photos.length > 0 && (
                            <div className="mt-4 flex gap-2.5 flex-wrap">
                              {(a.photos as { src: string; caption: string }[]).map((photo) => (
                                <div key={photo.src} className="flex flex-col items-center gap-1">
                                  <div className="w-20 h-14 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                                    <img
                                      src={photo.src}
                                      alt={photo.caption}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        const el = e.target as HTMLImageElement;
                                        el.style.display = "none";
                                      }}
                                    />
                                  </div>
                                  <span className="text-[9px] text-[#64748B] text-center max-w-[80px] leading-tight">{photo.caption}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* SERTIFIKAT */}
            {active === "Sertifikat" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((c, i) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-[#F8F9FD] rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all hover:-translate-y-0.5 group"
                  >
                    {"image" in c && c.image && (
                      <div className="h-32 bg-slate-100 overflow-hidden">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-[#102047] text-sm leading-snug">{c.title}</h3>
                      <p className="text-xs text-[#2563EB] font-semibold mt-1.5">{c.issuer}</p>
                      <p className="text-xs text-[#64748B] mt-0.5 font-mono">{c.date}</p>
                      {"credentialId" in c && c.credentialId && (
                        <p className="text-[10px] text-[#64748B]/50 mt-1 font-mono break-all">ID: {c.credentialId}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* TECH STACK */}
            {active === "Tech Stack" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {techStack.map((cat, i) => (
                  <motion.div
                    key={cat.category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-[#F8F9FD] rounded-2xl p-5 border border-slate-100"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Layers size={14} className="text-[#2563EB]" />
                      <h3 className="font-bold text-[#102047] text-xs uppercase tracking-wide">{cat.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span key={item} className="text-xs font-medium bg-white border border-slate-200 text-[#64748B] px-2.5 py-1 rounded-lg hover:border-[#B5C8FF] transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
