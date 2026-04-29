"use client";

import { useState } from "react";
import { ExperienceLogo } from "./ExperienceLogo";
import { siteContent } from "../data/siteContent";

type ExperienceItem = (typeof siteContent.experience)[number];

export function FlipDeloitteCard({ items }: { items: ExperienceItem[] }) {
  const [flipped, setFlipped] = useState(false);

  if (items.length === 0) return null;

  const [primaryItem] = items;

  return (
    <div
      className="flip-card"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((f) => !f);
      }}
      aria-label="Deloitte USI experience — hover or tap to see expertise"
    >
      <div className={`flip-card-inner${flipped ? " is-flipped" : ""}`}>
        {/* ── FRONT ──────────────────────────────────────── */}
        <div className="flip-card-front rounded-xl border border-[#dce4dc] bg-white p-5 shadow-[0_18px_50px_rgba(23,25,20,0.055)] sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <ExperienceLogo
                company={primaryItem.company}
                logo={primaryItem.logo}
              />
              <div className="min-w-0">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#13795b]">
                  Consulting Client Work
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#171914]">
                  AI & Data Engineering Analyst
                </h3>
                <p className="mt-0.5 font-medium text-[#13795b]">
                  Deloitte USI
                </p>
              </div>
            </div>
            <span className="self-start rounded-md border border-[#dce4dc] bg-[#f7faf7] px-3 py-1.5 font-mono text-[11px] font-semibold text-[#6a7367] whitespace-nowrap">
              Sep 2021 – Jan 2024
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#555d52]">
            Delivered production data pipelines, cloud platform migrations, and
            analytics systems across 4 client domains — utility, energy,
            healthcare, and automotive.
          </p>

          {/* client badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                className="rounded-md border border-[#dce4dc] bg-[#f7faf7] px-2.5 py-1 text-xs font-medium text-[#444c42]"
                key={item.period}
              >
                {item.details.replace(/^Client:\s*/, "")}
              </span>
            ))}
          </div>

          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#b0bab0] select-none">
            Hover · tap to see expertise
          </p>
        </div>

        {/* ── BACK ───────────────────────────────────────── */}
        <div className="flip-card-back rounded-xl border border-[#1d4a30] bg-[#0d1f16] p-5 sm:p-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#72e3aa]">
            Expertise Across Engagements
          </p>
          <div className="mt-4 flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.period} className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-semibold text-white">
                    {item.project}
                  </span>
                  <span className="font-mono text-[10px] text-[#72e3aa]">
                    {item.details.replace(/^Client:\s*/, "")} · {item.period}
                  </span>
                </div>
                <p className="text-xs leading-5 text-[#a0b09e]">
                  {item.highlights[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* invisible spacer — keeps card tall enough for back content */}
        <div aria-hidden className="invisible p-5 sm:p-6">
          <p className="font-mono text-[11px]">Expertise Across Engagements</p>
          <div className="mt-4 flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.period} className="flex flex-col gap-1.5">
                <p className="text-sm font-semibold">{item.project}</p>
                <p className="text-xs leading-5">{item.highlights[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
