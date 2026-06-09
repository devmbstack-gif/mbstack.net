import React from "react";
import { LIVE_COUNTRIES } from "@/constants";
import ConsultancyBanner from "./ConsultancyBanner";
import StatsSection from "./StatsSection";

export default function BelowHero() {
  return (
    <section className="bg-white">
      {/* We are live at - Countries */}
      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {LIVE_COUNTRIES.map(({ name, flag }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:border-[#31B574]/40 hover:bg-white hover:shadow-lg hover:shadow-[#31B574]/10 transition-all duration-300"
              title={name}
            >
              <span
                className="text-5xl sm:text-6xl select-none transition-transform duration-300 group-hover:scale-110"
                role="img"
                aria-label={name}
              >
                {flag}
              </span>
              <span className="mt-3 text-sm sm:text-base font-semibold text-stone-700 group-hover:text-stone-900">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats - count up when in view */}
      <StatsSection />

      {/* Get Free Consultancy CTA banner - with GSAP cursor animation */}
      <ConsultancyBanner />
    </section>
  );
}
