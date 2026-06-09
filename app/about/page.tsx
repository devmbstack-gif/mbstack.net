import BelowHero from "@/components/sections/BelowHero";
import Link from "next/link";
import React from "react";
import { SITE_URL } from "@/constants";

export const metadata = {
  title: "About Us",
  description:
    "MB Soft Solution is a high-performance software house. We build full-stack applications that scale and solve business problems with modern tech.",
  openGraph: {
    title: "About Us",
    description:
      "We build the foundation for your digital growth. Modern stack, transparent process, and unparalleled growth with MB Soft Solution.",
    url: `${SITE_URL}/about`,
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          We build the <span className="text-brand">foundation</span> for your
          digital growth.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          MBStack is a high-performance software house specializing in
          full-stack applications that scale. We don&apos;t just write code; we solve
          business problems.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-xl mb-3">Modern Stack</h3>
            <p className="text-slate-600 text-sm">
              Powered by Next.js, Prisma, and PostgreSQL for ultimate speed and
              reliability.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-xl mb-3">Client-First</h3>
            <p className="text-slate-600 text-sm">
              Your goals drive our architecture. We build with the end-user in
              mind.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-xl mb-3">Scalable Results</h3>
            <p className="text-slate-600 text-sm">
              Applications designed to grow from MVP to enterprise-grade
              seamlessly.
            </p>
          </div>
        </div>
      </section>

      <section>
        <BelowHero />
      </section>
      {/* Strategic Links Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ready to collaborate?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/consultancy"
            className="group p-8 border-2 border-slate-200 rounded-2xl hover:border-brand transition-all"
          >
            <h4 className="font-bold text-lg group-hover:text-brand">
              Book a Consultancy →
            </h4>
            <p className="text-slate-500 mt-2">
              Need expert advice on a complex project? Let&apos;s talk strategy.
            </p>
          </Link>

          <Link
            href="/packages"
            className="group p-8 border-2 border-slate-200 rounded-2xl hover:border-brand transition-all"
          >
            <h4 className="font-bold text-lg group-hover:text-brand">
              View Our Packages →
            </h4>
            <p className="text-slate-500 mt-2">
              Clear pricing for defined needs. Perfect for startups and MVPs.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group p-8 border-2 border-slate-200 rounded-2xl hover:border-brand transition-all"
          >
            <h4 className="font-bold text-lg group-hover:text-brand">
              General Inquiry →
            </h4>
            <p className="text-slate-500 mt-2">
              Just have a quick question? Reach out to our team directly.
            </p>
          </Link>
        </div>
      </section>
      <section className="bg-slate-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Why Choose MBStack?</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="text-blue-600 text-2xl">🤝</div>
        <div>
          <h4 className="font-bold text-lg">Trust and Transparency</h4>
          <p className="text-slate-500 text-sm mt-1">
            At the core of our ethos is trust. We believe in transparent communication, 
            ensuring every partner is informed, empowered, and part of a collective vision.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="text-blue-600 text-2xl">🚀</div>
        <div>
          <h4 className="font-bold text-lg">Unparalleled Growth</h4>
          <p className="text-slate-500 text-sm mt-1">
We provide tailored development plans and mentorship. Your project isn&apos;t
            just a job; it&apos;s a journey of growth and professional trajectory.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="text-blue-600 text-2xl">💻</div>
        <div>
          <h4 className="font-bold text-lg">Cutting-Edge Technology</h4>
          <p className="text-slate-500 text-sm mt-1">
            We work with the latest tools—like **Next.js and Prisma**—staying at the 
            forefront of industry trends to craft exceptional solutions.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="text-blue-600 text-2xl">✨</div>
        <div>
          <h4 className="font-bold text-lg">Impactful Work</h4>
          <p className="text-slate-500 text-sm mt-1">
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
};
