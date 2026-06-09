import Hero from "@/components/common/Hero";
import BelowHero from "@/components/sections/BelowHero";
import ServicesSection from "@/components/sections/ServicesSection";
import PackagesSection from "@/components/sections/PackagesSection";
import Testomonials from "@/components/sections/Testomonials";
import PartnersAndTech from "@/components/sections/PartnersAndTech";
import { SITE, SEO, SITE_URL } from "@/constants";

export const metadata = {
  title: "Home",
  description: SEO.defaultDescription,
  openGraph: {
    title: `${SITE.name} – ${SITE.tagline}`,
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
      <PackagesSection />
      <Testomonials />
      <PartnersAndTech />
    </div>
  );
}
