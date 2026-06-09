"use client";

import React from "react";
import Link from "next/link";
import { SALES } from "@/constants";

export default function SalesHero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(49, 181, 116, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(49, 181, 116, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#31B574] opacity-[0.03] blur-[120px] rounded-full -z-10" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 mb-8 max-w-5xl mx-auto leading-[1.1]">
          {SALES.hero.headline}
        </h1>

        <div className="mt-8 max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video bg-stone-100 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white group">
            <video
              src="/sales/sales.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>

        <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto mb-10 leading-relaxed font-semibold">
          {SALES.hero.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {SALES.hero.painPoints.map((point, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#31B574]/5 border border-[#31B574]/10 text-[#31B574] text-sm font-bold"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              {point}
            </span>
          ))}
        </div>

        <p className="text-base font-bold text-stone-500 mb-12 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-stone-200" />
          {SALES.hero.trustLine}
          <span className="w-8 h-px bg-stone-200" />
        </p>

        <div className="mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {Object.entries({
                "Projects Completed": "500+",
                "Happy Clients": "100+",
                "Team Members": "20+",
                "Years Experience": "10+"
              }).map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#31B574]">
                    {value}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-stone-500 font-bold uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={SALES.hero.ctaHref}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-br from-[#31B574] to-[#268a58] text-white font-extrabold text-base transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(49,181,116,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(49,181,116,0.6)] hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">{SALES.hero.cta}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href={SALES.hero.portfolio.href}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-[#31B574] font-bold text-base border-2 border-[#31B574]/20 hover:border-[#31B574] hover:bg-[#31B574]/5 transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                {SALES.hero.portfolio.label}
              </Link>
            </div>
            <p className="text-stone-600 mt-6 leading-relaxed">
              {SALES.hero.assessmentDescription}
            </p>
            <p className="text-stone-500 mt-4 text-sm leading-relaxed">
              {SALES.hero.pilotNote}
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12 text-left">
            {SALES.hero.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#31B574]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#31B574]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-stone-700 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">
            {SALES.hero.statsLine}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {SALES.hero.services.map((service, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-semibold"
              >
                {service}
              </span>
            ))}
          </div>
      </div>
    </section>
  );
}
