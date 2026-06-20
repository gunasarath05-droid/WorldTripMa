import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

import { Schema } from "@/components/ui/Schema";
import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://worldtripmaa.com"),
  title: "World Trip – Tours and Travels",
  description: "World Trip is the best tours and travel agency in Chennai & India offering world-class holiday packages, flights and visa services worldwide.",
  openGraph: {
    title: "World Trip – Best Travel Agency in Chennai",
    description: "World Trip is the best tours and travel agency in Chennai & India offering world-class travel services worldwide.",
    url: "https://worldtripmaa.com",
    siteName: "World Trip",
    images: [
      {
        url: "/images/tourist-carrying-luggage.jpg",
        width: 1200,
        height: 630,
        alt: "World Trip - Best Tours & Travel Agency in Chennai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tours & Travel Agency in Chennai | World Trip",
    description: "World Trip is the best tours and travel agency in Chennai & India offering world-class travel services worldwide.",
    images: ["/images/tourist-carrying-luggage.jpg"],
  },
  verification: {
    google: "ev_pX4543MeOjKdxKi5ygh-doU5THYbC-kVvcB227wk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NV8LH8S2');
          `}
        </Script>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FY7P3QRNB6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FY7P3QRNB6');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NV8LH8S2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Schema />
        {/* Background Watermark */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
          <img
            src="/images/WT_Logo_without_BG.png"
            alt=""
            className="w-[80vw] max-w-[800px] object-contain"
          />
        </div>

        <Header />
        <main className="flex-grow bg-slate-50">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
