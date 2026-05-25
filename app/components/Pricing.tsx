"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Pricing() {
  const { tr } = useLanguage();
  const tiers = tr.pricing.tiers.map((tier) => ({ ...tier, popular: false }));

  return (
    <section
      id="pricing"
      style={{
        padding: "100px 40px",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          align-items: stretch;
        }

        @media (max-width: 640px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .pricing-card {
            padding: 20px 16px !important;
            min-height: 260px !important;
          }

          .pricing-card-price {
            font-size: 26px !important;
          }

          .pricing-card-name {
            font-size: 10px !important;
          }

          #pricing {
            padding: 60px 16px !important;
          }
        }
      `}</style>

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
        {tr.pricing.label}
      </div>

      <h2
        className="font-display"
        style={{
          fontSize: "clamp(40px, 5vw, 60px)",
          marginBottom: 56,
          color: "#f0f0f0",
        }}
      >
        {tr.pricing.title}
      </h2>

      <div className="pricing-grid">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className="pricing-card"
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
              className="pricing-card-name"
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
              className="font-display pricing-card-price"
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

      {/* CLICK TO START BUTTONS */}
      <div
        style={{
          marginTop: 60,
          display: "flex",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Link
          href="/Plans"
          style={{
            background: "#222",
            color: "#fff",
            padding: "14px 28px",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.05em",
            border: "1px solid #333",
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
          {tr.pricing.explorePlans}
        </Link>

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
          {tr.pricing.clickStart}
        </Link>
      </div>
    </section>
  );
}
