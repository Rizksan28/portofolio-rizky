"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const SEEN_KEY = "rsp-tv-intro";
const BAR_COLORS = ["#F1E5D0", "#F5BA60", "#6FC6BE", "#3AE0B0", "#B18BF7", "#FF718E", "#1578FF"];

type Variant = "A" | "B" | "C" | "S" | "bars" | "nosignal";
type Phase = "wall" | "rank" | "zoom";

// 5 × 3 TV wall. Index 7 is the dead-center S-rank TV the camera dives into.
const TVS: { v: Variant; rot: number; d: number }[] = [
  { v: "C", rot: -2.5, d: 0.5 },
  { v: "bars", rot: 1.5, d: 0.15 },
  { v: "B", rot: -1, d: 0.7 },
  { v: "nosignal", rot: 2, d: 0.35 },
  { v: "C", rot: -1.5, d: 0.9 },
  { v: "A", rot: 2, d: 0.25 },
  { v: "B", rot: -2, d: 0.6 },
  { v: "S", rot: 0, d: 1.05 },
  { v: "bars", rot: 1, d: 0.45 },
  { v: "A", rot: -1.5, d: 0.8 },
  { v: "nosignal", rot: 1.5, d: 0.3 },
  { v: "C", rot: -1, d: 0.95 },
  { v: "B", rot: 2.5, d: 0.1 },
  { v: "bars", rot: -2, d: 0.55 },
  { v: "C", rot: 1, d: 0.75 },
];

const RANK_COLOR: Record<string, string> = { A: "#B18BF7", B: "#6FC6BE", C: "#B8ADB4" };
const TICKER = "RANK S ★ ENTER THE ARCHIVE ★ RSP ARCHIVE SYSTEM ★ SIGNAL LOCKED ★ ";

function Screen({ v, phase }: { v: Variant; phase: Phase }) {
  const ranked = phase !== "wall";
  // Once a tile is dimmed to the background (anything but the S tile, once
  // ranked), its noise animation is nearly invisible at 18% opacity but still
  // costs a full compositor layer. Skip it so the GPU only has to carry the
  // handful of tiles that actually matter during the rank/zoom beats.
  const dimmed = ranked && v !== "S";
  if (v === "S") {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#0a1424] overflow-hidden">
        <div className="tv-static opacity-40" aria-hidden="true" />
        {ranked && (
          <>
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.95, 0] }}
              transition={{ duration: 0.45, times: [0, 0.25, 1], ease: "easeOut" }}
              aria-hidden="true"
            />
            <motion.span
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.45] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ background: "radial-gradient(circle at center, rgba(245,186,96,0.5), transparent 70%)" }}
              aria-hidden="true"
            />
            <motion.div
              initial={{ scale: 3, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 17, delay: 0.08 }}
              className="relative text-center"
            >
              <p className="font-tape text-[9px] md:text-[12px] font-bold tracking-[0.3em] text-[#F5BA60]">RANK</p>
              <p
                className="font-display leading-none text-[#F5BA60] text-[clamp(40px,7vw,110px)]"
                style={{ textShadow: "0 0 28px rgba(245,186,96,0.95), 0 0 60px rgba(245,186,96,0.5)" }}
              >
                S
              </p>
            </motion.div>
            <motion.span
              className="absolute inset-0 border-2 border-[#F5BA60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </>
        )}
      </div>
    );
  }
  if (v === "bars") {
    return (
      <div className="absolute inset-0 flex overflow-hidden">
        {BAR_COLORS.map((c) => <span key={c} className="flex-1" style={{ background: c }} />)}
        {!dimmed && <div className="tv-static opacity-25" aria-hidden="true" />}
      </div>
    );
  }
  if (v === "nosignal") {
    return (
      <div className="absolute inset-0 bg-[#0a0a0f] overflow-hidden">
        {!dimmed && <div className="tv-static opacity-55" aria-hidden="true" />}
        <span className="absolute inset-0 flex items-center justify-center font-tape text-[9px] md:text-[11px] font-bold tracking-[0.25em] text-[#F1E5D0]/70 animate-glow-pulse">NO SIGNAL</span>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f] overflow-hidden">
      {!dimmed && <div className="tv-static opacity-45" aria-hidden="true" />}
      <div className="relative text-center">
        <p className="font-tape text-[8px] md:text-[10px] font-bold tracking-[0.3em]" style={{ color: RANK_COLOR[v] }}>RANK</p>
        <p className="font-display leading-none text-[clamp(22px,3.6vw,56px)]" style={{ color: RANK_COLOR[v] }}>{v}</p>
      </div>
    </div>
  );
}

