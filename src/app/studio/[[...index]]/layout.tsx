import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Satya Safety Net - Sanity Studio",
  description: "Content management system",
  robots: "noindex, nofollow",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
