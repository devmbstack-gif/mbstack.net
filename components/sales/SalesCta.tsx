"use client";

import React from "react";
import Link from "next/link";
import { SALES } from "@/constants";

export default function SalesCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#31B574] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {SALES.footerCta.headline}
            </h2>
            <p className="text-white/90 text-xl font-semibold mb-4">
              {SALES.footerCta.subheadline}
            </p>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              {SALES.footerCta.description}
            </p>
            <p className="text-white/70 text-base mb-12 max-w-xl mx-auto">
              {SALES.footerCta.closing}
            </p>
            <Link
              href={SALES.footerCta.href}
              className="group relative inline-flex w-full sm:w-auto px-8 py-3.5 bg-white text-[#31B574] font-extrabold text-base rounded-full transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">{SALES.footerCta.cta}</span>
              <div className="absolute inset-0 bg-[#31B574]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
