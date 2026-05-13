import type { Metadata } from "next";
import "./globals.css";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
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