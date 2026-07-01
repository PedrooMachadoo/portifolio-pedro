"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden pt-[72px]"
    >
      {/* Ambient glow — echoes the blue rim-light of Pedro's photo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[38%] h-[70vw] w-[70vw] max-h-[820px] max-w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.55] blur-[90px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--glow) 0%, transparent 62%)",
          }}
        />
        <div
          className="absolute right-[-10%] top-[10%] h-[36vw] w-[36vw] max-h-[420px] max-w-[420px] rounded-full opacity-30 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="container-x w-full">
        <div className="max-w-[980px]">
          {/* Kicker */}
          <motion.p {...fade(0.1)} className="mono-label mb-6 md:mb-8">
            {t.hero.kicker}
          </motion.p>

          {/* Name — text-curtain reveal */}
          <MaskReveal
            as="h1"
            text={t.hero.name}
            className="font-display font-semibold leading-[0.98] tracking-[-0.03em]"
            lineClassName="text-[clamp(3.25rem,11vw,8rem)]"
            delay={0.15}
          />

          {/* Role */}
          <motion.p
            {...fade(0.5)}
            className="mt-3 font-display text-[clamp(1.25rem,3vw,2rem)] font-normal text-ink-2"
          >
            {t.hero.role}
          </motion.p>

          {/* Positioning */}
          <motion.p
            {...fade(0.65)}
            className="mt-8 max-w-[62ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-ink-2"
          >
            {t.hero.positioning}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fade(0.8)}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#works"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {t.hero.ctaPrimary}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-3"
            >
              {t.hero.ctaSecondary}
              <ArrowUpRight
                size={16}
                className="text-ink-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* Availability */}
          <motion.div
            {...fade(0.95)}
            className="mt-10 inline-flex items-center gap-2.5 text-sm text-ink-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.available}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line p-1.5">
            <motion.span
              className="h-1.5 w-1 rounded-full bg-ink-3"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
