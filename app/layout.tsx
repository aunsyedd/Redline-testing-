import type { Metadata } from "next";
import "./globals.css";

import ChatBot from "./components/ChatBot";
import ClientWrapper from "./ClientWrapper";

export const metadata: Metadata = {
  title: "REDLINE VFX — Saudi Arabia CGI & VFX Studio",

  description:
    "Cinematic visuals that make brands impossible to scroll past.",

  keywords: [
    "CGI Studio",
    "VFX Studio",
    "Saudi Arabia CGI",
    "3D Animation",
    "Product CGI",
    "Visual Effects",
    "REDLINE Studio",
  ],

  authors: [{ name: "REDLINE VFX" }],

  creator: "REDLINE VFX",

  metadataBase: new URL("https://www.redlinevfx.com"),

  icons: {
    icon: "/whitelogo.png",
    shortcut: "/whitelogo.png",
    apple: "/whitelogo.png",
  },

  openGraph: {
    title: "REDLINE VFX — Saudi Arabia CGI & VFX Studio",
    description:
      "Cinematic visuals that make brands impossible to scroll past.",
    url: "https://www.redlinevfx.com",
    siteName: "REDLINE VFX",
    images: [
      {
        url: "/whitelogo.png",
        width: 1200,
        height: 630,
        alt: "REDLINE VFX",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "REDLINE VFX — Saudi Arabia CGI & VFX Studio",
    description:
      "Cinematic visuals that make brands impossible to scroll past.",
    images: ["/whitelogo.png"],
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
        {/* FAVICON */}
        <link rel="icon" href="/whitelogo.png" type="image/png" />
        <link rel="shortcut icon" href="/whitelogo.png" />
        <link rel="apple-touch-icon" href="/whitelogo.png" />

        {/* GOOGLE FONTS */}
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

        {/* PRELOAD LOGO */}
        <link
          rel="preload"
          href="/whitelogo.png"
          as="image"
          type="image/png"
        />

        {/* PRELOAD HERO VIDEO */}
        <link
          rel="preload"
          href="/images/Highlightes.mp4"
          as="video"
          type="video/mp4"
        />

        {/* DNS PREFETCH */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* VIEWPORT */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* THEME COLOR */}
        <meta name="theme-color" content="#050505" />

        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RED|LINE",
              url: "https://www.redlinevfx.com",
              logo: "https://www.redlinevfx.com/whitelogo.png",
            }),
          }}
        />
      </head>

      <body style={{ background: "#000" }}>
        <ClientWrapper>
          <div className="page-fade">{children}</div>
        </ClientWrapper>

        {/* <ChatBot /> */}
      </body>
    </html>
  );
}