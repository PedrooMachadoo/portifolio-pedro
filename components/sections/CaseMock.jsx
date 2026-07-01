"use client";

import { Smartphone, QrCode } from "lucide-react";

/**
 * CaseMock — a stylized, on-brand product snapshot for each case.
 * (No real screenshots were provided; these abstract mocks stay
 * faithful to each product's identity and link out to the live site.)
 */

export function Frame({ children, url, theme, flush = false, aspect = "aspect-[4/3]" }) {
  return (
    <div
      className="overflow-hidden rounded-xl border shadow-[var(--shadow-md)]"
      style={{ borderColor: "color-mix(in srgb, var(--case-ink) 12%, transparent)" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 border-b px-4 py-2.5"
        style={{
          borderColor: "color-mix(in srgb, var(--case-ink) 10%, transparent)",
          background: "color-mix(in srgb, var(--case-ink) 4%, transparent)",
        }}
      >
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "color-mix(in srgb, var(--case-ink) 18%, transparent)" }}
            />
          ))}
        </span>
        <span
          className="ml-2 truncate rounded-md px-2.5 py-1 font-mono text-[11px]"
          style={{
            background: "color-mix(in srgb, var(--case-ink) 6%, transparent)",
            color: "color-mix(in srgb, var(--case-ink) 55%, transparent)",
          }}
        >
          {url}
        </span>
      </div>
      <div
        className={`relative ${aspect} w-full ${flush ? "" : "p-5"}`}
        style={{ background: theme.mockBg }}
      >
        {children}
      </div>
    </div>
  );
}

