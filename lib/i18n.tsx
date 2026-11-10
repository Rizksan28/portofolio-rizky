"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "id" | "en";
export interface L10nString { id: string; en: string }

const STORE_KEY = "rsp-lang";

// A leaf is a translation pair only when it is exactly { id, en } with both
// strings — data objects elsewhere use an `id` field but never pair it with `en`.
function isL10n(v: unknown): v is L10nString {
  if (!v || typeof v !== "object" || Array.isArray(v)) return false;
  const o = v as Record<string, unknown>;
  return typeof o.id === "string" && typeof o.en === "string" && Object.keys(o).length === 2;
}

export type Localized<T> = T extends L10nString
  ? string
  : T extends (infer U)[]
    ? Localized<U>[]
    : T extends object
      ? { [K in keyof T]: Localized<T[K]> }
      : T;

export function localize<T>(value: T, lang: Lang): Localized<T> {
  if (isL10n(value)) return value[lang] as Localized<T>;
  if (Array.isArray(value)) return value.map((v) => localize(v, lang)) as Localized<T>;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = localize(v, lang);
    return out as Localized<T>;
  }
  return value as Localized<T>;
}

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: "id", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // SSR renders Indonesian (html lang="id"); the stored or detected language
  // is applied after mount to keep hydration consistent.
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem(STORE_KEY); } catch {}
    if (stored === "id" || stored === "en") {
      setLangState(stored);
      return;
    }
    if (!navigator.language.toLowerCase().startsWith("id")) setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORE_KEY, l); } catch {}
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick one translation pair: `const t = useT(); t({ id: "…", en: "…" })` */
export function useT() {
  const { lang } = useLang();
  return useCallback((v: L10nString) => v[lang], [lang]);
}

/** Resolve a whole data object whose prose leaves are { id, en } pairs. */
export function useL10n<T>(data: T): Localized<T> {
  const { lang } = useLang();
  return useMemo(() => localize(data, lang), [data, lang]);
}
