"use client";
import { ArrowUp, Mail, Globe } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/projects#pengalaman" },
  { label: "Skills", href: "/projects#keahlian" },
  { label: "Achievements", href: "/projects#pencapaian" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0a1628] text-white relative overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      {/* CTA block */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-4">— Let&apos;s Connect</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-[#2563EB]">MEANINGFUL.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:rizkysandipratama28@gmail.com"
              className="flex items-center gap-2 bg-[#2563EB] hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group text-sm"
            >
              <Mail size={15} />
              Kirim Email
            </a>
            <a
              href="https://linkedin.com/in/rizksan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm"
            >
              <Globe size={15} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link href="/" className="font-extrabold text-lg tracking-tight text-white hover:text-[#B5C8FF] transition-colors">RSP</Link>
              <span className="w-px h-4 bg-white/20" />
              <span className="text-sm font-medium text-white/60">Rizky Sandi Pratama</span>
            </div>
            <p className="text-xs text-white/30">
              © 2026 Rizky Sandi Pratama · Information Systems · Telkom University Jakarta
            </p>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex flex-wrap gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-white/40 hover:text-white transition-colors font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-9 h-9 bg-white/5 hover:bg-[#2563EB] border border-white/10 rounded-xl flex items-center justify-center transition-all"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
