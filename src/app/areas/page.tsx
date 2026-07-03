import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ZONES, localitiesByZone } from "@/lib/data/localities";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Areas We Cover in Bangalore",
  description: `Safety net, invisible grill and bird netting installation across ${siteConfig.stats.localities} localities in Bangalore, organised by zone.`,
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <div>
      <section className="bg-forest text-cream">
        <div className="container-wide py-14 text-center">
          <div className="tag-chip mx-auto bg-cream/10 text-gold">
            <MapPin className="h-3.5 w-3.5" /> Coverage map
          </div>
          <h1 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
            Every locality we install in, across Bangalore
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70">
            {siteConfig.stats.localities} localities across five zones. Pick yours to see the services
            we offer nearby.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide space-y-12">
          {ZONES.map((zone) => (
            <div key={zone.key}>
              <h2 className="font-display text-2xl font-semibold text-ink">{zone.label}</h2>
              <p className="mt-1.5 max-w-2xl text-sm text-ink/60">{zone.blurb}</p>
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4">
                {localitiesByZone(zone.key).map((l) => (
                  <Link
                    key={l.slug}
                    href={`/areas/${l.slug}`}
                    className="border-b border-line py-1.5 text-sm text-ink/70 hover:text-forest"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
