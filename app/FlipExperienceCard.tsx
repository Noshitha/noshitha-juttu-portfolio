"use client";

import { useState } from "react";
import { ExperienceLogo } from "./ExperienceLogo";
import { siteContent } from "../data/siteContent";

type ExperienceItem = (typeof siteContent.experience)[number];

export function FlipExperienceCard({
  item,
  isCurrent = false,
}: {
  item: ExperienceItem;
  isCurrent?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const tags = "tags" in item ? (item.tags as string[]) : [];
  const summary = "summary" in item ? (item.summary as string) : null;

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
      aria-label={`${item.role} at ${item.company} — hover or tap to see details`}
    >
      <div className={`flip-card-inner${flipped ? " is-flipped" : ""}`}>
        {/* ── FRONT ──────────────────────────────────────── */}
        <div className="flip-card-front rounded-xl border border-[#dce4dc] bg-white p-5 shadow-[0_18px_50px_rgba(23,25,20,0.055)] sm:p-6">

          {/* top row: logo + identity + period top-right */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 gap-4">
              <ExperienceLogo company={item.company} logo={item.logo} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-[#171914]">
                    {item.role}
                  </h3>
                  {isCurrent ? (
                    <span className="rounded-lg border border-[#b9d9c5] bg-[#eef8f1] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#13795b]">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-0.5 font-semibold text-[#13795b]">{item.company}</p>
                {item.details ? (
                  <p className="mt-0.5 text-sm leading-6 text-[#6a7367]">{item.details}</p>
                ) : null}
              </div>
            </div>

            {/* period — always top-right */}
            <span className="shrink-0 rounded-md border border-[#dce4dc] bg-[#f7faf7] px-3 py-1.5 font-mono text-[11px] font-semibold text-[#6a7367] whitespace-nowrap">
              {item.period}
            </span>
          </div>

          {/* high-signal summary sentence */}
          {summary ? (
            <p className="mt-4 text-sm leading-6 font-medium text-[#2e3a2c]">
              {summary}
            </p>
          ) : (
            <p className="mt-4 text-sm leading-7 text-[#555d52]">{item.description}</p>
          )}

          {/* initiative + skill tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {item.project ? (
              <span className="rounded-md border border-[#b9d9c5] bg-[#eef8f1] px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0f6b4f]">
                {item.project}
              </span>
            ) : null}
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#dce4dc] bg-[#f7faf7] px-2.5 py-1 font-mono text-[11px] text-[#555d52]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#b0bab0] select-none">
            Hover · tap to see what I built
          </p>
        </div>

        {/* ── BACK ───────────────────────────────────────── */}
        <div className="flip-card-back rounded-xl border border-[#1d4a30] bg-[#0d1f16] p-5 sm:p-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#72e3aa]">
            What I Built
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
            {item.project || item.company}
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {item.highlights.map((highlight) => (
              <li
                className="flex gap-3 text-sm leading-6 text-[#c7d0c6]"
                key={highlight}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#72e3aa]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

