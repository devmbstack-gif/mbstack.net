"use client";

import React from "react";
import { SALES } from "@/constants";

export default function SalesProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            {SALES.steps.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {SALES.steps.items.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center p-8 bg-stone-50 rounded-[2rem] border border-stone-100"
            >
              <div className="w-14 h-14 rounded-full bg-[#31B574] text-white flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_20px_rgba(49,181,116,0.3)]">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                {step.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
