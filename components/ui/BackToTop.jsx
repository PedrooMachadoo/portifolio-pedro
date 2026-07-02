"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";

/**
 * BackToTop — floating control that appears once the user has scrolled past
 * the hero and smoothly returns them to the top, driving Lenis when present
 * so the ride matches the rest of the page's smooth scroll.
 */
export function BackToTop() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    if (window.__lenis?.scrollTo) {
      window.__lenis.scrollTo(0, { immediate: reduce });
    } else {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
  };

  const label = t.footer.backToTop;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label={label}
          title={label}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-[90] grid h-12 w-12 place-items-center rounded-full border border-line bg-paper/80 text-ink-2 shadow-lg shadow-black/5 backdrop-blur-xl transition-colors duration-200 hover:border-ink-3 hover:text-ink md:bottom-8 md:right-8"
        >
          <ArrowUp
            size={18}
            strokeWidth={1.7}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