function BboomMock({ theme, url }) {
  return (
    <Frame url={url} theme={theme}>
      <div className="flex h-full flex-col text-[color:var(--case-ink)]">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold tracking-tight">Bboom</span>
          <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-medium"
            style={{ background: "color-mix(in srgb, var(--case-accent) 20%, transparent)", color: theme.accent }}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: theme.accent }} />
            AO VIVO
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { l: "Lotação", v: "82%" },
            { l: "Check-in", v: "1.240" },
            { l: "Comandas", v: "R$ 47k" },
          ].map((s) => (
            <div key={s.l} className="rounded-lg p-2.5" style={{ background: "color-mix(in srgb, var(--case-ink) 8%, transparent)" }}>
              <div className="text-[9px] opacity-60">{s.l}</div>
              <div className="mt-1 font-mono text-sm font-semibold" style={{ color: theme.accent }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-1 items-end gap-1.5">
          {[40, 65, 50, 80, 60, 92, 70, 85, 55, 74].map((h, i) => (
            <div key={i} className="flex-1 rounded-t"
              style={{ height: `${h}%`, background: i % 2 ? theme.accent2 : theme.accent, opacity: 0.85 }} />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function ArtinMock({ theme, url }) {
  return (
    <Frame url={url} theme={theme}>
      <div className="flex h-full flex-col text-[color:var(--case-ink)]">
        <span className="font-display text-lg font-semibold tracking-tight">Artin<span style={{ color: theme.accent }}> Laser</span></span>
        <p className="mt-1 text-[11px] opacity-60">Sua ideia ganha forma</p>
        <div className="mt-3 grid flex-1 grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-md"
              style={{
                background: i % 3 === 0
                  ? `color-mix(in srgb, ${theme.accent} 35%, transparent)`
                  : "color-mix(in srgb, var(--case-ink) 8%, transparent)",
                border: "1px solid color-mix(in srgb, var(--case-ink) 10%, transparent)",
              }} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-full px-3 py-1.5 text-[10px] font-medium text-white" style={{ background: theme.accent }}>
            Peça um orçamento
          </span>
          <span className="font-mono text-[10px] opacity-50">MDF · Acrílico</span>
        </div>
      </div>
    </Frame>
  );
}

function SilviaMock({ theme, url }) {
  return (
    <Frame url={url} theme={theme}>
      <div className="flex h-full flex-col text-[color:var(--case-ink)]">
        <span className="font-display text-base font-semibold tracking-tight">Silvia Miranda</span>
        <p className="mt-1 text-[11px] opacity-60">Viva bem na própria pele</p>
        <div className="mt-3 flex flex-1 gap-2">
          <div className="w-2/5 rounded-lg"
            style={{ background: `color-mix(in srgb, ${theme.accent} 30%, transparent)` }} />
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-2.5 w-3/4 rounded-full" style={{ background: "color-mix(in srgb, var(--case-ink) 14%, transparent)" }} />
            <div className="h-2.5 w-full rounded-full" style={{ background: "color-mix(in srgb, var(--case-ink) 9%, transparent)" }} />
            <div className="h-2.5 w-2/3 rounded-full" style={{ background: "color-mix(in srgb, var(--case-ink) 9%, transparent)" }} />
            <div className="mt-auto flex gap-1.5">
              <span className="rounded-full px-2.5 py-1 text-[9px] font-medium" style={{ background: "color-mix(in srgb, var(--case-accent) 22%, transparent)", color: theme.accent }}>Facial</span>
              <span className="rounded-full px-2.5 py-1 text-[9px] font-medium" style={{ background: "color-mix(in srgb, var(--case-ink) 8%, transparent)" }}>Corporal</span>
            </div>
          </div>
        </div>
        <span className="mt-3 rounded-full px-3 py-1.5 text-center text-[10px] font-medium text-white" style={{ background: theme.accent }}>
          Agendar avaliação
        </span>
      </div>
    </Frame>
  );
}

function IlhaMock({ theme, url }) {
  return (
    <Frame url={url} theme={theme}>
      <div className="flex h-full flex-col text-[color:var(--case-ink)]">
        <div className="flex items-center justify-between">
          <span className="font-display text-base font-bold tracking-tight">
            A Ilha está Afundando
          </span>
          <span
            className="rounded-full px-2 py-1 text-[9px] font-semibold"
            style={{ background: "color-mix(in srgb, var(--case-accent) 22%, transparent)", color: theme.accent }}
          >
            SALA · 4 JOGADORES
          </span>
        </div>

        {/* "TV" scene: sinking island in the ocean */}
        <div
          className="relative mt-3 flex-1 overflow-hidden rounded-lg"
          style={{ background: "linear-gradient(180deg,#0a2c46 0%,#0a3a52 100%)", border: "1px solid color-mix(in srgb, var(--case-ink) 10%, transparent)" }}
        >
          {/* volcano glow */}
          <div
            className="absolute left-1/2 top-4 h-16 w-16 -translate-x-1/2 rounded-full blur-xl"
            style={{ background: theme.accent, opacity: 0.5 }}
          />
          {/* island */}
          <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <path d="M60 70 L100 34 L140 70 Z" fill={theme.accent} opacity="0.9" />
            <path d="M40 78 L100 46 L160 78 Z" fill="#1c5f4a" />
            <circle cx="100" cy="40" r="4" fill="#fff4e6" />
            {/* water lines */}
            <path d="M0 84 Q50 78 100 84 T200 84" fill="none" stroke={theme.accent2} strokeWidth="1.5" opacity="0.7" />
            <path d="M0 96 Q50 90 100 96 T200 96" fill="none" stroke={theme.accent2} strokeWidth="1.5" opacity="0.45" />
            <rect x="0" y="82" width="200" height="40" fill={theme.accent2} opacity="0.12" />
          </svg>
        </div>

        {/* phone controller hint */}
        <div className="mt-3 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[10px] font-medium"
            style={{ background: "color-mix(in srgb, var(--case-ink) 8%, transparent)" }}
          >
            <Smartphone size={12} strokeWidth={1.8} />
            Controle no celular
          </span>
          <span
            className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold text-white"
            style={{ background: theme.accent }}
          >
            <QrCode size={12} strokeWidth={1.8} />
            Entrar
          </span>
        </div>
      </div>
    </Frame>
  );
}

export function CaseMock({ id, theme, url }) {
  if (id === "bboom") return <BboomMock theme={theme} url={url} />;
  if (id === "artin") return <ArtinMock theme={theme} url={url} />;
  if (id === "silvia") return <SilviaMock theme={theme} url={url} />;
  if (id === "ilha") return <IlhaMock theme={theme} url={url} />;
  return null;
}
