import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";
import { client, isSanityConfigured } from "@/sanity/client";

async function saveLeadToSanity(lead: {
  name: string;
  phone: string;
  locality: string;
  service: string;
  message: string;
  source: string;
}) {
  const token = process.env.SANITY_API_TOKEN;
  if (!isSanityConfigured || !token) {
    console.log("[lead] Sanity not configured, skipping CRM save");
    return null;
  }

  const writeClient = client.withConfig({ token, useCdn: false });
  const doc = await writeClient.create({
    _type: "lead",
    name: lead.name,
    phone: lead.phone,
    locality: lead.locality || "Unknown locality",
    service: lead.service || "General enquiry",
    message: lead.message,
    source: lead.source,
    createdAt: new Date().toISOString(),
    status: "New",
  });
  return doc._id;
}

export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    phone?: string;
    locality?: string;
    service?: string;
    message?: string;
    source?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();

  if (name.length < 2 || !/^[6-9]\d{9}$/.test(phone)) {
    return NextResponse.json({ error: "Name and a valid phone number are required" }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    locality: (body.locality || "").trim(),
    service: (body.service || "").trim(),
    message: (body.message || "").trim(),
    source: body.source || "unknown",
  };

  let leadId: string | null = null;
  try {
    leadId = await saveLeadToSanity(lead);
  } catch (err) {
    console.error("[lead] failed to save lead to Sanity", err);
  }

  try {
    await sendLeadEmail(lead);
  } catch (err) {
    console.error("[lead] failed to send notification email", err);
  }

  return NextResponse.json({ success: true, id: leadId });
}
