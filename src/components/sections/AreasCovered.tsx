"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { ZONES, localitiesByZone } from "@/lib/data/localities";

export default function AreasCovered() {
  const [active, setActive] = useState(ZONES[0].key);
  const zone = ZONES.find((z) => z.key === active)!;
  const localities = localitiesByZone(active);

  return (
    <section className="section-pad relative overflow-hidden bg-forest-dark text-cream">
      {/* Subtle gradient accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(37, 99, 235, 0.3) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(56, 189, 248, 0.2) 0%, transparent 70%)",
        }}
      />
      <div className="container-wide relative">
        <p className="tag-chip bg-cream/10 text-gold backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5" /> Coverage
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
          Every zone of Bangalore, one team you can call
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {ZONES.map((z) => (
            <button
              key={z.key}
              onClick={() => setActive(z.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active === z.key
                  ? "bg-gradient-to-r from-terracotta to-[#fb923c] text-white shadow-lg shadow-terracotta/25"
                  : "bg-cream/10 text-cream/75 hover:bg-cream/20"
              }`}
            >
              {z.label}
            </button>
          ))}
        </div>

        <p className="mt-4 max-w-2xl text-sm text-cream/60">{zone.blurb}</p>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {localities.map((l) => (
            <Link
              key={l.slug}
              href={`/areas/${l.slug}`}
              className="group flex items-center justify-between border-b border-cream/10 py-2 text-sm text-cream/75 transition-colors hover:text-gold"
            >
              {l.name}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <Link href="/areas" className="btn btn-terracotta mt-8">
          Browse the full locality list
        </Link>
      </div>
    </section>
  );
}
