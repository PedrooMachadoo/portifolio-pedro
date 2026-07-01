"use client";

import { useLang } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

export function Manifesto() {
  const { t } = useLang();

  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="mb-10 flex items-center gap-4">
          <span className="mono-label">{t.manifesto.index}</span>
          <span className="hairline max-w-[80px]" />
          <span className="mono-label">{t.manifesto.label}</span>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="max-w-[24ch] font-display text-[clamp(1.75rem,5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink md:max-w-[20ch]">
            {t.manifesto.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
