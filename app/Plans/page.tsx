"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PricingPage() {
  const router = useRouter();

  // ✅ FIXED
  const { tr, isRtl } = useLanguage();
  const items = tr.plansPage.items;

  // ✅ FIXED
  const arrow = isRtl ? "←" : "→";

  // ✅ Store the target id in sessionStorage, then navigate to /Pkg2
  const handlePlanClick = (id: string) => {
    sessionStorage.setItem("scrollToPlan", id);
    router.push("/Pkg2");
  };

  return (
    <>
      <Navbar />

      <main
        dir={isRtl ? "rtl" : "ltr"}
        style={{
          minHeight: "100vh",
          background: "#050505",
          color: "#f1f1f1",
          paddingTop: "clamp(64px, 10vw, 90px)",
        }}
      >
        <section
          style={{
            padding: "clamp(48px, 8vw, 100px) clamp(20px, 6vw, 60px)",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "clamp(40px, 6vw, 72px)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: "clamp(16px, 2.5vw, 24px)",
              }}
            >
              <div style={{ width: 32, height: 1, background: "#e53232" }} />
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#e53232",
                  fontWeight: 700,
                }}
              >
                {tr.plansPage.label}
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 58px)",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              {tr.plansPage.title}
              <br />
              <span style={{ color: "#333", fontWeight: 300 }}>
                {tr.plansPage.titleSub}
              </span>
            </h2>
          </div>

          {/* Table header — desktop only */}
          <div
            className="pricing-table-header"
            style={{
              display: "grid",
              gridTemplateColumns: "52px 1fr 1fr 180px 44px",
              gap: "clamp(12px, 2vw, 24px)",
              padding: "0 0 12px",
              borderBottom: "1px solid #1a1a1a",
              marginBottom: 0,
              alignItems: "center",
            }}
          >
            {tr.plansPage.tableHeaders.map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6b6b6b",
                  fontWeight: 600,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          <div>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    borderTop: "1px solid #141414",
                    transition: "background 0.25s ease",
                  }}
                  className={`pricing-row${
                    item.featured ? " pricing-row-featured" : ""
                  }`}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(229,50,50,0.025)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  {/* Featured tag */}
                  {item.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        background:
                          "linear-gradient(90deg, #e53232 0%, transparent 60%)",
                        opacity: 0.6,
                      }}
                    />
                  )}

                  {/* DESKTOP ROW */}
                  <div
                    className="pricing-row-desktop"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "52px 1fr 1fr 180px 44px",
                      gap: "clamp(12px, 2vw, 24px)",
                      padding: "clamp(20px, 3vw, 28px) 0",
                      alignItems: "center",
                    }}
                  >
                    {/* ID */}
                    <span
                      style={{
                        color: "#e53232",
                        fontSize: "clamp(13px, 2vw, 16px)",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        opacity: 0.7,
                      }}
                    >
                      {item.id}
                    </span>

                    {/* Title + Type */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "clamp(14px, 2vw, 18px)",
                            fontWeight: 700,
                            color: "#f5f5f5",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {item.title}
                        </span>

                        {item.featured && (
                          <span
                            style={{
                              fontSize: 8,
                              letterSpacing: "0.16em",
                              textTransform: "uppercase",
                              color: "#e53232",
                              background: "rgba(229,50,50,0.1)",
                              border: "1px solid rgba(229,50,50,0.2)",
                              padding: "3px 8px",
                              fontWeight: 700,
                            }}
                          >
                            {tr.plansPage.popular}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: 10,
                          color: "#6b6b6b",
                          marginTop: 4,
                          fontWeight: 600,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.type}
                      </div>
                    </div>

                    {/* Desc */}
                    <div
                      style={{
                        fontSize: "clamp(11px, 1.5vw, 13px)",
                        color: "#6b6b6b",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.desc}
                    </div>

                    {/* Price */}
                    <div>
                      <div
                        style={{
                          fontSize: "clamp(14px, 2vw, 20px)",
                          fontWeight: 700,
                          color: "#f0f0f0",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {item.price}
                      </div>

                      <div
                        style={{
                          fontSize: 10,
                          color: "#6b6b6b",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginTop: 2,
                        }}
                      >
                        {item.sub}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <button
                        onClick={() => handlePlanClick(item.id)}
                        style={{
                          background: "transparent",
                          border: "1px solid #1e1e1e",
                          color: "#e53232",
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          fontSize: 16,
                          transition: "all 0.25s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          flexShrink: 0,
                          position: "relative",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;

                          el.style.background = "#e53232";
                          el.style.color = "#fff";
                          el.style.borderColor = "#e53232";
                          el.style.transform = isRtl
                            ? "translateX(-3px)"
                            : "translateX(3px)";

                          const tooltip =
                            el.nextElementSibling as HTMLElement;

                          if (tooltip) {
                            tooltip.style.opacity = "1";
                            tooltip.style.visibility = "visible";
                            tooltip.style.transform = isRtl
                              ? "translateX(50%) translateY(0)"
                              : "translateX(-50%) translateY(0)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;

                          el.style.background = "transparent";
                          el.style.color = "#e53232";
                          el.style.borderColor = "#1e1e1e";
                          el.style.transform = "translateX(0)";

                          const tooltip =
                            el.nextElementSibling as HTMLElement;

                          if (tooltip) {
                            tooltip.style.opacity = "0";
                            tooltip.style.visibility = "hidden";
                            tooltip.style.transform = isRtl
                              ? "translateX(50%) translateY(5px)"
                              : "translateX(-50%) translateY(5px)";
                          }
                        }}
                      >
                        {arrow}
                      </button>

                      <span
                        style={{
                          position: "absolute",
                          bottom: "55px",
                          left: isRtl ? "auto" : "50%",
                          right: isRtl ? "50%" : "auto",
                          transform: isRtl
                            ? "translateX(50%) translateY(5px)"
                            : "translateX(-50%) translateY(5px)",
                          background: "#111",
                          color: "#fff",
                          padding: "6px 10px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          opacity: 0,
                          visibility: "hidden",
                          transition: "all 0.25s ease",
                          pointerEvents: "none",
                          zIndex: 10,
                        }}
                      >
                        {tr.plansPage.tooltip}
                      </span>
                    </div>
                  </div>

                  {/* MOBILE ROW */}
                  <div
                    className="pricing-row-mobile"
                    style={{
                      display: "none",
                      padding: "clamp(20px, 4vw, 28px) 0",
                      gap: 14,
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            color: "#e53232",
                            fontSize: 13,
                            fontWeight: 800,
                            opacity: 0.7,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.id}
                        </span>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              flexWrap: "wrap",
                            }}
                          >
                            <span
                              style={{
                                fontSize: 15,
                                fontWeight: 700,
                                color: "#f5f5f5",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {item.title}
                            </span>

                            {item.featured && (
                              <span
                                style={{
                                  fontSize: 8,
                                  letterSpacing: "0.16em",
                                  textTransform: "uppercase",
                                  color: "#e53232",
                                  background: "rgba(229,50,50,0.1)",
                                  border:
                                    "1px solid rgba(229,50,50,0.2)",
                                  padding: "2px 6px",
                                  fontWeight: 700,
                                }}
                              >
                                {tr.plansPage.popular}
                              </span>
                            )}
                          </div>

                          <div
                            style={{
                              fontSize: 9,
                              color: "#333",
                              marginTop: 3,
                              fontWeight: 600,
                              letterSpacing: "0.18em",
                              textTransform: "uppercase",
                            }}
                          >
                            {item.type}
                          </div>
                        </div>
                      </div>

                      {/* Price + arrow inline on mobile */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            textAlign: isRtl ? "left" : "right",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 15,
                              fontWeight: 700,
                              color: "#f0f0f0",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {item.price}
                          </div>

                          <div
                            style={{
                              fontSize: 9,
                              color: "#2e2e2e",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            {item.sub}
                          </div>
                        </div>

                        {/* Mobile arrow */}
                        <button
                          onClick={() => handlePlanClick(item.id)}
                          style={{
                            background: "transparent",
                            border: "1px solid #1e1e1e",
                            color: "#e53232",
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            fontSize: 14,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            flexShrink: 0,
                            transition: "all 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget;

                            el.style.background = "#e53232";
                            el.style.color = "#fff";
                            el.style.borderColor = "#e53232";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget;

                            el.style.background = "transparent";
                            el.style.color = "#e53232";
                            el.style.borderColor = "#1e1e1e";
                          }}
                        >
                          {arrow}
                        </button>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: 12,
                        color: "#444",
                        lineHeight: 1.7,
                        margin: 0,
                        paddingLeft: isRtl ? 0 : 25,
                        paddingRight: isRtl ? 25 : 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Final border */}
            <div style={{ borderTop: "1px solid #141414" }} />
          </div>

          {/* Footer note */}
          <div
            style={{
              marginTop: "clamp(20px, 3vw, 32px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: "clamp(9px, 1.5vw, 11px)",
                color: "#6b6b6b",
                letterSpacing: "0.1em",
              }}
            >
              {tr.plansPage.vatNote}
            </span>

            <Link
              href="/contact"
              style={{
                fontSize: "clamp(9px, 1.5vw, 11px)",
                color: "#6b6b6b",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#e53232")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#6b6b6b")
              }
            >
              {tr.plansPage.customScope}
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 700px) {
          .pricing-table-header {
            display: none !important;
          }

          .pricing-row-desktop {
            display: none !important;
          }

          .pricing-row-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}