import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.brandName}, a Bangalore based safety net and invisible grill installation team serving every zone of the city.`,
  alternates: { canonical: "/about" },
};

const REASONS = [
  "We only work in Bangalore, so we know the buildings, the weather, and what actually holds up here.",
  "Free, no obligation site visit before any commitment.",
  "One fixed quote at the site visit, honoured as is.",
  "Our own trained crew does the installation, not rotating subcontractors.",
  "Materials chosen for the specific job, not a one size fits all mesh.",
  "Warranty backed by an actual follow up visit if something comes loose.",
  "Transparent pricing shared upfront, nothing hidden for later.",
  "Work scheduled around your convenience, including weekends.",
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-forest text-cream">
        <div className="container-wide py-14">
          <h1 className="font-display max-w-2xl text-3xl font-semibold sm:text-4xl">
            A Bangalore team, built for Bangalore homes
          </h1>
          <p className="mt-4 max-w-xl text-sm text-cream/75">
            {siteConfig.brandName} started with a simple idea: safety installation work in this city
            should be done by people who actually understand its buildings, not a generic playbook
            copied from somewhere else. Since {siteConfig.founded}, we have focused only on Bangalore,
            learning what holds up through the monsoon, which layouts see the most bird activity, and
            how different apartment structures need different anchoring.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Stat value={siteConfig.stats.installs} label="Installations completed" />
          <Stat value={siteConfig.stats.localities} label="Localities served" />
          <Stat value={siteConfig.stats.experienceYears} label="Years in Bangalore" />
          <Stat value={siteConfig.stats.rating} label="Average rating" />
        </div>
      </section>

      <section className="section-pad bg-cream-dim">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">What we believe in</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              A safety net is only as good as its installation. We would rather lose a job by quoting
              honestly than win it by cutting corners on the mesh or the anchoring. That approach has
              kept most of our new business coming from referrals within the same building or layout.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {REASONS.map((r) => (
              <div key={r} className="flex items-start gap-2.5 text-sm text-ink/75">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-2xl font-semibold text-forest sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-ink/60">{label}</p>
    </div>
  );
}