function StripeBand({ side, visible }: { side: "top" | "bottom"; visible: boolean }) {
  const text = TICKER.repeat(4);
  return (
    <motion.div
      initial={{ x: side === "top" ? "-105%" : "105%" }}
      animate={{ x: 0, opacity: visible ? 1 : 0 }}
      transition={{ x: { type: "spring", stiffness: 160, damping: 22 }, opacity: { duration: 0.2 } }}
      className={`absolute ${side === "top" ? "top-[7%] rotate-[-1.2deg]" : "bottom-[7%] rotate-[1.2deg]"} left-[-2%] w-[104%] pointer-events-none`}
      aria-hidden="true"
    >
      <div className="h-[6px]" style={{ background: "repeating-linear-gradient(-45deg, #F5BA60 0 12px, #0d0b10 12px 24px)" }} />
      <div className="bg-[#0d0b10] py-2 md:py-2.5 overflow-hidden border-y border-[#F5BA60]/40">
        <div className="flex whitespace-nowrap animate-[marquee_14s_linear_infinite] will-change-transform">
          <span className="font-display text-[14px] md:text-[18px] tracking-[0.1em] text-[#F5BA60] pr-8">{text}</span>
          <span className="font-display text-[14px] md:text-[18px] tracking-[0.1em] text-[#F5BA60] pr-8">{text}</span>
        </div>
      </div>
      <div className="h-[6px]" style={{ background: "repeating-linear-gradient(-45deg, #F5BA60 0 12px, #0d0b10 12px 24px)" }} />
    </motion.div>
  );
}

