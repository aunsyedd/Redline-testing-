"use client";

import Navbar from "@/app/components/Navbar";
import {  Footer } from "@/app/components/Bottom";

const services = [
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
];

export default function CapabilitiesPage() {
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
            Capabilities
          </div>

          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 60px)",
              marginBottom: 48,
              color: "#f0f0f0",
            }}
          >
            What we do
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            {services.map((s, i) => (
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