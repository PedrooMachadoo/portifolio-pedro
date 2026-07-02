"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight, Check } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";

/**
 * CaseModal — the "learn more" lightbox. Leads with a looping preview of the
 * real project, then the enriched narrative (challenge / role / result),
 * real feature highlights and a link to the live site.
 *
 * Accessibility: rendered in a portal, focus is moved in and trapped, Escape
 * and backdrop click close it, and page scroll is locked while open.
 */
export function CaseModal({ item, onClose }) {
  const { t, locale } = useLang();
  const reduce = useReducedMotion();
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  const c = item.i18n[locale];
  const theme = item.theme;
  const url = item.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  // Lock scroll (page + Lenis) and restore focus on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    window.__lenis?.stop?.();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.__lenis?.start?.();
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  const overlay = (
    <motion.div
      className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain"
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md" />

      {/* Centering wrapper — min-h-full lets short content center while tall
          content stays fully reachable by scrolling the overlay. */}
      <div className="relative flex min-h-full items-start justify-center p-4 md:p-8">
      <motion.div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="case-scope relative my-auto w-full max-w-3xl overflow-hidden rounded-[24px] shadow-2xl"
        style={{
          "--case-bg": theme.bg,
          "--case-surface": theme.surface,
          "--case-ink": theme.ink,
          "--case-ink2": theme.ink2,
          "--case-accent": theme.accent,
          background: theme.bg,
          color: theme.ink,
        }}
      >
        {/* Close */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.works.close}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full backdrop-blur-md transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{
            background: `color-mix(in srgb, ${theme.ink} 12%, transparent)`,
            color: theme.ink,
          }}
        >
          <X size={18} />
        </button>

        {/* Looping preview — the focal point */}
        <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[16/9]">
          {item.video ? (
            <video
              src={item.video}
              poster={item.poster}
              autoPlay={!reduce}
              muted
              loop
              playsInline
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          ) : (
            item.poster && (
              <img
                src={item.poster}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            )
          )}
        </div>

        {/* Body */}
        <div className="max-h-[none] px-6 py-8 md:px-10 md:py-10">
          {/* Header */}
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.14em]"
              style={{ color: theme.ink2 }}
            >
              {c.kind}
            </span>
            <span className="font-mono text-[11px]" style={{ color: theme.ink2 }}>
              · {item.year}
            </span>
          </div>

          {item.logo ? (
            <>
              <h2 className="sr-only">{item.name}</h2>
              <img
                src={item.logo}
                alt={item.name}
                className={`h-auto w-auto max-w-[min(80%,260px)] object-contain object-left ${item.logoClass || "max-h-[64px]"}`}
              />
            </>
          ) : (
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {item.name}
            </h2>
          )}

          <p
            className="mt-3 font-display text-[clamp(1.15rem,2.4vw,1.6rem)]"
            style={{ color: theme.ink2 }}
          >
            {c.title}
          </p>

          {/* Narrative */}
          <div className="mt-8 space-y-6">
            <Block label={t.works.problemLabel} value={c.problem} theme={theme} />
            <Block label={t.works.roleLabel} value={c.role} theme={theme} />
            <Block label={t.works.resultLabel} value={c.result} theme={theme} accent />
          </div>

          {/* Highlights */}
          {c.highlights?.length > 0 && (
            <div className="mt-8">
              <div
                className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em]"
                style={{ color: theme.ink2, opacity: 0.7 }}
              >
                {t.works.highlightsLabel}
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[0.95rem]">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color: theme.accent }}
                    />
                    <span style={{ color: theme.ink }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
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
            style={{
              background: theme.cta || theme.accent,
              color: theme.ctaInk || theme.onAccent || "#fff",
            }}
          >
            {t.works.view} · {url}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </motion.div>
      </div>
    </motion.div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(overlay, document.body);
}

function Block({ label, value, theme, accent }) {
  return (
    <div>
      <div
        className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.12em]"
        style={{ color: accent ? theme.accent : theme.ink2, opacity: accent ? 1 : 0.7 }}
      >
        {label}
      </div>
      <p className="text-[1rem] leading-relaxed" style={{ color: theme.ink }}>
        {value}
      </p>
    </div>
  );
}
