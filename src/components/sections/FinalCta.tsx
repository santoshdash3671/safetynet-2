import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/lib/data/siteConfig";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-terracotta via-[#fb923c] to-terracotta-dark">
      {/* Modern gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(0,0,0,0.1) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-wide relative flex flex-col items-center gap-5 py-14 text-center text-white md:py-16">
        <h2 className="font-display max-w-2xl text-3xl font-semibold sm:text-4xl">
          Stop worrying about the balcony. Start with a free site visit.
        </h2>
        <p className="max-w-lg text-sm text-white/85">
          Available across all {siteConfig.stats.localities} localities in Bangalore, seven days a week.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a href={telLink()} className="btn rounded-lg bg-white text-terracotta-dark shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20">
            <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hi, I would like a free site visit for safety nets at my place in Bangalore.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
