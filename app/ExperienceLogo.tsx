"use client";

import Image from "next/image";
import { useState } from "react";

export function ExperienceLogo({
  company,
  logo,
}: {
  company: string;
  logo?: string;
}) {
  const [failed, setFailed] = useState(false);
  const initial = company.trim().charAt(0) || "?";

  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#d8e2d8] bg-white text-base font-semibold text-[#13795b] shadow-[0_10px_24px_rgba(23,25,20,0.05)] sm:h-14 sm:w-14">
      <span
        className="flex h-full w-full items-center justify-center bg-[#eef5ef]"
        aria-hidden={Boolean(logo) && !failed}
      >
        {initial}
      </span>
      {logo && !failed ? (
        <Image
          alt={`${company} logo`}
          className="absolute inset-0 h-full w-full bg-white object-contain p-2.5"
          fill
          onError={() => setFailed(true)}
          sizes="56px"
          src={logo}
        />
      ) : null}
    </div>
  );
}
