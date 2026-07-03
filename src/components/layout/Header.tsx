"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { ZONES, localitiesByZone } from "@/lib/data/localities";
import { siteConfig, telLink } from "@/lib/data/siteConfig";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/updates", label: "Updates" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="hidden bg-forest text-cream/90 md:block">
        <div className="container-wide flex items-center justify-between py-1.5 text-xs">
          <span>Free site visit across all {siteConfig.stats.localities} Bangalore localities, seven days a week</span>
          <a href={telLink()} className="flex items-center gap-1.5 font-medium hover:text-gold">
            <Phone className="h-3 w-3" /> {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      <div
        className={`bg-cream/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_2px_0_0_var(--color-line)]" : "border-b border-line"
        }`}
      >
        <div className="container-wide flex items-center justify-between py-3.5">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="" width={36} height={36} className="h-9 w-9" priority />
            <span className="font-display text-lg font-semibold leading-tight text-ink">
              Satya Safety Net
              <span className="block text-[11px] font-body font-medium uppercase tracking-wider text-terracotta">
                Bangalore
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link href="/" className="text-sm font-medium text-ink/80 hover:text-forest">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-ink/80 hover:text-forest">
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                  <div className="card-notch grid grid-cols-2 gap-1 p-3 shadow-xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded px-3 py-2 text-sm text-ink/80 hover:bg-cream-dim hover:text-forest"
                      >
                        {s.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="col-span-2 mt-1 rounded bg-cream-dim px-3 py-2 text-center text-sm font-semibold text-forest"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-ink/80 hover:text-forest">
                Areas We Cover <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {areasOpen && (
                <div className="absolute left-1/2 top-full w-[700px] -translate-x-1/2 pt-3">
                  <div className="card-notch grid grid-cols-5 gap-4 p-5 shadow-xl">
                    {ZONES.map((zone) => (
                      <div key={zone.key}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-terracotta">
                          {zone.label}
                        </p>
                        <ul className="space-y-1.5">
                          {localitiesByZone(zone.key)
                            .slice(0, 5)
                            .map((l) => (
                              <li key={l.slug}>
                                <Link
                                  href={`/areas/${l.slug}`}
                                  className="text-sm text-ink/70 hover:text-forest"
                                >
                                  {l.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      href="/areas"
                      className="col-span-5 mt-2 rounded bg-cream-dim px-3 py-2 text-center text-sm font-semibold text-forest"
                    >
                      View all {siteConfig.stats.localities} localities
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-ink/80 hover:text-forest">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={telLink()} className="flex items-center gap-2 text-sm font-semibold text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-dim text-forest">
                <Phone className="h-4 w-4" />
              </span>
              {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-terracotta">
              Get Free Quote
            </Link>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-cream p-5">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="rounded px-2 py-3 text-base font-medium">
                Home
              </Link>
              <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-wide text-terracotta">Services</p>
              {SERVICES.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded px-2 py-2 text-sm text-ink/80"
                >
                  {s.name}
                </Link>
              ))}
              <Link href="/services" onClick={() => setMobileOpen(false)} className="px-2 py-2 text-sm font-semibold text-forest">
                View all services
              </Link>

              <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-wide text-terracotta">Areas</p>
              <Link href="/areas" onClick={() => setMobileOpen(false)} className="px-2 py-2 text-sm font-semibold text-forest">
                Browse all {siteConfig.stats.localities} localities
              </Link>

              <div className="my-3 h-px bg-line" />
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="rounded px-2 py-3 text-base font-medium">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-3 pt-6">
              <a href={telLink()} className="btn btn-forest w-full">
                <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-terracotta w-full">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
