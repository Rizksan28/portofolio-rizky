"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  number?: string;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  center = false,
  number,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(center ? "text-center" : "", className)}
    >
      <div className={cn("flex items-center gap-4 mb-4", center && "justify-center")}>
        {number && (
          <span className="text-xs font-mono font-bold text-[#2563EB]/50 tracking-wider">
            {number}
          </span>
        )}
        <div className={cn("h-px bg-[#2563EB]/20 w-8", !number && "hidden")} />
        {label && (
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#2563EB] uppercase">
            {label}
          </span>
        )}
        {!number && label && <div className="h-px bg-[#2563EB]/20 flex-1 max-w-[40px]" />}
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-[#102047] leading-tight">
        {title}
        {highlight && <span className="text-[#2563EB]">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className={cn("mt-3 text-[#64748B] text-base leading-relaxed", center ? "max-w-xl mx-auto" : "max-w-xl")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
