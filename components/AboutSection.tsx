"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Download } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const highlights = [
  { value: "Sem 6", label: "Sistem Informasi", accent: false },
  { value: "50+", label: "Proyek & Kompetisi", accent: true },
  { value: "Aktif", label: "untuk Kolaborasi", accent: false },
  { value: "8+", label: "Penghargaan Nasional", accent: true },
];

const contactInfo = [
  { icon: MapPin, label: "Lokasi", value: "Jakarta, Indonesia" },
  { icon: Mail, label: "Email", value: "rizkysandipratama28@gmail.com" },
  { icon: Phone, label: "Telepon", value: "+62 811-636-2805" },
  { icon: Globe, label: "Bahasa", value: "Indonesia · English · Français (A1)" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Section number decoration */}
      <div className="absolute right-6 top-10 text-[120px] font-extrabold text-[#102047]/3 select-none leading-none pointer-events-none hidden lg:block">
        01
      </div>

      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              number="01"
              label="TENTANG SAYA"
              title="Membangun Solusi Digital yang "
              highlight="Bermakna"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-[#64748B] leading-relaxed border-l-2 border-[#2563EB]/20 pl-4"
            >
              Saya mahasiswa Sistem Informasi semester 6 di Telkom University Jakarta
              dengan minat kuat pada manajemen proyek dan kolaborasi lintas disiplin.
              Aktif memimpin organisasi dan mengoordinasikan kegiatan kampus baik
              internal maupun eksternal.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#64748B] leading-relaxed pl-4"
            >
              Berpengalaman sebagai manajer proyek dalam kompetisi nasional,
              bertanggung jawab atas perencanaan, pengorganisasian, dan eksekusi
              inisiatif produk digital. Memahami design thinking, project lifecycle,
              dan terbukti mampu bekerja efektif dalam tim.
            </motion.p>

            {/* Highlights — editorial 2×2 stat grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden"
            >
              {highlights.map((h) => (
                <div
                  key={h.value}
                  className={`p-5 hover:bg-[#F8F9FD] transition-colors ${h.accent ? "bg-[#F8F9FD]" : "bg-white"}`}
                >
                  <p className={`text-2xl font-extrabold leading-none ${h.accent ? "text-[#2563EB]" : "text-[#102047]"}`}>
                    {h.value}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1.5 font-medium leading-tight">{h.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="/CV_Rizky_Sandi_Pratama.pdf"
              download
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-7 inline-flex items-center gap-2 bg-[#102047] hover:bg-[#2563EB] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm group"
            >
              <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
              Unduh CV
            </motion.a>
          </div>

          {/* Right – contact card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Status card with thin accent top border */}
            <div className="bg-[#102047] rounded-2xl p-8 text-white mb-5 relative overflow-hidden">
              {/* Faint dot grid in dark card */}
              <div className="absolute inset-0 bg-dot-grid opacity-[0.03]" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB] via-[#B5C8FF] to-transparent" />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">Status</p>
                <p className="text-lg font-bold">Tersedia untuk Kolaborasi</p>
                <p className="text-sm text-white/60 mt-1">Proyek · Magang · Freelance</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">Aktif sekarang</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F9FD] rounded-2xl p-8 border border-slate-100">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#64748B] uppercase mb-5">Informasi Kontak</p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-white border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={15} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-wide">{label}</p>
                      <p className="text-sm text-[#102047] font-semibold mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
