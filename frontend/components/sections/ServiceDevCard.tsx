import React from "react";
import Link from "next/link";
import ServicePremiumIcon from "./ServicePremiumIcons";

type ServiceDevCardProps = {
  title: string;
  description: string;
  icon: string;
  index: number;
};

export default function ServiceDevCard({
  title,
  description,
  icon,
  index,
}: ServiceDevCardProps) {
  const paddedIndex = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-stone-200/90 bg-white p-5 sm:p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_20px_40px_-20px_rgba(49,181,116,0.35)]">
      <div
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand/80 via-brand to-brand/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3 mb-5">
        <ServicePremiumIcon type={icon} />
        <span className="text-[11px] font-mono font-bold tracking-widest text-stone-300 group-hover:text-brand/50 transition-colors">
          {paddedIndex}
        </span>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-brand transition-colors duration-300">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm sm:text-[15px] text-stone-500 leading-relaxed">
        {description}
      </p>

      <div className="mt-5 pt-4 border-t border-stone-100">
        <Link
          href="/consultancy"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all duration-200 touch-manipulation min-h-11"
        >
          Get started
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
