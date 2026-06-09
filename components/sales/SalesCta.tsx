"use client";

import React from "react";
import Link from "next/link";
import { SALES } from "@/constants";

export default function SalesCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#31B574] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {SALES.footerCta.headline}
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              {SALES.footerCta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={SALES.footerCta.href}
                className="w-full sm:w-auto px-10 py-5 bg-white text-[#31B574] font-extrabold text-xl rounded-full hover:bg-stone-50 transition-all shadow-xl hover:scale-105"
              >
                {SALES.footerCta.cta}
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-full hover:bg-white/10 transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
