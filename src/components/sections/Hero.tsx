import Image from "next/image";
import { Star, ShieldCheck, Clock, Award } from "lucide-react";
import QuoteForm from "@/components/lead/QuoteForm";
import { siteConfig } from "@/lib/data/siteConfig";

export default function Hero() {
  return (
    <section className="bg-cream pb-12 pt-8 sm:pb-16 sm:pt-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
          
          {/* 1. Main Bento Card (Image + Title) */}
          <div className="card-notch group relative flex flex-col justify-end overflow-hidden lg:col-span-8 lg:row-span-3 lg:min-h-[560px]">
            <Image
              src="/images/hero-safety-nets.png"
              alt="Safety nets installed in a Bangalore apartment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/40 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-10">
              <div className="animate-fade-up tag-chip mb-4 bg-white/20 text-white backdrop-blur-md">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" /> Premium Safety Nets in Bangalore
              </div>
              <h1 className="font-display animate-fade-up-delay-1 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Safety nets that let you
                <span className="text-gold"> breathe easy</span>
              </h1>
              <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base text-white/90 sm:text-lg">
                Balcony nets, invisible grills, and bird netting installed by a trusted local team. 
                Free site visits and clear quotes across every corner of the city.
              </p>
            </div>
          </div>

          {/* 2. Action Bento Card (Quote Form) */}
          <div className="card-notch flex flex-col justify-center bg-white p-6 shadow-sm lg:col-span-4 lg:row-span-2">
            <QuoteForm source="homepage_hero" heading="Get a free site visit" />
          </div>

          {/* 3. Trust Mini-Cards */}
          <div className="card-notch flex items-center gap-4 bg-cream-dim p-5 transition-colors hover:bg-white lg:col-span-2 lg:row-span-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest to-forest-light text-cream">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-ink">{siteConfig.stats.experienceYears}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-ink/60">Years Local</p>
            </div>
          </div>

          <div className="card-notch flex items-center gap-4 bg-cream-dim p-5 transition-colors hover:bg-white lg:col-span-2 lg:row-span-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest to-forest-light text-cream">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-ink">{siteConfig.stats.warrantyYears}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-ink/60">Warranty</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
