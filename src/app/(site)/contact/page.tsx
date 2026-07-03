import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import QuoteForm from "@/components/lead/QuoteForm";
import { siteConfig, telLink, whatsappLink } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch for a free safety net site visit anywhere in Bangalore. Call, WhatsApp, or fill the form and we will call you back.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-forest text-cream">
        <div className="container-wide py-14 text-center">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">Let's talk about your space</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70">
            Call us, message on WhatsApp, or leave your details below. We usually respond within the hour
            during working hours.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="card-notch p-6">
              <QuoteForm source="contact_page" heading="Request a free site visit" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a href={telLink()} className="card-notch flex items-center gap-3 p-4 hover:border-forest">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest/10 text-forest">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-ink/55">Call us</p>
                  <p className="text-sm font-semibold text-ink">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={whatsappLink("Hi, I would like to know more about your safety net services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="card-notch flex items-center gap-3 p-4 hover:border-forest"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest/10 text-forest">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-ink/55">WhatsApp</p>
                  <p className="text-sm font-semibold text-ink">Chat with us</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="card-notch flex items-center gap-3 p-4 hover:border-forest">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest/10 text-forest">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-ink/55">Email</p>
                  <p className="text-sm font-semibold text-ink">{siteConfig.email}</p>
                </div>
              </a>
              <div className="card-notch flex items-center gap-3 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest/10 text-forest">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-ink/55">Working hours</p>
                  <p className="text-sm font-semibold text-ink">
                    {siteConfig.hours.days}, {siteConfig.hours.open} to {siteConfig.hours.close}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-notch p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <MapPin className="h-4 w-4 text-terracotta" /> Office address
              </p>
              <p className="mt-2 text-sm text-ink/65">
                {siteConfig.address.line1}, {siteConfig.address.locality}, {siteConfig.address.city} - {siteConfig.address.pincode}
              </p>
            </div>
            <div className="card-notch overflow-hidden">
              <iframe
                title="Location map"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${siteConfig.address.locality}, Bangalore`)}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
