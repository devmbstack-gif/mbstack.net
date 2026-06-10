"use client";

import { Mail, MapPin } from "lucide-react";
import { submitContactForm } from "../actions/contact";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    null,
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else if (state?.success === false) {
      toast.error("Something went wrong");
    }
  }, [state]);
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
              Let’s scale your <span className="text-brand">vision.</span>
            </h1>
            <p className="text-lg text-slate-600">
              From our origins at UOG Business Incubation Center to a global
              software house, we are here to help you innovate.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-brand text-white rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email us</p>
                <p className="text-lg font-bold">info@mbsoftsolution.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-brand text-white rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Our HQ</p>
                <p className="text-lg font-bold">
                  Baghbanpura Chowk, Hafizabad Road, Gujranwala, Pakistan.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-brand rounded-3xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-2">Need a faster route?</h3>
            <p className="text-white mb-4">
              Book a free strategy session and get expert guidance on your project.
            </p>
            <a
              href="/consultancy"
              className="inline-block px-6 py-2 bg-white text-brand font-bold rounded-full text-sm"
            >
              Book Consultancy
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <form action={formAction} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand transition-all shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
