"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SALES, PORTFOLIO_LINK } from "@/constants";

export default function SalesSuccessStories() {
  const repeatedLogos = [
    ...SALES.trustLogos,
    ...SALES.trustLogos,
    ...SALES.trustLogos,
    ...SALES.trustLogos,
  ];
  const repeatedTestimonials = [
    ...SALES.testimonials,
    ...SALES.testimonials,
    ...SALES.testimonials,
    ...SALES.testimonials,
  ];

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900">
            {SALES.clientResults.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {SALES.clientResults.items.map((client, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white rounded-[2.5rem] border border-stone-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(49,181,116,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              {client.image && (
                <div className="relative aspect-video w-full mb-8 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#31B574]/10 flex items-center justify-center mb-4 text-[#31B574] group-hover:bg-[#31B574] group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-[#31B574] transition-colors duration-300">
                  {client.name}
                </h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#31B574]/60 block mb-1">
                    The Challenge
                  </span>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {client.problem}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#31B574]/60 block mb-1">
                    Our Solution
                  </span>
                  <p className="text-stone-600 leading-relaxed text-sm font-medium">
                    {client.solution}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-50">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#31B574] block mb-1">
                    Key Outcome
                  </span>
                  <p className="text-stone-900 font-bold leading-relaxed">
                    {client.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-20">
          <Link
            href={PORTFOLIO_LINK.href}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#31B574] text-white font-bold text-base hover:bg-[#2a9d63] transition-all shadow-lg hover:scale-105"
          >
            {PORTFOLIO_LINK.label}
          </Link>
        </div>

        <div className="relative mb-20">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-stone-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-stone-50 to-transparent z-10" />

          <div className="flex partners-tech-slider-track items-center gap-8 sm:gap-12 py-4">
            {repeatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-xl border border-stone-200/70 bg-white grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  width={112}
                  height={112}
                  className="w-[75%] h-[75%] object-contain object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-stone-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-stone-50 to-transparent z-10" />

          <div className="flex partners-tech-slider-track gap-8 py-4">
            {repeatedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="inline-block w-[320px] md:w-[400px] shrink-0 p-8 bg-white rounded-[2.5rem] border border-stone-100 shadow-sm whitespace-normal"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-200 border-2 border-[#31B574]/20">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{t.name}</h4>
                    <p className="text-xs text-[#31B574] font-bold uppercase tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>
                <p className="text-stone-600 italic leading-relaxed text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
