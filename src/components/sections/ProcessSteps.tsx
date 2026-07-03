const STEPS = [
  {
    n: "01",
    title: "You call or fill the form",
    desc: "Tell us your locality and what you need. Takes under a minute.",
  },
  {
    n: "02",
    title: "Free site visit",
    desc: "Our team visits within 24 to 48 hours to measure and understand the space.",
  },
  {
    n: "03",
    title: "Fixed quote, no surprises",
    desc: "You get a clear price on the spot. No renegotiation after the work starts.",
  },
  {
    n: "04",
    title: "Installed and inspected",
    desc: "Most jobs finish the same day, with a final walkthrough before we leave.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section-pad bg-cream-dim">
      <div className="container-wide">
        <p className="tag-chip bg-forest/10 text-forest">How it works</p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl">
          From first call to finished installation
        </h2>

        <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" />
          {STEPS.map((step) => (
            <div key={step.n} className="relative">
              <span className="font-display relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-forest bg-cream-dim text-sm font-semibold text-forest">
                {step.n}
              </span>
              <h3 className="font-display mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm text-ink/65">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
