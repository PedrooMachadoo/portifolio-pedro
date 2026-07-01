"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { MoveVertical } from "lucide-react";
import { Frame } from "@/components/sections/CaseMock";
import { useLang } from "@/components/providers/LanguageProvider";

/**
 * ScrubVideo — plays a recording of the REAL project, scrubbed by the wheel
 * ONLY while the pointer is inside the box.
 *
 * Interaction model:
 * - Pointer enters the box → Lenis (smooth page scroll) is paused, so the page
 *   holds still and the wheel drives `video.currentTime` instead. This keeps
 *   the whole scene fluid and intuitive: you point, then scroll to explore.
 * - At the start/end of the clip the wheel is released back to page scroll, so
 *   the user is never trapped.
 * - Slow, deliberate scrub speed (tunable via SPEED).
 * - Lazy: video downloads only when the case nears the viewport.
 * - Touch / reduced-motion: no hijack; a static frame is shown.
 */

const SPEED = 0.0026; // seconds of video per pixel of wheel delta (slow)
const STEP_CAP = 0.4; // max seconds moved per wheel event (avoids fling jumps)

export function ScrubVideo({ src, poster, url, theme }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const reduce = useReducedMotion();
  const { t } = useLang();

  const [ready, setReady] = useState(false);
  const [hint, setHint] = useState(true);

  // Lazy-load a bit before the case enters the viewport.
  const near = useInView(wrapRef, { margin: "120% 0px 120% 0px" });
  const [activated, setActivated] = useState(false);
  useEffect(() => {
    if (near) setActivated(true);
  }, [near]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const finePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (reduce || !finePointer) return; // no hijack on touch / reduced-motion

    let capturing = false; // Lenis paused + actively scrubbing

    const pauseScroll = () => window.__lenis?.stop?.();
    const resumeScroll = () => window.__lenis?.start?.();
    const release = () => {
      if (capturing) {
        capturing = false;
        resumeScroll();
      }
    };

    const onWheel = (e) => {
      const v = videoRef.current;
      if (!v || !v.duration) return;
      const dir = Math.sign(e.deltaY);
      const atStart = v.currentTime <= 0.02 && dir < 0;
      const atEnd = v.currentTime >= v.duration - 0.05 && dir > 0;

      // Release to page scroll at the clip's edges (no trapping).
      if (atStart || atEnd) {
        release();
        return;
      }

      // Capture only once the user actively scrolls while inside the box —
      // never halts the page just because the cursor crossed the box.
      e.preventDefault();
      if (!capturing) {
        capturing = true;
        pauseScroll();
      }
      setHint(false);

      let step = e.deltaY * SPEED;
      step = Math.max(-STEP_CAP, Math.min(STEP_CAP, step));
      let next = v.currentTime + step;
      next = Math.max(0, Math.min(v.duration, next));
      v.currentTime = next;
    };

    el.addEventListener("pointerleave", release);
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("pointerleave", release);
      el.removeEventListener("wheel", onWheel);
      resumeScroll();
    };
  }, [reduce]);

  return (
    <div ref={wrapRef} className="group/scrub relative" data-lenis-prevent>
      <Frame url={url} theme={theme} flush aspect="aspect-[16/9]">
        {poster && (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {activated && (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onLoadedData={(e) => {
              setReady(true);
              try {
                e.currentTarget.currentTime = reduce
                  ? e.currentTarget.duration * 0.15
                  : 0.001;
              } catch {
                /* noop */
              }
            }}
            className="absolute inset-0 h-full w-full cursor-ns-resize object-cover"
            style={{
              opacity: ready ? 1 : 0,
              transition: "opacity 0.5s var(--ease-out)",
            }}
          />
        )}

        {/* Scroll-to-explore hint */}
        {ready && hint && !reduce && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm transition-opacity duration-300 group-hover/scrub:opacity-0"
          >
            <MoveVertical size={13} strokeWidth={1.8} />
            {t.works.scrubHint}
          </div>
        )}
      </Frame>
    </div>
  );
}
