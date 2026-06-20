"use client";

import { BarChart, Coffee, Lightbulb, Zap } from "lucide-react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { submitConsultancy } from "@/lib/api";
import { SERVICES } from "@/constants";

export default function ConsultancyPage() {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const type = String(formData.get("type") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();

    if (!name || !email || !type || !budget || !description) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsPending(true);
    try {
      const result = await submitConsultancy({
        name,
        email,
        type,
        budget,
        description,
      });
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
    <main className="min-h-screen bg-white">
      <section className="bg-brand section-padding px-0 text-center text-white">
        <div className="page-container max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Expert Strategy Session
          </h1>
          <p className="text-white text-base sm:text-lg leading-relaxed opacity-90">
            Stop guessing and start building. Book a free 30-minute technical
            consultancy to audit your roadmap and choose the right stack.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="page-container max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {[
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Tech Stack Audit",
                desc: "Is Next.js right for you? We'll decide.",
              },
              {
                icon: <BarChart className="w-5 h-5" />,
                title: "Scalability Plan",
                desc: "PostgreSQL & NestJS architecture setup.",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Timeline Estimate",
                desc: "Realistic MVP development phases.",
              },
              {
                icon: <Coffee className="w-5 h-5" />,
                title: "Expert Advice",
                desc: "Direct talk with our lead engineers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand/30 transition-colors"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white text-brand rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-slate-900 text-white p-6 sm:p-8 md:p-10 md:w-2/5 flex flex-col gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let&apos;s talk.</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Fill out the form and our team will reach out within 24 hours to
                  schedule your session.
                </p>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {[
                  { step: "01", label: "Discovery", sub: "Analyze your idea" },
                  { step: "02", label: "Strategy", sub: "Define the stack" },
                  { step: "03", label: "Execution", sub: "Start development" },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-3 sm:gap-4">
                    <span className="text-brand font-mono text-lg sm:text-xl font-bold shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider">
                        {s.label}
                      </p>
                      <p className="text-xs text-slate-500">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form
              className="p-6 sm:p-8 md:p-10 md:w-3/5 space-y-5 sm:space-y-6"
              onSubmit={handleSubmit}
              data-testid="consultancy-form"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1">
                  <label htmlFor="consultancy-name" className="text-xs font-bold uppercase text-slate-500 ml-1">
                    Full Name
                  </label>
                  <input
                    id="consultancy-name"
                    name="name"
                    placeholder="E.g. Bilal Ahmad"
                    required
                    className="w-full min-h-12 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all text-base"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="consultancy-email" className="text-xs font-bold uppercase text-slate-500 ml-1">
                    Work Email
                  </label>
                  <input
                    id="consultancy-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    className="w-full min-h-12 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all text-base"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="consultancy-type" className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Service Interest
                </label>
                <select
                  id="consultancy-type"
                  name="type"
                  required
                  defaultValue=""
                  className="w-full min-h-12 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all text-base"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="General Strategy">General Strategy</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="consultancy-budget" className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Estimated Budget
                </label>
                <input
                  id="consultancy-budget"
                  name="budget"
                  type="text"
                  required
                  placeholder="E.g. $5,000 - $10,000 or 10k"
                  className="w-full min-h-12 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all text-base"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="consultancy-description" className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Project Details
                </label>
                <textarea
                  id="consultancy-description"
                  name="description"
                  required
                  placeholder="Briefly describe your goals..."
                  rows={4}
                  className="w-full min-h-[120px] p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all text-base resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full min-h-12 bg-brand text-white font-bold py-3.5 rounded-xl hover:shadow-xl hover:shadow-brand/20 transition-all active:scale-[0.98] touch-manipulation disabled:opacity-60"
              >
                {isPending ? "Submitting..." : "Book My Free Strategy Session"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
