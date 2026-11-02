import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-condensed",
  display: "swap",
});

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
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "System Integrators in Abu Dhabi & Dubai UAE | ELV, ICT & Security Solutions | Royal Arabian",
  description:
    "Leading system integrators in Abu Dhabi, Dubai & across UAE. Royal Arabian delivers next-generation ELV systems, ADMCC-compliant surveillance, structured cabling, smart building BMS, and cloud cyber security.",
  keywords: [
    "System Integrators in Dubai",
    "System Integrators in Abu Dhabi",
    "ELV Solutions UAE",
    "Transit System Integrator Style",
    "CCTV Installation Dubai SIRA",
    "ADMCC Approved Integrator Abu Dhabi",
    "Structured Cabling UAE",
    "Smart Building Automation BMS UAE",
    "Royal Arabian Smart Technologies",
  ],
  authors: [{ name: "Royal Arabian Smart Technologies" }],
  openGraph: {
    title: "System Integrators in Abu Dhabi & Dubai UAE | Royal Arabian",
    description:
      "Future-ready system integrators delivering smart, secure, and connected ELV and ICT infrastructure across the UAE.",
    url: "https://ict.royalarabiansmart.com",
    siteName: "Royal Arabian Smart Technologies",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Integrators in Dubai & Abu Dhabi | Royal Arabian",
    description: "Future-ready ELV, ICT infrastructure & smart automation in UAE.",
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
    name: "Royal Arabian Smart Technologies LLC",
    alternateName: "RACT UAE",
    url: "https://ict.royalarabiansmart.com",
    logo: "https://transit-si.com/transit-logo.png",
    description:
      "Leading system integrators in Abu Dhabi & Dubai offering advanced ELV systems & ICT infrastructure solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Salam St., Salam HQ Building, P.O. Box 47120",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      addressCountry: "AE",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971-2-6212354",
        contactType: "sales",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+971-54-4443635",
        contactType: "emergency",
        areaServed: "AE",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] font-sans text-zinc-100 flex flex-col selection:bg-orange-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
