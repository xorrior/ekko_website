import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ekko — Messaging Without Middlemen",
  description:
    "Ekko is a decentralized, encrypted messaging app. No servers. No accounts. No data collection. Messages travel directly between devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased noise-overlay">
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
