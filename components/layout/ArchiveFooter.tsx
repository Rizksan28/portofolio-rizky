"use client";
import { ArrowUp, Download, Mail, Globe, RotateCcw } from "lucide-react";
import Link from "next/link";
import { CV_URL } from "@/lib/data";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export default function ArchiveFooter({ compact = false }: { compact?: boolean }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <div className="vhs-stripe" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {!compact && (
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-center mb-14">
            <div>
              <p className="font-tape text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "var(--muted-text)" }}>
                &mdash; Record a message
              </p>
              <h2 className="text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.98]" style={{ color: "var(--warm-paper)" }}>
                LET&apos;S MAKE<br />SOMETHING WORTH<br />
                <span className="text-[#FF718E]">REPLAYING.</span>
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:rizkysandipratama28@gmail.com"
                  className="flex items-center gap-2 hover:bg-[#FF718E] hover:text-white font-tape text-[12px] font-bold tracking-wider px-5 py-3 rounded-md transition-colors"
                  style={{ background: "var(--warm-paper)", color: "var(--bg-primary)" }}
                >
                  <Mail size={14} /> SEND EMAIL
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 hover:border-[#F5BA60] font-tape text-[12px] font-bold tracking-wider px-5 py-3 rounded-md transition-colors"
                  style={{ border: "1px solid var(--border-subtle)", color: "var(--warm-paper)" }}
                >
                  RECORD A MESSAGE
                </Link>
                <a
                  href="https://linkedin.com/in/rizksan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:border-[#F5BA60] font-tape text-[12px] font-bold tracking-wider px-5 py-3 rounded-md transition-colors"
                  style={{ border: "1px solid var(--border-subtle)", color: "var(--warm-paper)" }}
                >
                  <Globe size={14} /> LINKEDIN
                </a>
                <a
                  href={CV_URL}
                  download
                  className="flex items-center gap-2 border border-[#F5BA60]/50 hover:border-[#F5BA60] text-[#F5BA60] font-tape text-[12px] font-bold tracking-wider px-5 py-3 rounded-md transition-colors"
                >
                  <Download size={14} /> DOWNLOAD CV
                </a>
              </div>
            </div>

            <button
              onClick={scrollTop}
              aria-label="Rewind to top of the page"
              className="group relative mx-auto md:ml-auto w-full max-w-[320px] rotate-[3deg] hover:rotate-0 transition-transform duration-300 text-left"
            >
              <div className="paper p-5 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.9)] border-2 border-[#151319]">
                <span className="masking-tape absolute -top-3 left-6 w-16 h-6 rotate-[-4deg]" aria-hidden="true" />
                <p className="font-tape text-[10px] font-bold tracking-[0.2em] text-[#151319]/70">RSP RENTAL &middot; RETURN POLICY</p>
                <p className="font-display text-[34px] leading-[0.92] mt-2 text-[#151319]">
                  BE KIND,<br /><span className="text-[#E8456B]">REWIND.</span>
                </p>
                <p className="font-tape text-[11px] mt-3 text-[#151319]/80 leading-snug">
                  Thanks for watching. Tape returns to the start when you press this sticker.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-tape text-[11px] font-bold text-[#151319] border-2 border-[#151319] px-2.5 py-1 group-hover:bg-[#151319] group-hover:text-[#F1E5D0] transition-colors">
                  <RotateCcw size={12} /> REWIND &#9664;&#9664;
                </span>
              </div>
            </button>
          </div>
        )}

        <div className="border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ borderColor: "var(--border-subtle)" }}>
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-7 h-7 rounded-[4px] flex items-center justify-center" style={{ background: "var(--warm-paper)" }}>
                <span className="text-[10px] font-black tracking-tighter" style={{ color: "var(--bg-primary)" }}>RSP</span>
              </div>
              <span className="font-tape text-[11px] font-medium tracking-wider" style={{ color: "var(--muted-text)" }}>THE ANALOG VHS ARCHIVE</span>
            </div>
            <p className="font-tape text-[11px] tracking-wide" style={{ color: "var(--muted-text)", opacity: 0.75 }}>
              &copy; 2026 RIZKY SANDI PRATAMA &middot; INFORMATION SYSTEMS &middot; TELKOM UNIVERSITY JAKARTA
            </p>
          </div>

          <div className="flex items-center gap-4">
            <nav aria-label="Footer" className="hidden md:flex flex-wrap gap-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="font-tape text-[11px] hover:text-[var(--warm-paper)] transition-colors tracking-wider uppercase" style={{ color: "var(--muted-text)" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-9 h-9 hover:bg-[#FF718E] rounded-md flex items-center justify-center transition-colors group"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)" }}
            >
              <ArrowUp size={14} className="group-hover:text-white" style={{ color: "var(--muted-text)" }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
