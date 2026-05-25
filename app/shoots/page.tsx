"use client";

import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import { Footer } from "@/app/components/Bottom";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ShootsPage() {
  const router = useRouter();
  const { tr } = useLanguage();
  return (
    
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#050505",
          color: "#fff",
          paddingTop: "120px",
        }}
      >
        {/* HERO */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "80px 20px 40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(42px,6vw,80px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 20,
            }}
          >
            {tr.shoots.title}
            <span style={{ color: "#e53232" }}>{tr.shoots.titleHighlight}</span>
          </h1>

          <p
            style={{
              color: "#888",
              fontSize: 15,
              lineHeight: 1.8,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            {tr.shoots.sub}
          </p>
        </section>

        {/* FEATURE GRID */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "40px 20px 100px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {tr.shoots.services.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#0b0b0b",
                border: "1px solid #1a1a1a",
                padding: 24,
                borderRadius: 8,
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.borderColor = "#e53232");
                (e.currentTarget.style.transform = "translateY(-4px)");
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.borderColor = "#1a1a1a");
                (e.currentTarget.style.transform = "translateY(0px)");
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  color: "#888",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* SHOWREEL SECTION */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 20px 120px",
          }}
        >
          <div
            style={{
              background: "#0b0b0b",
              border: "1px solid #1a1a1a",
              borderRadius: 10,
              padding: 40,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              {tr.shoots.showreel}
            </h2>

            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
              {tr.shoots.showreelDesc1}
            </p>

<div
  style={{
    width: "100%",
    height: 420,
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid #1a1a1a",
    background: "#000",
    position: "relative",
  }}
>
  <video
    src="/images/web_video_004.mp4"
    controls
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      background: "#000",
    }}
  />
</div>
          </div>

          {/* SHOWREEL 2 */}
          <div
            style={{
              background: "#0b0b0b",
              border: "1px solid #1a1a1a",
              borderRadius: 10,
              padding: 40,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              {tr.shoots.showreel}
            </h2>

            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
              {tr.shoots.showreelDesc2}
            </p>

<div
  style={{
    width: "100%",
    height: 420,
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid #1a1a1a",
    background: "#000",
    position: "relative",
  }}
>
  <video
    src="/images/web_video_008.mp4"
    controls
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      background: "#000",
    }}
  />
</div>
          </div>
          {/* SHOWREEL 3 */}
          <div
            style={{
              background: "#0b0b0b",
              border: "1px solid #1a1a1a",
              borderRadius: 10,
              padding: 40,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              {tr.shoots.showreel}
            </h2>

            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
              {tr.shoots.showreelDesc2}
            </p>

<div
  style={{
    width: "100%",
    height: 420,
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid #1a1a1a",
    background: "#000",
    position: "relative",
  }}
>
  <video
    src="/images/web_video_005.mp4"
    controls
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      background: "#000",
    }}
  />
</div>
          </div>

          {/* SHOWREEL 4 */}
          <div
            style={{
              background: "#0b0b0b",
              border: "1px solid #1a1a1a",
              borderRadius: 10,
              padding: 40,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              {tr.shoots.showreel}
            </h2>

            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
              {tr.shoots.showreelDesc3}
            </p>

<div
  style={{
    width: "100%",
    height: 420,
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid #1a1a1a",
    background: "#000",
    position: "relative",
  }}
>
  <video
    src="/images/web_video_001.mp4"
    controls
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      background: "#000",
    }}
  />
</div>
          </div>

          {/* SHOWREEL 5 */}
          <div
            style={{
              background: "#0b0b0b",
              border: "1px solid #1a1a1a",
              borderRadius: 10,
              padding: 40,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              {tr.shoots.showreel}
            </h2>

            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
              {tr.shoots.showreelDesc3}
            </p>

<div
  style={{
    width: "100%",
    height: 420,
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid #1a1a1a",
    background: "#000",
    position: "relative",
  }}
>
  <video
    src="/images/Highlighted.mp4"
    controls
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      background: "#000",
    }}
  />
</div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            padding: "0 20px 120px",
          }}
        >
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            {tr.shoots.ctaTitle}
          </h2>

          <p style={{ color: "#888", fontSize: 14, marginBottom: 25 }}>
            {tr.shoots.ctaSub}
          </p>

<button
  onClick={() => router.push("/contact")}
  style={{
    background: "#e53232",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.08em",
    cursor: "pointer",
    textTransform: "uppercase",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = "#ff3c3c")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = "#e53232")
  }
>
  {tr.shoots.ctaBtn}
</button>
        </section>
      </main>

      <Footer />
    </>
  );
}