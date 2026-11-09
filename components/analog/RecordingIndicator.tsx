interface RecordingIndicatorProps {
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

export default function RecordingIndicator({
  label = "REC",
  className = "",
  size = "sm",
}: RecordingIndicatorProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div
        className={`rounded-full bg-[#FF718E] animate-glow-pulse shadow-[0_0_8px_rgba(255,113,142,0.5)] ${
          size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2"
        }`}
      />
      <span
        className={`font-tape font-bold text-[#FF718E] tracking-wider ${
          size === "sm" ? "text-[10px]" : "text-[10px]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
