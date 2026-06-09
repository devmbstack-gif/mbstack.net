import React from "react";
import Link from "next/link";
import { PACKAGES } from "@/constants";

function CheckIcon({ included }: { included: boolean }) {
  return (
    <span
      className={`flex shrink-0 w-5 h-5 rounded-full items-center justify-center ${
        included ? "bg-[#31B574] text-white" : "bg-stone-200 text-stone-400"
      }`}
      aria-hidden
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function PackagesSection() {
  return (
    <section className="bg-stone-100/80 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-stone-900 mb-12">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className="flex flex-col bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <p
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: pkg.nameColor }}
                >
                  {pkg.name}
                </p>
                <p className="mt-2 text-2xl sm:text-3xl font-bold text-stone-900">
                  {pkg.price}
                  <span className="text-base font-normal text-stone-500">{pkg.duration}</span>
                </p>
                <h3 className="mt-6 text-xs font-bold uppercase tracking-wider text-stone-500">
                  Package Description
                </h3>
                <ul className="mt-4 space-y-3 flex-1">
                  {pkg.features.map(({ text, included }, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon included={included} />
                      <span
                        className={`text-sm ${
                          included ? "text-stone-700" : "text-stone-400 line-through"
                        }`}
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.ctaHref}
                  className={`mt-8 inline-flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors ${
                    pkg.highlight
                      ? "bg-[#e07c3c] hover:bg-[#c96a2e]"
                      : "bg-[#31B574] hover:bg-[#2a9d63]"
                  }`}
                >
                  {pkg.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
