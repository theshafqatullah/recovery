import { MetadataRoute } from "next";
import { dubaiAreas, serviceRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://247uaerecovery.ae";
  const lastModified = new Date();

  // Main pages
  const mainPages = [
    "",
    "/services",
    "/about",
    "/contact",
    "/locations",
    "/pricing",
    "/faq",
    "/fleet",
    "/gallery",
    "/blog",
    "/partners",
    "/emergency-tips",
    "/careers",
  ];

  // Service pages
  const servicePages = serviceRoutes.map((service) => `/services/${service}`);

  // Location area pages (Dubai areas)
  const locationPages = dubaiAreas.map((area) => `/locations/${area.slug}`);

  // Legal pages
  const legalPages = ["/terms", "/privacy"];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add main pages with high priority
  mainPages.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.8,
    });
  });

  // Add service pages
  servicePages.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Add location pages (important for local SEO)
  locationPages.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Add legal pages with lower priority
  legalPages.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    });
  });

  return sitemap;
}
