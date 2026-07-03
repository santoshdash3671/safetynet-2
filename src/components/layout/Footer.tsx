import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { ZONES, localitiesByZone } from "@/lib/data/localities";
import { siteConfig, telLink } from "@/lib/data/siteConfig";

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.58 14.2 3.58c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.4V13h2.75v8h3.35Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-cream/85">
      <div className="container-wide grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-white">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold text-cream">
              Satya Safety Net
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-cream/65">
            {siteConfig.description}
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a href={telLink()} className="flex items-center gap-2 hover:text-gold">
              <Phone className="h-4 w-4 text-terracotta" /> {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-gold">
              <Mail className="h-4 w-4 text-terracotta" /> {siteConfig.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              {siteConfig.address.line1}, {siteConfig.address.locality}, {siteConfig.address.city} - {siteConfig.address.pincode}
            </p>
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 hover:bg-terracotta"
              aria-label="Instagram"
            >
              <InstagramGlyph />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 hover:bg-terracotta"
              aria-label="Facebook"
            >
              <FacebookGlyph />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-gold">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-cream/70 hover:text-cream">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-medium text-terracotta hover:text-gold">
                View all services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-gold">Popular Areas</p>
          <ul className="mt-4 space-y-2 text-sm">
            {ZONES.flatMap((z) => localitiesByZone(z.key).slice(0, 2)).map((l) => (
              <li key={l.slug}>
                <Link href={`/areas/${l.slug}`} className="text-cream/70 hover:text-cream">
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas" className="font-medium text-terracotta hover:text-gold">
                View all {siteConfig.stats.localities} localities
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-gold">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-cream/70 hover:text-cream">About Us</Link></li>
            <li><Link href="/faq" className="text-cream/70 hover:text-cream">FAQs</Link></li>
            <li><Link href="/contact" className="text-cream/70 hover:text-cream">Contact</Link></li>
          </ul>
          <div className="mt-6 rounded-md border border-cream/15 p-4">
            <p className="text-sm font-semibold text-cream">Need a quick quote?</p>
            <a href={telLink()} className="btn btn-terracotta mt-3 w-full text-center">
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-8">
        <div className="container-wide">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-cream/50">
            Safety net installation across Bangalore
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-cream/50">
            {ZONES.flatMap((z) => localitiesByZone(z.key)).map((l, i, arr) => (
              <span key={l.slug}>
                <Link href={`/areas/${l.slug}`} className="hover:text-cream">
                  {l.name}
                </Link>
                {i < arr.length - 1 && <span className="ml-4">&middot;</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5">
        <div className="container-wide flex flex-col items-center justify-between gap-2 text-xs text-cream/50 md:flex-row">
          <p>&copy; {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>Serving all {siteConfig.stats.localities} localities across Bangalore.</p>
        </div>
      </div>
    </footer>
  );
}
