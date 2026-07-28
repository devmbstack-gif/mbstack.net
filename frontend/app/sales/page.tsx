import React from "react";
import SalesHero from "@/components/sales/SalesHero";
import SalesTrustLogos from "@/components/sales/SalesTrustLogos";
import SalesProblem from "@/components/sales/SalesProblem";
import SalesExpectations from "@/components/sales/SalesExpectations";
import SalesStickyCards from "@/components/sales/SalesStickyCards";
import SalesVision2030 from "@/components/sales/SalesVision2030";
import SalesPackages from "@/components/sales/SalesPackages";
import SalesCaseStudies from "@/components/sales/SalesCaseStudies";
import Testomonials from "@/components/sections/Testomonials";
import SalesFaq from "@/components/sales/SalesFaq";
import SalesCta from "@/components/sales/SalesCta";
import { SITE_URL } from "@/constants";

export const metadata = {
  title: "Join Us - High-Performance IT Solutions | MB Soft Solution",
  description:
    "Accelerate your business growth with MB Stack's premium IT solutions and custom software development.",
  openGraph: {
    title: "Join MB Stack - High-Performance IT Solutions",
    description:
      "Accelerate your business growth with MB Stack's premium IT solutions.",
    url: `${SITE_URL}/sales`,
  },
  alternates: { canonical: `${SITE_URL}/sales` },
};

export default function SalesPage() {
  return (
    <main>
      <SalesHero />
      <SalesTrustLogos />
      <SalesProblem />
      <SalesExpectations />
      <SalesStickyCards />
      <SalesVision2030 />
      <SalesPackages />
      <SalesCaseStudies />
      <Testomonials />
      <SalesFaq />
      <SalesCta />
    </main>
  );
}
