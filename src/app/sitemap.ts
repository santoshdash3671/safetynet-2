import type { MetadataRoute } from "next";
import { LOCALITIES } from "@/lib/data/localities";
import { SERVICES } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/areas`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const localityPages: MetadataRoute.Sitemap = LOCALITIES.map((l) => ({
    url: `${base}/areas/${l.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const comboPages: MetadataRoute.Sitemap = LOCALITIES.flatMap((l) =>
    SERVICES.map((s) => ({
      url: `${base}/${l.slug}/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }))
  );

  return [...staticPages, ...servicePages, ...localityPages, ...comboPages];
}
