import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data/services";

export default function ServicesShowcase() {
  const featured = SERVICES.slice(0, 9);

  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="tag-chip bg-terracotta/10 text-terracotta">What we install</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Twelve ways to make your home safer
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-forest hover:underline">
            See every service <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`card-notch group overflow-hidden transition hover:border-forest hover:shadow-lg ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "h-56 lg:h-72" : "h-40"}`}>
                <Image
                  src={s.image}
                  alt={`${s.name} in Bangalore`}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 340px, 100vw"}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="tag-chip absolute left-3 top-3 bg-cream/95 text-forest">
                  {s.priceRange.split(",")[0]}
                </span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{s.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{s.tagline}</p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
