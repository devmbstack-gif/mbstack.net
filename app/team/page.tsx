import Link from "next/link";
import React from "react";
import { TEAM_MEMBERS, SITE_URL } from "@/constants";
import Image from "next/image";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the experts at MB Soft Solution. Driven by innovation, defined by our people. Specialists dedicated to your digital growth.",
  openGraph: {
    title: "Our Team",
    description: "The faces behind MBStack – innovation and growth.",
    url: `${SITE_URL}/team`,
  },
  alternates: { canonical: `${SITE_URL}/team` },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- UPPER SECTION: Hero --- */}
      <section className="bg-slate-900 py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-brand font-semibold tracking-widest uppercase mb-4">
            The Faces Behind MBStack
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Driven by Innovation, Defined by Our People
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            From our early days at the University of Gujrat BIC, we’ve gathered
            a diverse group of specialists dedicated to sculpting paths of
            innovation and growth. Meet the experts turning your digital dreams
            into reality.
          </p>
        </div>
      </section>

      {/* --- MIDDLE SECTION: Team Grid --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-2xl bg-brand group-hover:border-brand transition-colors duration-300">
                {/* Note: The orange background reflects your provided image style.
                   Replace src with member.image once files are in /public 
                */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand transition-colors">
                {member.name}
              </h3>
              <p className="text-slate-500 font-medium text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- LOWER SECTION: Recruitment CTA --- */}
      <section className="bg-slate-50 py-20 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Want to join the mission?
            </h2>
            <p className="text-slate-600">
              Our mission is to provide meaningful employment opportunities. We
              offer tailored development plans and mentorship to propel your
              professional trajectory.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand transition-all text-center"
            >
              Apply for a Job
            </Link>
            <Link
              href="/consultancy"
              className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-center"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
