import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "All Services",
  description: `${SERVICES.length} safety net and grill services installed across Bangalore. Balcony nets, invisible grills, bird netting, pool nets and more.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-forest text-cream">
        <div className="container-wide py-14 text-center">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            {SERVICES.length} safety solutions for Bangalore homes
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70">{siteConfig.description}</p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card-notch group overflow-hidden hover:border-forest hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.image}
                  alt={`${s.name} in Bangalore`}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-lg font-semibold text-ink">{s.name}</h2>
                <p className="mt-1.5 text-sm text-ink/65">{s.tagline}</p>
                <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-forest opacity-0 transition group-hover:opacity-100">
                  Details <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
