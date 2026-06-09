import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

const routes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/team",
  "/contact",
  "/consultancy",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  return routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/about" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/consultancy" ? 0.9 : 0.8,
  }));
}
