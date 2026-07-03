import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { LOCALITIES, getLocality, localitiesByZone } from "@/lib/data/localities";
import { SERVICES, getService } from "@/lib/data/services";
import { ServiceIcon } from "@/lib/icon-map";
import { siteConfig, telLink, whatsappLink } from "@/lib/data/siteConfig";
import QuoteForm from "@/components/lead/QuoteForm";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FaqSchema from "@/components/seo/FaqSchema";

export function generateStaticParams() {
  return LOCALITIES.flatMap((l) =>
    SERVICES.map((s) => ({ locality: l.slug, service: s.slug }))
  );
}

function getData(localitySlug: string, serviceSlug: string) {
  const locality = getLocality(localitySlug);
  const service = getService(serviceSlug);
  if (!locality || !service) return null;
  return { locality, service };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locality: string; service: string }>;
}): Promise<Metadata> {
  const { locality: localitySlug, service: serviceSlug } = await params;
  const data = getData(localitySlug, serviceSlug);
  if (!data) return {};
  const { locality, service } = data;

  const title = `${service.name} in ${locality.name}, Bangalore`;
  const description = `${service.name} installation in ${locality.name} near ${locality.landmark}. Free site visit, ${service.priceRange}. Book a slot today.`;

  return {
    title,
    description,
    alternates: { canonical: `/${locality.slug}/${service.slug}` },
    openGraph: { title, description, url: `${siteConfig.siteUrl}/${locality.slug}/${service.slug}` },
  };
}

export default async function LocalityServicePage({
  params,
}: {
  params: Promise<{ locality: string; service: string }>;
}) {
  const { locality: localitySlug, service: serviceSlug } = await params;
  const data = getData(localitySlug, serviceSlug);
  if (!data) notFound();
  const { locality, service } = data;

  const nearby = localitiesByZone(locality.zone).filter((l) => l.slug !== locality.slug).slice(0, 6);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 5);

  const localFaqs = [
    {
      q: `How much does ${service.shortName.toLowerCase()} cost in ${locality.name}?`,
      a: `Pricing usually falls in the range of ${service.priceRange}, though the exact quote depends on the size and shape of the area near ${locality.landmark}. Our team gives you an exact figure after the free site visit.`,
    },
    {
      q: `How fast can someone visit my home in ${locality.name}?`,
      a: `We typically schedule a free site visit in ${locality.name} within 24 to 48 hours of your call, and the installation itself is usually finished the same day.`,
    },
    ...service.faqs,
  ];

  const waMessage = `Hi, I would like a free site visit for ${service.name} at my place in ${locality.name}, Bangalore.`;

  return (
    <>
      <FaqSchema items={localFaqs} />

      <nav className="border-b border-line bg-cream-dim">
        <div className="container-wide flex items-center gap-1.5 py-2.5 text-xs text-ink/55">
          <Link href="/" className="hover:text-forest">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/areas/${locality.slug}`} className="hover:text-forest">{locality.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink/80">{service.name}</span>
        </div>
      </nav>

      <section className="bg-forest text-cream">
        <div className="container-wide grid grid-cols-1 gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="tag-chip bg-cream/10 text-gold">
              <MapPin className="h-3.5 w-3.5" /> {locality.name}, Bangalore &middot; {locality.pincode}
            </div>
            <h1 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {service.name} in {locality.name}
            </h1>
            <p className="mt-3 max-w-xl text-cream/75">{service.tagline}, near {locality.landmark}.</p>
            <p className="mt-4 max-w-xl text-sm text-cream/70">{service.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={telLink()} className="btn btn-terracotta">
                <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
              </a>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>

            <p className="mt-5 text-sm font-medium text-gold">{service.priceRange}</p>
          </div>

          <div className="card-notch bg-cream p-6 shadow-2xl">
            <QuoteForm
              source={`locality_service_${locality.slug}_${service.slug}`}
              defaultLocality={locality.name}
              defaultService={service.slug}
              heading={`Book a free visit in ${locality.name}`}
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Why homes in {locality.name} choose us for {service.shortName.toLowerCase()}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {locality.name} sits in {locality.zone} Bangalore, close to {locality.landmark}. Buildings
                here range from independent homes to mid and high rise apartments, and we tailor every{" "}
                {service.shortName.toLowerCase()} installation to the specific structure rather than a
                one size fits all approach. Our crews are familiar with the common building types across{" "}
                {locality.name} and the surrounding {locality.zone.toLowerCase()} zone.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">How the installation works</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.process.map((step, i) => (
                  <div key={step} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-sm font-semibold text-forest">
                      {i + 1}
                    </span>
                    <p className="text-sm text-ink/70">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Also serving nearby parts of {locality.zone} Bangalore
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/${l.slug}/${service.slug}`}
                    className="tag-chip bg-cream-dim text-ink/70 hover:bg-forest hover:text-cream"
                  >
                    {service.shortName} in {l.name}
                  </Link>
                ))}
              </div>
            </div>

            <FaqAccordion items={localFaqs} title={`FAQs about ${service.shortName.toLowerCase()} in ${locality.name}`} />
          </div>

          <aside className="space-y-6">
            <div className="card-notch sticky top-24 overflow-hidden p-5">
              <div className="relative -mx-5 -mt-5 mb-4 h-36">
                <Image
                  src={service.image}
                  alt={`${service.name} in ${locality.name}`}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-forest/10 text-forest">
                <ServiceIcon name={service.icon} className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-ink">Get a free quote for {locality.name}</p>
              <a href={telLink()} className="btn btn-forest mt-4 w-full">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mt-2.5 w-full"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            <div className="card-notch p-5">
              <p className="text-sm font-semibold text-ink">Other services in {locality.name}</p>
              <ul className="mt-3 space-y-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${locality.slug}/${s.slug}`}
                      className="flex items-center gap-2 text-sm text-ink/70 hover:text-forest"
                    >
                      <ServiceIcon name={s.icon} className="h-3.5 w-3.5" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
