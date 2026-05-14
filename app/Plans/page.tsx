"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";

type PricingItem = {
  id: string;
  title: string;
  type: string;
  desc: string;
  price: string;
  sub: string;
};

export default function PricingPage() {
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
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#050505",
          color: "#f1f1f1",
          paddingTop: "50px",
        }}
      >
        <section
          style={{
            padding: "80px 40px",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: 42,
              fontWeight: 700,
              marginBottom: 40,
              color: "#ffffff",
            }}
          >
            Five ways to work with us.
          </h2>

          <div>
            {items.map((item, index) => {
              const planValue = `${item.id} ${item.title} - ${item.price} ${item.sub}`;

              return (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 0",
                    borderTop: "1px solid #1a1a1a",
                  }}
                >
                  {/* LEFT */}
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      alignItems: "center",
                    }}
                  >
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
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        {item.title}
                      </div>

                      <div
                        style={{
                          fontSize: 11,
                          color: "#888",
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
                      color: "#aaa",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div>

                  {/* RIGHT */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        {item.price}
                      </div>

                      <div
                        style={{
                          fontSize: 11,
                          color: "#888",
                          fontWeight: 500,
                        }}
                      >
                        {item.sub}
                      </div>
                    </div>

                    {/* ANIMATED ARROW BUTTON */}
                    <Link
                      href={`/contact?plan=${encodeURIComponent(planValue)}`}
                      style={{
                        background: "transparent",
                        border: "1px solid #2a2a2a",
                        color: "#e53232",
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: 18,
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "#e53232";
                        el.style.color = "#fff";
                        el.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "transparent";
                        el.style.color = "#e53232";
                        el.style.transform = "translateX(0px)";
                      }}
                    >
                      →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 20,
              fontSize: 11,
              color: "#666",
            }}
          >
            All prices SAR, VAT-exclusive. 15% applied at invoice.
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}