"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Building2,
  FileText,
  GraduationCap,
  MapPin,
  Scissors,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { SALES } from "@/constants";
import DreamCityCasePreview from "@/components/sales/previews/DreamCityCasePreview";
import InGalleryCasePreview from "@/components/sales/previews/InGalleryCasePreview";

type PortfolioProject = {
  name: string;
  category: string;
  summary: string;
};

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  "AI Attorney Website": <FileText className="w-4 h-4" />,
  "AI Attorney Application": <Brain className="w-4 h-4" />,
  "Rebosta AI": <Bot className="w-4 h-4" />,
  Khyatay: <Scissors className="w-4 h-4" />,
  "Al Makki LMS": <GraduationCap className="w-4 h-4" />,
  "Al Makki SIS": <Users className="w-4 h-4" />,
  "Al Makki AMS": <Building2 className="w-4 h-4" />,
};

function PortfolioHubPreview({
  clientName,
  clientImage,
  projects,
  metric,
  metricLabel,
}: {
  clientName: string;
  clientImage: string;
  projects: readonly PortfolioProject[];
  metric: string;
  metricLabel: string;
}) {
  return (
    <div className="h-full min-h-[320px] lg:min-h-[520px] bg-gradient-to-br from-stone-900 via-[#0c2317] to-stone-950 flex flex-col">
      <div className="flex-1 px-5 py-5 sm:px-6 sm:py-6 flex flex-col min-h-0">
        <div className="flex items-center justify-between gap-4 mb-5 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand/30 shrink-0">
              <Image
                src={clientImage}
                alt={clientName}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                Enterprise Portfolio
              </p>
              <p className="text-white font-bold text-base sm:text-lg truncate">
                {clientName}
              </p>
              <p className="text-stone-500 text-xs">
                {projects.length} platforms delivered
              </p>
            </div>
          </div>
          <div className="shrink-0 text-right rounded-xl bg-brand/15 border border-brand/25 px-3 py-2">
            <p className="text-base sm:text-lg font-extrabold text-brand leading-none">
              {metric}
            </p>
            <p className="text-[9px] font-medium text-stone-400 mt-0.5 uppercase tracking-wide">
              {metricLabel}
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 content-start overflow-y-auto pr-0.5 pb-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 sm:p-4"
            >
              <div className="flex items-start gap-2.5 mb-2">
                <span className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 mt-0.5">
                  {PROJECT_ICONS[project.name] ?? <Sparkles className="w-4 h-4" />}
                </span>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold leading-snug">
                    {project.name}
                  </p>
                  <p className="text-[10px] font-medium text-brand/90 mt-0.5">
                    {project.category}
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed pl-[42px]">
                {project.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SalesCaseStudies() {
  const { headline, subheadline, items } = SALES.caseStudies;

  return (
    <section className="relative pt-10 md:pt-14 pb-20 md:pb-28 bg-stone-950 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(49, 181, 116, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(49, 181, 116, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden />
            Proof over promises
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {headline}
          </h2>
          <p className="text-stone-400 mt-4 text-sm md:text-lg leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
          {items.map((study, idx) => {
            const reversed = idx % 2 === 1;
            const href = "href" in study && study.href ? study.href : "";
            const isExternal = href.startsWith("http");
            const projects =
              "projects" in study && study.projects ? study.projects : undefined;
            const hasScreenshot = Boolean(study.projectImage);
            const isPortfolio = Boolean(projects);
            const isDreamCity = study.id === "dreamcity-capital";
            const isInGallery = study.id === "ingallery";

            return (
              <article
                key={study.id}
                className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-stone-900/80 shadow-2xl shadow-black/40"
              >
                <div
                  className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                >
                  <div className="relative w-full lg:w-[52%] shrink-0 overflow-hidden">
                    {isPortfolio ? (
                      <PortfolioHubPreview
                        clientName={study.clientName}
                        clientImage={study.clientImage}
                        projects={projects!}
                        metric={study.metric}
                        metricLabel={study.metricLabel}
                      />
                    ) : isDreamCity ? (
                      <DreamCityCasePreview
                        clientName={study.clientName}
                        clientImage={study.clientImage}
                        projectImage={study.projectImage}
                        metric={study.metric}
                        metricLabel={study.metricLabel}
                      />
                    ) : isInGallery ? (
                      <InGalleryCasePreview
                        clientName={study.clientName}
                        clientImage={study.clientImage}
                        projectImage={study.projectImage}
                        metric={study.metric}
                        metricLabel={study.metricLabel}
                      />
                    ) : hasScreenshot ? (
                      <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[480px]">
                        <Image
                          src={study.projectImage}
                          alt={`${study.company} project`}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 52vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-stone-950/20 lg:to-stone-950/90" />

                        <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white/90 uppercase tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="absolute bottom-5 left-5 lg:bottom-8 lg:left-8">
                          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-brand/95 text-white shadow-lg shadow-brand/20">
                            <TrendingUp className="w-5 h-5 shrink-0" aria-hidden />
                            <div>
                              <p className="text-lg md:text-xl font-extrabold leading-none">
                                {study.metric}
                              </p>
                              <p className="text-[11px] font-medium text-white/80 mt-0.5 uppercase tracking-wide">
                                {study.metricLabel}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 lg:w-[48%] border-t lg:border-t-0 border-white/5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wider mb-5">
                      <span className="inline-flex items-center gap-1.5 text-brand">
                        <MapPin className="w-3.5 h-3.5" aria-hidden />
                        {study.region}
                      </span>
                      <span className="text-stone-600 hidden sm:inline">·</span>
                      <span className="text-stone-400">{study.industry}</span>
                    </div>

                    {!isPortfolio ? (
                      <div className="flex items-center gap-4 mb-6">
                        {study.clientImage ? (
                          <div
                            className={`relative shrink-0 overflow-hidden border-2 border-brand/30 bg-stone-800 ${
                              "clientImageVariant" in study &&
                              study.clientImageVariant === "logo"
                                ? "w-14 h-14 rounded-xl p-2"
                                : "w-14 h-14 rounded-full"
                            }`}
                          >
                            <Image
                              src={study.clientImage}
                              alt={study.clientName}
                              fill
                              className={
                                "clientImageVariant" in study &&
                                study.clientImageVariant === "logo"
                                  ? "object-contain p-1"
                                  : "object-cover"
                              }
                              sizes="56px"
                            />
                          </div>
                        ) : null}
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {study.clientName}
                          </h3>
                          <p className="text-brand text-sm font-semibold mt-0.5">
                            {study.company}
                          </p>
                          <p className="text-stone-500 text-xs mt-0.5">{study.role}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {study.clientName}
                        </h3>
                        <p className="text-brand text-sm font-semibold mt-1">
                          {study.company}
                        </p>
                        <p className="text-stone-500 text-sm mt-0.5">{study.role}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wide bg-brand/10 border border-brand/20 text-brand"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="rounded-xl bg-white/[0.03] border border-white/8 p-4 sm:p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                          Problem
                        </p>
                        <p className="text-stone-300 text-sm leading-[1.65]">
                          {study.problem}
                        </p>
                      </div>
                      <div className="rounded-xl bg-brand/[0.06] border border-brand/15 p-4 sm:p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2">
                          Solution
                        </p>
                        <p className="text-stone-300 text-sm leading-[1.65]">
                          {study.solution}
                        </p>
                      </div>
                      <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">
                          Result
                        </p>
                        <p className="text-white text-sm font-medium leading-[1.65]">
                          {study.result}
                        </p>
                      </div>
                    </div>

                    {href ? (
                      isExternal ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 self-start mt-6 text-sm font-bold text-brand hover:text-white transition-colors group/link"
                        >
                          View live project
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="inline-flex items-center gap-2 self-start mt-6 text-sm font-bold text-brand hover:text-white transition-colors group/link"
                        >
                          Explore our work
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                      )
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
