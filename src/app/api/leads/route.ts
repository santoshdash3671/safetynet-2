import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";

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

  try {
    await sendLeadEmail(lead);
  } catch (err) {
    console.error("[lead] failed to send notification email", err);
  }

  return NextResponse.json({ success: true });
}
