"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { CONSULTANCY_BANNER, BRAND_COLOR } from "@/constants";

const PARTICLE_COUNT = 55;

function createParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    size: 3 + Math.random() * 5,
    opacity: 0.3 + Math.random() * 0.5,
    offsetX: (Math.random() - 0.5) * 160,
    offsetY: (Math.random() - 0.5) * 160,
    duration: 0.4 + Math.random() * 0.35,
    delay: Math.random() * 0.1,
  }));
}

function useParticles() {
  const [particles] = useState(createParticles);
  return particles;
}

export default function ConsultancyBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const btnXRef = useRef(0);
  const btnYRef = useRef(0);
  const particles = useParticles();

  useEffect(() => {
    const banner = bannerRef.current;
    const container = particlesRef.current;
    const btn = btnRef.current;
    if (!banner || !container) return;

    const particleEls =
      container.querySelectorAll<HTMLDivElement>("[data-particle]");
    const btnTweenX = btn
      ? gsap.quickTo(btn, "x", { duration: 0.3, ease: "power2.out" })
      : () => {};
    const btnTweenY = btn
      ? gsap.quickTo(btn, "y", { duration: 0.3, ease: "power2.out" })
      : () => {};

    const handleMove = (e: MouseEvent) => {
      const rect = banner.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left - centerX;
      const mouseY = e.clientY - rect.top - centerY;

      particleEls.forEach((el, i) => {
        const config = particles[i];
        if (!config) return;
        const tx = mouseX + config.offsetX;
        const ty = mouseY + config.offsetY;
        gsap.to(el, {
          x: tx,
          y: ty,
          duration: config.duration,
          delay: config.delay,
          ease: "power2.out",
          overwrite: true,
        });
      });

      if (btn) {
        const btnRect = btn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;
        const dx = e.clientX - btnCenterX;
        const dy = e.clientY - btnCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;
        const strength = 0.25;
        if (dist < maxDist) {
          const pull = (1 - dist / maxDist) * strength;
          btnXRef.current = dx * pull;
          btnYRef.current = dy * pull;
        } else {
          btnXRef.current = 0;
          btnYRef.current = 0;
        }
        btnTweenX(btnXRef.current);
        btnTweenY(btnYRef.current);
      }
    };

    let rect = { width: 0, height: 0 };
    const setRect = () => {
      if (banner) rect = banner.getBoundingClientRect();
    };
    setRect();
    // Initial scatter
    particleEls.forEach((el) => {
      gsap.set(el, {
        x: (Math.random() - 0.5) * rect.width * 0.5,
        y: (Math.random() - 0.5) * rect.height * 0.5,
      });
    });

    const handleLeaveWithRect = () => {
      setRect();
      particleEls.forEach((el) => {
        gsap.to(el, {
          x: (Math.random() - 0.5) * rect.width * 0.5,
          y: (Math.random() - 0.5) * rect.height * 0.5,
          duration: 0.8 + Math.random() * 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      });
      if (btn) gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
    };

    banner.addEventListener("mousemove", handleMove);
    banner.addEventListener("mouseleave", handleLeaveWithRect);
    return () => {
      banner.removeEventListener("mousemove", handleMove);
      banner.removeEventListener("mouseleave", handleLeaveWithRect);
    };
  }, [particles]);

  return (
    <div ref={bannerRef} className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-stone-900"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30,30,30,0.97) 0%, rgba(49,181,116,0.15) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80"
        aria-hidden
      />
      {/* Cursor-following particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform">
          {particles.map((p) => (
            <div
              key={p.id}
              data-particle
              className="absolute rounded-full left-0 top-0 will-change-transform"
              style={{
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                backgroundColor: BRAND_COLOR,
                boxShadow: `0 0 ${p.size * 2}px ${BRAND_COLOR}80`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {CONSULTANCY_BANNER.title}
          </h3>
          <p className="mt-2 text-stone-300 text-base sm:text-lg max-w-xl">
            {CONSULTANCY_BANNER.subtitle}
          </p>
        </div>
        <Link
          ref={btnRef}
          href={CONSULTANCY_BANNER.href}
          className="shrink-0 inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-colors duration-200 hover:opacity-95 will-change-transform"
          style={{ backgroundColor: BRAND_COLOR }}
        >
          {CONSULTANCY_BANNER.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
