import { PROJECTS, SITE_URL } from "@/constants";
import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description:
    "A curated selection of digital experiences we've built for ambitious companies worldwide. Web, mobile, and software projects.",
  openGraph: {
    title: "Portfolio",
    description: "Our masterpieces – case studies and projects by MB Stack.",
    url: `${SITE_URL}/portfolio`,
  },
  alternates: { canonical: `${SITE_URL}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white section-padding">
      <div className="page-container max-w-7xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-3 sm:mb-4 leading-tight">
            Our <span className="text-brand">Masterpieces</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            A curated selection of digital experiences we&apos;ve built for
            ambitious companies worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white border border-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-100 relative">
                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 text-brand font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3">
                  <Folder size={14} className="shrink-0" />
                  {project.category}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 sm:mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-full uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 font-bold text-sm sm:text-base text-slate-900 group-hover:text-brand transition-colors touch-manipulation min-h-11"
                >
                  View Case Study <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 text-center bg-slate-900 rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-brand rounded-full blur-[120px] opacity-20 -mr-24 sm:-mr-32 -mt-24 sm:-mt-32" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative z-10">
            Inspired by our work?
          </h2>
          <p className="text-slate-400 mb-8 sm:mb-10 max-w-xl mx-auto text-sm sm:text-base relative z-10">
            Let&apos;s collaborate to build something that stands out. We take your
            vision and turn it into code.
          </p>
          <Link
            href="/consultancy"
            className="relative z-10 inline-flex items-center justify-center min-h-12 px-8 sm:px-10 py-3.5 sm:py-4 bg-brand text-white font-bold rounded-xl sm:rounded-2xl hover:scale-105 transition-transform touch-manipulation"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
