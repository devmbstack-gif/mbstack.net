import ServicesSection from "@/components/sections/ServicesSection";
import Link from "next/link";
import React from "react";
import { SITE_URL } from "@/constants";

export const metadata = {
  title: "Our Services",
  description:
    "Web development, mobile apps, AI, SEO, and digital marketing. Scalable solutions for modern digital challenges from MB Stack.",
  openGraph: {
    title: "Our Services",
    description:
      "Expertise meets innovation. We combine academic precision with industry-leading technology.",
    url: `${SITE_URL}/services`,
  },
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesPage() {
  return (
    <div>
      <section className="relative pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="relative page-container max-w-7xl text-center">
          <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-brand rounded-full">
            Expertise Meets Innovation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Scalable Solutions for{" "}
            <span className="text-brand block sm:inline mt-1 sm:mt-0">
              Modern Digital Challenges
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Born from the Business Incubation Center (BIC) and evolved into a
            full-stack powerhouse. We combine academic precision with
            industry-leading technology to build your future.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-slate-800">
            <div className="text-center">
              <p className="text-xl sm:text-3xl font-bold">2017</p>
              <p className="text-slate-500 text-[10px] sm:text-sm uppercase tracking-wider mt-1">
                Established
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-3xl font-bold">100%</p>
              <p className="text-slate-500 text-[10px] sm:text-sm uppercase tracking-wider mt-1">
                Type-Safe
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-3xl font-bold">24/7</p>
              <p className="text-slate-500 text-[10px] sm:text-sm uppercase tracking-wider mt-1">
                Support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ServicesSection />
      </section>

      <section className="section-padding bg-slate-50">
        <div className="page-container max-w-7xl">
          <div className="bg-brand rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to start your project?
            </h2>
            <p className="text-white/90 mb-8 sm:mb-10 text-base sm:text-lg max-w-xl mx-auto">
              Whether you have a fully documented scope or just a rough idea, we
              have a way to help you move forward.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-10 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold text-lg sm:text-xl mb-2">Need Strategy?</h4>
                <p className="text-sm text-white/90 mb-5 sm:mb-6">
                  Book a 1-on-1 session to discuss your architecture and
                  roadmap.
                </p>
                <Link
                  href="/consultancy"
                  className="inline-block w-full min-h-12 py-3 bg-white text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition-colors touch-manipulation"
                >
                  Free Consultancy
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold text-lg sm:text-xl mb-2">Just a Question?</h4>
                <p className="text-sm text-white/90 mb-5 sm:mb-6">
                  Reach out for general inquiries or customized partnership
                  requests.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full min-h-12 py-3 bg-white text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition-colors touch-manipulation"
                >
                  Message Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
