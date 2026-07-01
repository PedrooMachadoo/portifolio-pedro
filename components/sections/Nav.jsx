"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LangSwitcher } from "@/components/ui/LangSwitcher";

export function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#works", label: t.nav.works },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {t.nav.skipToContent}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          {/* Monogram / name */}
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Pedro Antônio"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-display text-[13px] font-semibold text-paper transition-transform duration-300 group-hover:scale-105">
              PA
            </span>
            <span
              className={`font-display text-[15px] font-medium tracking-tight transition-all duration-500 ${
                scrolled ? "opacity-0 -translate-x-1 md:hidden" : "opacity-100"
              }`}
            >
              Pedro Antônio
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm text-ink-2 transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 md:gap-3">
            <LangSwitcher className="hidden sm:flex" />
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] md:inline-block"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-paper md:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-2 pt-20">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line py-5 font-display text-4xl font-medium tracking-tight"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex items-center justify-between"
              >
                <LangSwitcher />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
                >
                  {t.nav.cta}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
