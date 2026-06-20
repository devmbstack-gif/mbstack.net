import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE, BRAND_COLOR, HERO_TRUSTED_CLIENTS } from "@/constants";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pt-20 pb-6 sm:pt-24 md:pt-28 sm:pb-8 bg-white">
      <div className="relative z-0 w-full max-w-4xl mx-auto page-container">
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
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-white to-transparent z-[1]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-white to-transparent z-[1]"
          aria-hidden
        />
        <div className="relative z-10 text-center">
          <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-1">
            <span style={{ color: BRAND_COLOR }}>{SITE.heroHeadline}</span>
            <br />
            <span className="text-stone-800">{SITE.heroSubline}</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto px-1">
            {SITE.description}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 px-2 sm:px-0">
            <Link
              href={SITE.consultancyHref}
              className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:opacity-95 active:scale-[0.98] touch-manipulation"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              {SITE.ctaConsultancy}
            </Link>
            <Link
              href={SITE.contactHref}
              className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl text-base font-semibold text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-colors active:scale-[0.98] touch-manipulation"
            >
              {SITE.ctaContact}
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-6 sm:mt-8 min-h-16 sm:h-20">
            <div className="flex justify-center -space-x-3" aria-label="Trusted client logos">
              {HERO_TRUSTED_CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-white overflow-hidden shadow-md ring-2 ring-stone-200/50"
                  title={client.name}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={46}
                    height={46}
                    className={`w-full h-full ${
                      client.variant === "logo"
                        ? "object-contain p-1"
                        : "object-cover"
                    }`}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm font-medium text-stone-400 uppercase tracking-wider">
              Trusted by Clients
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-stone-100">
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
