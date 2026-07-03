import { siteConfig } from "@/lib/data/siteConfig";
import { LOCALITIES } from "@/lib/data/localities";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    image: `${siteConfig.siteUrl}/logo.png`,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "Rs 8 - Rs 220",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: siteConfig.hours.open,
      closes: siteConfig.hours.close,
    },
    areaServed: LOCALITIES.map((l) => ({
      "@type": "Place",
      name: `${l.name}, Bangalore`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.rating,
      reviewCount: siteConfig.stats.reviewCount.replace(/\D/g, ""),
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
