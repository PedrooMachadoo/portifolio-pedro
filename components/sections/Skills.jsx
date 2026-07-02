"use client";

import { useLang } from "@/components/providers/LanguageProvider";
import { SKILL_GROUPS } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function Skills() {
  const { t } = useLang();

  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="mb-6 flex items-center gap-4">
          <span className="mono-label">{t.skills.index}</span>
          <span className="hairline max-w-[80px]" />
          <span className="mono-label">{t.skills.label}</span>
        </Reveal>

        <MaskReveal
          as="h2"
          lines={[t.skills.title]}
          className="mb-14 font-display font-semibold leading-[1.02] tracking-[-0.02em] md:mb-20"
          lineClassName="text-[clamp(2.25rem,6vw,4.25rem)]"
        />

        {/* Grouped by stage — scannable at a glance, tells the method story */}
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.08}>
              <div className="flex items-baseline gap-3 border-t border-line pt-5">
                <span className="mono-label text-ink-3">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium tracking-tight">
                  {t.skills.groups[group.id]}
                </h3>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-display text-[clamp(1.25rem,2.4vw,1.7rem)] font-normal text-ink"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
