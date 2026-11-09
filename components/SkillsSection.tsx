"use client";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const categories = [
  {
    label: "UI/UX Design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva", "Visual Paradigm"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Backend & Database",
    items: ["Laravel", "Express.js", "FastAPI", "MySQL", "MongoDB", "Python", "PHP"],
  },
  {
    label: "Tools & Productivity",
    items: ["SAP ERP", "Jira", "Trello", "Notion", "Git", "VS Code", "MS Office"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 bg-[#F8F9FD] relative overflow-hidden">
      {/* Section number decoration */}
      <div className="absolute left-4 top-8 text-[120px] font-extrabold text-[#102047]/3 select-none leading-none pointer-events-none hidden lg:block">
        04
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="04"
          label="TOOLS & SKILLS"
          title="Teknologi yang Saya "
          highlight="Gunakan"
          center
        />

        <div className="mt-14 space-y-0 divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 hover:bg-[#F8F9FD] transition-colors"
            >
              <div className="sm:w-44 flex-shrink-0">
                <p className="text-xs font-bold text-[#102047] uppercase tracking-wide">{cat.label}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium bg-[#E9EEFA] text-[#2563EB] px-3 py-1.5 rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
