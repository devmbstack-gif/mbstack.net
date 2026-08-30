import type { MetadataRoute } from "next";
import { SITE_URL, getAllCaseStudySlugs } from "@/constants";

const routes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/consultancy",
  "/sales",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const staticPages = routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: (path === "" || path === "/about" ? "weekly" : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: path === "" ? 1 : path === "/contact" || path === "/consultancy" ? 0.9 : 0.8,
  }));

  const caseStudies = getAllCaseStudySlugs().map((slug) => ({
    url: `${base}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudies];
}
