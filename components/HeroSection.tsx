"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useInView,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

function CountUp({
  target,
  decimals = 0,
  suffix = "",
}: {
  target: number;
  decimals?: number;
  suffix?: string;
}) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let active = true;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      if (!active) return;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((eased * target).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    return () => {
      active = false;
    };
  }, [inView, target, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 3.77, decimals: 2, suffix: "", label: "GPA / 4.00" },
  { target: 8, decimals: 0, suffix: "+", label: "Penghargaan" },
  { target: 5, decimals: 0, suffix: "+", label: "Proyek Digital" },
  { target: 3, decimals: 0, suffix: "+", label: "Tahun Aktif" },
];

const springCfg = { stiffness: 150, damping: 30 };

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const gradientBg = useMotionTemplate`radial-gradient(700px circle at ${mouseX}% ${mouseY}%, rgba(37,99,235,0.07), transparent 50%)`;

  const rawPX = useTransform(mouseX, [0, 100], [-8, 8]);
  const rawPY = useTransform(mouseY, [0, 100], [-8, 8]);
  const portraitX = useSpring(rawPX, springCfg);
  const portraitY = useSpring(rawPY, springCfg);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
      mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
    },
    [mouseX, mouseY],
  );

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Mouse-following gradient orb */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: gradientBg }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2563EB]/[0.04] rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />

      {/* Decorative diagonal lines */}
      <div
        className="absolute top-32 right-[12%] w-px h-56 bg-gradient-to-b from-[#2563EB]/20 to-transparent pointer-events-none hidden lg:block"
        style={{ transform: "rotate(12deg)" }}
      />
      <div
        className="absolute bottom-40 left-[8%] w-px h-40 bg-gradient-to-t from-[#2563EB]/15 to-transparent pointer-events-none hidden lg:block"
        style={{ transform: "rotate(-8deg)" }}
      />

      {/* Vertical editorial text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 pointer-events-none">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#102047]/15" />
        <span
          className="text-[9px] font-bold tracking-[0.3em] text-[#102047]/15 uppercase"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          PORTFOLIO 2026
        </span>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-[#102047]/15" />
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div style={{ y: yContent, opacity: opacityContent }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-32 pb-16">
            {/* ── Left: Text ── */}
            <div>
              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2.5 bg-[#E9EEFA] border border-[#B5C8FF]/30 rounded-full px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-semibold text-[#102047]/60 tracking-wide">
                    Available for Collaboration
                  </span>
                </div>
              </motion.div>

              {/* Name — staggered reveal */}
              <div>
                {["RIZKY", "SANDI", "PRATAMA."].map((line, i) => (
                  <div key={line} className="overflow-hidden">
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2 + i * 0.1,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h1
                        className={`text-6xl md:text-7xl xl:text-[5.5rem] font-extrabold leading-[0.92] tracking-tight ${
                          i === 1
                            ? "text-[#2563EB]"
                            : "text-[#102047]"
                        }`}
                      >
                        {line}
                      </h1>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-6 flex items-center gap-3"
              >
                <div className="h-px w-10 bg-[#2563EB]/40" />
                <p className="text-xs md:text-sm font-medium text-[#64748B] tracking-wide">
                  Information Systems · UI/UX · Project Management
                </p>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="mt-5 text-[#64748B] leading-relaxed max-w-md text-[15px] border-l-2 border-[#2563EB]/20 pl-4"
              >
                Mahasiswa Sistem Informasi semester 6 di Telkom University
                Jakarta. Builder, kompetitor, dan pemimpin dengan 8+
                penghargaan nasional.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 bg-[#102047] hover:bg-[#2563EB] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm"
                >
                  Lihat Portofolio
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border border-[#102047]/15 hover:border-[#2563EB]/40 hover:bg-[#E9EEFA] text-[#102047] font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
                >
                  <MessageCircle size={15} className="text-[#2563EB]" />
                  Hubungi Saya
                </Link>
              </motion.div>
            </div>

            {/* ── Right: Portrait with parallax ── */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Background shape */}
                <div className="absolute inset-4 bg-[#E9EEFA] rounded-3xl" />

                {/* Corner accent lines */}
                <div className="absolute top-0 right-4 w-px h-20 bg-gradient-to-b from-[#2563EB]/40 to-transparent" />
                <div className="absolute top-0 right-4 w-20 h-px bg-gradient-to-r from-[#2563EB]/40 to-transparent" />
                <div className="absolute bottom-0 left-4 w-px h-20 bg-gradient-to-t from-[#2563EB]/40 to-transparent" />
                <div className="absolute bottom-0 left-4 w-20 h-px bg-gradient-to-l from-[#2563EB]/40 to-transparent" />

                {/* Portrait with animated gradient border */}
                <div className="relative p-[3px] rounded-2xl bg-gradient-to-r from-[#2563EB] via-[#B5C8FF] to-[#2563EB] bg-[length:200%_200%] animate-[gradient-shift_4s_ease_infinite]">
                  <div className="w-64 h-72 md:w-80 md:h-[420px] rounded-[13px] overflow-hidden bg-[#E9EEFA] flex items-center justify-center">
                    <img
                      src="/images/profile.jpg"
                      alt="Rizky Sandi Pratama"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                    <span className="absolute text-7xl font-extrabold text-[#2563EB]/10 select-none tracking-tighter">
                      RSP
                    </span>
                  </div>
                </div>

                {/* Floating GPA badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-3 -right-2 md:-right-8 bg-[#2563EB] text-white rounded-xl shadow-lg shadow-blue-200/60 px-4 py-2.5 animate-float"
                >
                  <p className="text-[9px] font-semibold text-white/70 uppercase tracking-wider">
                    GPA
                  </p>
                  <p className="text-xl font-extrabold leading-tight">
                    3.77
                  </p>
                </motion.div>

                {/* University badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -bottom-3 -left-2 md:-left-8 bg-white rounded-xl shadow-lg shadow-slate-200/60 px-4 py-3 border border-slate-100 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <p className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
                    Universitas
                  </p>
                  <p className="text-xs font-bold text-[#102047] mt-0.5">
                    Telkom University Jakarta
                  </p>
                </motion.div>

                {/* Angkatan badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="absolute top-20 md:top-28 -right-2 md:-right-7 bg-white rounded-xl shadow-md px-3 py-2 border border-slate-100 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <p className="text-[8px] font-bold text-[#64748B] uppercase tracking-wider">
                    Angkatan
                  </p>
                  <p className="text-sm font-extrabold text-[#102047]">
                    2023
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats — animated counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 pt-8 border-t border-slate-200"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-4 ${
                  i > 0
                    ? "md:border-l md:border-slate-200 md:pl-6"
                    : ""
                }`}
              >
                <p className="text-2xl md:text-3xl font-extrabold text-[#102047] leading-none">
                  <CountUp
                    target={s.target}
                    decimals={s.decimals}
                    suffix={s.suffix}
                  />
                </p>
                <p className="text-[10px] text-[#64748B] mt-2 font-medium uppercase tracking-wide leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold text-[#102047]/25 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#2563EB]/30 to-transparent" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1 h-1 rounded-full bg-[#2563EB]/40"
        />
      </motion.div>
    </section>
  );
}
