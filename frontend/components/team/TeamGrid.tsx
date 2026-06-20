"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { TEAM_MEMBERS, type TeamMember } from "@/constants";

export default function TeamGrid() {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const previewMember =
    previewIndex === null ? null : TEAM_MEMBERS[previewIndex];

  const closePreview = useCallback(() => setPreviewIndex(null), []);

  const showPrevious = useCallback(() => {
    setPreviewIndex((current) => {
      if (current === null) return null;
      return current === 0 ? TEAM_MEMBERS.length - 1 : current - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setPreviewIndex((current) => {
      if (current === null) return null;
      return current === TEAM_MEMBERS.length - 1 ? 0 : current + 1;
    });
  }, []);

  useEffect(() => {
    if (previewIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closePreview();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewIndex, closePreview, showPrevious, showNext]);

  function openPreview(member: TeamMember) {
    const index = TEAM_MEMBERS.findIndex((item) => item.name === member.name);
    if (index >= 0) setPreviewIndex(index);
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="group text-center">
            <button
              type="button"
              onClick={() => openPreview(member)}
              className="relative mx-auto mb-4 sm:mb-6 block aspect-[3/4] w-full max-w-[220px] cursor-zoom-in overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group-hover:ring-2 group-hover:ring-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-label={`Preview ${member.name}`}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                className="object-contain p-1"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-black/55 to-transparent px-3 py-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-sm">
                <ZoomIn className="h-4 w-4" />
                Click to preview
              </span>
            </button>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-brand transition-colors leading-snug">
              {member.name}
            </h3>
            <p className="text-slate-500 font-medium text-xs sm:text-sm mt-0.5">
              {member.role}
            </p>
          </div>
        ))}
      </div>

      {previewMember && previewIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${previewMember.name} preview`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={closePreview}
            aria-label="Close preview"
          />

          <div className="relative z-10 w-full max-w-3xl scale-100 opacity-100 transition-all duration-200 ease-out">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl ring-1 ring-white/10">
              <div className="relative aspect-[3/4] max-h-[72vh] w-full bg-slate-50 sm:max-h-[78vh]">
                <Image
                  src={previewMember.image}
                  alt={previewMember.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain p-3 sm:p-4"
                  priority
                />
              </div>

              <div className="border-t border-slate-100 px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Team Member
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                  {previewMember.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500 sm:text-base">
                  {previewMember.role}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closePreview}
              className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100 sm:-right-3 sm:-top-3 sm:h-11 sm:w-11"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100 sm:h-11 sm:w-11"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100 sm:h-11 sm:w-11"
              aria-label="Next team member"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
