import ServicesSection from "@/components/sections/ServicesSection";
import Link from "next/link";
import React from "react";
import { SITE_URL } from "@/constants";

export const metadata = {
  title: "Our Services",
  description:
    "Web development, mobile apps, AI, SEO, and digital marketing. Scalable solutions for modern digital challenges from MB Soft Solution.",
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
      {/* Top of Services Page */}
      <section className="relative pt-20 pb-12 overflow-hidden bg-slate-900 text-white">
        {/* Optional: Add a subtle grid background pattern with Tailwind */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase bg-brand rounded-full">
            Expertise Meets Innovation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Scalable Solutions for <br />
            <span className="text-brand">Modern Digital Challenges</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
            Born from the Business Incubation Center (BIC) and evolved into a
            full-stack powerhouse. We combine academic precision with
            industry-leading technology to build your future.
          </p>

          {/* Stats / Proof points */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-slate-800">
            <div className="text-center">
              <p className="text-3xl font-bold">2017</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Established
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Type-Safe (Next.js)
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Expert Support
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ServicesSection />
      </section>
      {/* Bottom of Services Page */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
              Ready to start your project?
            </h2>
            <p className="text-white mb-10 text-lg max-w-xl mx-auto">
              Whether you have a fully documented scope or just a rough idea, we
              have a way to help you move forward.
            </p>

            <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold text-xl mb-2">Need Strategy?</h4>
                <p className="text-sm text-white mb-6">
                  Book a 1-on-1 session to discuss your architecture and
                  roadmap.
                </p>
                <Link
                  href="/consultancy"
                  className="inline-block w-full py-3 bg-white text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition-colors"
                >
                  Free Consultancy
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold text-xl mb-2">Just a Question?</h4>
                <p className="text-sm text-white mb-6">
                  Reach out for general inquiries or customized partnership
                  requests.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full py-3 bg-white text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition-colors"
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
};
