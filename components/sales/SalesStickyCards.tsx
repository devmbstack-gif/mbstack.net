"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

export default function SalesStickyCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            {SALES.steps.headline}
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Our structured approach ensures that every project we undertake is a success story in the making.
          </p>
        </div>

        {/* The parent container needs to be tall enough to allow scrolling through all cards */}
        <div className="max-w-4xl mx-auto relative pb-[30vh]">
          {SALES.steps.items.map((step, idx) => (
            <div 
              key={idx} 
              className="sticky top-28 mb-20 last:mb-0"
              style={{ 
                zIndex: idx + 1,
                paddingTop: `${idx * 20}px` // Optional: creates a slight offset if desired, but for total cover, keep it 0
              }}
            >
              <div className="relative w-full h-[450px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 bg-stone-900">
                {/* Background Image with Dark Blue Overlay */}
                <Image 
                  src={(step as any).image} 
                  alt={step.title} 
                  fill 
                  className="object-cover opacity-60"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2317] via-[#0c2317]/60 to-transparent p-8 md:p-16 flex flex-col justify-end">
                  <div className="max-w-2xl">
                    <span className="inline-block text-6xl md:text-8xl font-bold text-white/10 mb-2 leading-none">
                      0{idx + 1}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                      {step.title}
                    </h3>
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Glassy highlights */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
              </div>
            </div>
          ))}
          
          {/* Spacer at the bottom of the sticky container to allow the last card to scroll out if needed, 
              or just to give the section height */}
          <div className="h-20" />
        </div>
      </div>
    </section>
  );
}
