import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE, RATING, BRAND_COLOR, HERO_CLIENT_IMAGES } from "@/constants";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-16 bg-white">
      <div className="relative z-0 w-full max-w-4xl mx-auto px-4 sm:px-6">
        {/* Grid only - no gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Smooth fade at top - like at bottom */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-white to-transparent z-[1]"
          aria-hidden
        />
        {/* Smooth fade at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-white to-transparent z-[1]"
          aria-hidden
        />
        <div className="relative z-10 text-center">
          {/* Badge - rating with pulsing green dot */}
          <div className="inline-flex items-center gap-4 px-4 py-2.5 rounded-full bg-white border border-stone-200/80 shadow-sm text-stone-600 text-sm font-medium mb-8">
            <span className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full bg-[#31B574] hero-dot-glow"
                aria-hidden
              />
              {RATING.value} rating by clients
            </span>
            <span className="w-px h-4 bg-stone-200" aria-hidden />
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-stone-500 hover:text-[#31B574] transition-colors font-medium"
            >
              Read more
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

          {/* Overlapping client avatars */}

          {/* Headline - brand color on main line, extended subline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight">
            <span style={{ color: BRAND_COLOR }}>{SITE.heroHeadline}</span>
            <br />
            <span className="text-stone-800">{SITE.heroSubline}</span>
          </h1>
          <p className="mt-5 text-lg text-stone-500 leading-relaxed max-w-xl mx-auto">
            {SITE.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={SITE.consultancyHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:opacity-95"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              {SITE.ctaConsultancy}
            </Link>
            <Link
              href={SITE.contactHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-colors"
            >
              {SITE.ctaContact}
            </Link>
          </div>
          <div className="flex items-center justify-center h-20 gap-5">
            <div className="flex justify-center -space-x-3" aria-hidden>
              {HERO_CLIENT_IMAGES.map((src) => (
                <div
                  key={src}
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-stone-100 overflow-hidden shadow-md ring-2 ring-stone-200/50"
                >
                  <Image
                    src={src}
                    alt={src.split("/").pop()?.split(".")[0] || "Client"}
                    width={46}
                    height={46}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-stone-400 uppercase tracking-widerS">
              Trusted by Clients
            </p>
          </div>

          {/* Social */}
          <div className="mt-5 pt-8 border-t border-stone-100">
            <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-3">
              Follow us
            </p>

            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
