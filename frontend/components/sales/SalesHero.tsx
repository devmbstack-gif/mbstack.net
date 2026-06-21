"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
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

function VideoIframe({ embedUrl }: { embedUrl: string }) {
  return (
    <>
      <div className="absolute inset-0 z-0 bg-black" aria-hidden />
      <iframe
        src={embedUrl}
        title="MB Stack promotional video"
        className="relative z-[1] h-full w-full border-0 bg-black"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </>
  );
}

function PinnedVideoPlayer({
  embedUrl,
  onClose,
}: {
  embedUrl: string;
  onClose: () => void;
}) {
  return (
    <div
      className="sales-pip-player fixed z-[100] aspect-video overflow-hidden rounded-2xl border-4 border-white bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-2 ring-brand/30
        bottom-[calc(5.25rem+env(safe-area-inset-bottom))] right-4 w-[min(88vw,280px)]
        sm:bottom-6 sm:right-6 sm:w-80"
      role="complementary"
      aria-label="Mini video player"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white shadow-md hover:bg-black"
        aria-label="Close mini player"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
      <VideoIframe embedUrl={embedUrl} />
      <div className="pointer-events-none absolute bottom-2 left-2 z-20 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
        Now playing
      </div>
    </div>
  );
}

export default function SalesHero() {
  const videoSlotRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [pinDismissed, setPinDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const embedUrl = getYoutubeEmbedUrl(SALES.hero.videoYoutubeId);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const slot = videoSlotRef.current;
    if (!slot) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPinned(false);
          setPinDismissed(false);
          return;
        }
        setIsPinned(true);
      },
      {
        threshold: 0,
        rootMargin: "-8px 0px 0px 0px",
      },
    );

    observer.observe(slot);
    return () => observer.disconnect();
  }, []);

  const showPinned = isPinned && !pinDismissed;
  const leftBenefits = SALES.expectations.slice(0, 2);
  const rightBenefits = SALES.expectations.slice(2, 4);

  return (
    <section className="relative flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-x-clip bg-white">
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
            className="relative aspect-video rounded-[2.5rem] mb-16 bg-stone-100"
          >
            {showPinned ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-[2.5rem] border-[12px] border-white bg-stone-900/95 px-6 text-center shadow-inner">
                <span className="inline-flex rounded-full bg-brand/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand">
                  Now playing
                </span>
                <p className="text-sm font-medium text-white/90">
                  Video continues in the mini player
                </p>
              </div>
            ) : (
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border-[12px] border-white bg-black shadow-2xl">
                <VideoIframe embedUrl={embedUrl} />
              </div>
            )}
          </div>

          {mounted && showPinned
            ? createPortal(
                <PinnedVideoPlayer
                  embedUrl={embedUrl}
                  onClose={() => setPinDismissed(true)}
                />,
                document.body,
              )
            : null}

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
