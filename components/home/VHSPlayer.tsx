"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CRTMonitor from "@/components/analog/CRTMonitor";
import { projects, type Project } from "@/lib/data";

const featured = projects.filter((p) => p.featured);

type PlayerState = "idle" | "inserting" | "tracking" | "playing" | "ejecting";

const FLY_MS = 950;
const TRACK_MS = 650;
const EJECT_MS = 450;

type FlyRect = { x: number; y: number; w: number; h: number; dx: number; dy: number; s: number };

function MiniCassette({ project, active, hidden, onClick, refCb }: {
  project: Project;
  active: boolean;
  hidden: boolean;
  onClick: () => void;
  refCb: (el: HTMLButtonElement | null) => void;
}) {
  const color = project.accent ?? "#B18BF7";
  return (
    <button
      ref={refCb}
      onClick={onClick}
      aria-label={`Insert tape ${project.archiveId}: ${project.title}`}
      aria-pressed={active}
      className={`group relative shrink-0 w-[100px] h-[56px] rounded-[6px] border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5BA60] focus-visible:outline-offset-2 ${
        hidden
          ? "opacity-0 pointer-events-none"
          : active
          ? "border-[#F5BA60]/70 opacity-35 grayscale"
          : "border-white/15 hover:border-white/40 opacity-70 hover:opacity-100 hover:-translate-y-1"
      }`}
      style={{ background: "linear-gradient(to bottom, #26222b, #14111a)" }}
    >
      <CassetteFace project={project} color={color} />
      {active && !hidden && (
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#F5BA60] shadow-[0_0_8px_#F5BA60]" aria-hidden="true" />
      )}
    </button>
  );
}

function CassetteFace({ project, color }: { project: Project; color: string }) {
  return (
    <>
      <div className="absolute left-[6%] right-[6%] top-[8%] h-[46%] rounded-[2px] overflow-hidden" style={{ background: "#F1E5D0" }}>
        <div className="absolute inset-x-0 top-0 h-[18%] flex" aria-hidden="true">
          <span className="flex-1" style={{ background: color }} />
          <span className="flex-1 bg-[#F5BA60]" />
          <span className="flex-1 bg-[#6FC6BE]" />
        </div>
        <p className="absolute inset-x-[6%] top-[28%] font-display text-[8px] leading-none text-[#151319] truncate">{project.title}</p>
        <p className="absolute inset-x-[6%] bottom-[6%] font-tape text-[6px] tracking-[0.1em] text-[#151319]/60 truncate">{project.archiveId}</p>
      </div>
      <div className="absolute left-[22%] right-[22%] top-[58%] h-[22%] rounded-[3px] bg-[#0a080d] border border-white/10" aria-hidden="true" />
    </>
  );
}

function TrackingNoise() {
  return (
    <div className="absolute inset-0 z-[12] pointer-events-none overflow-hidden" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-[3px] bg-white/25"
          style={{ top: `${10 + i * 11}%` }}
          animate={{ x: [(i % 2 ? 1 : -1) * 160, 0, (i % 2 ? -1 : 1) * 60], opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.03 }}
        />
      ))}
    </div>
  );
}

