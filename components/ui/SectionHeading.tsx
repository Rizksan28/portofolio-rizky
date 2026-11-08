"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  center = false,
  className,
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(center ? "text-center" : "", className)}
    >
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
          — {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#102047] leading-tight">
        {parts[0]}
        {highlight && <span className="text-[#2563EB]">{highlight}</span>}
        {parts[1]}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#64748B] text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
