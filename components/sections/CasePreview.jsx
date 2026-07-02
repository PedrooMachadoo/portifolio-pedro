"use client";

import { CaseMock } from "@/components/sections/CaseMock";
import { ScrubVideo } from "@/components/sections/ScrubVideo";

/**
 * CasePreview — shows the real project scrubbed by scroll when `item.video`
 * is provided; otherwise falls back to the stylized on-brand mock.
 * Drop recordings in /public/cases and set `video`/`poster` in lib/content.js.
 */
export function CasePreview({ item }) {
  const url = item.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  if (item.video) {
    return (
      <ScrubVideo
        src={item.video}
        poster={item.poster}
        url={url}
        theme={item.theme}
      />
    );
  }

  return <CaseMock id={item.id} theme={item.theme} url={url} />;
}
