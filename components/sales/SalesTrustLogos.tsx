"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

export default function SalesTrustLogos() {
  // Multiply the logos for infinite sliding effect
  const repeatedLogos = [...SALES.trustLogos, ...SALES.trustLogos, ...SALES.trustLogos, ...SALES.trustLogos];

  return (
    <section className="py-16 border-y border-stone-100 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] font-extrabold text-stone-300 uppercase tracking-[0.2em] mb-12">
          As seen in / Trusted by leading brands
        </p>
        
        <div className="relative">
          {/* Fading Gradients for Smoothness */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

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
      </div>
    </section>
  );
}
