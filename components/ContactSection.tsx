"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const projectTypes = [
  "Web Application",
  "UI/UX Design",
  "Project Management",
  "Mobile App",
  "Lainnya",
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend / email service
    alert("Pesan terkirim! Terima kasih, saya akan segera menghubungi Anda.");
    setForm({ name: "", email: "", project: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#102047] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#B5C8FF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest text-[#B5C8FF] uppercase">
            — HUBUNGI SAYA
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Let&apos;s Create Something{" "}
            <span className="text-[#B5C8FF]">Amazing Together</span>
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            Punya ide proyek, kebutuhan pengembangan, atau ingin berdiskusi tentang
            teknologi dan desain? Mari berkolaborasi dan menciptakan sesuatu yang
            bermakna.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: Mail, text: "rizkysandipratama28@gmail.com" },
              { icon: Phone, text: "+62 811-636-2805" },
              { icon: MapPin, text: "Jakarta, Indonesia" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                  <Icon size={16} className="text-[#B5C8FF]" />
                </div>
                <span className="text-slate-300 text-sm">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { icon: Globe, href: "https://linkedin.com/in/rizksan", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-xl flex items-center justify-center transition-colors"
              >
                <Icon size={16} className="text-white" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right – form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block">Nama Lengkap</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Nama Anda"
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB] transition"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="email@contoh.com"
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB] transition"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Jenis Proyek</label>
            <select
              name="project"
              value={form.project}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB] transition appearance-none"
            >
              <option value="" className="bg-[#102047]">Pilih topik</option>
              {projectTypes.map((p) => (
                <option key={p} value={p} className="bg-[#102047]">{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Pesan</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tulis pesan Anda di sini..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB] transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
          >
            <Send size={16} /> Kirim Pesan
          </button>
        </motion.form>
      </div>
    </section>
  );
}
