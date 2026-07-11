import { ZONES, localitiesByZone } from "@/lib/data/localities";
import { Star } from "lucide-react";

export default function Marquee() {
  // Get a representative sample of popular localities to scroll
  const popularLocalities = ZONES.flatMap((z) => localitiesByZone(z.key).slice(0, 3));

  return (
    <div className="relative flex w-full overflow-hidden border-y border-line bg-cream py-3">
      <div className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6">
        {/* We map twice to ensure the infinite scroll loop is seamless */}
        {[...popularLocalities, ...popularLocalities].map((locality, index) => (
          <div key={`${locality.slug}-${index}`} className="flex items-center gap-6">
            <span className="font-display whitespace-nowrap text-sm font-semibold text-ink/75 uppercase tracking-wide">
              {locality.name}
            </span>
            <Star className="h-3 w-3 fill-gold text-gold opacity-50" />
            {index % 3 === 0 && (
              <>
                <span className="whitespace-nowrap text-xs font-semibold text-terracotta uppercase tracking-wide">
                  Free Site Visit
                </span>
                <Star className="h-3 w-3 fill-gold text-gold opacity-50" />
              </>
            )}
            {index % 4 === 0 && (
              <>
                <span className="whitespace-nowrap text-xs font-semibold text-forest-light uppercase tracking-wide">
                  Same Day Install
                </span>
                <Star className="h-3 w-3 fill-gold text-gold opacity-50" />
              </>
            )}
          </div>
        ))}
      </div>
      {/* Left/Right fading gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
