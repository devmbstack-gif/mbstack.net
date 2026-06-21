"use client";

import React from "react";
import Image from "next/image";
import { SALES } from "@/constants";

export default function SalesTestimonials() {
  const repeatedTestimonials = [
    ...SALES.testimonials.items,
    ...SALES.testimonials.items,
    ...SALES.testimonials.items,
  ];

  return (
    <section className="pt-10 md:pt-14 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
            {SALES.testimonials.headline}
          </h2>
          <p className="text-stone-500 mt-4 font-medium max-w-2xl mx-auto">
            {SALES.testimonials.subheadline}
          </p>
        </div>

        <div className="flex overflow-hidden relative group">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex partners-tech-slider-track gap-8 py-10">
            {repeatedTestimonials.map((story, idx) => (
              <article
                key={`${story.name}-${idx}`}
                className="inline-block w-[340px] md:w-[420px] shrink-0 p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 shadow-sm whitespace-normal hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-stone-200 border-2 border-brand/20 shrink-0">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{story.name}</h4>
                    <p className="text-xs text-brand font-bold uppercase tracking-wider">
                      {story.role}
                    </p>
                  </div>
                </div>

                <dl className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                      Problem
                    </dt>
                    <dd className="text-stone-600">{story.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-brand mb-1">
                      Solution
                    </dt>
                    <dd className="text-stone-600">{story.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-stone-900 mb-1">
                      Result
                    </dt>
                    <dd className="text-stone-700 font-medium">{story.result}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
