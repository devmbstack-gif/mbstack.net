"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import {
  Gavel,
  Heart,
  Palette,
  Radio,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const LIVE_BIDS = [
  { artwork: "Desert Horizon", amount: "12,500", bidder: "Khalid A." },
  { artwork: "Riyadh Nights", amount: "8,200", bidder: "Noura S." },
  { artwork: "Golden Dunes", amount: "15,750", bidder: "Faisal M." },
] as const;

type InGalleryCasePreviewProps = {
  clientName: string;
  clientImage: string;
  projectImage: string;
  metric: string;
  metricLabel: string;
};

export default function InGalleryCasePreview({
  clientName,
  clientImage,
  projectImage,
  metric,
  metricLabel,
}: InGalleryCasePreviewProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const bidTickerRef = useRef<HTMLParagraphElement>(null);
  const [activeBid, setActiveBid] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".ig-art-frame", {
        y: 24,
        opacity: 0,
        rotation: -2,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(".ig-browser", {
        y: 36,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.to(".ig-live-pulse", {
        scale: 1.15,
        opacity: 0.5,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ig-shimmer", {
        x: "200%",
        duration: 2.8,
        repeat: -1,
        ease: "none",
        delay: 0.6,
      });
    }, root);

    const bidTimer = setInterval(() => {
      const bidEl = bidTickerRef.current;
      if (!bidEl) return;

      gsap.to(bidEl, {
        y: -8,
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          setActiveBid((current) => (current + 1) % LIVE_BIDS.length);
          gsap.fromTo(
            bidEl,
            { y: 8, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
          );
        },
      });
    }, 3200);

    return () => {
      clearInterval(bidTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative h-full min-h-[320px] lg:min-h-[520px] overflow-hidden bg-gradient-to-br from-stone-950 via-[#1a1208] to-stone-950"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full" />

      <div className="relative z-10 h-full flex flex-col p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-amber-500/30 bg-stone-900 p-1 shrink-0">
              <Image
                src={clientImage}
                alt={clientName}
                fill
                className="object-contain"
                sizes="44px"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/80">
                Art · Saudi Arabia
              </p>
              <p className="text-white font-bold text-sm sm:text-base truncate">
                {clientName}
              </p>
            </div>
          </div>

          <div className="relative shrink-0">
            <span className="ig-live-pulse absolute inset-0 rounded-full bg-red-500/40" />
            <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/30">
              <Radio className="w-3.5 h-3.5 text-red-400 animate-pulse" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-300">
                Live Auction
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-4 min-h-0">
          <div className="hidden lg:flex flex-col gap-3">
            {[
              { icon: Palette, label: "Categories", value: "24+" },
              { icon: Gavel, label: "Active bids", value: "18" },
              { icon: Heart, label: "Collectors", value: "2.4k" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="ig-art-frame rounded-xl bg-white/[0.04] border border-white/10 p-3"
              >
                <stat.icon className="w-4 h-4 text-amber-400/90 mb-2" aria-hidden />
                <p className="text-lg font-extrabold text-white leading-none">
                  {stat.value}
                </p>
                <p className="text-[10px] text-stone-500 mt-1 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="ig-browser relative min-h-[200px] lg:min-h-0 rounded-2xl border border-white/10 bg-stone-900/60 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-stone-950/80">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
              <div className="flex-1 mx-2 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-between px-3">
                <span className="text-[10px] text-stone-400 truncate">
                  artwork.mbsoftsolution.com
                </span>
                <span className="text-[9px] font-semibold text-brand shrink-0 ml-2">
                  EN · AR
                </span>
              </div>
            </div>

            <div className="relative aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-10">
              <Image
                src={projectImage}
                alt={`${clientName} marketplace`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

              <div className="absolute top-3 left-3 right-3 overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-md">
                <div className="relative px-3 py-2">
                  <div className="ig-shimmer absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-0.5">
                    Latest bid
                  </p>
                  <p ref={bidTickerRef} className="ig-bid-ticker text-xs text-white">
                    <span className="text-brand font-bold">
                      SAR {LIVE_BIDS[activeBid].amount}
                    </span>{" "}
                    · {LIVE_BIDS[activeBid].artwork}{" "}
                    <span className="text-stone-500">
                      by {LIVE_BIDS[activeBid].bidder}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-brand/90 text-white shadow-lg shadow-brand/25">
              <ShoppingBag className="w-4 h-4" aria-hidden />
              <div>
                <p className="text-sm font-extrabold leading-none">{metric}</p>
                <p className="text-[9px] font-medium text-white/80 uppercase tracking-wide mt-0.5">
                  {metricLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {["Oil Painting", "Digital Art", "Sculpture", "Live Bidding"].map(
            (tag) => (
              <span
                key={tag}
                className="ig-art-frame inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-semibold text-stone-300 uppercase tracking-wide"
              >
                <Sparkles className="w-3 h-3 text-amber-400/80" aria-hidden />
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
