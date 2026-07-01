"use client";

import { useLang } from "@/components/providers/LanguageProvider";
import { SKILLS } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

export function Skills() {
  const { t } = useLang();
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <Reveal className="mb-10 flex items-center gap-4">
          <span className="mono-label">{t.skills.index}</span>
          <span className="hairline max-w-[80px]" />
          <span className="mono-label">{t.skills.label}</span>
        </Reveal>
      </div>

      {/* Marquee — pauses on hover, static under reduced-motion */}
      <div className="marquee-mask relative select-none">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent"
        />
        <div className="marquee-track">
          {doubled.map((s, i) => (
            <span key={i} className="flex items-center">
              <span className="whitespace-nowrap px-6 font-display text-[clamp(1.5rem,4vw,3rem)] font-medium tracking-tight text-ink">
                {s}
              </span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
