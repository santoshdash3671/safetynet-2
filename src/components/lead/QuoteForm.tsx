"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { LOCALITIES } from "@/lib/data/localities";
import { SERVICES } from "@/lib/data/services";
import { whatsappLink } from "@/lib/data/siteConfig";

interface QuoteFormProps {
  source: string;
  defaultService?: string;
  defaultLocality?: string;
  compact?: boolean;
  heading?: string;
}

export default function QuoteForm({
  source,
  defaultService = "",
  defaultLocality = "",
  compact = false,
  heading = "Get a free quote today",
}: QuoteFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [locality, setLocality] = useState(defaultLocality);
  const [service, setService] = useState(defaultService);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (name.trim().length < 2) {
      toast.error("Please enter your name");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      toast.error("Please enter a valid 10 digit mobile number");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, locality, service, source }),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
    } catch {
      toast.error("Something went wrong. Please call us directly instead.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    const waMessage = `Hi, I am ${name} from ${locality || "Bangalore"}. I just requested a quote for ${
      service ? SERVICES.find((s) => s.slug === service)?.name : "safety nets"
    } on your website. Please share details.`;
    return (
      <div className="card-notch p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-forest" />
        <p className="font-display text-lg font-semibold text-ink">
          Got it, {name.split(" ")[0]}.
        </p>
        <p className="mt-1 text-sm text-ink/70">
          Our team will call you within the hour. You can also message us directly on WhatsApp right now.
        </p>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp mt-4 w-full"
        >
          Message on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"}>
      {heading && (
        <p className="font-display text-lg font-semibold text-ink">{heading}</p>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-forest-light focus:ring-2 focus:ring-forest-light/20"
        />
        <input
          type="tel"
          placeholder="Mobile number"
          value={phone}
          maxLength={10}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          className="rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-forest-light focus:ring-2 focus:ring-forest-light/20"
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <select
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
          className="rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-forest-light focus:ring-2 focus:ring-forest-light/20"
        >
          <option value="">Your locality</option>
          {LOCALITIES.map((l) => (
            <option key={l.slug} value={l.name}>
              {l.name}
            </option>
          ))}
        </select>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-all focus:border-forest-light focus:ring-2 focus:ring-forest-light/20"
        >
          <option value="">What do you need?</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-terracotta w-full disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          "Request free site visit"
        )}
      </button>
      <p className="text-center text-xs text-ink/50">
        No spam, no obligation. We call once to confirm your visit slot.
      </p>
    </form>
  );
}
