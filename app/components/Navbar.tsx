"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoImage from "@/images/whitelogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    {
      label: "View Our Cinematic Shoots",
      href: "/shoots",
    },
    {
      label: "Explore The Plans",
      href: "/Plans",
    },
    {
      label: "PKG 2 - Growth",
      href: "/Pkg2",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🚀 PRELOAD ALL ROUTES IN BACKGROUND (FAST NAVIGATION)
  useEffect(() => {
    links.forEach((link) => {
      const prefetchLink = document.createElement("link");
      prefetchLink.rel = "prefetch";
      prefetchLink.href = link.href;
      prefetchLink.as = "document";
      document.head.appendChild(prefetchLink);
    });
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2a2a2a" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* LOGO */}
      <Link
        href="/"
        prefetch={true}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <img
          src={LogoImage.src}
          alt="logo"
          style={{ height: 120, width: "auto", display: "block" }}
        />
      </Link>

      {/* LINKS */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            prefetch={true}
            onMouseEnter={() => {
              // ⚡ instant prefetch on hover
              const linkEl = document.createElement("link");
              linkEl.rel = "prefetch";
              linkEl.href = link.href;
              linkEl.as = "document";
              document.head.appendChild(linkEl);
            }}
            style={{
              background: "transparent",
              border: "none",
              color: "#aaa",
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#f0f0f0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#aaa")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}