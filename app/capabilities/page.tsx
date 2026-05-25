"use client";

import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CapabilitiesPage() {
  const { tr } = useLanguage();

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#050505",
          paddingTop: "120px",
        }}
      >
        {/* CAPABILITIES */}
        <section
          id="capabilities"
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
            {tr.capabilities.label}
          </div>

          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 60px)",
              marginBottom: 48,
              color: "#f0f0f0",
            }}
          >
            {tr.capabilities.title}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            {tr.capabilities.services.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  padding: "28px 32px",
                }}
              >
                <h3 style={{ fontSize: 16, color: "#f0f0f0" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, color: "#666" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>



        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}