"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" aria-hidden />;

  const isDark = theme !== "light";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200 ${className}`}
      style={{
        border: "1px solid var(--border-subtle)",
        color: "var(--muted-text)",
      }}
    >
      <span
        className="font-tape text-[13px] leading-none group-hover:scale-110 transition-transform duration-200"
        style={{ color: isDark ? "var(--archive-amber)" : "var(--analog-violet)" }}
        aria-hidden
      >
        {isDark ? "☀" : "◑"}
      </span>
    </button>
  );
}
