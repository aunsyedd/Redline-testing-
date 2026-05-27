import type { Metadata } from "next";
import "./globals.css";

import ClientWrapper from "./ClientWrapper";

export const metadata: Metadata = {
  /* ✅ MAIN SEO TITLE (strong keyword + brand) */
  title: {
    default:
      "REDLINE VFX | CGI, 3D Animation & VFX Studio in Saudi Arabia",
    template: "%s | REDLINE VFX",
  },

  /* ✅ SEO DESCRIPTION (optimized for ranking + clicks) */
  description:
    "REDLINE VFX is a premium CGI, 3D animation, and visual effects studio in Saudi Arabia. We create cinematic visuals, product CGI, and high-end digital advertising content for global brands.",

  /* ✅ UNIVERSAL KEYWORDS (consistent everywhere) */
  keywords: [
    "REDLINE VFX",
    "REDLINE Studio",
    "CGI Studio Saudi Arabia",
    "VFX Studio Saudi Arabia",
    "3D Animation Studio",
    "Product CGI Services",
    "Visual Effects Studio",
    "Cinematic Branding",
    "Advertising CGI",
    "High Quality 3D Rendering",
    "Motion Graphics Studio",
    "Digital Advertising Agency",
  ],

  /* ✅ BRAND INFO */
  authors: [{ name: "REDLINE VFX" }],
  creator: "REDLINE VFX",
  publisher: "REDLINE VFX",

  /* ✅ BASE URL */
  metadataBase: new URL("https://www.redlinevfx.com"),

  /* ✅ ICONS */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  /* ✅ OPEN GRAPH (Facebook, WhatsApp, LinkedIn previews) */
  openGraph: {
    title: "REDLINE VFX | CGI & 3D Animation Studio in Saudi Arabia",
    description:
      "We create cinematic CGI, 3D animation, and visual effects for global brands.",
    url: "https://www.redlinevfx.com",
    siteName: "REDLINE VFX",
    images: [
      {
        url: "/whitelogo.png",
        width: 1200,
        height: 630,
        alt: "REDLINE VFX CGI Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* ✅ TWITTER / X PREVIEW */
  twitter: {
    card: "summary_large_image",
    title: "REDLINE VFX | CGI & VFX Studio",
    description:
      "Premium 3D animation, CGI & visual effects studio in Saudi Arabia.",
    images: ["/whitelogo.png"],
  },

  /* ✅ INDEXING CONTROL */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ FAVICON */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* ✅ GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* ✅ PERFORMANCE OPTIMIZATION */}
        <link
          rel="preload"
          href="/images/whitelogo.png"
          as="image"
          type="image/png"
        />

        <link
          rel="preload"
          href="/images/Highlightes.mp4"
          as="video"
          type="video/mp4"
        />

        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* ✅ VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ THEME COLOR */}
        <meta name="theme-color" content="#050505" />

        {/* ✅ STRUCTURED DATA (VERY IMPORTANT FOR GOOGLE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "REDLINE VFX",
              url: "https://www.redlinevfx.com",
              logo: "https://www.redlinevfx.com/whitelogo.png",
              sameAs: [],
            }),
          }}
        />
      </head>

      <body style={{ background: "#000" }}>
        <ClientWrapper>
          <div className="page-fade">{children}</div>
        </ClientWrapper>
      </body>
    </html>
  );
}