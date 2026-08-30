import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/team", "/all-team-members"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/team", "/all-team-members"],
      },
    ],
    sitemap: `${SITE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
