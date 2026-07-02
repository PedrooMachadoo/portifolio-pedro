"use client";

import Image from "next/image";
import { useLang } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section scroll-mt-20">
      <div className="container-x">
        <Reveal className="mb-6 flex items-center gap-4">
          <span className="mono-label">{t.about.index}</span>
          <span className="hairline max-w-[80px]" />
          <span className="mono-label">{t.about.label}</span>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-24">
          {/* Photo */}
          <Reveal y={30} className="order-1">
            <div className="relative">
              {/* Blue glow behind photo, echoing its own rim light */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[32px] opacity-60 blur-[60px]"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 40%, var(--glow) 0%, transparent 70%)",
                }}
              />
              <div className="overflow-hidden rounded-[24px] border border-line bg-surface">
                <Image
                  src="/pedro-foto.jpg"
                  alt={t.about.photoAlt}
                  width={1122}
                  height={1402}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div className="order-2 flex flex-col justify-center">
            <MaskReveal
              as="h2"
              lines={[t.about.title]}
              className="font-display font-semibold leading-[1.05] tracking-[-0.02em]"
              lineClassName="text-[clamp(2rem,5vw,3.5rem)]"
            />

            <div className="mt-8 max-w-[54ch] space-y-5 text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed text-ink-2">
              <Reveal delay={0.05} as="p">
                {t.about.p1}
              </Reveal>
              <Reveal delay={0.12} as="p">
                <span className="text-ink">{t.about.p2}</span>
              </Reveal>
              <Reveal delay={0.18} as="p">
                {t.about.p3}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
