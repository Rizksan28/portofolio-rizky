"use client";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/lib/i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  );
}
