"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * MaskReveal — editorial "text curtain".
 * Each line sits in an overflow-hidden container; text rises from below.
 *
 * We observe the (non-clipped) heading container with useInView, then drive
 * each inner span from hidden→shown. Observing the container avoids the trap
 * where an initially-translated child is clipped to 0% visibility by its
 * overflow:hidden parent and therefore never triggers whileInView.
 *
 * Pass `lines` as an array of strings, or a single string in `text`.
 */
export function MaskReveal({
  lines,
  text,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.1,
  as = "h2",
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3, margin: "0px 0px -8% 0px" });
  const items = lines || (text ? [text] : []);

  if (reduce) {
    return (
      <Tag className={className}>
        {items.map((l, i) => (
          <span key={i} className={lineClassName} style={{ display: "block" }}>
            {l}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {items.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className={lineClassName}
            style={{ display: "block", willChange: "transform" }}
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
