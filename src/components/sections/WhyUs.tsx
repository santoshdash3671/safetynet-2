import { ShieldCheck, Clock, Award, Wallet, Users, Wrench } from "lucide-react";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Tested materials, not guesswork",
    desc: "Every mesh we use is UV stabilised and rated for the specific job, from bird netting to fall protection.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    desc: "Site visit within a day or two, and most installations wrapped up the same week.",
  },
  {
    icon: Award,
    title: "9+ years of local experience",
    desc: "We know which buildings need extra anchoring and which localities see the most bird activity.",
  },
  {
    icon: Wallet,
    title: "One quote, stated upfront",
    desc: "The quote you get at the site visit is what you pay. No last minute additions.",
  },
  {
    icon: Users,
    title: "Trained installation crews",
    desc: "Our own trained team does the work, not a rotating cast of subcontractors.",
  },
  {
    icon: Wrench,
    title: "Warranty backed by follow up",
    desc: "If something comes loose within the warranty period, we come back and fix it free of cost.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="tag-chip bg-terracotta/10 text-terracotta">Why residents choose us</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Built for Bangalore's buildings, not a copy paste job
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/65">
            Every apartment block, independent house and layout in this city is a little different.
            We plan each installation around the actual structure in front of us, not a standard
            template, which is why our work holds up through monsoons and years of daily use.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.title} className="group flex gap-3.5 rounded-xl p-3 transition-all duration-200 hover:bg-cream-dim hover:shadow-md">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-forest to-forest-light text-cream shadow-sm">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-ink/60">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
