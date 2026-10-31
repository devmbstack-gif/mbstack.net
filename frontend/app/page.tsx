import Hero from "@/components/common/Hero";
import BelowHero from "@/components/sections/BelowHero";
import ServicesSection from "@/components/sections/ServicesSection";
import Testomonials from "@/components/sections/Testomonials";
import PartnersAndTech from "@/components/sections/PartnersAndTech";
import TeamGrid from "@/components/team/TeamGrid"; // 1. Yahan import kiya
import { SITE, SEO, SITE_URL } from "@/constants";

export const metadata = {
  title: "Home",
  description: SEO.defaultDescription,
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SEO.defaultDescription,
    url: SITE_URL,
  },
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BelowHero />
      <ServicesSection />
      <Testomonials />
      <PartnersAndTech />

      {/* 2. Footer se pehle Team Section */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="page-container max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-brand font-semibold tracking-widest uppercase mb-2 text-xs sm:text-sm">
              Our Experts
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Meet The Team
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              The creative minds and technical experts turning your ideas into scalable solutions.
            </p>
          </div>

          <TeamGrid />
        </div>
      </section>
    </div>
  );
}