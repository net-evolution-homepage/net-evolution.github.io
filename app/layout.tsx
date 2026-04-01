import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/shared/ScrollToTop";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.net-evolution.de"),
  title: {
    default: "Net-Evolution | IT-Security Audits & Penetration Testing",
    template: "%s | Net-Evolution",
  },
  description:
    "Security Audits, Penetration Testing und NIS2-Compliance für Unternehmen in Deutschland. Methodisch. Dokumentiert. Verwertbar.",
  keywords: [
    "Security Audit",
    "Penetration Testing",
    "NIS2",
    "IT-Sicherheit",
    "Deutschland",
    "Compliance",
    "ISO 27001",
  ],
  authors: [{ name: "Marvin Henrich", url: "https://www.net-evolution.de" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.net-evolution.de",
    siteName: "Net-Evolution",
    title: "Net-Evolution | IT-Security Audits & Penetration Testing",
    description:
      "Security Audits, Penetration Testing und NIS2-Compliance für Unternehmen in Deutschland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Net-Evolution | IT-Security Audits & Penetration Testing",
    description:
      "Security Audits, Penetration Testing und NIS2-Compliance für Unternehmen in Deutschland.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
