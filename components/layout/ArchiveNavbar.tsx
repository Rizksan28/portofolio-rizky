"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
          className={cn(
            "max-w-6xl mx-auto rounded-xl px-4 py-2.5 flex items-center justify-between transition-all duration-300",
            scrolled
              ? "bg-[#151319]/95 backdrop-blur-md shadow-lg shadow-black/40 border border-white/[0.06]"
              : "bg-[#151319]/70 backdrop-blur-sm border border-white/[0.03]",
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#F1E5D0] rounded-md flex items-center justify-center group-hover:bg-[#FF718E] transition-colors duration-200">
              <span className="text-[#151319] text-[10px] font-black tracking-tighter leading-none">
                RSP
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-tape text-[10px] font-bold text-[#F1E5D0]/80 tracking-wider leading-none">
                ARCHIVE
              </span>
              <span className="font-tape text-[10px] text-[#B8ADB4]/75 tracking-[0.2em] leading-none mt-0.5">
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
                        : "text-[#D6CDD2] hover:text-[#F1E5D0] hover:bg-white/[0.06]",
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
            <Link
              href="/contact"
              className="font-tape text-[11px] font-bold tracking-[0.1em] text-[#151319] bg-[#F1E5D0] hover:bg-[#FF718E] hover:text-white px-4 py-2 rounded-md transition-all duration-200"
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
              <X size={18} className="text-[#F1E5D0]" />
            ) : (
              <Menu size={18} className="text-[#F1E5D0]" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="absolute top-[56px] left-4 right-4 mt-2 bg-[#1a1720] rounded-xl shadow-2xl shadow-black/60 border border-white/[0.06] p-2 lg:hidden">
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
                      : "text-[#F1E5D0] hover:bg-white/[0.04]",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="h-px bg-white/[0.06] my-1" />
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-2.5 font-tape text-[11px] font-bold tracking-[0.1em] text-[#151319] bg-[#F1E5D0] rounded-lg hover:bg-[#FF718E] hover:text-white transition"
            >
              RECORD A MESSAGE
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
