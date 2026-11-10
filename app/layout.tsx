import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, Inter } from "next/font/google";
import Providers from "@/components/layout/Providers";
import "./globals.css";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-archivo", display: "swap" });
const plex = IBM_Plex_Mono({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-plex", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "RSP — The Analog VHS Archive | Rizky Sandi Pratama",
  description:
    "A fictional 1990s analog video archive. The portfolio of Rizky Sandi Pratama — Full-Stack Developer & UI/UX Enthusiast.",
  openGraph: {
    title: "RSP — The Analog VHS Archive",
    description:
      "Explore the tape collection of Rizky Sandi Pratama. Projects, experience, skills, and achievements — all on record.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={`h-full antialiased ${archivo.variable} ${plex.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--warm-paper)]">
        <a href="#main" className="skip-link">Skip to content</a>
        <Providers>{children}</Providers>
        <div className="crt-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
