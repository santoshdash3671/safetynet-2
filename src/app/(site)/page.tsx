import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import AreasCovered from "@/components/sections/AreasCovered";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import FaqSchema from "@/components/seo/FaqSchema";
import { GENERAL_FAQS } from "@/lib/content/generalFaqs";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Safety Nets, Invisible Grills & Bird Netting in Bangalore",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <FaqSchema items={GENERAL_FAQS.slice(0, 6)} />
      <Hero />
      <Marquee />
      <ServicesShowcase />
      <AreasCovered />
      <ProcessSteps />
      <WhyUs />
      <Testimonials />
      <section className="section-pad bg-cream">
        <div className="container-narrow">
          <FaqAccordion items={GENERAL_FAQS} title="Frequently asked questions" />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
