import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Womelsdorf | Computer Engineer",
  description:
    "Computer engineer building embedded systems, power electronics, hardware research, and production software.",
  keywords: [
    "Gabriel Womelsdorf",
    "computer engineering",
    "embedded systems",
    "PCB design",
    "power electronics",
    "software engineering",
  ],
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
