"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";
import { CONTACT } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function Contact() {
  const { t } = useLang();

  const socials = [
    { label: "Behance", href: CONTACT.behance },
    { label: "LinkedIn", href: CONTACT.linkedin },
    { label: t.contact.whatsapp, href: CONTACT.whatsapp },
  ];

  return (
    <section id="contact" className="section scroll-mt-20">
      <div className="container-x relative">
        <Reveal className="mb-8 flex items-center gap-4">
          <span className="mono-label">{t.contact.index}</span>
          <span className="hairline max-w-[80px]" />
          <span className="mono-label">{t.contact.label}</span>
        </Reveal>

        {/* One row / two columns on desktop, two rows on mobile — the mascot sits beside the phrase. */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
          <div>
            <MaskReveal
              as="h2"
              lines={[t.contact.title]}
              className="font-display font-semibold leading-[1.0] tracking-[-0.03em]"
              lineClassName="text-[clamp(2.75rem,8vw,6rem)]"
            />

            <Reveal delay={0.1}>
              <p className="mt-6 text-[clamp(1.05rem,1.6vw,1.35rem)] text-ink-2">
                {t.contact.support}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Mail size={17} strokeWidth={1.7} />
                  {t.contact.emailBtn}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-underline font-mono text-sm text-ink-2 hover:text-ink"
                >
                  {CONTACT.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
                <span className="mono-label">{t.contact.elsewhere}</span>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[15px] text-ink transition-colors hover:text-accent"
                  >
                    {s.label}
                    <ArrowUpRight
                      size={15}
                      className="text-ink-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Closing mascot — theme-aware, vibrates on hover, greets with floating bubbles */}
          <ContactMascot t={t} />
        </div>
      </div>
    </section>
  );
}

// Scattered anchor points for the popping bubbles — brand palette only (ink + accent).
const BUBBLE_SLOTS = [
  { top: "6%", left: "-6%", variant: "ink", rotate: -6 },
  { top: "-2%", left: "62%", variant: "accent", rotate: 5 },
  { top: "34%", left: "82%", variant: "ink", rotate: 6 },
  { top: "20%", left: "-14%", variant: "accent", rotate: -7 },
  { top: "52%", left: "70%", variant: "ink", rotate: 4 },
];

const BUBBLE_VARIANT = {
  ink: "bg-ink text-paper",
  accent: "bg-accent text-white",
};

function ContactMascot({ t }) {
  const reduceMotion = useReducedMotion();
  const [hover, setHover] = useState(false);
  const [tap, setTap] = useState(false);
  const [tick, setTick] = useState(0);
  const bubbles = t.contact.mascotBubbles || [];

  // Active on mouse hover (desktop) or tap (mobile — no hover on touch).
  const active = hover || tap;

  // While active, rotate which phrase sits in each slot so the texts keep changing.
  useEffect(() => {
    if (!active || bubbles.length === 0) return;
    const id = setInterval(() => setTick((n) => n + 1), 1400);
    return () => clearInterval(id);
  }, [active, bubbles.length]);

  return (
    <div className="flex justify-center md:justify-end">
      <div
        className="relative w-fit cursor-pointer"
        onPointerEnter={(e) => e.pointerType !== "touch" && setHover(true)}
        onPointerLeave={() => setHover(false)}
        onPointerDown={(e) => e.pointerType === "touch" && setTap((v) => !v)}
      >
        {/* Floating bubbles — pop around the character; phrases swap while active. */}
        {bubbles.length > 0 &&
          BUBBLE_SLOTS.map((slot, idx) => (
            <Bubble
              key={idx}
              label={bubbles[(idx + tick) % bubbles.length]}
              slot={slot}
              index={idx}
              active={active}
            />
          ))}

        {/* Gentle, always-on idle float so the character feels alive without being busy. */}
        <motion.div
          animate={
            reduceMotion ? {} : { y: [0, -7, 0], rotate: [-1, 0, 1, 0, -1] }
          }
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/pedro-light.png"
            alt={t.contact.mascotAlt}
            draggable="false"
            className={`block h-72 w-auto select-none transition-transform duration-300 ease-out md:h-96 dark:hidden ${active ? "scale-[1.03]" : ""}`}
          />
          <img
            src="/pedro-dark.png"
            alt={t.contact.mascotAlt}
            draggable="false"
            className={`hidden h-72 w-auto select-none transition-transform duration-300 ease-out md:h-96 dark:block ${active ? "scale-[1.03]" : ""}`}
          />
        </motion.div>
      </div>
    </div>
  );
}

function Bubble({ label, slot, index, active }) {
  return (
    <div
      className="pointer-events-none absolute z-10"
      style={{ top: slot.top, left: slot.left }}
    >
      <AnimatePresence mode="popLayout">
        {active && label && (
          <motion.span
            key={label}
            className={`block whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-semibold shadow-lg ${BUBBLE_VARIANT[slot.variant]}`}
            style={{ rotate: slot.rotate }}
            initial={{ opacity: 0, scale: 0.5, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
