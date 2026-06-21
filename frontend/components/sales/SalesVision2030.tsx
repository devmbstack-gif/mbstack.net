"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { SALES } from "@/constants";

export default function SalesVision2030() {
  const { badge, headline, subheadline, image, flow, pillars } = SALES.vision2030;

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(49, 181, 116, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(49, 181, 116, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-12 md:mb-16">
            <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-sm shrink-0">
              <div className="relative aspect-[4/3] rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-stone-200/80 border border-stone-100">
                <Image
                  src={image}
                  alt="Saudi Vision 2030"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 280px, 384px"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-brand/10 rounded-full blur-2xl -z-10" />
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3 h-3" aria-hidden />
                {badge}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
                {headline}
              </h2>
              <p className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                {subheadline}
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-stretch justify-center gap-0 mb-12 md:mb-16 max-w-3xl mx-auto">
            {flow.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex-1 text-center px-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-sm font-bold mb-3">
                    {idx + 1}
                  </div>
                  <p className="text-sm font-bold text-stone-900">{step.label}</p>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {idx < flow.length - 1 ? (
                  <div className="flex items-center pt-5 text-stone-300 shrink-0">
                    <ArrowRight className="w-5 h-5" aria-hidden />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl md:rounded-3xl bg-white border border-stone-200/80 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-300"
              >
                <div className="w-10 h-1 rounded-full bg-brand mb-5" />
                <h3 className="text-lg font-bold text-stone-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
