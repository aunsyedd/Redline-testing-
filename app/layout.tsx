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
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
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
        {/* Google Fonts */}
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

        {/* Performance */}
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

        <meta name="theme-color" content="#050505" />
        <meta name="application-name" content="REDLINE VFX" />
        <meta name="apple-mobile-web-app-title" content="REDLINE VFX" />

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

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4304952356385358');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4304952356385358&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>

      <body style={{ background: "#000" }}>
        <ClientWrapper>
          <div className="page-fade">{children}</div>
        </ClientWrapper>
      </body>
    </html>
  );
}