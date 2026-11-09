"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import VHSTape from "@/components/analog/VHSTape";
import { projects } from "@/lib/data";

const colors = ["#FF718E", "#B18BF7", "#6FC6BE"];

export default function FeaturedTapes() {
  return (
    <section className="relative py-20 md:py-28 bg-[#151319]">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-[#F5BA60] rounded-full" />
          <span className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#F5BA60]/70">FEATURED COLLECTION</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1E5D0] mb-2">LATEST TAPES.</h2>
            <p className="text-sm text-[#B8ADB4]/80">Selected projects from the archive.</p>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-2 font-tape text-[10px] font-bold tracking-[0.1em] text-[#B8ADB4] hover:text-[#FF718E] transition-colors">
            VIEW ALL TAPES &rarr;
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12">
          {projects.slice(0, 3).map((p, i) => (
            <motion.div key={p.id} className="px-4 pt-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <VHSTape
                slug={p.slug}
                title={p.title}
                category={p.category}
                archiveId={p.archiveId}
                year={p.year}
                tech={p.tech.length ? p.tech : p.tags}
                accentColor={p.accent ?? colors[i % colors.length]}
                tilt={[-1.4, 1, -0.6][i % 3]}
              />
              <div className="shelf-plank -mx-4 mt-6" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="md:hidden max-w-6xl mx-auto px-6 mt-8 text-center">
        <Link href="/projects" className="inline-flex items-center gap-2 font-tape text-[10px] font-bold tracking-[0.1em] text-[#B8ADB4] hover:text-[#FF718E] transition-colors">
          VIEW ALL TAPES &rarr;
        </Link>
      </div>
    </section>
  );
}
