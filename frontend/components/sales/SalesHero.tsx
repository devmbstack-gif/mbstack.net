"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SALES } from "@/constants";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function getYoutubeEmbedUrl(videoId: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    controls: "1",
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export default function SalesHero() {
  const videoSlotRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);
  const embedUrl = getYoutubeEmbedUrl(SALES.hero.videoYoutubeId);

  useEffect(() => {
    const slot = videoSlotRef.current;
    if (!slot) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPinned(!entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "-24px 0px 0px 0px",
      },
    );

    observer.observe(slot);
    return () => observer.disconnect();
  }, []);

  const leftBenefits = SALES.expectations.slice(0, 2);
  const rightBenefits = SALES.expectations.slice(2, 4);

  return (
    <section className="relative flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden bg-white">
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand opacity-[0.03] blur-[120px] rounded-full -z-10" />

      <div className="page-container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-semibold mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand hero-dot-glow" />
          {SALES.hero.badge}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
          {SALES.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-brand mb-8">
          {SALES.hero.subheadline}
        </p>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {SALES.hero.description}
        </p>

        <a
          href={SALES.calendlyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-brand text-white font-bold text-lg rounded-full hover:bg-brand-dark transition-all shadow-lg shadow-brand/25 hover:scale-105"
        >
          {SALES.hero.bookNowCta}
        </a>

        <div className="mt-12 max-w-4xl mx-auto">
          <div
            ref={videoSlotRef}
            className="relative aspect-video bg-stone-100 rounded-[2.5rem] mb-16"
          >
            <div
              className={
                isPinned
                  ? "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[120] w-[min(88vw,280px)] sm:w-80 aspect-video overflow-hidden rounded-2xl shadow-2xl border-4 border-white ring-2 ring-brand/20 bg-stone-900"
                  : "absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl border-[12px] border-white group"
              }
            >
              <iframe
                src={embedUrl}
                title="MB Stack promotional video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {isPinned ? (
                <div className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-brand/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Now playing
                </div>
              ) : null}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left bg-stone-50/50 p-10 rounded-[3rem] border border-stone-100">
            {[leftBenefits, rightBenefits].map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-6">
                {column.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
                      <CheckIcon />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <p className="text-sm text-stone-500">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {SALES.hero.trustAvatars.map((avatar) => (
                  <div
                    key={avatar.image}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm"
                  >
                    <Image
                      src={avatar.image}
                      alt={avatar.name}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-stone-500">
                {SALES.hero.trustLine}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
