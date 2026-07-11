import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, MapPin, ChevronRight } from "lucide-react";
import { LOCALITIES, getLocality, localitiesByZone } from "@/lib/data/localities";
import { SERVICES } from "@/lib/data/services";
import { ServiceIcon } from "@/lib/icon-map";
import { siteConfig, telLink, whatsappLink } from "@/lib/data/siteConfig";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FaqSchema from "@/components/seo/FaqSchema";

export function generateStaticParams() {
  return LOCALITIES.map((l) => ({ locality: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locality: string }>;
}): Promise<Metadata> {
  const { locality: slug } = await params;
  const locality = getLocality(slug);
  if (!locality) return {};

  const title = `Safety Net Installation in ${locality.name}, Bangalore`;
  const description = `Balcony safety nets, invisible grills and bird netting installed across ${locality.name} near ${locality.landmark}. Free site visit, same week installation.`;

  return {
    title,
    description,
    alternates: { canonical: `/areas/${locality.slug}` },
  };
}

export default async function LocalityPage({
  params,
}: {
  params: Promise<{ locality: string }>;
}) {
  const { locality: slug } = await params;
  const locality = getLocality(slug);
  if (!locality) notFound();

  const nearby = localitiesByZone(locality.zone).filter((l) => l.slug !== locality.slug).slice(0, 8);

  const faqs = [
    {
      q: `Do you cover all parts of ${locality.name}?`,
      a: `Yes, we install across all of ${locality.name} and the surrounding streets near ${locality.landmark}, including both independent houses and apartment complexes.`,
    },
    {
      q: `Is the site visit in ${locality.name} really free?`,
      a: `Yes, the site visit and measurement are completely free with no obligation to proceed. You only pay once you accept the quote.`,
    },
    {
      q: `What is the fastest service you offer in ${locality.name}?`,
      a: `Balcony safety nets and bird netting are usually the fastest, often completed within a single visit once the quote is approved.`,
    },
  ];

  return (
    <>
      <FaqSchema items={faqs} />

      <nav className="border-b border-line bg-cream-dim">
        <div className="container-wide flex items-center gap-1.5 py-2.5 text-xs text-ink/55">
          <Link href="/" className="hover:text-forest">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/areas" className="hover:text-forest">Areas</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink/80">{locality.name}</span>
        </div>
      </nav>

      <section className="bg-forest text-cream">
        <div className="container-wide py-12 md:py-16">
          <div className="tag-chip bg-cream/10 text-gold">
            <MapPin className="h-3.5 w-3.5" /> {locality.zone} Bangalore &middot; {locality.pincode}
          </div>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Safety net and grill installation in {locality.name}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-cream/70">
            Serving homes and apartments around {locality.landmark} and the rest of {locality.name}, with a
            free site visit and a quote you can trust.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={telLink()} className="btn btn-terracotta">
              <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappLink(`Hi, I would like a free site visit for safety nets in ${locality.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Services available in {locality.name}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${locality.slug}/${s.slug}`}
                className="card-notch flex items-start gap-3 p-4 hover:border-forest hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-forest/10 text-forest">
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-ink">{s.name}</p>
                  <p className="mt-0.5 text-xs text-ink/55">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-dim">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Nearby in {locality.zone} Bangalore
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {nearby.map((l) => (
              <Link
                key={l.slug}
                href={`/areas/${l.slug}`}
                className="tag-chip bg-white text-ink/70 hover:bg-forest hover:text-cream"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-narrow">
          <FaqAccordion items={faqs} title={`FAQs for ${locality.name}`} />
        </div>
      </section>
    </>
  );
}
