"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

export default function SalesStories() {
  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.35em] text-[#31B574] mb-3">
            Case Studies
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">
            {SALES.successStories.headline}
          </h3>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          {SALES.successStories.items.map((story, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12 px-2 sm:px-4`}
            >
              <div className="w-full lg:w-[48%] rounded-[1.75rem] bg-stone-100 p-4 sm:p-5 md:p-6 shadow-lg">
                <div className="relative aspect-[16/10] max-h-[280px] sm:max-h-[320px] rounded-2xl overflow-hidden group">
                  <Image
                    src={story.bgImage}
                    alt={story.clientName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-stone-900/10 group-hover:from-stone-900/70 transition-colors duration-500" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white font-bold text-sm sm:text-base md:text-lg leading-snug">
                      {story.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[52%] space-y-6 md:space-y-8 px-2 sm:px-4 lg:px-6">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-stone-100 block mb-1">
                    0{idx + 1}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                    {story.clientName}
                  </h4>
                </div>

                <div className="space-y-8">
                  <div className="relative pl-8 sm:pl-10 border-l-2 border-stone-200">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-stone-300" />
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-stone-400 block mb-2">
                      The Challenge
                    </span>
                    <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                      {story.problem}
                    </p>
                  </div>

                  <div className="relative pl-8 sm:pl-10 border-l-2 border-[#31B574]/30">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#31B574]" />
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#31B574] block mb-2">
                      The Solution
                    </span>
                    <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-semibold">
                      {story.solution}
                    </p>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 text-[#31B574] font-bold uppercase tracking-widest text-xs sm:text-sm group hover:gap-3 transition-all">
                  View Project Details
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
