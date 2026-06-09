"use client";

import React from "react";
import { SALES } from "@/constants";

export default function SalesProcess() {
  return (
    <section className="py-24 bg-[#0a110d] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {SALES.steps.headline}
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            We guide you through every stage of the development process to ensure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 max-w-6xl mx-auto relative">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden lg:block absolute top-[10%] left-0 w-full h-[2px] bg-stone-800 -z-0" />

          {SALES.steps.items.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#31B574] text-white flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_20px_rgba(49,181,116,0.3)] border-4 border-[#0a110d]">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Framework list below */}
        <div className="mt-32 pt-20 border-t border-stone-800">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center opacity-70">
              {SALES.framework.items.map((item, idx) => (
                <div key={idx} className="text-center text-xs font-bold uppercase tracking-widest text-[#31B574]">
                   {item}
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
