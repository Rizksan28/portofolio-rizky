"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/projects#pengalaman" },
  { label: "Skills", href: "/projects#keahlian" },
  { label: "Achievements", href: "/projects#pencapaian" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={cn(
          "w-full max-w-5xl rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-slate-200/50 border border-white/80"
            : "bg-white/60 backdrop-blur-sm shadow-sm border border-white/40"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-[#102047] text-white text-[11px] font-extrabold flex items-center justify-center group-hover:bg-[#2563EB] transition-colors tracking-tighter">
            RSP
          </span>
          <span className="hidden sm:block font-bold text-[#102047] text-sm tracking-tight">
            Rizky Sandi
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all",
                    isActive
                      ? "text-[#102047] bg-[#E9EEFA]"
                      : "text-[#64748B] hover:text-[#102047] hover:bg-[#F8F9FD]"
                  )}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2563EB]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-[#2563EB] hover:bg-[#1a4fd4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm shadow-blue-200/60"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-[#E9EEFA] transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} className="text-[#102047]" /> : <Menu size={20} className="text-[#102047]" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[72px] left-4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 md:hidden">
          {links.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition",
                  isActive
                    ? "text-[#2563EB] bg-[#E9EEFA]"
                    : "text-[#102047] hover:bg-[#F8F9FD]"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="block mt-2 text-center bg-[#102047] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#2563EB] transition"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </header>
  );
}