export default function TVIntro() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<Phase>("wall");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const done = useRef(false);
  const tcRef = useRef<HTMLSpanElement>(null);

  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    timers.current.forEach(clearTimeout);
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch {}
    setShow(false);
  }, []);

  useLayoutEffect(() => {
    let seen = false;
    try { seen = !!sessionStorage.getItem(SEEN_KEY); } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) return;
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    timers.current = [
      setTimeout(() => setPhase("rank"), 2000),
      setTimeout(() => setPhase("zoom"), 3600),
      setTimeout(finish, 4750),
    ];
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") finish(); };
    window.addEventListener("keydown", onKey);
    // Running timecode, written directly to the DOM so it never re-renders the tree.
    const start = performance.now();
    const tc = setInterval(() => {
      if (!tcRef.current) return;
      const ms = performance.now() - start;
      const s = Math.floor(ms / 1000);
      const f = Math.floor((ms % 1000) / 40);
      tcRef.current.textContent = `00:00:0${s}:${String(f).padStart(2, "0")}`;
    }, 80);
    return () => {
      document.body.style.overflow = "";
      timers.current.forEach(clearTimeout);
      window.removeEventListener("keydown", onKey);
      clearInterval(tc);
    };
  }, [show, finish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="tv-intro"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[85] overflow-hidden bg-[#07060a]"
          aria-label="Opening animation"
        >
          {/* Wall layer: unmounts the instant "zoom" starts, instead of being
              dragged along into a 14×-scaled subtree — scaling 15 shadowed,
              gradient-heavy tiles that far up is the single most expensive
              thing a browser can be asked to rasterize, and was the actual
              source of the lag during this transition. */}
          <AnimatePresence>
            {phase !== "zoom" && (
              <motion.div
                key="wall"
                className="absolute inset-0"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.16, ease: "easeIn" }}
                style={{ willChange: "opacity, transform" }}
              >
                {/* Shake layer — the slam when RANK S locks in */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={
                    phase === "rank"
                      ? { x: [0, -7, 6, -4, 2, 0], y: [0, 4, -5, 3, -2, 0] }
                      : { x: 0, y: 0 }
                  }
                  transition={phase === "rank" ? { duration: 0.45, delay: 0.1 } : { duration: 0.2 }}
                >
                  <div className="grid grid-cols-5 gap-[1.4vw] w-[210vw] sm:w-[150vw] lg:w-[115vw] shrink-0">
                    {TVS.map((tv, i) => {
                      const isS = tv.v === "S";
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scaleY: 0.04, scaleX: 0.72 }}
                          animate={{
                            opacity: phase !== "wall" && !isS ? 0.18 : 1,
                            scaleY: isS && phase !== "wall" ? 1.14 : 1,
                            scaleX: isS && phase !== "wall" ? 1.14 : 1,
                          }}
                          transition={
                            phase === "wall"
                              ? { delay: tv.d, type: "spring", stiffness: 270, damping: 20 }
                              : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                          }
                          style={{ rotate: tv.rot, zIndex: isS ? 10 : 1 }}
                          className="relative aspect-[4/3] rounded-[10px] border border-black bg-gradient-to-b from-[#2b2530] to-[#15111a] p-[5%] shadow-[0_24px_40px_-16px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]"
                        >
                          <div className="relative w-full h-full rounded-[6px] overflow-hidden border border-black bg-[#0a0a0f] shadow-[inset_0_0_18px_rgba(0,0,0,0.9)]">
                            <Screen v={tv.v} phase={phase} />
                            {/* CRT turn-on blip */}
                            <motion.span
                              className="absolute inset-0 bg-white pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 0.85, 0] }}
                              transition={{ delay: tv.d + 0.06, duration: 0.3, times: [0, 0.35, 1] }}
                              aria-hidden="true"
                            />
                            <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.22)_0,rgba(0,0,0,0.22)_1px,transparent_1px,transparent_3px)]" aria-hidden="true" />
                            <span className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 58%, rgba(0,0,0,0.5) 100%)" }} aria-hidden="true" />
                          </div>
                          <span className="absolute right-[7%] bottom-[1.5%] w-1.5 h-1.5 rounded-full bg-[#3AE0B0] shadow-[0_0_6px_#3AE0B0]" aria-hidden="true" />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Punch layer: the actual "dive into the screen" — a single plain
              element scaling up, not an entire complex grid. Far cheaper to
              rasterize, and the white flash + glitch below mask the handoff
              from the wall fading out a frame earlier. */}
          {phase === "zoom" && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-[#0a1424] overflow-hidden"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ scale: 2.6, opacity: 1 }}
              transition={{ duration: 0.95, ease: [0.74, 0, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <span
                className="absolute inset-0"
                style={{ background: "radial-gradient(circle at center, rgba(245,186,96,0.55), transparent 65%)" }}
                aria-hidden="true"
              />
              <div className="relative text-center">
                <p className="font-tape text-[9px] md:text-[12px] font-bold tracking-[0.3em] text-[#F5BA60]">RANK</p>
                <p
                  className="font-display leading-none text-[#F5BA60] text-[clamp(40px,7vw,110px)]"
                  style={{ textShadow: "0 0 28px rgba(245,186,96,0.95), 0 0 60px rgba(245,186,96,0.5)" }}
                >
                  S
                </p>
              </div>
            </motion.div>
          )}

          {/* Scanline sweep across the whole wall */}
          {phase === "wall" && (
            <span
              className="absolute inset-x-0 h-[18vh] pointer-events-none animate-scanline will-change-transform"
              style={{ background: "linear-gradient(180deg, transparent, rgba(241,229,208,0.05) 45%, rgba(241,229,208,0.1) 50%, rgba(241,229,208,0.05) 55%, transparent)" }}
              aria-hidden="true"
            />
          )}

          {/* ZZZ-style ticker bands on the RANK S slam */}
          {phase !== "wall" && (
            <>
              <StripeBand side="top" visible={phase === "rank"} />
              <StripeBand side="bottom" visible={phase === "rank"} />
            </>
          )}

          {/* Chromatic glitch flash on the slam */}
          {phase !== "wall" && (
            <motion.span
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 0.35, times: [0, 0.3, 1] }}
              style={{ background: "linear-gradient(90deg, rgba(255,0,80,0.4), transparent 18%, transparent 82%, rgba(0,170,255,0.4))" }}
              aria-hidden="true"
            />
          )}

          {/* HUD */}
          <motion.div
            animate={{ opacity: phase === "zoom" ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-8 pointer-events-none"
          >
            <div className="font-tape text-[11px] md:text-[12px] font-bold tracking-[0.24em] text-[#F1E5D0]">
              RSP ARCHIVE SYSTEM
              <span className="block mt-1.5 text-[10px] tracking-[0.2em] text-[#F5BA60]">
                {phase === "wall" ? "CHANNEL SCAN…" : "SIGNAL LOCKED · RANK S"}
              </span>
            </div>
            <div className="text-right font-tape text-[11px] font-bold tracking-[0.2em]">
              <span className="flex items-center justify-end gap-2 text-[#FF718E]">
                <span className="w-2 h-2 rounded-full bg-[#FF718E] animate-glow-pulse" aria-hidden="true" /> REC
              </span>
              <span ref={tcRef} className="block mt-1.5 text-[10px] tracking-[0.18em] text-[#B8ADB4] tabular-nums">00:00:00:00</span>
            </div>
          </motion.div>
          <motion.p
            animate={{ opacity: phase === "zoom" ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-6 md:bottom-8 inset-x-0 text-center font-tape text-[10px] md:text-[11px] font-bold tracking-[0.3em] text-[#B8ADB4] pointer-events-none"
          >
            {phase === "wall" ? "SEARCHING SIGNAL…" : "▶ ENTERING THE ARCHIVE"}
          </motion.p>

          {/* White flash into the page */}
          <motion.div
            className="absolute inset-0 bg-white pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "zoom" ? [0, 0, 1] : 0 }}
            transition={{ duration: 1.05, times: [0, 0.55, 1], ease: "easeIn" }}
            aria-hidden="true"
          />

          {phase !== "zoom" && (
            <button
              onClick={finish}
              autoFocus
              className="absolute bottom-5 right-5 md:bottom-8 md:right-8 font-tape text-[11px] md:text-[12px] font-bold tracking-[0.18em] text-[#F1E5D0]/80 hover:text-[#F5BA60] border border-white/30 hover:border-[#F5BA60] px-4 py-2.5 transition-colors bg-[#07060a]/60"
            >
              SKIP ▶▶
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
