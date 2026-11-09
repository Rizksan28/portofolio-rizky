interface ArchiveLabelProps {
  text: string;
  variant?: "default" | "pink" | "violet" | "teal" | "amber";
  className?: string;
}

const colors = {
  default: "bg-white/[0.06] text-white/50 border-white/[0.08]",
  pink: "bg-[#FF718E]/10 text-[#FF718E] border-[#FF718E]/20",
  violet: "bg-[#B18BF7]/10 text-[#B18BF7] border-[#B18BF7]/20",
  teal: "bg-[#6FC6BE]/10 text-[#6FC6BE] border-[#6FC6BE]/20",
  amber: "bg-[#F5BA60]/10 text-[#F5BA60] border-[#F5BA60]/20",
};

export default function ArchiveLabel({ text, variant = "default", className = "" }: ArchiveLabelProps) {
  return (
    <span
      className={`inline-flex font-tape text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-md border ${colors[variant]} ${className}`}
    >
      {text}
    </span>
  );
}
