"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

export default function SalesProblem() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">
            {SALES.problem.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-stone-600 leading-relaxed">
              {SALES.problem.description}
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              {SALES.problem.frustration}
            </p>
            <div className="p-6 bg-white border-l-4 border-[#31B574] shadow-sm rounded-r-2xl">
              <p className="text-lg font-semibold text-stone-900">
                {SALES.problem.truth}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#31B574]/10 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            <div className="relative aspect-square md:aspect-auto md:h-[400px] overflow-hidden rounded-3xl shadow-xl">
               <Image 
                src={SALES.problem.image} 
                alt="Problem visualization" 
                fill 
                className="object-cover"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
