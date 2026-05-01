"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        height: "60px",
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
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <span
          className="font-display"
          style={{ fontSize: 22, color: "#e53232", letterSpacing: "0.05em" }}
        >
          RED
        </span>
        <span style={{ color: "#555", fontSize: 20, fontWeight: 300 }}>|</span>
        <span
          className="font-display"
          style={{ fontSize: 21, color: "#f0f0f0", letterSpacing: "0.05em" }}
        >
          LINE
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {["Services", "Work", "Pricing", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: "#aaa",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0f0f0")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#aaa")}
          >
            {link}
          </a>
        ))}
        {/* <button
          style={{
            background: "#e53232",
            color: "#fff",
            border: "none",
            padding: "9px 20px",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 2,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#ff3c3c")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e53232")}
        >
          Get a quote
        </button> */}
      </div>
    </nav>
  );
}
