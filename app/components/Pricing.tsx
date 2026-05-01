"use client";

const tiers = [
  {
    name: "Starter",
    price: "SAR 3,500",
    period: "per project",
    popular: false,
    features: ["1 CGI hero shot", "30s product anim", "2 revisions"],
  },
  {
    name: "Retainer",
    price: "SAR 8,500",
    period: "per month",
    popular: true,
    features: ["4 videos + photos", "1 CGI piece/mo", "Strategy sync"],
  },
  {
    name: "Campaign",
    price: "SAR 18,000+",
    period: "per launch",
    popular: false,
    features: ["Full launch bundle", "CGI + film + ads", "End-to-end"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "100px 40px",
        maxWidth: 1100,
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
        Pricing
      </div>
      <h2
        className="font-display"
        style={{ fontSize: "clamp(40px, 5vw, 60px)", marginBottom: 56, color: "#f0f0f0" }}
      >
        Pick your tier.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
          alignItems: "start",
        }}
      >
        {tiers.map((tier, i) => (
          <div
            key={i}
            style={{
              background: tier.popular ? "#1a0a0a" : "#111",
              border: tier.popular ? "1px solid #e53232" : "1px solid #1e1e1e",
              padding: "36px 32px",
              position: "relative",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {tier.popular && (
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#e53232",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "4px 14px",
                  borderRadius: 1,
                }}
              >
                Popular
              </div>
            )}
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
            {tier.features.map((f, j) => (
              <div
                key={j}
                style={{
                  fontSize: 13,
                  color: "#aaa",
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "#e53232", fontSize: 10 }}>▸</span>
                {f}
              </div>
            ))}
            <button
              style={{
                width: "100%",
                marginTop: 28,
                padding: "12px",
                background: tier.popular ? "#e53232" : "transparent",
                color: tier.popular ? "#fff" : "#888",
                border: tier.popular ? "none" : "1px solid #333",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 1,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                if (tier.popular) {
                  el.style.background = "#ff3c3c";
                } else {
                  el.style.borderColor = "#666";
                  el.style.color = "#f0f0f0";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                if (tier.popular) {
                  el.style.background = "#e53232";
                } else {
                  el.style.borderColor = "#333";
                  el.style.color = "#888";
                }
              }}
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
