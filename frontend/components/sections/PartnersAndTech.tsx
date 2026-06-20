"use client";

import React from "react";
import Image from "next/image";
import { PARTNERS, TECHNOLOGIES_HEADING, TECHNOLOGIES } from "@/constants";

const PARTNER_GAP = "gap-8 sm:gap-12";
const TECH_GAP = "gap-6 sm:gap-8";

export default function PartnersAndTech() {
  const partnersRow = [...PARTNERS, ...PARTNERS];
  const techRow = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="bg-slate-50/90 section-padding overflow-hidden">
      <div className="page-container max-w-6xl">
        {/* Partners slider */}
        <div className="relative w-full">
          <div className="overflow-hidden w-full" aria-hidden>
            <div
              className={`flex items-center ${PARTNER_GAP} w-max will-change-transform`}
              style={{ animation: "logo-scroll 35s linear infinite" }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
            >
              {partnersRow.map(({ name, logo, href }, i) => (
                <a
                  key={`${name}-${i}`}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-shrink-0 items-center justify-center w-24 h-24 sm:w-28 sm:h-28 text-stone-600 hover:text-[#31B574] transition-colors rounded-lg border border-slate-200/60 bg-white/80 overflow-hidden"
                >
                  {logo ? (
                    <Image
                      src={logo}
                      alt={name}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain p-2 opacity-80 hover:opacity-100"
                    />
                  ) : (
                    <span className="text-base sm:text-lg font-semibold text-stone-500 hover:text-stone-700 px-2 text-center">
                      {name}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies heading */}
        <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-stone-700 mt-10 sm:mt-14 mb-8 sm:mb-10">
          {TECHNOLOGIES_HEADING}
        </h3>

        {/* Technologies slider */}
        <div className="relative w-full">
          <div className="overflow-hidden w-full" aria-hidden>
            <div
              className={`flex items-center ${TECH_GAP} w-max will-change-transform`}
              style={{ animation: "logo-scroll 45s linear infinite" }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
            >
              {techRow.map(({ name, logo, shortName }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex flex-shrink-0 items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-slate-200/80 shadow-sm text-stone-600 hover:border-[#31B574]/40 hover:shadow-md transition-all"
                  title={name}
                >
                  {logo ? (
                    <Image
                      src={logo}
                      alt={name}
                      width={48}
                      height={48}
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    />
                  ) : (
                    <span className="text-xs sm:text-sm font-bold text-stone-500">
                      {shortName}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
