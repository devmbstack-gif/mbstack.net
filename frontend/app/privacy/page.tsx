import React from "react";
import { SITE_URL } from "@/constants";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and terms of service for MB Stack. How we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy",
    url: `${SITE_URL}/privacy`,
  },
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const lastUpdated = "October 2023";

  return (
    <main className="min-h-screen bg-white section-padding">
      <div className="page-container max-w-4xl">
        <div className="mb-8 sm:mb-12 border-b border-slate-100 pb-6 sm:pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 sm:mb-4 leading-tight">
            Privacy <span className="text-brand">Policy</span>
          </h1>
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12 text-slate-600 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to MBStack. We value your privacy and the trust you
              place in our software house. This Privacy Policy explains how we
              collect, use, and protect your personal information when you use
              our website or contact us for consultancy.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-3 sm:mb-4">
              We collect information that you voluntarily provide to us through
              our contact and consultancy forms, including:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                <span className="font-semibold">Identity Data:</span> Name,
                company name, and job title.
              </li>
              <li>
                <span className="font-semibold">Contact Data:</span> Email
                address and phone number.
              </li>
              <li>
                <span className="font-semibold">Project Data:</span> Project
                descriptions and budget ranges.
              </li>
            </ul>
          </section>

          <section className="bg-slate-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              3. How We Use Your Data
            </h2>
            <p className="mb-3 sm:mb-4">
              The information we collect is used solely for the following
              purposes:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <p className="font-bold text-brand">Service Delivery</p>
                <p className="mt-1">
                  To provide consultancy and deliver the software services you
                  request.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <p className="font-bold text-brand">Communication</p>
                <p className="mt-1">
                  To respond to inquiries and send project-related
                  notifications.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              4. Data Storage & Security
            </h2>
            <p>
              Your data is stored securely in our PostgreSQL database using
              Prisma ORM. We implement industry-standard security measures
              to prevent unauthorized access, alteration, or disclosure of your
              sensitive project information.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              5. Third-Party Sharing
            </h2>
            <p>
              We do not sell or trade your personal information. We only share
              data with trusted third-party service providers (such as email
              delivery systems) necessary to operate our website and conduct our
              business.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold
              about you or request that we delete your information from our
              database. To do so, please contact us at{" "}
              <span className="text-brand font-bold break-all">contact@mbstack.com</span>.
            </p>
          </section>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-500 mb-4 text-sm sm:text-base">
            Have questions about our privacy practices?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center min-h-12 px-6 sm:px-8 py-3 bg-brand text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-brand/20 touch-manipulation"
          >
            Contact MBStack Team
          </a>
        </div>
      </div>
    </main>
  );
}
