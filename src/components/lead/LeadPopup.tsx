"use client";

import { useEffect, useState } from "react";
import { X, ShieldCheck } from "lucide-react";
import QuoteForm from "./QuoteForm";

const STORAGE_KEY = "ssn_popup_shown";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setDismissed(true);
      return;
    }

    let triggered = false;

    function trigger() {
      if (triggered) return;
      triggered = true;
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }

    function onScroll() {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && scrolled / max > 0.4) trigger();
    }

    const timer = setTimeout(trigger, 22000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-20 right-4 z-40 w-[92vw] max-w-sm animate-float lg:bottom-6 lg:right-6">
      <div className="relative overflow-hidden rounded-xl border border-line bg-white/95 p-5 shadow-2xl backdrop-blur-md">
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-cream-dim text-ink/60 transition-colors hover:text-ink"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-forest to-forest-light text-cream">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <p className="text-sm font-semibold text-ink">Still deciding?</p>
        </div>
        <QuoteForm source="scroll_popup" compact heading="Get a callback in 60 minutes" />
      </div>
    </div>
  );
}
