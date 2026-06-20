import BelowHero from "@/components/sections/BelowHero";
import Link from "next/link";
import React from "react";
import { SITE_URL } from "@/constants";

export const metadata = {
  title: "About Us",
  description:
    "MB Stack is a high-performance software house. We build full-stack applications that scale and solve business problems with modern tech.",
  openGraph: {
    title: "About Us",
    description:
      "We build the foundation for your digital growth. Modern stack, transparent process, and unparalleled growth with MB Stack.",
    url: `${SITE_URL}/about`,
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="section-padding page-container max-w-7xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
          We build the <span className="text-brand">foundation</span> for your
          digital growth.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          MBStack is a high-performance software house specializing in
          full-stack applications that scale. We don&apos;t just write code; we solve
          business problems.
        </p>
      </section>

      <section className="bg-slate-50 section-padding">
        <div className="page-container max-w-5xl grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Modern Stack</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Powered by Next.js, Prisma, and PostgreSQL for ultimate speed and
              reliability.
            </p>
          </div>
          <div className="p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Client-First</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your goals drive our architecture. We build with the end-user in
              mind.
            </p>
          </div>
          <div className="p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-slate-100 sm:col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Scalable Results</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Applications designed to grow from MVP to enterprise-grade
              seamlessly.
            </p>
          </div>
        </div>
      </section>

      <section>
        <BelowHero />
      </section>

      <section className="section-padding page-container max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Ready to collaborate?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <Link
            href="/consultancy"
            className="group p-6 sm:p-8 border-2 border-slate-200 rounded-2xl hover:border-brand transition-all touch-manipulation"
          >
            <h4 className="font-bold text-base sm:text-lg group-hover:text-brand">
              Book a Consultancy →
            </h4>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Need expert advice on a complex project? Let&apos;s talk strategy.
            </p>
          </Link>

          <Link
            href="/portfolio"
            className="group p-6 sm:p-8 border-2 border-slate-200 rounded-2xl hover:border-brand transition-all touch-manipulation"
          >
            <h4 className="font-bold text-base sm:text-lg group-hover:text-brand">
              View Our Portfolio →
            </h4>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Explore real projects we have delivered for clients worldwide.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group p-6 sm:p-8 border-2 border-slate-200 rounded-2xl hover:border-brand transition-all touch-manipulation sm:col-span-2 md:col-span-1"
          >
            <h4 className="font-bold text-base sm:text-lg group-hover:text-brand">
              General Inquiry →
            </h4>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Just have a quick question? Reach out to our team directly.
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 section-padding">
        <div className="page-container max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
            Why Choose MBStack?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="flex gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl shrink-0">🤝</div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg">Trust and Transparency</h4>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                  At the core of our ethos is trust. We believe in transparent communication,
                  ensuring every partner is informed, empowered, and part of a collective vision.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl shrink-0">🚀</div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg">Unparalleled Growth</h4>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                  We provide tailored development plans and mentorship. Your project isn&apos;t
                  just a job; it&apos;s a journey of growth and professional trajectory.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl shrink-0">💻</div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg">Cutting-Edge Technology</h4>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                  We work with the latest tools—like Next.js and Prisma—staying at the
                  forefront of industry trends to craft exceptional solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl shrink-0">✨</div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg">Impactful Work</h4>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                  Be part of projects that matter. From transformative technologies to solutions
                  that reshape industries, we make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
