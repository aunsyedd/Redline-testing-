import type { Metadata } from "next";
import "./globals.css";

import ClientWrapper from "./ClientWrapper";

export const metadata: Metadata = {
  /* ✅ MAIN SEO TITLE */
  title: {
    default:
      "REDLINE VFX | CGI, 3D Animation & VFX Studio in Saudi Arabia",
    template: "%s | REDLINE VFX",
  },

  /* ✅ SEO DESCRIPTION */
  description:
    "REDLINE VFX is a premium CGI, 3D animation, and visual effects studio in Saudi Arabia. We create cinematic visuals, product CGI, and high-end digital advertising content for global brands.",

  /* ✅ KEYWORDS */
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

  /* ✅ BRAND */
  authors: [{ name: "REDLINE VFX" }],
  creator: "REDLINE VFX",
  publisher: "REDLINE VFX",

  /* ✅ BASE URL */
  metadataBase: new URL("https://www.redlinevfx.com"),

  /* ✅ ALL ICONS IMPLEMENTED */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],

    shortcut: ["/favicon.ico"],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "REDLINE VFX | CGI & 3D Animation Studio in Saudi Arabia",
    description:
      "We create cinematic CGI, 3D animation, and visual effects for global brands.",
    url: "https://www.redlinevfx.com",
    siteName: "REDLINE VFX",

    images: [
      // {
      //   url: "/whitelogo.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "REDLINE VFX CGI Studio",
      // },
    ],

    locale: "en_US",
    type: "website",
  },

  /* ✅ TWITTER / X */
  twitter: {
    card: "summary_large_image",
    title: "REDLINE VFX | CGI & VFX Studio",
    description:
      "Premium 3D animation, CGI & visual effects studio in Saudi Arabia.",
    images: ["/whitelogo.png"],
  },

  /* ✅ ROBOTS */
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  /* ✅ PWA MANIFEST */
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <head>
  {/* ✅ FAVICON — Primary (required for Google) */}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="shortcut icon" href="/favicon.ico" />

  {/* ✅ PNG FAVICONS */}
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

  {/* ✅ APPLE */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

  {/* ✅ ANDROID */}
  <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

  {/* ✅ MANIFEST */}
  <link rel="manifest" href="/site.webmanifest" />

  {/* ✅ GOOGLE FONTS */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

  {/* ✅ PERFORMANCE */}
  <link rel="preload" href="/images/whitelogo.png" as="image" type="image/png" />
  <link rel="preload" href="/images/Highlightes.mp4" as="video" type="video/mp4" />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

  {/* ✅ MOBILE & THEME */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#050505" />

  {/* ✅ PWA */}
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="REDLINE VFX" />
  <meta name="application-name" content="REDLINE VFX" />

  {/* ✅ STRUCTURED DATA */}
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