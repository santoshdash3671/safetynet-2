import nodemailer from "nodemailer";

export interface LeadPayload {
  name: string;
  phone: string;
  locality?: string;
  service?: string;
  message?: string;
  source: string;
}

export async function sendLeadEmail(lead: LeadPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_NOTIFY_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[lead] SMTP not configured, skipping email. Lead payload:", lead);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: Number(SMTP_PORT) === 465 || !SMTP_PORT,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Satya Safety Net Website" <${SMTP_USER}>`,
    to: LEAD_NOTIFY_EMAIL || SMTP_USER,
    subject: `New lead: ${lead.name} (${lead.locality || "Bangalore"})`,
    html: `
      <h2>New website lead</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(lead.name)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(lead.phone)}</td></tr>
        <tr><td><strong>Locality</strong></td><td>${escapeHtml(lead.locality || "-")}</td></tr>
        <tr><td><strong>Service</strong></td><td>${escapeHtml(lead.service || "-")}</td></tr>
        <tr><td><strong>Message</strong></td><td>${escapeHtml(lead.message || "-")}</td></tr>
        <tr><td><strong>Source</strong></td><td>${escapeHtml(lead.source)}</td></tr>
      </table>
    `,
  });
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
