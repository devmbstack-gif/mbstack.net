"use client";

import React from "react";
import Link from "next/link";
import { SALES, BRAND_COLOR, HERO_CLIENT_IMAGES } from "@/constants";
import Image from "next/image";

export default function SalesHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(49, 181, 116, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(49, 181, 116, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#31B574] opacity-[0.03] blur-[120px] rounded-full -z-10" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#31B574]/10 border border-[#31B574]/20 text-[#31B574] text-sm font-semibold mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#31B574] hero-dot-glow" />
          {SALES.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
          {SALES.hero.headline}
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-[#31B574] mb-8">
          {SALES.hero.subheadline}
        </p>

        <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {SALES.hero.description}
        </p>

        {/* Video & Benefits Container - Now Stacked and Centered */}
        <div className="mt-12 max-w-4xl mx-auto">
          {/* Video Placeholder - Centered and Large */}
          <div className="relative aspect-video bg-stone-100 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white group mb-16">
            <div className="absolute inset-0 flex items-center justify-center bg-stone-900/40 group-hover:bg-stone-900/30 transition-colors">
              <button className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-[#31B574] border-b-[12px] border-b-transparent ml-1" />
              </button>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                 <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#31B574] text-white text-base font-bold shadow-lg">
                    {SALES.hero.cta} →
                 </div>
            </div>
          </div>

          {/* Bullet Points & Final CTA - Below Video */}
          <div className="grid md:grid-cols-2 gap-12 text-left bg-stone-50/50 p-10 rounded-[3rem] border border-stone-100">
            <ul className="space-y-6">
              {SALES.expectations.items.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#31B574]/10 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#31B574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">{item.title}</h3>
                    <p className="text-stone-500 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {SALES.expectations.items.slice(2, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#31B574]/10 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#31B574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">{item.title}</h3>
                    <p className="text-stone-500 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
               <Link
                href={SALES.footerCta.href}
                className="w-full md:w-auto inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#31B574] text-white font-extrabold text-xl hover:bg-[#2a9d63] transition-all shadow-xl hover:scale-105"
              >
                {SALES.hero.cta}
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {HERO_CLIENT_IMAGES.slice(0, 3).map((img, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                      <Image src={img} alt="Client" width={32} height={32} />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-stone-500">{SALES.hero.ctaSubtext}</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
