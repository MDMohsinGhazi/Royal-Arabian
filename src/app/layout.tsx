import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Royal Arabian Smart Technologies | Total IT Solutions & Enterprise Infrastructure",
  description:
    "Unified engineering architecture across physical low-voltage risers, mission-critical enterprise cloud networks, and autonomous zero-trust cyber defense — consolidated under a single accountable SLA.",
  keywords: [
    "Royal Arabian Smart Technologies",
    "Total IT Solutions UAE",
    "ICT Infrastructure Abu Dhabi",
    "Cyber Security Solutions UAE",
    "Smart Building BMS Automation",
    "Tier-3 4 Data Center Abu Dhabi",
    "SIRA Certified Security UAE",
    "ISO 27001 Certified UAE",
  ],
  authors: [{ name: "Royal Arabian Smart Technologies" }],
  openGraph: {
    title: "Royal Arabian Smart Technologies | Total IT Solutions",
    description:
      "Empowering Businesses with Smart Infrastructure, Robust Security & Intelligent Automation across UAE, India, China & UK.",
    url: "https://ict.royalarabiansmart.com",
    siteName: "Royal Arabian Smart Technologies",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Arabian Smart Technologies",
    description:
      "Total IT Solutions. Smart Infrastructure, Robust Security & Intelligent Automation.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Royal Arabian Smart Technologies",
    alternateName: "RACT UAE",
    url: "https://ict.royalarabiansmart.com",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/x5U1hR6QMnmSTcp9/ract-logonew-VOGlH8zivlPC4uig.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971-2-6212354",
        contactType: "customer service",
        areaServed: ["AE", "IN", "CN", "GB"],
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+971-54-4443635",
        contactType: "emergency",
        areaServed: "AE",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Salam St., Salam HQ Building, P.O. Box 47120",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
  };

  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface font-sans text-on-surface flex flex-col selection:bg-orange-100 selection:text-orange-900">
        {children}
      </body>
    </html>
  );
}
