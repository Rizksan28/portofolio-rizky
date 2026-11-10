"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang, type Lang } from "@/lib/i18n";
import ThemeToggle from "@/components/ui/ThemeToggle";

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("flex items-center rounded-md overflow-hidden", className)}
      style={{ border: "1px solid var(--border-subtle)" }}
    >
      {(["id", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "px-2.5 py-1.5 font-tape text-[10px] font-bold tracking-[0.12em] transition-colors",
            lang === l
              ? "bg-[var(--warm-paper)] text-[var(--bg-primary)]"
              : "text-[var(--muted-text)] hover:text-[var(--warm-paper)]",
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "SKILLS", href: "/skills" },
  { label: "ACHIEVEMENTS", href: "/achievements" },
];

export default function ArchiveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openFor, setOpenFor] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openFor === pathname;
  const setOpen = (v: boolean) => setOpenFor(v ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenFor(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] vhs-stripe" />

      <header className="fixed top-1 left-0 right-0 z-50 px-4 pt-2">
        <nav
          aria-label="Primary"
          style={{
            background: scrolled ? "var(--navbar-scrolled)" : "var(--navbar-idle)",
            border: "1px solid var(--border-subtle)",
          }}
          className={cn(
            "max-w-6xl mx-auto rounded-xl px-4 py-2.5 flex items-center justify-between transition-all duration-300",
            scrolled
              ? "backdrop-blur-md shadow-lg shadow-black/40"
              : "backdrop-blur-sm",
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-md flex items-center justify-center group-hover:bg-[#FF718E] transition-colors duration-200" style={{ background: "var(--warm-paper)" }}>
              <span className="text-[10px] font-black tracking-tighter leading-none" style={{ color: "var(--bg-primary)" }}>
                RSP
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-tape text-[10px] font-bold tracking-wider leading-none" style={{ color: "var(--warm-paper)", opacity: 0.8 }}>
                ARCHIVE
              </span>
              <span className="font-tape text-[10px] tracking-[0.2em] leading-none mt-0.5" style={{ color: "var(--muted-text)", opacity: 0.75 }}>
                EST. 2023
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => {
              const isActive =
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-3 py-2 rounded-md font-tape text-[11px] font-semibold tracking-[0.1em] transition-all duration-200",
                      isActive
                        ? "text-[#FF718E] bg-[#FF718E]/[0.12]"
                        : "text-[var(--text-secondary)] hover:text-[var(--warm-paper)] hover:bg-white/[0.06]",
                    )}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF718E]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF718E] animate-glow-pulse shadow-[0_0_6px_rgba(255,113,142,0.4)]" />
              <span className="font-tape text-[10px] font-bold text-[#FF718E] tracking-wider">
                REC
              </span>
            </div>
            <ThemeToggle />
            <LangToggle />
            <Link
              href="/contact"
              className="font-tape text-[11px] font-bold tracking-[0.1em] px-4 py-2 rounded-md transition-all duration-200 hover:bg-[#FF718E] hover:text-white"
              style={{ background: "var(--warm-paper)", color: "var(--bg-primary)" }}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-3 -mr-1 rounded-md hover:bg-white/[0.05] transition"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <X size={18} style={{ color: "var(--warm-paper)" }} />
            ) : (
              <Menu size={18} style={{ color: "var(--warm-paper)" }} />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="absolute top-[56px] left-4 right-4 mt-2 rounded-xl shadow-2xl shadow-black/60 p-2 lg:hidden" style={{ background: "var(--mobile-menu-bg)", border: "1px solid var(--border-subtle)" }}>
            {links.map((l) => {
              const isActive =
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center px-4 py-3.5 font-tape text-[12px] font-semibold tracking-[0.1em] rounded-lg transition",
                    isActive
                      ? "text-[#FF718E] bg-[#FF718E]/[0.08]"
                      : "text-[var(--warm-paper)] hover:bg-white/[0.04]",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="h-px my-1" style={{ background: "var(--border-subtle)" }} />
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="font-tape text-[11px] font-semibold tracking-[0.12em]" style={{ color: "var(--muted-text)" }}>LANGUAGE</span>
              <LangToggle />
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-2.5 font-tape text-[11px] font-bold tracking-[0.1em] rounded-lg hover:bg-[#FF718E] hover:text-white transition"
              style={{ background: "var(--warm-paper)", color: "var(--bg-primary)" }}
            >
              RECORD A MESSAGE
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
