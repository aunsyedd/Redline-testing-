"use client";

import Link from "next/link";

const tiers = [
  {
    name: "One-off CGI Piece",
    price: "SAR 4,500",
    period: "per project",
    popular: false,
    features: [
      "High-end CGI visual",
      "Product or brand-focused",
      "2 revision rounds",
    ],
  },
  {
    name: "3D Architectural Visualisation",
    price: "SAR 2,500",
    period: "per scene",
    popular: false,
    features: [
      "Interior / exterior renders",
      "Realistic lighting & textures",
      "Scene-based pricing",
    ],
  },
  {
    name: "Full Production Day",
    price: "SAR 3,500",
    period: "per day",
    popular: false,
    features: [
      "Professional shoot setup",
      "Camera + lighting crew",
      "On-site production support",
    ],
  },
  {
    name: "Green-Screen Production",
    price: "SAR 5,500",
    period: "per day",
    popular: false,
    features: [
      "Green-screen studio setup",
      "Advanced compositing ready",
      "Lighting & backdrop included",
    ],
  },
  {
    name: "Voiceover (AR / EN)",
    price: "SAR 1,500",
    period: "per project",
    popular: false,
    features: [
      "Arabic or English VO",
      "Studio-quality delivery",
      "Commercial-ready audio",
    ],
  },
  {
    name: "Performance Ad Management",
    price: "SAR 2,500",
    period: "+ 15% over SAR 5K spend",
    popular: false,
    features: [
      "Campaign optimisation",
      "Meta / TikTok ad handling",
      "Performance reporting",
    ],
  },
  {
    name: "Community Management",
    price: "SAR 2,500",
    period: "per platform",
    popular: false,
    features: [
      "Daily audience engagement",
      "Comment & DM handling",
      "Brand tone consistency",
    ],
  },
  {
    name: "Additional Revision Round",
    price: "SAR 800",
    period: "per round",
    popular: false,
    features: [
      "Extra creative revisions",
      "Fast implementation",
      "Feedback-based refinements",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "100px 40px",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#e53232",
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        Production Plans
      </div>

      <h2
        className="font-display"
        style={{
          fontSize: "clamp(40px, 5vw, 60px)",
          marginBottom: 56,
          color: "#f0f0f0",
        }}
      >
        Mix & Match
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {tiers.map((tier, i) => (
          <div
            key={i}
            style={{
              background: tier.popular ? "#1a0a0a" : "#111",
              border: tier.popular
                ? "1px solid #e53232"
                : "1px solid #1e1e1e",
              padding: "36px 32px",
              position: "relative",
              transition: "all 0.25s ease",
              minHeight: 320,
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#666",
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              {tier.name}
            </div>

            <div
              className="font-display"
              style={{
                fontSize: 42,
                color: tier.popular ? "#e53232" : "#f0f0f0",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {tier.price}
            </div>

            <div
              style={{
                fontSize: 12,
                color: "#555",
                marginBottom: 32,
              }}
            >
              {tier.period}
            </div>

            <div
              style={{
                height: "1px",
                background: tier.popular ? "#3a1a1a" : "#1e1e1e",
                marginBottom: 24,
              }}
            />

            <div style={{ flex: 1 }}>
              {tier.features.map((f, j) => (
                <div
                  key={j}
                  style={{
                    fontSize: 13,
                    color: "#aaa",
                    marginBottom: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "#e53232", fontSize: 10 }}>
                    ▸
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CLICK TO START BUTTON */}
      <div
        style={{
          marginTop: 60,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          href="/contact"
          style={{
            background: "#e53232",
            color: "#fff",
            padding: "14px 28px",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.05em",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            transition: "all 0.2s ease",
            textDecoration: "none",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.85";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
          }}
        >
          Click to start
        </Link>
      </div>
    </section>
  );
}