interface PageHeroProps {
  channel: string;
  room: string;
  kicker: string;
  title: React.ReactNode;
  sub: string;
  accent: string;
  timecode?: string;
  children?: React.ReactNode;
}

export default function PageHero({ channel, room, kicker, title, sub, accent, timecode = "00:00:00", children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-14 md:pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 film-grain pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[70%] pointer-events-none opacity-60"
        style={{ background: `radial-gradient(ellipse 60% 80% at 80% 20%, ${accent}22, transparent 70%)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-tape text-[11px] tracking-[0.18em] mb-8 md:mb-12" style={{ color: "var(--muted-text)" }}>
          <span className="flex items-center gap-2 text-[#FF718E]">
            <span className="w-2 h-2 rounded-full bg-[#FF718E] animate-glow-pulse" aria-hidden="true" />
            REC
          </span>
          <span>{channel}</span>
          <span className="hidden sm:inline">SP</span>
          <span className="timecode" style={{ color: accent }}>{timecode}</span>
          <span className="ml-auto text-[#B8ADB4]/80 uppercase">{room}</span>
        </div>

        <div className={`grid gap-10 items-end ${children ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
          <div>
            <p className="inline-block font-tape text-[11px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 mb-5" style={{ color: accent, border: `1px solid ${accent}66`, background: `${accent}14` }}>
              {kicker}
            </p>
            <h1 className="text-[clamp(2.4rem,6.4vw,5.2rem)] leading-[0.95] mb-5" style={{ color: "var(--warm-paper)" }}>{title}</h1>
            <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: "var(--muted-text)" }}>{sub}</p>
          </div>
          {children && <div className="relative">{children}</div>}
        </div>
      </div>
    </section>
  );
}
