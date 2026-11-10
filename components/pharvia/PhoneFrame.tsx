interface PhoneFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function PhoneFrame({ src, alt, width, height, className = "", priority = false }: PhoneFrameProps) {
  return (
    <div className={`relative rounded-[2.2rem] bg-gradient-to-b from-[#2b2830] to-[#0b0a0e] p-[6px] border border-black shadow-[0_24px_36px_-14px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.12)] ${className}`}>
      <span className="absolute -left-[2px] top-[18%] w-[3px] h-[7%] rounded-l bg-[#1b1920]" aria-hidden="true" />
      <span className="absolute -right-[2px] top-[24%] w-[3px] h-[12%] rounded-r bg-[#1b1920]" aria-hidden="true" />
      <div className="relative rounded-[1.8rem] overflow-hidden bg-[#0a0a0a]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} loading={priority ? "eager" : "lazy"} className="block w-full h-auto" />
      </div>
    </div>
  );
}
