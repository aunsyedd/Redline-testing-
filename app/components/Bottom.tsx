"use client";

import Link from "next/link";

export function CaseStudy() {
  return (
    <section
      style={{
        padding: "60px 40px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "#111",
          border: "1px solid #1e1e1e",
          borderLeft: "3px solid #e53232",
          padding: "36px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#e53232",
            fontWeight: 600,
          }}
        >
          Case Study
        </div>

        <h3 style={{ fontSize: 22, fontWeight: 600, color: "#f0f0f0" }}>
          Chef Station — F&B social from zero
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "#777",
            maxWidth: 600,
            lineHeight: 1.7,
          }}
        >
          Built and run by our founder. The same playbook is now available to
          F&B brands across Jeddah and Makkah.
        </p>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(229,50,50,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #2a2a2a, transparent)",
        }}
      />

      <h2
        style={{
          fontSize: "clamp(42px, 6vw, 76px)",
          lineHeight: 1.05,
          maxWidth: 800,
          margin: "0 auto 20px",
          color: "#f0f0f0",
        }}
      >
        Got a brand worth seeing? Let&apos;s make it{" "}
        <span style={{ color: "#e53232" }}>impossible to miss.</span>
      </h2>

      <p style={{ color: "#666", fontSize: 14, marginBottom: 44 }}>
        15-min discovery call. No deck. Just your project, our take.
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            background: "#e53232",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 2,
          }}
        >
          Chat on WhatsApp ↗
        </button>

        <Link
          href="/contact"
          style={{
            background: "transparent",
            color: "#aaa",
            border: "1px solid #333",
            padding: "14px 28px",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.06em",
            cursor: "pointer",
            borderRadius: 2,
            transition: "all 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#666";
            e.currentTarget.style.color = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#333";
            e.currentTarget.style.color = "#aaa";
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: "24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 12, color: "#444" }}>
        © 2024 Redline VFX Studio · Jeddah, KSA
      </span>

      <span style={{ fontSize: 12, color: "#555" }}>
        Engineered & Developed by{" "}
        <a
          href="https://www.nexoratech.info/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#555", textDecoration: "none" }}
        >
          Nexora Tech
        </a>
      </span>

      <div style={{ display: "flex", gap: 24 }}>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/redlinevfx.studio?igsh=MnF2ZXd3YXhseTEx"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            color: "#888",
            textDecoration: "none",
            transition: "0.3s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#e53232")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#888")
          }
        >
          Instagram
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61589104636306"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            color: "#888",
            textDecoration: "none",
            transition: "0.3s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#e53232")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#888")
          }
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}