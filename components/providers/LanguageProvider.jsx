"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { DICT, LOCALES } from "@/lib/content";

const LanguageContext = createContext(null);

function detectInitial() {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem("locale");
  if (stored && LOCALES.includes(stored)) return stored;
  const nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
  if (LOCALES.includes(nav)) return nav;
  return "pt";
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectInitial());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
      window.localStorage.setItem("locale", locale);
    }
  }, [locale, mounted]);

  const setLocale = useCallback((next) => {
    if (LOCALES.includes(next)) setLocaleState(next);
  }, []);

  const t = DICT[locale] || DICT.pt;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
