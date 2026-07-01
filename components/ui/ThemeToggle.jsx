"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme || theme) === "dark";
  // Before mount, theme is unknown — keep label stable to match SSR output.
  const label = mounted ? (isDark ? t.theme.light : t.theme.dark) : t.theme.dark;

  return (
    <button
      type="button"
      suppressHydrationWarning
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-2 transition-colors duration-200 hover:text-ink hover:border-ink-3"
    >
      {mounted ? (
        isDark ? (
          <Sun size={17} strokeWidth={1.6} />
        ) : (
          <Moon size={17} strokeWidth={1.6} />
        )
      ) : (
        <span className="h-[17px] w-[17px]" />
      )}
    </button>
  );
}
