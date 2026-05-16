"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
// CASE STUDY
// ─────────────────────────────────────────────
export function CaseStudy() {
  return (
    <section
      style={{
        padding: "clamp(48px, 8vw, 100px) clamp(20px, 6vw, 60px)",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: "clamp(28px, 4vw, 48px)",
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
          Case Study
        </span>
      </div>

      {/* Card */}
      <div
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #0f0f0f 0%, #111 60%, #0a0a0a 100%)",
          border: "1px solid #1c1c1c",
          overflow: "hidden",
        }}
      >
        {/* Red left bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 3,
            height: "100%",
            background: "linear-gradient(180deg, #e53232 0%, #8b0000 100%)",
          }}
        />

        {/* Top glow line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, #e53232 20%, transparent 100%)",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            padding: "clamp(28px, 5vw, 52px) clamp(24px, 5vw, 56px)",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(24px, 4vw, 48px)",
            alignItems: "center",
          }}
          className="case-study-grid"
        >
          {/* Left: Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(229,50,50,0.08)",
                border: "1px solid rgba(229,50,50,0.18)",
                padding: "5px 12px",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#e53232",
                  boxShadow: "0 0 8px #e53232",
                }}
              />
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#e53232",
                  fontWeight: 700,
                }}
              >
                F&B · Social Media
              </span>
            </div>

            <h3
              style={{
                fontSize: "clamp(20px, 3.5vw, 30px)",
                fontWeight: 600,
                color: "#f5f5f5",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Chef Station —{" "}
              <span style={{ color: "#888", fontWeight: 300 }}>
                F&B social built from zero.
              </span>
            </h3>

            <p
              style={{
                fontSize: "clamp(12px, 1.8vw, 14px)",
                color: "#555",
                maxWidth: 540,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Built and run by our founder. The exact same playbook —
              strategy, shoot, post — is now available to F&B brands across
              Jeddah and Makkah.
            </p>

            <div
              style={{
                display: "flex",
                gap: "clamp(20px, 4vw, 40px)",
                marginTop: 8,
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Followers", value: "0 → 12K" },
                { label: "Avg. reach", value: "40K/mo" },
                { label: "Timeline", value: "6 months" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: "clamp(18px, 3vw, 26px)",
                      fontWeight: 700,
                      color: "#f0f0f0",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#444",
                      marginTop: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 12,
              flexShrink: 0,
            }}
            className="case-study-cta"
          >
            <Link
              href="/contact"
              style={{
                background: "#e53232",
                color: "#fff",
                padding: "13px 24px",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "block",
                transition: "background 0.2s, transform 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ff3c3c";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#e53232";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get this playbook ↗
            </Link>
            <span
              style={{
                fontSize: 10,
                color: "#2a2a2a",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              For F&B Brands · KSA
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
          .case-study-cta {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────
// FINAL CTA
// ─────────────────────────────────────────────
export function FinalCTA() {
  return (
    <section
      id="contact"
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(20px, 6vw, 60px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(229,50,50,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top border gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(229,50,50,0.4), transparent)",
        }}
      />

      {/* Eyebrow */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          marginBottom: "clamp(20px, 3vw, 32px)",
        }}
      >
        <div style={{ width: 24, height: 1, background: "#222" }} />
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#444",
          }}
        >
          Ready to start
        </span>
        <div style={{ width: 24, height: 1, background: "#222" }} />
      </div>

      <h2
        style={{
          fontSize: "clamp(30px, 6vw, 80px)",
          lineHeight: 1.02,
          maxWidth: 820,
          margin: "0 auto clamp(16px, 2.5vw, 24px)",
          color: "#f0f0f0",
          letterSpacing: "-0.04em",
          fontWeight: 600,
        }}
      >
        Got a brand worth seeing?
        <br />
        <span
          style={{
            color: "#e53232",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          Let&apos;s make it impossible to miss.
        </span>
      </h2>

      <p
        style={{
          color: "#444",
          fontSize: "clamp(12px, 1.8vw, 14px)",
          marginBottom: "clamp(36px, 5vw, 56px)",
          letterSpacing: "0.04em",
        }}
      >
        15-min discovery call · No deck · Just your project, our take.
      </p>

      <div
        style={{
          display: "flex",
          gap: "clamp(10px, 2vw, 14px)",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "0 clamp(16px, 5vw, 0px)",
        }}
      >
        <button
          style={{
            background: "#e53232",
            color: "#fff",
            border: "none",
            padding: "clamp(13px, 2vw, 16px) clamp(22px, 3.5vw, 36px)",
            fontSize: "clamp(10px, 1.6vw, 12px)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "background 0.2s, transform 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#ff3333";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#e53232";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.523 5.851L0 24l6.29-1.497A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.838 0-3.568-.467-5.079-1.285l-.362-.215-3.736.889.924-3.64-.236-.374A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Chat on WhatsApp
        </button>

        <Link
          href="/contact"
          style={{
            background: "transparent",
            color: "#555",
            border: "1px solid #1e1e1e",
            padding: "clamp(13px, 2vw, 16px) clamp(22px, 3.5vw, 36px)",
            fontSize: "clamp(10px, 1.6vw, 12px)",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s",
            textDecoration: "none",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#444";
            e.currentTarget.style.color = "#f0f0f0";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#1e1e1e";
            e.currentTarget.style.color = "#555";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Send a Brief →
        </Link>
      </div>

      {/* Trust line */}
      <p
        style={{
          marginTop: "clamp(28px, 4vw, 48px)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#1e1e1e",
        }}
      >
        Jeddah · KSA · Available for remote projects
      </p>
    </section>
  );
}

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #141414",
        background: "#050505",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Red accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "clamp(60px, 10vw, 120px)",
          height: 1,
          background: "linear-gradient(90deg, #e53232, transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(24px, 5vw, 44px) clamp(20px, 6vw, 60px)",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "clamp(16px, 3vw, 32px)",
        }}
        className="footer-grid"
      >
        {/* Left: Copyright */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              fontSize: "clamp(10px, 1.6vw, 11px)",
              color: "#2e2e2e",
              letterSpacing: "0.08em",
            }}
          >
            © {year} Redline VFX Studio
          </span>
          <span
            style={{
              fontSize: "clamp(9px, 1.4vw, 10px)",
              color: "#1e1e1e",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Jeddah, KSA
          </span>
        </div>

        {/* Center: Social links */}
        <div
          style={{
            display: "flex",
            gap: "clamp(16px, 3vw, 28px)",
            alignItems: "center",
          }}
        >
          {[
            {
              label: "Instagram",
              href: "https://www.instagram.com/redlinevfx.studio?igsh=MnF2ZXd3YXhseTEx",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/profile.php?id=61589104636306",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "clamp(9px, 1.6vw, 11px)",
                color: "#2a2a2a",
                textDecoration: "none",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#e53232")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#2a2a2a")
              }
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Right: Dev credit */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 4,
          }}
          className="footer-credit"
        >
          <span
            style={{
              fontSize: "clamp(9px, 1.4vw, 10px)",
              color: "#1e1e1e",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Engineered by
          </span>
          <a
            href="https://www.nexoratech.info/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "clamp(10px, 1.6vw, 11px)",
              color: "#2e2e2e",
              textDecoration: "none",
              letterSpacing: "0.08em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#555")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#2e2e2e")
            }
          >
            Nexora Tech ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 20px !important;
          }
          .footer-credit {
            align-items: center !important;
          }
          .footer-grid > div:nth-child(2) {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
