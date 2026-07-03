import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";

const REVIEWS = [
  {
    name: "Ananya R.",
    area: "Koramangala",
    text: "The team came for the site visit the next morning itself and finished the balcony netting in about three hours. Clean work, no mess left behind.",
    service: "Balcony Safety Nets",
  },
  {
    name: "Suresh K.",
    area: "Whitefield",
    text: "We had a pigeon problem on our AC ledge for months. Got it sealed properly and it has not come back since.",
    service: "Pigeon Nets",
  },
  {
    name: "Priya M.",
    area: "Jayanagar",
    text: "Invisible grills on all our windows now. You genuinely cannot tell they are there until you look closely, and the kids can lean on the window safely.",
    service: "Invisible Grills",
  },
  {
    name: "Rahul D.",
    area: "Hebbal",
    text: "Quoted a fair price at the visit and stuck to it. No last minute add ons, which was refreshing after two other quotes that kept changing.",
    service: "Children Safety Nets",
  },
  {
    name: "Farida S.",
    area: "HSR Layout",
    text: "Set up a practice net on our terrace for my son. Solid installation, has held up through two monsoons without sagging.",
    service: "Sports Nets",
  },
  {
    name: "Vikram N.",
    area: "Rajajinagar",
    text: "Called them for our villa's open staircase. Fitted the net around the exact angle of the railing, looks neat and does the job.",
    service: "Staircase Safety Nets",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-cream-dim">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="tag-chip bg-forest/10 text-forest">Customer notes</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              What people across the city are saying
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-ink/70">
            <Star className="h-4 w-4 fill-gold text-gold" />
            {siteConfig.stats.rating} average from {siteConfig.stats.reviewCount} customers
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="card-notch p-5">
              <Quote className="h-5 w-5 text-terracotta/50" />
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{r.text}</p>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{r.name}</p>
                  <p className="text-xs text-ink/50">{r.area}, Bangalore</p>
                </div>
                <span className="tag-chip bg-forest/10 text-forest">{r.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
