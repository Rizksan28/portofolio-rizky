"use client";
import { motion } from "framer-motion";
import { Briefcase, Users, FolderGit2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { experiences } from "@/lib/data";

const typeIcon = {
  work: Briefcase,
  org: Users,
  project: FolderGit2,
};

const typeDot: Record<string, string> = {
  work: "bg-[#2563EB]",
  org: "bg-indigo-500",
  project: "bg-sky-500",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 bg-[#102047] relative overflow-hidden">
      {/* Section number decoration */}
      <div className="absolute right-4 top-8 text-[120px] font-extrabold text-white/[0.03] select-none leading-none pointer-events-none hidden lg:block">
        03
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          number="03"
          label="PERJALANAN KARIER"
          title="Pengalaman & "
          highlight="Organisasi"
          className="[&_h2]:text-white [&_span:first-child]:text-[#B5C8FF]/60 [&_.h-px]:bg-white/10"
        />

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[#2563EB]/50 via-[#2563EB]/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const Icon = typeIcon[exp.type as keyof typeof typeIcon] ?? Briefcase;
              const dotClass = typeDot[exp.type] ?? typeDot.work;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 md:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center pt-1 flex-shrink-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dotClass}`}>
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                      <div>
                        <h3 className="font-bold text-white text-sm md:text-base leading-snug">{exp.title}</h3>
                        <p className="text-sm text-[#B5C8FF] font-medium mt-0.5">{exp.org}</p>
                        {"location" in exp && exp.location && (
                          <p className="text-xs text-white/30 mt-0.5">{exp.location}</p>
                        )}
                      </div>
                      <span className="text-[11px] text-white/40 font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-lg whitespace-nowrap flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed mt-2">{exp.desc}</p>

                    {"tags" in exp && Array.isArray(exp.tags) && exp.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {(exp.tags as string[]).map((tag) => (
                          <span key={tag} className="text-[11px] text-white/40 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {i < experiences.length - 1 && (
                      <div className="mt-6 h-px bg-white/5" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
