import { SITE_URL } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MB Stack. Scale your vision with our IT solutions, software development, and consultancy. We respond within 24 hours.",
  openGraph: {
    title: "Contact Us",
    description: "Let's scale your vision. Reach our team in Pakistan and USA.",
    url: `${SITE_URL}/contact`,
  },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
