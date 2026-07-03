import Image from "next/image";
import { Star, MapPin, ShieldCheck } from "lucide-react";
import QuoteForm from "@/components/lead/QuoteForm";
import { siteConfig } from "@/lib/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(250,246,238,0.6) 18px, rgba(250,246,238,0.6) 19px), repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(250,246,238,0.6) 18px, rgba(250,246,238,0.6) 19px)",
        }}
      />
      <div className="container-wide relative grid grid-cols-1 items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-cream">
          <div className="tag-chip bg-cream/10 text-gold">
            <Star className="h-3.5 w-3.5 fill-gold" /> Bangalore's own safety net installers
          </div>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Safety nets that let you
            <span className="text-terracotta"> breathe easy</span>, in every corner of Bangalore
          </h1>
          <p className="mt-4 max-w-xl text-base text-cream/75">
            Balcony nets, invisible grills, bird netting and more, installed by a local team that
            knows the city's buildings inside out. Free site visit, honest pricing, work finished
            the same week in most localities.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-terracotta" />
              {siteConfig.stats.installs} installations
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-terracotta" />
              {siteConfig.stats.localities} localities covered
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-gold text-gold" />
              {siteConfig.stats.rating} rated by {siteConfig.stats.reviewCount} customers
            </div>
          </div>
        </div>

        <div className="relative pt-8 sm:pt-10">
          <div className="absolute -top-2 right-6 z-0 hidden w-40 rotate-[6deg] overflow-hidden rounded-md border-4 border-cream shadow-xl sm:block">
            <Image
              src="/images/balcony-safety-nets.png"
              alt="Balcony safety net installed in a Bangalore apartment"
              width={200}
              height={200}
              className="h-32 w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 z-20 hidden rotate-[-3deg] rounded-md bg-cream px-4 py-2 text-xs font-semibold text-forest shadow-lg sm:block">
            5 year warranty on every installation
          </div>
          <div className="card-notch relative z-10 bg-cream p-6 shadow-2xl">
            <QuoteForm source="homepage_hero" />
          </div>
        </div>
      </div>

      <div className="relative bg-cream-dim">
        <div className="container-wide grid grid-cols-2 divide-x divide-line py-4 text-center sm:grid-cols-4">
          <Stat value={siteConfig.stats.experienceYears} label="Years in Bangalore" />
          <Stat value={siteConfig.stats.zones} label="City zones covered" />
          <Stat value={siteConfig.stats.warrantyYears} label="Year warranty" />
          <Stat value={siteConfig.stats.rating} label="Average rating" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-2">
      <p className="font-display text-xl font-semibold text-forest sm:text-2xl">{value}</p>
      <p className="text-xs text-ink/60">{label}</p>
    </div>
  );
}
