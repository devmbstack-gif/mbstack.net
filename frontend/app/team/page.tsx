import Link from "next/link";
import React from "react";
import { SITE_URL } from "@/constants";
import TeamGrid from "@/components/team/TeamGrid";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the experts at MB Stack. Driven by innovation, defined by our people. Specialists dedicated to your digital growth.",
  openGraph: {
    title: "Our Team",
    description: "The faces behind MBStack: innovation and growth.",
    url: `${SITE_URL}/team`,
  },
  alternates: { canonical: `${SITE_URL}/team` },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 section-padding px-0 text-center text-white">
        <div className="page-container max-w-4xl">
          <h2 className="text-brand font-semibold tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm">
            The Faces Behind MBStack
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Driven by Innovation, Defined by Our People
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed">
            From our early days at the University of Gujrat BIC, we&apos;ve gathered
            a diverse group of specialists dedicated to sculpting paths of
            innovation and growth. Meet the experts turning your digital dreams
            into reality.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="page-container max-w-7xl">
          <TeamGrid />
        </div>
      </section>

      <section className="bg-slate-50 section-padding border-t border-slate-200">
        <div className="page-container max-w-5xl">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 text-center md:text-left">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-slate-900">
                Want to join the mission?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our mission is to provide meaningful employment opportunities. We
                offer tailored development plans and mentorship to propel your
                professional trajectory.
              </p>
            </div>
            <div className="flex flex-col w-full sm:flex-row gap-3 sm:gap-4 md:w-auto shrink-0">
              <Link
                href="/contact"
                className="min-h-12 px-6 sm:px-8 py-3.5 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-all text-center touch-manipulation"
              >
                Apply for a Job
              </Link>
              <Link
                href="/consultancy"
                className="min-h-12 px-6 sm:px-8 py-3.5 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-center touch-manipulation"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
