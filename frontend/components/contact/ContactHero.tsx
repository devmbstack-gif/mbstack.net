import Link from "next/link";
import { ArrowRight, Clock, Globe2 } from "lucide-react";
import { COMPANY_STATS, FOOTER, RATING } from "@/constants";

const QUICK_STATS = [
  { value: `${COMPANY_STATS.projectsCompleted}+`, label: "Projects Delivered" },
  { value: `${COMPANY_STATS.happyClients}+`, label: "Happy Clients" },
  { value: "24h", label: "Response Time" },
  { value: "4", label: "Global Offices" },
] as const;

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(49, 181, 116, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(49, 181, 116, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 w-[520px] h-[520px] bg-brand/8 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-slate-900/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"
        aria-hidden
      />

      <div className="page-container relative z-10 max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/15 text-brand text-xs sm:text-sm font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand hero-dot-glow" aria-hidden />
            {RATING.value} client rating
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs sm:text-sm font-semibold">
            <Clock className="w-3.5 h-3.5 text-brand" aria-hidden />
            Reply within 24 hours
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs sm:text-sm font-semibold">
            <Globe2 className="w-3.5 h-3.5 text-brand" aria-hidden />
            Pakistan &amp; USA teams
          </span>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5 sm:mb-6">
            Let&apos;s scale your{" "}
            <span className="bg-gradient-to-r from-brand via-emerald-500 to-brand-dark bg-clip-text text-transparent">
              vision.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            From UOG Business Incubation Center to a global software house, tell us
            about your project and our engineers will map the right path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14">
            <a
              href={`mailto:${FOOTER.email}`}
              className="group inline-flex items-center justify-center gap-2 min-h-12 px-7 py-3 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white font-bold text-sm sm:text-base shadow-[0_12px_32px_-12px_rgba(49,181,116,0.55)] hover:shadow-[0_16px_40px_-12px_rgba(49,181,116,0.65)] hover:-translate-y-0.5 transition-all duration-300 touch-manipulation"
            >
              {FOOTER.email}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/consultancy"
              className="inline-flex items-center justify-center min-h-12 px-7 py-3 rounded-full bg-white text-slate-800 font-bold text-sm sm:text-base border-2 border-slate-200 hover:border-brand/40 hover:bg-brand/5 transition-all duration-300 touch-manipulation"
            >
              Book Free Consultancy
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {QUICK_STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md hover:border-brand/20 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-brand mb-1">
                {stat.value}
              </div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
