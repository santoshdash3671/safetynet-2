"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/lib/data/siteConfig";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-cream shadow-[0_-4px_10px_rgba(0,0,0,0.06)] lg:hidden">
      <a
        href={telLink()}
        className="flex items-center justify-center gap-2 bg-forest py-3.5 text-sm font-semibold text-cream"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a
        href={whatsappLink("Hi, I would like a free site visit for safety nets at my place in Bangalore.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#1f8a4c] py-3.5 text-sm font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
