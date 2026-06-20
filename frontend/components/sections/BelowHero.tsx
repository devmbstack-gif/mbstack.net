import React from "react";
import Image from "next/image";
import { LIVE_COUNTRIES } from "@/constants";
import ConsultancyBanner from "./ConsultancyBanner";
import StatsSection from "./StatsSection";

export default function BelowHero() {
  return (
    <section className="bg-white">
      <div className="page-container max-w-5xl pt-4 pb-10 sm:pt-6 sm:pb-14 md:pb-16">
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand mb-2">
            Global presence
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900">
            We live at!
          </h2>
          <div
            className="mt-3 w-12 h-0.5 bg-brand mx-auto rounded-full"
            aria-hidden
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {LIVE_COUNTRIES.map((country) => {
            return (
              <div
                key={country.name}
                className="group flex flex-col items-center justify-center p-2.5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:border-brand/40 hover:bg-white hover:shadow-lg hover:shadow-brand/10 transition-all duration-300 min-w-0"
                title={country.name}
              >
                <div className="relative w-10 h-7 sm:w-12 sm:h-9 shrink-0 overflow-hidden rounded-sm shadow-sm ring-1 ring-stone-200/80 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={`https://flagcdn.com/w80/${country.flagCode}.png`}
                    alt={`${country.name} flag`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <span className="mt-1.5 sm:mt-3 text-[11px] sm:text-sm md:text-base font-semibold text-stone-700 group-hover:text-stone-900 text-center leading-tight line-clamp-2">
                  <span className="sm:hidden">{country.shortName}</span>
                  <span className="hidden sm:inline">{country.name}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <StatsSection />

      <ConsultancyBanner />
    </section>
  );
}
