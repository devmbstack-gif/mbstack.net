"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, Star, Zap } from "lucide-react";
import { SALES } from "@/constants";

export default function SalesPackages() {
  const { badge, headline, subheadline, tiers, footnote } = SALES.packages;

  return (
    <section className="relative py-16 md:py-24 bg-white border-t border-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" aria-hidden />
            {badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            {headline}
          </h2>
          <p className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>

        <div className="max-w-6xl mx-auto hidden lg:block overflow-hidden rounded-2xl border border-stone-200 shadow-lg">
          <div className="grid grid-cols-[1.1fr_0.75fr_1.6fr_1.1fr] bg-[#0c4a3e] text-white text-xs font-bold uppercase tracking-wider">
            <div className="px-5 py-4 border-r border-white/10">Package Tier</div>
            <div className="px-5 py-4 border-r border-white/10">Pricing</div>
            <div className="px-5 py-4 border-r border-white/10">
              Deliverables & High-Value Stack
            </div>
            <div className="px-5 py-4">Competitive Edge</div>
          </div>
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`grid grid-cols-[1.1fr_0.75fr_1.6fr_1.1fr] text-sm ${
                tier.highlight
                  ? "bg-brand/5 ring-2 ring-inset ring-brand/30"
                  : index % 2 === 0
                    ? "bg-white"
                    : "bg-stone-50/80"
              }`}
            >
              <div className="px-5 py-6 border-r border-stone-200/80 border-t border-stone-200/80">
                <p className="font-bold text-stone-900 text-base">{tier.name}</p>
                <span
                  className={`inline-block mt-2 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                    tier.highlight
                      ? "bg-amber-100 text-amber-900"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  {tier.badge}
                </span>
              </div>
              <div className="px-5 py-6 border-r border-stone-200/80 border-t border-stone-200/80">
                <p className="text-2xl font-extrabold text-stone-900">{tier.price}</p>
                <p className="text-xs text-stone-500 mt-1 font-medium">{tier.priceNote}</p>
              </div>
              <div className="px-5 py-6 border-r border-stone-200/80 border-t border-stone-200/80">
                <ul className="space-y-2 text-stone-700 leading-relaxed">
                  {tier.deliverables.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check
                        className="w-4 h-4 text-brand shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-5 py-6 border-t border-stone-200/80 text-stone-700 leading-relaxed font-medium">
                {tier.competitiveEdge}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden grid gap-6 max-w-lg mx-auto">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={`rounded-2xl border p-6 shadow-sm ${
                tier.highlight
                  ? "border-brand bg-brand/[0.04] ring-2 ring-brand/25"
                  : "border-stone-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">{tier.name}</h3>
                  <span
                    className={`inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                      tier.highlight
                        ? "bg-amber-100 text-amber-900"
                        : "bg-brand/10 text-brand"
                    }`}
                  >
                    {tier.highlight ? (
                      <Star className="w-3 h-3 fill-current" aria-hidden />
                    ) : (
                      <Zap className="w-3 h-3" aria-hidden />
                    )}
                    {tier.badge}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl font-extrabold text-stone-900">{tier.price}</p>
                  <p className="text-xs text-stone-500 font-medium">{tier.priceNote}</p>
                </div>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Deliverables
              </p>
              <ul className="space-y-2 text-sm text-stone-700 mb-5">
                {tier.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-stone-900 border-t border-stone-100 pt-4">
                {tier.competitiveEdge}
              </p>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-stone-500 max-w-2xl mx-auto mt-8 md:mt-10">
          {footnote}
        </p>
        <div className="text-center mt-8">
          <Link
            href={SALES.calendlyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center px-8 py-3.5 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-all touch-manipulation"
          >
            Book a package consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
