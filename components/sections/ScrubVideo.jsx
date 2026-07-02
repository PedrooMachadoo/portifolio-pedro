"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Frame } from "@/components/sections/CaseMock";

/**
 * CasePlayer — plays a recording of the REAL project as a muted loop that
 * starts on its own when the case scrolls into view and pauses when it leaves.
 *
 * Why not scroll-scrubbing: scrubbing hijacked the wheel (trapping navigation)
 * and simply did not work on touch. A view-triggered loop is smooth on every
 * device, never blocks scrolling and still shows the product in motion.
 *
 * - Lazy: the video only downloads once the case nears the viewport.
 * - Battery-friendly: pauses while off-screen.
 * - Reduced-motion: no autoplay, a static frame (poster) is shown instead.
 */
export function ScrubVideo({ src, poster, url, theme }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const reduce = useReducedMotion();

  const [ready, setReady] = useState(false);

  // Lazy-load a bit before the case enters the viewport.
  const near = useInView(wrapRef, { margin: "120% 0px 120% 0px" });
  const [activated, setActivated] = useState(false);
  useEffect(() => {
    if (near) setActivated(true);
  }, [near]);

  // Play only while meaningfully on screen; pause otherwise.
  const onScreen = useInView(wrapRef, { amount: 0.4 });
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    if (onScreen) {
      const p = v.play();
      if (p?.catch) p.catch(() => {});
    } else {
      v.pause();
    }
  }, [onScreen, reduce, activated]);

  return (
    <div ref={wrapRef} className="relative">
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
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onLoadedData={() => setReady(true)}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: ready ? 1 : 0,
              transition: "opacity 0.5s var(--ease-out)",
            }}
          />
        )}
      </Frame>
    </div>
  );
}
