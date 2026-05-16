"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoImage from "@/images/whitelogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "View Our Cinematic Shoots", href: "/shoots" },
    { label: "Explore The Plans", href: "/Plans" },
    { label: "PKG 2 - Growth", href: "/Pkg2" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // 🚀 PRELOAD ALL ROUTES IN BACKGROUND
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
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 clamp(16px, 4vw, 40px)",
          height: "clamp(64px, 10vw, 90px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            scrolled || menuOpen
              ? "rgba(10,10,10,0.97)"
              : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom:
            scrolled || menuOpen ? "1px solid #2a2a2a" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          prefetch={true}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            zIndex: 110,
          }}
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={LogoImage.src}
            alt="logo"
            style={{
              height: "clamp(60px, 10vw, 120px)",
              width: "auto",
              display: "block",
            }}
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 2vw, 18px)",
          }}
          className="desktop-links"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={true}
              onMouseEnter={(e) => {
                const linkEl = document.createElement("link");
                linkEl.rel = "prefetch";
                linkEl.href = link.href;
                linkEl.as = "document";
                document.head.appendChild(linkEl);
                (e.currentTarget as HTMLElement).style.color = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#aaa";
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "#aaa",
                cursor: "pointer",
                fontSize: "clamp(9px, 1.2vw, 11px)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* HAMBURGER BUTTON — mobile only */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="hamburger-btn"
          style={{
            display: "none", // shown via media query below
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 110,
            padding: "8px",
            width: 40,
            height: 40,
          }}
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#fff",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#fff",
              transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#fff",
              transition: "all 0.3s ease",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* MOBILE FULL-SCREEN MENU */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(5,5,5,0.98)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
          backdropFilter: "blur(16px)",
        }}
      >
        {links.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            prefetch={true}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#ccc",
              fontSize: "clamp(14px, 4vw, 20px)",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s, transform 0.2s",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#ff4d4d")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#ccc")
            }
          >
            {link.label}
          </Link>
        ))}

        {/* Red accent line */}
        <div
          style={{
            width: 40,
            height: 2,
            background: "#ff4d4d",
            marginTop: 8,
            boxShadow: "0 0 20px rgba(255,77,77,0.5)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-links {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
