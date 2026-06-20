"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

export default function SalesProblem() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 px-1">
            {SALES.problem.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            {SALES.problem.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg text-stone-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="p-6 bg-white border-l-4 border-brand shadow-sm rounded-r-2xl">
              <p className="text-lg font-semibold text-stone-900">
                {SALES.problem.highlight}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand/10 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            <div className="relative aspect-square md:aspect-auto md:h-[400px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={SALES.problem.image}
                alt="Problem visualization"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
