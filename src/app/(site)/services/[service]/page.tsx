import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { SERVICES, getService } from "@/lib/data/services";
import { ZONES, localitiesByZone } from "@/lib/data/localities";
import { ServiceIcon } from "@/lib/icon-map";
import { siteConfig, telLink, whatsappLink } from "@/lib/data/siteConfig";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FaqSchema from "@/components/seo/FaqSchema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.name} in Bangalore`,
    description: `${service.summary} Free site visit and same week installation.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);
  const waMessage = `Hi, I would like a free site visit for ${service.name} in Bangalore.`;

  return (
    <>
      <FaqSchema items={service.faqs} />

      <nav className="border-b border-line bg-cream-dim">
        <div className="container-wide flex items-center gap-1.5 py-2.5 text-xs text-ink/55">
          <Link href="/" className="hover:text-forest">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/services" className="hover:text-forest">Services</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink/80">{service.name}</span>
        </div>
      </nav>

      <section className="bg-forest text-cream">
        <div className="container-wide grid grid-cols-1 items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-cream/10 text-gold">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h1 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">{service.name} in Bangalore</h1>
            <p className="mt-3 max-w-xl text-sm text-cream/75">{service.summary}</p>
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
          </div>
          <div className="relative aspect-square overflow-hidden rounded-md border border-cream/15">
            <Image
              src={service.image}
              alt={`${service.name} installation in Bangalore`}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Key features</h2>
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
              <h2 className="font-display text-2xl font-semibold text-ink">Installation process</h2>
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
                {service.name} available across every zone of Bangalore
              </h2>
              <div className="mt-5 space-y-5">
                {ZONES.map((zone) => (
                  <div key={zone.key}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                      {zone.label}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {localitiesByZone(zone.key).slice(0, 8).map((l) => (
                        <Link
                          key={l.slug}
                          href={`/${l.slug}/${service.slug}`}
                          className="tag-chip bg-cream-dim text-ink/70 hover:bg-forest hover:text-cream"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/areas" className="mt-4 inline-block text-sm font-semibold text-forest hover:underline">
                See the full locality list
              </Link>
            </div>

            <FaqAccordion items={service.faqs} title={`FAQs about ${service.shortName.toLowerCase()}`} />
          </div>

          <aside className="space-y-6">
            <div className="card-notch sticky top-24 p-5">
              <p className="text-sm font-semibold text-ink">Get a free quote</p>
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
              <p className="text-sm font-semibold text-ink">Other services</p>
              <ul className="mt-3 space-y-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-ink/70 hover:text-forest">
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
