"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

export default function SalesWhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-8 text-center">
            {SALES.whyUs.headline}
          </h2>

          <p className="text-lg text-stone-600 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            {SALES.whyUs.description}
          </p>

          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-stone-500 mb-4">{SALES.whyUs.beliefIntro}</p>
            <p className="text-xl md:text-2xl font-semibold text-stone-900 leading-relaxed italic">
              &ldquo;{SALES.whyUs.belief}&rdquo;
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#31B574]/20 shadow-xl">
              <Image
                src={SALES.whyUs.founder.image}
                alt={SALES.whyUs.founder.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-stone-900">
                {SALES.whyUs.founder.name}
              </h3>
              <p className="text-[#31B574] font-semibold mt-1">
                {SALES.whyUs.founder.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
