"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

const STACK_OFFSET = [
  "",
  "md:pt-5",
  "md:pt-10",
  "md:pt-[60px]",
  "md:pt-20",
  "md:pt-[100px]",
] as const;

const STACK_Z = [
  "md:z-[1]",
  "md:z-[2]",
  "md:z-[3]",
  "md:z-[4]",
  "md:z-[5]",
  "md:z-[6]",
] as const;

export default function SalesStickyCards() {
  return (
    <section className="pt-16 md:pt-24 pb-0 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 md:mb-6">
            {SALES.steps.headline}
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-sm md:text-base px-2">
            {SALES.steps.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative pb-0 md:pb-12">
          {SALES.steps.items.map((step, idx) => (
            <div
              key={step.title}
              className={`relative max-md:z-auto ${STACK_Z[idx] ?? "md:z-[1]"} md:sticky md:top-28 mb-8 md:mb-20 last:mb-0 ${STACK_OFFSET[idx] ?? ""}`}
            >
              <article className="relative w-full overflow-hidden rounded-2xl md:rounded-[3rem] shadow-xl md:shadow-2xl border border-stone-200 md:border-white/20 bg-stone-900 flex flex-col md:block md:h-[550px]">
                {/* Mobile: image strip on top */}
                <div className="relative w-full h-48 sm:h-56 shrink-0 md:hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={idx < 2}
                  />
                </div>

                {/* Desktop: full-card background image */}
                <Image
                  src={step.image}
                  alt=""
                  aria-hidden
                  fill
                  className="hidden md:block object-cover opacity-60"
                  sizes="896px"
                  priority={idx < 2}
                />

                {/* Mobile: solid content block below image */}
                <div className="relative z-10 bg-[#0c2317] p-6 sm:p-8 md:hidden">
                  <div className="max-w-2xl">
                    <span
                      className="inline-block text-4xl sm:text-5xl font-bold text-white/15 mb-1 leading-none"
                      aria-hidden
                    >
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop: gradient overlay + text (transparent top so image shows) */}
                <div className="hidden md:flex absolute inset-0 z-10 flex-col justify-end bg-gradient-to-t from-[#0c2317] via-[#0c2317]/60 to-transparent p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <span
                      className="inline-block text-8xl font-bold text-white/10 mb-2 leading-none"
                      aria-hidden
                    >
                      0{idx + 1}
                    </span>
                    <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/90 text-xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
