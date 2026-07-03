import type { Metadata } from "next";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FaqSchema from "@/components/seo/FaqSchema";
import { GENERAL_FAQS } from "@/lib/content/generalFaqs";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about safety net installation, pricing, warranty and coverage across Bangalore.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const serviceFaqs = SERVICES.flatMap((s) => s.faqs.slice(0, 1));

  return (
    <div>
      <section className="bg-forest text-cream">
        <div className="container-wide py-14 text-center">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">Frequently asked questions</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70">
            Everything customers usually ask before booking a site visit.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-narrow space-y-12">
          <FaqSchema items={[...GENERAL_FAQS, ...serviceFaqs]} />
          <FaqAccordion items={GENERAL_FAQS} title="General questions" />
          <FaqAccordion items={serviceFaqs} title="Service specific questions" />
        </div>
      </section>
    </div>
  );
}
