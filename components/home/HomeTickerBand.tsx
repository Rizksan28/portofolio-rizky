"use client";

const keywords = [
  "UI/UX Design",
  "Project Management",
  "Full-Stack Development",
  "Business Strategy",
  "Leadership",
  "Information Systems",
  "TypeScript",
  "React & Next.js",
  "Figma",
  "Competitive Business",
];

export default function HomeTickerBand() {
  const items = [...keywords, ...keywords];

  return (
    <div className="bg-[#102047] py-4 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#102047] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#102047] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-8 w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-8 text-sm font-bold text-white/40 uppercase tracking-[0.15em] whitespace-nowrap"
          >
            {word}
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
