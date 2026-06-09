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
    description: "Our masterpieces – case studies and projects by MB Soft Solution.",
    url: `${SITE_URL}/portfolio`,
  },
  alternates: { canonical: `${SITE_URL}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <div>
      <main className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Area */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
              Our <span className="text-brand">Masterpieces</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              A curated selection of digital experiences we&apos;ve built for
              ambitious companies worldwide.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest mb-3">
                    <Folder size={14} />
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-full uppercase"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-brand transition-colors"
                  >
                    View Case Study <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full blur-[120px] opacity-20 -mr-32 -mt-32" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Inspired by our work?
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              Let’s collaborate to build something that stands out. We take your
              vision and turn it into code.
            </p>
            <Link
              href="/consultancy"
              className="px-10 py-4 bg-brand text-white font-bold rounded-2xl hover:scale-105 transition-transform inline-block"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
