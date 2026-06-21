import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Users,
} from "lucide-react";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/constants/portfolioCaseStudies";
import { SITE_URL } from "@/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study" };

  return {
    title: `${study.title}, Case Study`,
    description: study.overview,
    openGraph: {
      title: `${study.title} | MB Stack Case Study`,
      description: study.overview,
      url: `${SITE_URL}/portfolio/${study.slug}`,
      images: [{ url: study.image }],
    },
    alternates: { canonical: `${SITE_URL}/portfolio/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-56 sm:h-72 md:h-96 bg-stone-900 overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
        <div className="absolute inset-0 page-container flex flex-col justify-end pb-8 sm:pb-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold mb-6 w-fit transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Masterpieces
          </Link>
          <p className="text-brand text-xs font-bold uppercase tracking-widest mb-2">
            {study.category}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-4xl">
            {study.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-stone-300">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand" />
              {study.region}
            </span>
            <span>{study.client}</span>
            <span className="text-stone-500">·</span>
            <span>{study.duration}</span>
          </div>
        </div>
      </div>

      <div className="page-container max-w-5xl section-padding">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 p-6 rounded-2xl bg-brand/5 border border-brand/15">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand">
              {study.metric}
            </p>
            <p className="text-sm text-stone-600 mt-1">{study.metricLabel}</p>
          </div>
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors shrink-0"
          >
            View Live Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-lg text-stone-600 leading-relaxed mb-12">
          {study.overview}
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {[
            { label: "Problem", text: study.problem, accent: "text-stone-500" },
            { label: "Solution", text: study.solution, accent: "text-brand" },
            { label: "Result", text: study.result, accent: "text-stone-900" },
          ].map((block) => (
            <div
              key={block.label}
              className="rounded-2xl border border-stone-200 p-6 bg-stone-50/50"
            >
              <p
                className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${block.accent}`}
              >
                {block.label}
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                {block.text}
              </p>
            </div>
          ))}
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            End-to-End Journey
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {study.journey.map((step) => (
              <div
                key={step.phase}
                className="relative rounded-2xl border border-stone-200 p-5 bg-white"
              >
                <span className="text-3xl font-black text-brand/20">
                  {step.phase}
                </span>
                <h3 className="text-base font-bold text-stone-900 mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-brand" />
            <h2 className="text-2xl font-bold text-stone-900">User Stories</h2>
          </div>
          <div className="space-y-6">
            {study.userStories.map((story) => (
              <article
                key={story.persona + story.role}
                className="rounded-2xl border border-stone-200 overflow-hidden"
              >
                <div className="bg-stone-900 px-6 py-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold text-white">
                    {story.persona}
                  </h3>
                  <span className="text-brand text-sm font-medium">
                    {story.role}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">
                      Goal
                    </p>
                    <p className="text-sm font-medium text-stone-800">
                      {story.goal}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">
                      Story
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed italic">
                      &ldquo;{story.story}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-stone-100">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand mb-1">
                        Outcome
                      </p>
                      <p className="text-sm text-stone-700 font-medium">
                        {story.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            What We Delivered
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {study.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-stone-600 bg-stone-50 rounded-xl px-4 py-3 border border-stone-100"
              >
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-2 mb-12">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-stone-100 text-stone-500 text-xs font-bold rounded-full uppercase"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="text-center bg-stone-900 rounded-3xl p-10 sm:p-14 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Want results like {study.title}?
          </h2>
          <p className="text-stone-400 mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Tell us your vision, we&apos;ll design, build, and ship a platform
            your users will love.
          </p>
          <Link
            href="/consultancy"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand text-white font-bold rounded-xl hover:scale-105 transition-transform"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
