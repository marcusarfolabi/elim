import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rccg-elimsanctuary.org";

  // Define your static routes
  const routes = [
    "",
    "/pastors",
    "/pillar",
    "/men-fellowship",
    "/giving",
    "/gallery",
    "/resources",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes];
}
