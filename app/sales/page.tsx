import React from "react";
import SalesHero from "@/components/sales/SalesHero";
import SalesTrustLogos from "@/components/sales/SalesTrustLogos";
import SalesProblem from "@/components/sales/SalesProblem";
import SalesBenefits from "@/components/sales/SalesBenefits";
import SalesStickyCards from "@/components/sales/SalesStickyCards";
import SalesSuccessStories from "@/components/sales/SalesSuccessStories";
import SalesFaq from "@/components/sales/SalesFaq";
import SalesCta from "@/components/sales/SalesCta";
import { SEO, SITE_URL } from "@/constants";

export const metadata = {
  title: "Join Us - High-Performance IT Solutions",
  description: "Accelerate your business growth with MB Stack's premium IT solutions and custom software development.",
  openGraph: {
    title: "Join MB Stack - High-Performance IT Solutions",
    description: "Accelerate your business growth with MB Stack's premium IT solutions.",
    url: `${SITE_URL}/sales`,
  },
};

export default function SalesPage() {
  return (
    <main>
      <SalesHero />
      <SalesTrustLogos />
      <SalesProblem />
      <SalesBenefits />
      <SalesStickyCards />
      <SalesSuccessStories />
      <SalesFaq />
      <SalesCta />
    </main>
  );
}
