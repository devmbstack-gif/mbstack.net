"use client";
import PackagesSection from "@/components/sections/PackagesSection";
import { PACKAGES } from "@/constants";
import { BarChart, Coffee, Lightbulb, Zap } from "lucide-react";
import { submitConsultancy } from "../actions/consultancy";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ConsultancyPage() {
  const [state, formAction] = useActionState(
    submitConsultancy,
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
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-brand py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Strategy Session
          </h1>
          <p className="text-white text-lg leading-relaxed opacity-90">
            Stop guessing and start building. Book a free 30-minute technical
            consultancy to audit your roadmap and choose the right stack.
          </p>
        </div>
      </section>

      {/* The "What You Get" Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Lightbulb />,
              title: "Tech Stack Audit",
              desc: "Is Next.js right for you? We'll decide.",
            },
            {
              icon: <BarChart />,
              title: "Scalability Plan",
              desc: "PostgreSQL & Prisma architecture setup.",
            },
            {
              icon: <Zap />,
              title: "Timeline Estimate",
              desc: "Realistic MVP development phases.",
            },
            {
              icon: <Coffee />,
              title: "Expert Advice",
              desc: "Direct talk with our lead engineers.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand/30 transition-colors"
            >
              <div className="w-12 h-12 bg-white text-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* the packages section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <PackagesSection />
        </section>

        {/* The Form Section */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="bg-slate-900 text-white p-10 md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let&apos;s talk.</h3>
              <p className="text-slate-400 text-sm mb-8">
                Fill out the form and our team will reach out within 24 hours to
                schedule your session.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { step: "01", label: "Discovery", sub: "Analyze your idea" },
                { step: "02", label: "Strategy", sub: "Define the stack" },
                { step: "03", label: "Execution", sub: "Start development" },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-4">
                  <span className="text-brand font-mono text-xl font-bold">
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

          {/* Right Panel: Form */}
          <form
            className="p-10 md:w-2/3 space-y-6"
            action={formAction}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Full Name
                </label>
                <input
                  name="name"
                  placeholder="E.g. Bilal Ahmad"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Work Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Service Interest
                </label>
                <select
                  name="type"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all"
                >
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>Cloud/DevOps</option>
                  <option>General Strategy</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Select a Package (Optional)
                </label>
                <select
                  name="package"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all font-semibold text-brand"
                >
                  <option value="none">No specific package</option>
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                Estimated Budget
              </label>
              <input
                name="budget"
                type="text"
                placeholder="E.g. $5,000 - $10,000 or 10k"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                Project Details
              </label>
              <textarea
                name="description"
                placeholder="Briefly describe your goals..."
                rows={4}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brand text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-brand/20 transition-all transform hover:-translate-y-1"
            >
              Book My Free Strategy Session
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
