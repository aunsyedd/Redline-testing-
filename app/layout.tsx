import type { Metadata } from "next";
import "./globals.css";import 
ChatBot from "./components/ChatBot";


import ClientWrapper from "./ClientWrapper";

export const metadata: Metadata = {
  title: "RED|LINE — Saudi Arabia CGI & VFX Studio",
  description: "Cinematic visuals that make brands impossible to scroll past.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* PRELOAD LOGO (shown in loader on every first visit) */}
        <link
          rel="preload"
          href="/images/whitelogo.png"
          as="image"
          type="image/png"
        />

        {/* PRELOAD FIRST VIDEO ONLY (second loads lazily) */}
        <link
          rel="preload"
          href="/images/Highlightes.mp4"
          as="video"
          type="video/mp4"
        />

        {/* DNS PREFETCH FOR FASTER FONT LOAD */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* MOBILE VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* THEME COLOR (browser chrome matches your brand) */}
        <meta name="theme-color" content="#050505" />
      </head>

      <body style={{ background: "#000" }}>
        <ClientWrapper>
          <div className="page-fade">{children}</div>
        </ClientWrapper>
                   <ChatBot />
      </body>
    </html>
  );
}