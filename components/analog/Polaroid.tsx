interface PolaroidProps {
  src?: string;
  alt: string;
  caption: string;
  rotate?: number;
  className?: string;
  tapeColor?: string;
  aspect?: string;
  fit?: "cover" | "contain";
  children?: React.ReactNode;
}

export default function Polaroid({ src, alt, caption, rotate = 0, className = "", aspect = "aspect-[4/3]", fit = "cover", children }: PolaroidProps) {
  return (
    <figure
      className={`paper relative p-2.5 pb-3 shadow-[0_14px_28px_-10px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="masking-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 rotate-[-3deg]" aria-hidden="true" />
      <div className={`relative ${aspect} bg-[#0d0b10] overflow-hidden`}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} loading="lazy" className={`absolute inset-0 w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} [filter:saturate(1.1)_contrast(1.05)_sepia(0.12)]`} />
        ) : (
          children
        )}
        <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_0,rgba(0,0,0,0.12)_1px,transparent_1px,transparent_3px)]" aria-hidden="true" />
        <span className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.45)]" aria-hidden="true" />
      </div>
      <figcaption className="mt-2.5 font-tape text-[11px] font-semibold tracking-wide text-[#151319]/80 px-0.5">{caption}</figcaption>
    </figure>
  );
}
