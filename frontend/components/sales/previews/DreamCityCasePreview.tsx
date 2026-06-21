"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import {
  Building2,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";

const OFFERINGS = [
  { city: "Abuja", type: "Short-Term", roi: "15%", status: "Available" },
  { city: "Lagos", type: "Residential", roi: "12%", status: "Funded" },
  { city: "Delta", type: "Commercial", roi: "18%", status: "Available" },
] as const;

type DreamCityCasePreviewProps = {
  clientName: string;
  clientImage: string;
  projectImage: string;
  metric: string;
  metricLabel: string;
};

export default function DreamCityCasePreview({
  clientName,
  clientImage,
  projectImage,
  metric,
  metricLabel,
}: DreamCityCasePreviewProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".dc-float-card", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".dc-browser", {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.to(".dc-glow-orb", {
        scale: 1.08,
        opacity: 0.55,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.fromTo(
        ".dc-chart-bar",
        { scaleY: 0.12 },
        {
          scaleY: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.5,
          transformOrigin: "bottom center",
        },
      );

      gsap.to(".dc-deposit-toast", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
        delay: 1.1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative h-full min-h-[320px] lg:min-h-[520px] overflow-hidden bg-[#020818]"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 44, 149, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 44, 149, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="dc-glow-orb absolute -top-20 -left-16 w-72 h-72 rounded-full bg-[#002c95]/40 blur-[90px]" />
      <div className="dc-glow-orb absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand/20 blur-[100px]" />

      <div className="relative z-10 h-full flex flex-col p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/15 bg-white p-1.5 shrink-0">
              <Image
                src={clientImage}
                alt={clientName}
                fill
                className="object-contain p-0.5"
                sizes="44px"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6b8fd4]">
                PropTech · Nigeria
              </p>
              <p className="text-white font-bold text-sm sm:text-base truncate">
                {clientName}
              </p>
            </div>
          </div>
          <div className="dc-float-card shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#002c95]/30 border border-[#3d5fc7]/40 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-sky-300" aria-hidden />
            <span className="text-[10px] font-semibold text-sky-100 uppercase tracking-wide">
              SPC Verified
            </span>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-4 min-h-0">
          <div className="dc-browser relative min-h-[200px] lg:min-h-0 rounded-2xl border border-white/10 bg-[#0a1535]/80 shadow-2xl shadow-black/50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-[#060f28]/90">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
              <div className="flex-1 mx-2 h-6 rounded-md bg-white/5 border border-white/10 flex items-center px-3">
                <span className="text-[10px] text-slate-400 truncate">
                  estate.mbsoftsolution.com/dashboard
                </span>
              </div>
            </div>
            <div className="relative aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-10">
              <Image
                src={projectImage}
                alt={`${clientName} platform`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020818] via-transparent to-transparent opacity-80" />
            </div>

            <div
              className="dc-deposit-toast absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[240px] flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/95 text-[#080f5e] shadow-xl translate-x-[-120%] opacity-0"
              aria-hidden
            >
              <div className="w-9 h-9 rounded-lg bg-[#002c95]/10 flex items-center justify-center shrink-0">
                <Wallet className="w-4 h-4 text-[#002c95]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wide text-[#002c95]/70">
                  Deposit confirmed
                </p>
                <p className="text-xs font-semibold truncate">
                  ₦50,000 · Abuja offering
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-3">
            <div className="dc-float-card rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/25 p-3.5">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-brand" aria-hidden />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand/90">
                  Key metric
                </span>
              </div>
              <p className="text-2xl font-extrabold text-white leading-none">
                {metric}
              </p>
              <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-wide">
                {metricLabel}
              </p>
            </div>

            <div className="dc-float-card flex-1 rounded-xl bg-white/[0.04] border border-white/10 p-3.5 flex flex-col">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3">
                Portfolio growth
              </p>
              <div className="flex-1 flex items-end gap-1.5">
                {[0.35, 0.5, 0.42, 0.65, 0.58, 0.82, 0.75, 1].map((h, i) => (
                  <div
                    key={i}
                    className="dc-chart-bar flex-1 rounded-t-sm bg-gradient-to-t from-[#002c95] to-brand origin-bottom"
                    style={{ height: `${h * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {OFFERINGS.map((item) => (
            <div
              key={item.city}
              className="dc-float-card flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-3 py-2.5 backdrop-blur-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-[#002c95]/25 border border-[#3d5fc7]/30 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-sky-300" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-stone-500 shrink-0" aria-hidden />
                  <p className="text-xs font-semibold text-white truncate">
                    {item.city}
                  </p>
                </div>
                <p className="text-[10px] text-stone-400">{item.type}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-brand">{item.roi}</p>
                <p
                  className={`text-[9px] font-semibold uppercase ${
                    item.status === "Available" ? "text-emerald-400" : "text-sky-400"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
