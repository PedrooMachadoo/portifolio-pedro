"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";
import { CASES } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { CasePreview } from "@/components/sections/CasePreview";

function CaseCard({ item, index }) {
  const { t, locale } = useLang();
  const c = item.i18n[locale];
  const theme = item.theme;
  const reduce = useReducedMotion();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  const num = String(index + 1).padStart(2, "0");

  return (
    <section
      ref={ref}
      id={item.id}
      className="case-scope rounded-[28px] px-6 py-14 md:px-14 md:py-20"
      style={{
        "--case-bg": theme.bg,
        "--case-surface": theme.surface,
        "--case-ink": theme.ink,
        "--case-ink2": theme.ink2,
        "--case-accent": theme.accent,
        color: theme.ink,
        boxShadow: `0 40px 120px -60px ${theme.glow}`,
      }}
    >
      {/* Case header */}
      <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-mono text-sm font-medium" style={{ color: theme.accent }}>
          {num}
        </span>
        <span
          className="font-mono text-[11px] uppercase tracking-[0.14em]"
          style={{ color: theme.ink2 }}
        >
          {c.kind}
        </span>
        <span className="ml-auto font-mono text-[11px]" style={{ color: theme.ink2 }}>
          {item.year}
        </span>
      </div>

      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Text column */}
        <div className="order-2 md:order-1">
          <MaskReveal
            as="h3"
            lines={[item.name]}
            className="font-display font-semibold leading-[1.02] tracking-[-0.02em]"
            lineClassName="text-[clamp(2.25rem,6vw,4rem)]"
          />
          <p
            className="mt-3 font-display text-[clamp(1.1rem,2.2vw,1.5rem)] font-normal"
            style={{ color: theme.ink2 }}
          >
            {c.title}
          </p>

          <div className="mt-8 space-y-5">
            <DetailRow label={t.works.problemLabel} value={c.problem} theme={theme} />
            <DetailRow label={t.works.roleLabel} value={c.role} theme={theme} />
            <DetailRow label={t.works.resultLabel} value={c.result} theme={theme} accent />
          </div>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-2">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  border: `1px solid color-mix(in srgb, ${theme.ink} 15%, transparent)`,
                  color: theme.ink2,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: theme.accent, color: "#fff" }}
          >
            {t.works.view}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Preview column with subtle parallax */}
        <div className="order-1 md:order-2">
          <Reveal y={30}>
            <motion.div style={{ y }}>
              <CasePreview item={item} progress={scrollYProgress} />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DetailRow({ label, value, theme, accent }) {
  return (
    <div>
      <div
        className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.12em]"
        style={{ color: accent ? theme.accent : theme.ink2, opacity: accent ? 1 : 0.7 }}
      >
        {label}
      </div>
      <p className="text-[0.975rem] leading-relaxed" style={{ color: theme.ink }}>
        {value}
      </p>
    </div>
  );
}

export function Works() {
  const { t } = useLang();

  return (
    <section id="works" className="section scroll-mt-20">
      <div className="container-x">
        {/* Intro */}
        <Reveal className="mb-6 flex items-center gap-4">
          <span className="mono-label">{t.works.index}</span>
          <span className="hairline max-w-[80px]" />
          <span className="mono-label">{t.works.label}</span>
        </Reveal>

        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <MaskReveal
            as="h2"
            lines={[t.works.title]}
            className="font-display font-semibold leading-[1.02] tracking-[-0.02em]"
            lineClassName="text-[clamp(2.25rem,6vw,4.25rem)]"
          />
          <Reveal delay={0.1}>
            <p className="max-w-[44ch] text-[0.975rem] leading-relaxed text-ink-2">
              {t.works.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-8 md:gap-12">
          {CASES.map((item, i) => (
            <CaseCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
