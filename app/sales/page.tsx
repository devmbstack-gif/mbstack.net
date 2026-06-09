import React from "react";
import SalesHero from "@/components/sales/SalesHero";
import SalesProblem from "@/components/sales/SalesProblem";
import SalesProcess from "@/components/sales/SalesProcess";
import SalesStories from "@/components/sales/SalesStories";
import SalesSuccessStories from "@/components/sales/SalesSuccessStories";
import SalesWhyUs from "@/components/sales/SalesWhyUs";
import SalesFaq from "@/components/sales/SalesFaq";
import SalesCta from "@/components/sales/SalesCta";
import StatsSection from "@/components/sections/StatsSection";
import ConsultancyBanner from "@/components/sections/ConsultancyBanner";
import { SITE_URL } from "@/constants";

export const metadata = {
  title: "Operational Friction Assessment - MB Stack",
  description:
    "Eliminate operational friction, connect disconnected systems, and build the infrastructure needed to scale without replacing what already works.",
  openGraph: {
    title: "Operational Friction Assessment - MB Stack",
    description:
      "We help growing companies eliminate operational friction and scale with confidence.",
    url: `${SITE_URL}/sales`,
  },
};

export default function SalesPage() {
  return (
    <main>
      <SalesHero />
      <SalesProblem />
      <SalesProcess />
      <SalesStories />
      <SalesSuccessStories />
      <ConsultancyBanner />
      <SalesWhyUs />
      <SalesFaq />
      <SalesCta />
    </main>
  );
}
