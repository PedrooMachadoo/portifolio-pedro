"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider>
        <SmoothScroll>{children}</SmoothScroll>
      </LanguageProvider>
    </ThemeProvider>
  );
}
