"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight, ArrowRight, Check, PlayCircle, Smartphone } from "lucide-react";
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
  // Long-form case study (optional). pt is the source; other locales fall back.
  const study = item.study?.[locale] || item.study?.pt || null;

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

        {/* Looping cover — the focal point. A case can supply a dedicated
            `coverVideo` (e.g. a system recording) that overrides the card's
            preview; otherwise it falls back to the shared `video`. */}
        <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[16/9]">
          {item.coverVideo || item.video ? (
            <video
              src={item.coverVideo || item.video}
              poster={item.coverPoster || item.poster}
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
                src={item.coverPoster || item.poster}
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

          {study ? (
            <CaseStudy study={study} theme={theme} t={t} />
          ) : (
            <>
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
            </>
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

/* ---- Long-form case study ------------------------------------------------ */

function CaseStudy({ study, theme, t }) {
  const jump = (id) => {
    document
      .getElementById(`study-${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-8">
      {/* Opening hook — frames the story before the reader dives in */}
      {study.intro && (
        <p
          className="mb-9 max-w-[64ch] border-l-2 pl-4 text-[1.05rem] leading-relaxed"
          style={{
            color: theme.ink,
            borderColor: theme.accent,
          }}
        >
          {study.intro}
        </p>
      )}

      {/* Section index — jump links so a long scroll never feels bottomless */}
      <nav aria-label={t.works.studyIndex}>
        <div
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em]"
          style={{ color: theme.ink2, opacity: 0.7 }}
        >
          {t.works.studyIndex}
        </div>
        <div className="flex flex-wrap gap-2">
          {study.sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => jump(s.id)}
              className="rounded-full px-3 py-1 text-xs font-medium transition-transform duration-150 hover:scale-[1.04]"
              style={{
                border: `1px solid color-mix(in srgb, ${theme.ink} 16%, transparent)`,
                color: theme.ink2,
              }}
            >
              <span style={{ color: theme.accent }}>{s.eyebrow}</span> {s.title}
            </button>
          ))}
        </div>
      </nav>

      <div className="mt-2">
        {study.sections.map((s) => (
          <StudySection key={s.id} section={s} theme={theme} t={t} />
        ))}
      </div>
    </div>
  );
}

function StudySection({ section, theme, t }) {
  return (
    <section
      id={`study-${section.id}`}
      className="scroll-mt-4 border-t py-8 first:border-t-0 first:pt-6"
      style={{ borderColor: `color-mix(in srgb, ${theme.ink} 12%, transparent)` }}
    >
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-sm font-medium" style={{ color: theme.accent }}>
          {section.eyebrow}
        </span>
        <h3
          className="font-display text-xl font-semibold tracking-tight md:text-2xl"
          style={{ color: theme.ink }}
        >
          {section.title}
        </h3>
      </div>
      {section.lead && (
        <p
          className="mb-6 max-w-[62ch] text-[0.975rem] leading-relaxed"
          style={{ color: theme.ink2 }}
        >
          {section.lead}
        </p>
      )}
      <StudyBody section={section} theme={theme} t={t} />
    </section>
  );
}

function StudyBody({ section, theme, t }) {
  if (section.todo) return <StudyPlaceholder text={section.text} theme={theme} t={t} />;

  if (section.type === "cards") {
    return (
      <div>
        <div className="grid gap-4 sm:grid-cols-2">
          {section.items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl p-5"
              style={{
                background: theme.surface,
                border: `1px solid color-mix(in srgb, ${theme.ink} 8%, transparent)`,
              }}
            >
              <div
                className="mb-1.5 font-display text-[1.05rem] font-medium"
                style={{ color: theme.ink }}
              >
                {it.title}
              </div>
              <p className="text-[0.925rem] leading-relaxed" style={{ color: theme.ink2 }}>
                {it.text}
              </p>
            </div>
          ))}
        </div>

        {section.callout && (
          <div
            className="mt-5 rounded-2xl p-6 text-center md:p-8"
            style={{
              background: `color-mix(in srgb, ${theme.accent} 8%, ${theme.surface})`,
              border: `1px solid color-mix(in srgb, ${theme.accent} 20%, transparent)`,
            }}
          >
            <p
              className="mx-auto max-w-[54ch] text-[1.05rem] leading-relaxed"
              style={{ color: theme.ink }}
            >
              {section.callout.pre}
              <strong className="font-semibold" style={{ color: theme.accent }}>
                {section.callout.highlight}
              </strong>
              {section.callout.post}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (section.type === "interface") {
    return (
      <div>
        {section.systemNote && (
          <div
            className="mb-6 flex items-start gap-3 rounded-xl p-4"
            style={{
              background: theme.surface,
              border: `1px solid color-mix(in srgb, ${theme.ink} 8%, transparent)`,
            }}
          >
            <PlayCircle size={18} className="mt-0.5 shrink-0" style={{ color: theme.accent }} />
            <p className="text-[0.9rem] leading-relaxed" style={{ color: theme.ink2 }}>
              {section.systemNote}
            </p>
          </div>
        )}

        {section.app && (
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <Smartphone size={15} style={{ color: theme.accent }} />
              <span
                className="font-mono text-[11px] uppercase tracking-[0.12em]"
                style={{ color: theme.ink2 }}
              >
                {section.app.label}
              </span>
              {!section.app.shots && (
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                  style={{
                    background: `color-mix(in srgb, ${theme.accent} 18%, transparent)`,
                    color: theme.accent,
                  }}
                >
                  {t.works.studyTodo}
                </span>
              )}
            </div>

            {section.app.shots ? (
              <div
                className={
                  section.app.wide ? "space-y-4" : "grid grid-cols-3 gap-3"
                }
              >
                {section.app.shots.map((shot) => (
                  <figure key={shot.src}>
                    <div
                      className="overflow-hidden rounded-2xl"
                      style={{
                        border: `1px solid color-mix(in srgb, ${theme.ink} 12%, transparent)`,
                      }}
                    >
                      <img
                        src={shot.src}
                        alt={shot.caption || ""}
                        loading="lazy"
                        className={
                          section.app.wide
                            ? "block h-auto w-full"
                            : "h-full w-full object-cover object-top"
                        }
                      />
                    </div>
                    {shot.caption && (
                      <figcaption
                        className="mt-2 text-[0.8rem]"
                        style={{ color: theme.ink2 }}
                      >
                        {shot.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: section.app.slots || 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="grid aspect-[9/19] place-items-center rounded-2xl border border-dashed"
                    style={{
                      borderColor: `color-mix(in srgb, ${theme.ink} 22%, transparent)`,
                      background: `color-mix(in srgb, ${theme.ink} 4%, transparent)`,
                    }}
                  >
                    <Smartphone
                      size={22}
                      style={{ color: `color-mix(in srgb, ${theme.ink} 30%, transparent)` }}
                    />
                  </div>
                ))}
              </div>
            )}

            {section.app.note && (
              <p className="mt-4 text-[0.85rem] leading-relaxed" style={{ color: theme.ink2 }}>
                {section.app.note}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  if (section.type === "learnings") {
    return (
      <div className="space-y-4">
        {section.items.map((it, i) => (
          <div
            key={it.title}
            className="rounded-2xl p-5"
            style={{
              background: theme.surface,
              border: `1px solid color-mix(in srgb, ${theme.ink} 8%, transparent)`,
            }}
          >
            <div className="flex items-start gap-4">
              <span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-xs font-medium"
                style={{
                  background: `color-mix(in srgb, ${theme.accent} 16%, transparent)`,
                  color: theme.accent,
                }}
              >
                {i + 1}
              </span>
              <div>
                <div
                  className="mb-1 font-display text-[1.05rem] font-semibold"
                  style={{ color: theme.ink }}
                >
                  {it.title}
                </div>
                <p
                  className="text-[0.925rem] leading-relaxed"
                  style={{ color: theme.ink2 }}
                >
                  {it.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "steps") {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {section.items.map((it, i) => (
          <div key={it.label}>
            <div
              className="mb-2.5 grid h-9 w-9 place-items-center rounded-full font-mono text-xs font-medium"
              style={{
                background: `color-mix(in srgb, ${theme.accent} 16%, transparent)`,
                color: theme.accent,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div
              className="mb-1 font-display text-[1rem] font-medium"
              style={{ color: theme.ink }}
            >
              {it.label}
            </div>
            <p className="text-[0.9rem] leading-relaxed" style={{ color: theme.ink2 }}>
              {it.text}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "insights") {
    return (
      <div>
        {section.insightsTitle && (
          <h4
            className="mb-5 font-display text-lg font-semibold tracking-tight"
            style={{ color: theme.ink }}
          >
            {section.insightsTitle}
          </h4>
        )}
        <ul className="space-y-4">
          {section.items.map((it) => (
            <li key={it} className="flex items-start gap-3.5">
              <span
                className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg"
                style={{ background: `color-mix(in srgb, ${theme.accent} 16%, transparent)` }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: theme.accent }}
                />
              </span>
              <span
                className="text-[0.975rem] leading-relaxed"
                style={{ color: theme.ink }}
              >
                {it}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.type === "uxwriting") {
    return (
      <div>
        {/* Writing principles */}
        <div
          className="rounded-2xl p-6 md:p-7"
          style={{
            background: `color-mix(in srgb, ${theme.accent} 7%, ${theme.surface})`,
            border: `1px solid color-mix(in srgb, ${theme.accent} 22%, transparent)`,
          }}
        >
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{
              border: `1px solid color-mix(in srgb, ${theme.accent} 45%, transparent)`,
              color: theme.accent,
            }}
          >
            {section.principlesLabel}
          </span>
          <p
            className="mt-4 font-display text-lg font-semibold md:text-xl"
            style={{ color: theme.ink }}
          >
            {section.tone.label}:{" "}
            <span style={{ color: theme.accent }}>{section.tone.value}</span>
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {section.principles.map((p) => (
              <div key={p.title}>
                <div
                  className="font-display text-xl font-bold tracking-tight"
                  style={{ color: theme.accent }}
                >
                  {p.title}
                </div>
                <p
                  className="mt-1 text-[0.9rem] leading-relaxed"
                  style={{ color: theme.ink2 }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Before / after examples */}
        <div className="mt-6 space-y-4">
          {section.examples.map((ex, i) => (
            <div
              key={ex.context}
              className="rounded-2xl p-5"
              style={{
                background: theme.surface,
                border: `1px solid color-mix(in srgb, ${theme.ink} 8%, transparent)`,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-7 w-7 place-items-center rounded-lg font-mono text-xs font-medium"
                  style={{
                    background: `color-mix(in srgb, ${theme.accent} 16%, transparent)`,
                    color: theme.accent,
                  }}
                >
                  {i + 1}
                </span>
                <span
                  className="font-display text-[1rem] font-medium"
                  style={{ color: theme.ink }}
                >
                  {ex.context}
                </span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <div
                    className="mb-1 font-mono text-[10px] uppercase tracking-wider"
                    style={{ color: theme.ink2, opacity: 0.7 }}
                  >
                    {section.beforeLabel}
                  </div>
                  <p
                    className="text-[0.95rem] italic line-through"
                    style={{ color: theme.ink2, opacity: 0.7 }}
                  >
                    {ex.before}
                  </p>
                </div>
                <div>
                  <div
                    className="mb-1 font-mono text-[10px] uppercase tracking-wider"
                    style={{ color: theme.accent }}
                  >
                    {section.afterLabel}
                  </div>
                  <p className="text-[0.95rem]" style={{ color: theme.ink }}>
                    {ex.after}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[0.85rem] leading-relaxed" style={{ color: theme.ink2 }}>
                {ex.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "flows") {
    return (
      <div className="space-y-6">
        {section.flows.map((f) => (
          <div key={f.label}>
            <div
              className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em]"
              style={{ color: theme.ink2, opacity: 0.8 }}
            >
              {f.label}
            </div>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
              {f.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span
                    className="rounded-full px-3.5 py-1.5 text-xs font-medium"
                    style={{
                      background: theme.surface,
                      border: `1px solid color-mix(in srgb, ${theme.ink} 12%, transparent)`,
                      color: theme.ink,
                    }}
                  >
                    {step}
                  </span>
                  {i < f.steps.length - 1 && (
                    <ArrowRight size={14} className="shrink-0" style={{ color: theme.accent }} />
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    );
  }

  // Generic prose fallback.
  return section.text ? (
    <p className="max-w-[62ch] text-[0.975rem] leading-relaxed" style={{ color: theme.ink2 }}>
      {section.text}
    </p>
  ) : null;
}

function StudyPlaceholder({ text, theme, t }) {
  return (
    <div
      className="rounded-2xl border border-dashed p-5"
      style={{
        borderColor: `color-mix(in srgb, ${theme.ink} 26%, transparent)`,
        background: `color-mix(in srgb, ${theme.ink} 4%, transparent)`,
      }}
    >
      <span
        className="mb-2.5 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
        style={{
          background: `color-mix(in srgb, ${theme.accent} 18%, transparent)`,
          color: theme.accent,
        }}
      >
        {t.works.studyTodo}
      </span>
      <p className="text-[0.925rem] leading-relaxed" style={{ color: theme.ink2 }}>
        {text}
      </p>
    </div>
  );
}
