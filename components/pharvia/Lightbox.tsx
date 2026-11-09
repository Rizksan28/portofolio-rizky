"use client";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxItem {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface Props {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}

export default function Lightbox({ items, index, onClose, onIndex }: Props) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const count = items.length;

  const step = useCallback(
    (d: number) => {
      if (index === null) return;
      onIndex((index + d + count) % count);
    },
    [index, count, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>("[data-lightbox] button");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, step]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      data-lightbox
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${item.caption}`}
      className="fixed inset-0 z-[100] bg-[#07060a]/95 flex flex-col"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50 && count > 1) step(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 font-tape text-[12px] text-[#F1E5D0]" onClick={(e) => e.stopPropagation()}>
        <span className="tracking-[0.18em] text-[#2BD4B4]">
          ▶ {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close image viewer"
          className="w-11 h-11 flex items-center justify-center border border-white/30 hover:border-[#F5BA60] hover:text-[#F5BA60] transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center gap-2 sm:gap-6 px-2 sm:px-6">
        {count > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous image"
            className="shrink-0 w-11 h-11 flex items-center justify-center border border-white/30 text-[#F1E5D0] hover:border-[#F5BA60] hover:text-[#F5BA60] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full min-w-0 object-contain shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]"
        />
        {count > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next image"
            className="shrink-0 w-11 h-11 flex items-center justify-center border border-white/30 text-[#F1E5D0] hover:border-[#F5BA60] hover:text-[#F5BA60] transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <p className="px-6 py-4 text-center font-tape text-[13px] text-[#F1E5D0]" onClick={(e) => e.stopPropagation()}>
        {item.caption}
      </p>
    </div>
  );
}
