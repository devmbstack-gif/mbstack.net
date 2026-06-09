"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants";

function StarRating({ value }: { value: number }) {
  return (
    <div
      className="flex gap-0.5 text-amber-400"
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 shrink-0"
          fill={star <= value ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={star <= value ? 0 : 1.5}
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  const parts = name.split(/[,&]| and /).map((p) => p.trim());
  if (parts.length >= 2) {
    return (parts[0][0] ?? "") + (parts[1][0] ?? "");
  }
  return name.slice(0, 2).toUpperCase();
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(TESTIMONIALS.length > 1);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);
    // Update currentIndex from scroll position (nearest card)
    const cardWidth =
      el.querySelector("[data-testimonial-card]")?.clientWidth ?? clientWidth;
    const gap = 32;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setCurrentIndex(Math.min(index, TESTIMONIALS.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    el.addEventListener("scroll", updateScrollState);
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollBy = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(
      "[data-testimonial-card]",
    ) as HTMLElement | null;
    const gap = 32;
    const step = (card?.offsetWidth ?? el.clientWidth) + gap;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  const goToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(
      `[data-testimonial-index="${index}"]`,
    ) as HTMLElement | null;
    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <section className="bg-stone-50/80 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-stone-900 mb-12">
          Testimonials
        </h2>

        <div className="relative">
          {/* Slider track */}
          <div
            ref={scrollRef}
            className="testimonials-slider-track flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-4 -mx-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TESTIMONIALS.map(
              ({ image, name, title, rating, quote }, index) => (
                <article
                  key={name + title + index}
                  data-testimonial-card
                  data-testimonial-index={index}
                  className="group flex-shrink-0 w-[85vw] min-w-[280px] sm:w-[calc(50%-1rem)] sm:min-w-[300px] lg:w-[calc(33.333%-1.25rem)] lg:min-w-[320px] snap-start flex flex-col bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#31B574]/30 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-stone-100 shrink-0 flex items-center justify-center">
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-[#31B574] text-white font-semibold text-lg"
                        aria-hidden
                      >
                        {getInitials(name)}
                      </div>
                      {image ? (
                        <Image
                          src={image}
                          alt={name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full relative z-10"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : null}
                    </div>
                    <StarRating value={rating} />
                    <p className="mt-3 text-base font-semibold text-[#31B574]">
                      {title}
                    </p>
                    <p className="text-sm text-stone-500 mt-0.5">{name}</p>
                  </div>
                  <blockquote className="mt-4 flex gap-2 text-left flex-1">
                    <span className="text-3xl text-stone-200 font-serif leading-none select-none shrink-0">
                      &ldquo;
                    </span>
                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed italic">
                      {quote}
                    </p>
                  </blockquote>
                </article>
              ),
            )}
          </div>

          {/* Prev / Next */}
          {TESTIMONIALS.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => scrollBy("prev")}
                disabled={!canScrollPrev}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-600 hover:text-[#31B574] hover:border-[#31B574]/50 disabled:opacity-40 disabled:pointer-events-none transition-all z-10"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollBy("next")}
                disabled={!canScrollNext}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-600 hover:text-[#31B574] hover:border-[#31B574]/50 disabled:opacity-40 disabled:pointer-events-none transition-all z-10"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Dots */}
          {TESTIMONIALS.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#31B574] w-8"
                      : "bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