export default function VHSPlayer({ className = "" }: { className?: string }) {
  const [state, setState] = useState<PlayerState>("idle");
  const [current, setCurrent] = useState(0);
  const [fly, setFly] = useState<FlyRect | null>(null);
  const [sec, setSec] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const shelfRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const slotRef = useRef<HTMLDivElement>(null);
  const count = featured.length;

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    if (state !== "playing") { setSec(0); return; }
    const id = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [state, current]);

  const insert = useCallback((i: number) => {
    setCurrent(i);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const src = shelfRefs.current[i];
    const slot = slotRef.current;
    if (reduced || !src || !slot) {
      setState("playing");
      return;
    }
    const a = src.getBoundingClientRect();
    const b = slot.getBoundingClientRect();
    setFly({
      x: a.left, y: a.top, w: a.width, h: a.height,
      dx: b.left + b.width / 2 - (a.left + a.width / 2),
      dy: b.top + b.height / 2 - (a.top + a.height / 2),
      s: Math.min(b.width / a.width, 1.4),
    });
    setState("inserting");
    timers.current.push(
      setTimeout(() => { setFly(null); setState("tracking"); }, FLY_MS),
      setTimeout(() => setState("playing"), FLY_MS + TRACK_MS),
      setTimeout(() => { setFly(null); setState("playing"); }, FLY_MS + TRACK_MS + 1000),
    );
  }, []);

  const selectTape = useCallback((i: number) => {
    if (state === "inserting" || state === "tracking" || state === "ejecting") return;
    if (state === "playing") {
      if (i === current) return;
      clearTimers();
      setState("ejecting");
      timers.current.push(setTimeout(() => insert(i), EJECT_MS));
      return;
    }
    clearTimers();
    insert(i);
  }, [state, current, clearTimers, insert]);

  const eject = useCallback(() => {
    if (state !== "playing") return;
    clearTimers();
    setState("ejecting");
    timers.current.push(setTimeout(() => setState("idle"), EJECT_MS));
  }, [state, clearTimers]);

  const prev = useCallback(() => selectTape((current - 1 + count) % count), [current, count, selectTape]);
  const next = useCallback(() => selectTape((current + 1) % count), [current, count, selectTape]);

  if (!count) return null;
  const p = featured[current];
  const color = p.accent ?? "#B18BF7";
  const busy = state === "inserting" || state === "tracking" || state === "ejecting";
  const tapeIn = state === "playing" || state === "tracking";
  const timecode = `0:${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
  const tagline = p.description.length > 90 ? `${p.description.slice(0, 90)}…` : p.description;
  const stateLabel =
    state === "idle" ? "NO TAPE" :
    state === "inserting" ? "LOADING" :
    state === "tracking" ? "TRACKING" :
    state === "ejecting" ? "EJECT" : "PLAY";

  return (
    <div className={className}>
      <CRTMonitor
        className="w-full"
        label={state === "playing" ? `NOW PLAYING · ${p.title}` : "RSP ARCHIVE PLAYER"}
        osd={
          state === "playing" ? (
            <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between font-tape text-[11px] md:text-[13px] font-bold text-white pointer-events-none">
              <div className="flex justify-between">
                <span className="timecode bg-black/55 px-1" style={{ color }}>▶ PLAY</span>
                <span className="timecode bg-black/55 px-1">SP {timecode}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="bg-black/55 px-1">{p.archiveId}</span>
                <span className="bg-black/55 px-1 text-[#F5BA60]">{p.category.split("·")[0].trim()}</span>
              </div>
            </div>
          ) : undefined
        }
      >
        <div className="absolute inset-0 z-[1]">
          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div key="idle" className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6 bg-[#050408]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <p className="font-tape text-[13px] md:text-[15px] font-bold tracking-[0.25em] text-[#F1E5D0] animate-glow-pulse">NO TAPE INSERTED</p>
                <p className="font-tape text-[10px] tracking-[0.2em] text-[#B8ADB4]/70">SELECT A VHS CASSETTE</p>
              </motion.div>
            )}

            {(state === "inserting" || state === "ejecting") && (
              <motion.div key="loading" className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#050408]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <p className="font-tape text-[13px] font-bold tracking-[0.25em] text-[#F1E5D0] animate-glow-pulse">
                  {state === "ejecting" ? "EJECT" : "LOADING TAPE…"}
                </p>
              </motion.div>
            )}

            {state === "tracking" && (
              <motion.div key="tracking" className="absolute inset-0 flex items-center justify-center bg-[#050408]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                <p className="font-tape text-[13px] font-bold tracking-[0.3em] text-white/80">TRACKING…</p>
                <TrackingNoise />
              </motion.div>
            )}

            {state === "playing" && (
              <motion.div key={`play-${p.slug}`} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                style={{ background: `radial-gradient(ellipse 70% 60% at 50% 42%, ${color}26, #050408 78%)` }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="font-tape text-[10px] font-bold tracking-[0.3em] text-[#F5BA60]">NOW PLAYING</motion.p>
                <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}
                  className="font-display text-[clamp(1.6rem,4vw,2.6rem)] leading-none mt-2 uppercase"
                  style={{ color, textShadow: "2px 0 rgba(255,60,60,0.3), -2px 0 rgba(60,200,255,0.3)" }}>
                  {p.title}
                </motion.h3>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
                  className="font-tape text-[10px] md:text-[11px] text-[#D9CDBE]/85 leading-snug max-w-[85%] mt-3">
                  {tagline}
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
                  className="font-tape text-[10px] tracking-[0.22em] text-[#B8ADB4]/70 mt-3">
                  {p.archiveId} · {p.year}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CRTMonitor>

      {/* VHS deck + slot */}
      <div className="mt-3 rounded-lg border border-white/12 px-4 py-3" style={{ background: "linear-gradient(to bottom, #1b1721, #120f17)" }}>
        <div className="flex items-center gap-3">
          <div ref={slotRef} className="relative flex-1 h-[16px] rounded-[3px] bg-black border border-white/15 overflow-hidden">
            <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 h-[4px] rounded-full bg-[#07060a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]" aria-hidden="true" />
            {state === "ejecting" && (
              <motion.div className="absolute inset-x-[20%] top-[3px] h-[10px] rounded-[2px]" style={{ background: "#26222b", border: "1px solid rgba(255,255,255,0.2)" }}
                initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.3 }} aria-hidden="true" />
            )}
            {tapeIn && <div className="absolute inset-x-[20%] top-[5px] h-[7px] rounded-[2px] bg-[#1d1a23] border-t border-white/15" aria-hidden="true" />}
          </div>
          <span className={`w-2 h-2 rounded-full shrink-0 ${state === "playing" ? "bg-[#6FC6BE] shadow-[0_0_6px_#6FC6BE]" : busy ? "bg-[#F5BA60] animate-pulse" : "bg-white/20"}`} aria-hidden="true" />
        </div>
        <div className="mt-2 flex items-center justify-between font-tape text-[9px] tracking-[0.25em] text-[#B8ADB4]/60">
          <span>VHS DECK</span>
          <span style={busy || state === "playing" ? { color: "#F5BA60" } : undefined} aria-live="polite">{stateLabel}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between gap-2 min-h-[44px]">
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={busy} aria-label="Previous tape"
            className="w-9 h-9 flex items-center justify-center rounded-md border border-white/20 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#B8ADB4] transition-colors disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5BA60]">
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} disabled={busy} aria-label="Next tape"
            className="w-9 h-9 flex items-center justify-center rounded-md border border-white/20 hover:border-[#F5BA60] hover:text-[#F5BA60] text-[#B8ADB4] transition-colors disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5BA60]">
            <ChevronRight size={16} />
          </button>
          {state === "playing" && (
            <button onClick={eject}
              className="h-9 px-3 flex items-center rounded-md border border-white/20 hover:border-[#FF718E] hover:text-[#FF718E] text-[#B8ADB4] font-tape text-[10px] font-bold tracking-[0.15em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5BA60]">
              ⏏ EJECT
            </button>
          )}
        </div>

        {state === "playing" && (
          <Link href={`/projects/${p.slug}`}
            className="inline-flex items-center gap-2 bg-[#F1E5D0] hover:bg-[#F5BA60] text-[#151319] font-tape text-[11px] font-bold tracking-[0.1em] px-4 py-2.5 rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5BA60]">
            <span className="w-0 h-0 border-l-[5px] border-l-current border-y-[3px] border-y-transparent" aria-hidden="true" />
            VIEW PROJECT
          </Link>
        )}
      </div>

      {/* Tape shelf */}
      <p className="mt-4 font-tape text-[9px] font-bold tracking-[0.25em] text-[#B8ADB4]/60">SELECT A TAPE</p>
      <div className="mt-2 flex gap-2.5 overflow-x-auto pb-2 -mx-1 px-1 snap-x" role="group" aria-label="Project VHS tapes">
        {featured.map((fp, i) => (
          <MiniCassette
            key={fp.id}
            project={fp}
            active={i === current && tapeIn}
            hidden={i === current && state === "inserting"}
            onClick={() => selectTape(i)}
            refCb={(el) => { shelfRefs.current[i] = el; }}
          />
        ))}
      </div>

      {/* Flying cassette overlay */}
      <AnimatePresence>
        {fly && (
          <motion.div
            key="fly"
            className="fixed z-[90] pointer-events-none rounded-[6px] border border-[#F5BA60]/60"
            style={{ left: fly.x, top: fly.y, width: fly.w, height: fly.h, background: "linear-gradient(to bottom, #26222b, #14111a)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{
              x: [0, 0, fly.dx, fly.dx],
              y: [0, -16, fly.dy - 8, fly.dy + 14],
              scale: [1, 1.05, fly.s, fly.s * 0.92],
              opacity: [1, 1, 1, 0],
            }}
            transition={{ duration: FLY_MS / 1000, times: [0, 0.18, 0.78, 1], ease: "easeInOut" }}
            aria-hidden="true"
          >
            <CassetteFace project={p} color={color} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
