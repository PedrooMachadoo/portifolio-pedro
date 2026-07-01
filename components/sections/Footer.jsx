"use client";

import { ArrowUp } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";
import { CONTACT } from "@/lib/content";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-x py-12 md:py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
              Pedro Antônio
            </a>
            <p className="mt-2 text-sm text-ink-3">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={`mailto:${CONTACT.email}`} className="link-underline text-sm text-ink-2 hover:text-ink">
              Email
            </a>
            <a href={CONTACT.behance} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-ink-2 hover:text-ink">
              Behance
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-ink-2 hover:text-ink">
              LinkedIn
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
            >
              {t.footer.backToTop}
              <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-3 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} Pedro Antônio. {t.footer.rights}.
          </span>
          <span>{t.footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
