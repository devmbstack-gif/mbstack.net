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

          <div className="flex partners-tech-slider-track gap-20 py-4">
            {repeatedLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className="h-14 md:h-16 relative w-40 md:w-52">
                  <Image 
                    src={logo.logo} 
                    alt={logo.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
