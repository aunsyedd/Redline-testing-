"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoImage from "@/images/redline-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (link: string) => {
    // ✅ PAGE ROUTES
    if (link === "View Our Cinematic Shoots") {
      router.push("/shoots");
      return;
    }
    if (link === "PKG 2 - Growth") {
      router.push("/Pkg2");
      return;
    }

    if (link === "Explore The Plans") {
      router.push("/Plans");
      return;
    }

    if (link === "Contact") {
      router.push("/contact");
      return;
    }

    // ✅ fallback scroll for same page sections
    const id = link.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    "View Our Cinematic Shoots",
    "Explore The Plans",
    "PKG 2 - Growth",
    "Contact",
  ];

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
      <div
        onClick={goHome}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <img
          src={LogoImage.src}
          alt="logo"
          style={{ height: 120, width: "auto", display: "block" }}
        />
      </div>

      {/* LINKS */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        {links.map((link) => (
          <button
            key={link}
            onClick={() => handleNavClick(link)}
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
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#f0f0f0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#aaa")
            }
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}