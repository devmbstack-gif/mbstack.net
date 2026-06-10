import React from "react";
import Image from "next/image";
import { LIVE_COUNTRIES } from "@/constants";
import ConsultancyBanner from "./ConsultancyBanner";
import StatsSection from "./StatsSection";

export default function BelowHero() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-12 sm:pt-6 sm:pb-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#31B574] mb-2">
            Global presence
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            We live at!
          </h2>
          <div
            className="mt-3 w-12 h-0.5 bg-[#31B574] mx-auto rounded-full"
            aria-hidden
          />
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-6">
          {LIVE_COUNTRIES.map((country) => {
            return (
              <div
                key={country.name}
                className="group flex flex-col items-center justify-center p-3 sm:p-8 rounded-xl sm:rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:border-[#31B574]/40 hover:bg-white hover:shadow-lg hover:shadow-[#31B574]/10 transition-all duration-300 min-w-0"
                title={country.name}
              >
                <div className="relative w-8 h-6 sm:w-12 sm:h-9 shrink-0 overflow-hidden rounded-sm shadow-sm ring-1 ring-stone-200/80 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={`https://flagcdn.com/w80/${country.flagCode}.png`}
                    alt={`${country.name} flag`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <span className="mt-2 sm:mt-3 text-[10px] sm:text-base font-semibold text-stone-700 group-hover:text-stone-900 text-center leading-tight line-clamp-2">
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
