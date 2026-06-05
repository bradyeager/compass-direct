import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compass Direct — Targeted Mailing Lists & Direct Mail Marketing",
  description:
    "Compass Direct delivers accurate, targeted mailing lists — new movers, new homeowners, consumer and business data — plus postcard and email marketing that drives response.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
