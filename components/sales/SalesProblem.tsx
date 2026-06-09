"use client";

import React from "react";
import { SALES } from "@/constants";

export default function SalesProblem() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#31B574] mb-4">
             The Bottleneck
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-stone-900 mb-12 leading-tight">
            {SALES.problem.headline}
          </h3>

          <div className="relative p-12 md:p-16 bg-white rounded-[3rem] border border-stone-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#31B574]" />
            
            <div className="mb-12">
              <p className="text-2xl md:text-3xl font-bold text-stone-800 mb-3">
                {SALES.problem.lead}
              </p>
              <p className="text-3xl md:text-4xl font-black text-[#31B574]">
                {SALES.problem.leadAccent}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left mb-12">
              <div className="space-y-4">
                <span className="w-12 h-1 bg-stone-100 block" />
                <p className="text-lg text-stone-600 leading-relaxed">
                  {SALES.problem.description}
                </p>
              </div>
              <div className="space-y-4">
                <span className="w-12 h-1 bg-[#31B574]/30 block" />
                <p className="text-lg text-stone-900 font-medium leading-relaxed">
                  {SALES.problem.solution}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-stone-50 text-stone-900 font-black text-xl">
              <span className="w-2 h-2 rounded-full bg-[#31B574]" />
              {SALES.problem.closing}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
