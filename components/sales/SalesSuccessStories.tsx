"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

export default function SalesSuccessStories() {
  // Multiply the testimonials for a truly infinite loop
  const repeatedTestimonials = [...SALES.testimonials, ...SALES.testimonials, ...SALES.testimonials, ...SALES.testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900">
            Success Stories
          </h2>
          <p className="text-stone-500 mt-4 font-medium">Join hundreds of satisfied business owners who scaled with us</p>
        </div>

        <div className="flex overflow-hidden relative group">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex partners-tech-slider-track gap-8 py-10">
            {repeatedTestimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="inline-block w-[320px] md:w-[400px] shrink-0 p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 shadow-sm whitespace-normal hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-200 border-2 border-[#31B574]/20">
                    <Image src={t.image} alt={t.name} width={56} height={56} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{t.name}</h4>
                    <p className="text-xs text-[#31B574] font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <p className="text-stone-600 italic leading-relaxed text-lg mb-6">
                  "{t.quote}"
                </p>
                <div className="mt-4 flex gap-1 text-yellow-400">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
