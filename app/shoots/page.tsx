"use client";

import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import { Footer } from "@/app/components/Bottom";

export default function ShootsPage() {
    const router = useRouter();
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
            Cinematic <span style={{ color: "#e53232" }}>Shoots</span>
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
            We craft high-end cinematic visuals, product films, CGI sequences,
            and brand storytelling that feels like a movie — not marketing.
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
          {[
  {
    title: "CGI & VFX",
    desc: "Hero pieces, product visualisation, brand films.",
  },
  {
    title: "3D Visualisation",
    desc: "Architectural fly-throughs, retail and F&B spaces.",
  },
  {
    title: "Performance Marketing",
    desc: "Meta and Google paid media. Conversion-led.",
  },
  {
    title: "Social Content",
    desc: "Strategy, calendar, content production, community.",
  },
    {
    title: "Motion Design",
    desc: "High-end 2D/3D motion graphics for brands and campaigns.",
  },
  {
    title: "AI Creative Production",
    desc: "AI-driven visuals, concept generation, and hybrid VFX workflows.",
  },
          ].map((item, i) => (
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
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              Showreel 2026
            </h2>

            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
              A glimpse into our cinematic universe of CGI + real-world visuals.
            </p>

            <div
              style={{
                width: "100%",
                height: 420,
                background:
                  "linear-gradient(135deg, #111, #0a0a0a, #111)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontSize: 14,
                border: "1px solid #1a1a1a",
              }}
            >
              🎬 Video Placeholder (You can embed Vimeoooo / YouTube here)
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
            Ready to shoot something impossible?
          </h2>

          <p style={{ color: "#888", fontSize: 14, marginBottom: 25 }}>
            Let’s turn your idea into a cinematic experience.
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
  Start a Project
</button>
        </section>
      </main>

      <Footer />
    </>
  );
}