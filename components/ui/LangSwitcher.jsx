"use client";

import { useLang } from "@/components/providers/LanguageProvider";
import { LOCALES, LOCALE_LABELS } from "@/lib/content";

export function LangSwitcher({ className = "" }) {
  const { locale, setLocale } = useLang();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`flex items-center gap-0.5 rounded-full border border-line p-0.5 ${className}`}
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide transition-colors duration-200 ${
              active
                ? "bg-ink text-paper"
                : "text-ink-3 hover:text-ink"
            }`}
          >
            {LOCALE_LABELS[l]}
          </button>
        );
      })}
    </div>
  );
}
