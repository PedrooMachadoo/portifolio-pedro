"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";
import { CONTACT } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function Contact() {
  const { t } = useLang();

  const socials = [
    { label: "Behance", href: CONTACT.behance },
    { label: "LinkedIn", href: CONTACT.linkedin },
    { label: t.contact.whatsapp, href: CONTACT.whatsapp },
  ];

  return (
    <section id="contact" className="section scroll-mt-20">
      <div className="container-x">
        <Reveal className="mb-8 flex items-center gap-4">
          <span className="mono-label">{t.contact.index}</span>
          <span className="hairline max-w-[80px]" />
          <span className="mono-label">{t.contact.label}</span>
        </Reveal>

        <MaskReveal
          as="h2"
          lines={[t.contact.title]}
          className="font-display font-semibold leading-[1.0] tracking-[-0.03em]"
          lineClassName="text-[clamp(2.75rem,10vw,7rem)]"
        />

        <Reveal delay={0.1}>
          <p className="mt-6 text-[clamp(1.05rem,1.6vw,1.35rem)] text-ink-2">
            {t.contact.support}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Mail size={17} strokeWidth={1.7} />
              {t.contact.emailBtn}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-underline font-mono text-sm text-ink-2 hover:text-ink"
            >
              {CONTACT.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
            <span className="mono-label">{t.contact.elsewhere}</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-[15px] text-ink transition-colors hover:text-accent"
              >
                {s.label}
                <ArrowUpRight
                  size={15}
                  className="text-ink-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
