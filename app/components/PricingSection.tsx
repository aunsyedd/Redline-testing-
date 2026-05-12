"use client";

type PricingItem = {
  id: string;
  title: string;
  type: string;
  desc: string;
  price: string;
  sub: string;
};

export default function PricingSection() {
  const items: PricingItem[] = [
    {
      id: "01",
      title: "STARTER",
      type: "CGI RETAINER",
      desc: "Entry-level monthly. Consistent visual content.",
      price: "SAR 4,500",
      sub: "/ month",
    },
    {
      id: "02",
      title: "GROWTH",
      type: "CGI RETAINER",
      desc: "Hero CGI plus supporting content. Most clients land here.",
      price: "SAR 8,500",
      sub: "/ month",
    },
    {
      id: "03",
      title: "CAMPAIGN",
      type: "PROJECT",
      desc: "One-off. Launches, openings, seasonal pushes.",
      price: "SAR 18,500",
      sub: "/ project",
    },
    {
      id: "04",
      title: "FULL FUNNEL",
      type: "CGI + MARKETING",
      desc: "Hero creative plus the engine that distributes it.",
      price: "SAR 14,500",
      sub: "/ month",
    },
    {
      id: "05",
      title: "GROWTH ENGINE",
      type: "MARKETING ONLY",
      desc: "Pure social and performance. Channels run by us.",
      price: "SAR 5,500",
      sub: "/ month",
    },
  ];

  return (
    <section
      id="five ways to work"
      style={{
        padding: "80px 40px",
        background: "#f4f6fb",
        color: "#111",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 42, fontWeight: 700 }}>
          Five ways to work with us.
        </h2>
      </div>

      {/* Rows */}
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "22px 0",
              borderTop: "1px solid #ddd",
            }}
          >
            {/* Left */}
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <span
                style={{
                  color: "#e53232",
                  fontSize: 26,
                  fontWeight: 800,
                  width: 40,
                }}
              >
                {item.id}
              </span>

              <div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 900, // 🔥 BOLD TITLE
                    letterSpacing: "-0.3px",
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: "#777",
                    marginTop: 2,
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.type}
                </div>
              </div>
            </div>

            {/* CENTER */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                maxWidth: 420,
                textAlign: "center",
                fontSize: 13,
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              {item.desc}
            </div>

            {/* Right */}
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 900, // 🔥 BOLD PRICE
                }}
              >
                {item.price}
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: "#777",
                  fontWeight: 500,
                }}
              >
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, fontSize: 10, color: "#888" }}>
        All prices SAR, VAT-exclusive. 15% applied at invoice.
      </div>
    </section>
  );
}