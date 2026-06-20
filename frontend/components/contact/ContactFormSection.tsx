"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { submitContact } from "@/lib/api";

const PROCESS_STEPS = [
  { step: "01", title: "Share your idea", desc: "Tell us goals, timeline, and scope." },
  { step: "02", title: "Get expert review", desc: "Our leads audit feasibility and stack." },
  { step: "03", title: "Launch with clarity", desc: "Receive a roadmap and next steps." },
] as const;

const TRUST_POINTS = [
  "No spam — ever",
  "NDA available on request",
  "Senior engineers review every inquiry",
] as const;

export default function ContactFormSection() {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsPending(true);
    try {
      const result = await submitContact({ name, email, message });
      toast.success(result.message);
      form.reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section className="pb-16 sm:pb-20 md:pb-24">
      <div className="page-container max-w-6xl">
        <div className="overflow-hidden rounded-3xl sm:rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_80px_-24px_rgba(15,23,42,0.18)] flex flex-col lg:flex-row">
          <div className="relative lg:w-[42%] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-7 sm:p-9 md:p-10 flex flex-col gap-8 overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 bg-brand/20 blur-[80px] rounded-full pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
              aria-hidden
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-brand mb-5">
                <Sparkles className="w-3.5 h-3.5" aria-hidden />
                Project inquiry
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                Start the conversation.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Share your vision and we&apos;ll respond with a tailored plan —
                architecture, timeline, and investment range included.
              </p>
            </div>

            <div className="relative space-y-5">
              {PROCESS_STEPS.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="font-mono text-lg font-bold text-brand shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="relative space-y-3 mt-auto pt-2">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <div className="relative rounded-2xl bg-white/5 border border-white/10 p-5">
              <p className="text-sm font-bold text-white mb-1">Need a faster route?</p>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Book a free 30-minute strategy session with our lead engineers.
              </p>
              <Link
                href="/consultancy"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-white transition-colors"
              >
                Book Consultancy
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            data-testid="contact-form"
            className="lg:w-[58%] p-7 sm:p-9 md:p-10 space-y-5 sm:space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                Send us a message
              </h3>
              <p className="text-sm text-slate-500">
                All fields are required. We typically reply within one business day.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full min-h-12 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand/40 focus:bg-white transition-all text-base placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full min-h-12 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand/40 focus:bg-white transition-all text-base placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project — goals, timeline, tech preferences..."
                className="w-full min-h-[160px] px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand/40 focus:bg-white transition-all text-base resize-y placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full min-h-[3.25rem] py-3.5 rounded-xl bg-slate-900 text-white font-bold text-base overflow-hidden shadow-lg hover:shadow-xl hover:bg-brand disabled:opacity-60 disabled:hover:bg-slate-900 transition-all duration-300 touch-manipulation"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-2">
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden />
                    Send Message
                  </>
                )}
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-brand to-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"
                aria-hidden
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
