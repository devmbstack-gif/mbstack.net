import { SITE_URL } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Consultancy",
  description:
    "Book a free 30-minute technical consultancy with MB Stack. Tech stack audit, scalability plan, timeline estimate, and expert advice.",
  openGraph: {
    title: "Expert Strategy Session | Free Consultancy",
    description:
      "Stop guessing and start building. Audit your roadmap and choose the right stack.",
    url: `${SITE_URL}/consultancy`,
  },
  alternates: { canonical: `${SITE_URL}/consultancy` },
};

export default function ConsultancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
