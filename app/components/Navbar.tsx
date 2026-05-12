"use client";
import { useState, useEffect } from "react";
import LogoImage from "@/images/redline-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

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
      {/* Logo */}
      <div
        onClick={scrollToTop}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img
          src={LogoImage.src}
          alt="logo"
          style={{
            height: 120,
            width: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Links */}
<div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        {["Capabilities", "Selected Work", "Five Ways To Work", "PKG 2 - Growth" ,"Contact"].map(
          (link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "#aaa",
                textDecoration: "none",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
  (e.currentTarget as HTMLElement).style.color = "#f0f0f0";
}}
onMouseLeave={(e) => {
  (e.currentTarget as HTMLElement).style.color = "#aaa";
}}
            >
              {link}
            </a>
          )
        )}
      </div>
    </nav>
    
  );
  
}