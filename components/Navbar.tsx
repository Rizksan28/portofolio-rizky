"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#portfolio" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={cn(
          "w-full max-w-5xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg border border-white/60"
            : "bg-white/60 backdrop-blur-sm shadow-md border border-white/40"
        )}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-[#2563EB] text-white text-sm font-extrabold flex items-center justify-center group-hover:scale-105 transition-transform">
            RSP
          </span>
          <span className="hidden sm:block font-semibold text-[#102047] text-sm">
            Rizky Sandi Pratama
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-[#64748B] hover:text-[#102047] hover:bg-[#E9EEFA] transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-blue-200 hover:shadow-md"
        >
          <span>Let&apos;s Talk</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-[#E9EEFA] transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-[#102047] hover:bg-[#E9EEFA] rounded-xl transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center bg-[#2563EB] text-white text-sm font-semibold px-5 py-3 rounded-xl transition"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}
