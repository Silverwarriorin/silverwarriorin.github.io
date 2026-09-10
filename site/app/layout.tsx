import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://silverwarriorin.github.io";
const title = "Gabriel Womelsdorf | Computer Engineer";
const description =
  "Computer engineer building embedded systems, power electronics, hardware research, and production software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Gabriel Womelsdorf",
    "computer engineering",
    "embedded systems",
    "PCB design",
    "power electronics",
    "software engineering",
  ],
  authors: [{ name: "Gabriel Womelsdorf" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Gabriel Womelsdorf",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
