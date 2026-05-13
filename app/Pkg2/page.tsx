"use client";

import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";
import { useRouter } from "next/navigation";

export default function PlansPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#050505",
          color: "#fff",
        }}
      >
        <PricingHighlight />
      </main>

      <Footer />
    </>
  );
}

/* ================= COMPONENT ================= */

function PricingHighlight() {
  const router = useRouter();

  const handleSelectPlan = () => {
    const plan = "02 GROWTH - SAR 8,500 / month";
    router.push(`/contact?plan=${encodeURIComponent(plan)}`);
  };

  return (
    <section
      id="pkg-2-growth"
      style={{
        height: "100vh",
        background: "#00000034",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* LEFT BIG NUMBER */}
      <div
        style={{
          fontSize: "180px",
          fontWeight: 800,
          color: "#e53232",
          lineHeight: 1,
        }}
      >
        02
      </div>

      {/* RIGHT CONTENT */}
      <div style={{ maxWidth: "600px" }}>
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: "#888",
            marginBottom: 10,
          }}
        >
          PACKAGE 02 / GROWTH
        </div>

        <h1 style={{ fontSize: 64, fontWeight: 800, marginBottom: 20 }}>
          GROWTH
        </h1>

        <div style={{ marginBottom: 20 }}>
          <span style={{ fontSize: 28, fontWeight: 700 }}>SAR 8,500</span>
          <span style={{ fontSize: 14, color: "#888", marginLeft: 8 }}>
            per month
          </span>
        </div>

        <p
          style={{
            fontSize: 14,
            color: "#aaa",
            lineHeight: 1.6,
            marginBottom: 25,
          }}
        >
          Hero CGI plus consistent supporting content. The package most clients
          land on.
        </p>

        <div style={{ fontSize: 13, color: "#ccc", lineHeight: 1.8 }}>
          <div>— 1 hero CGI piece per month (up to 30s)</div>
          <div>— 3 short-form cutdowns</div>
          <div>— 12 brand stills</div>
          <div>— Light post-production on supplied footage</div>
          <div>— Bi-weekly strategy calls</div>
        </div>

        {/* ✅ ANIMATED BUTTON */}
        <button
          onClick={handleSelectPlan}
          style={{
            marginTop: 30,
            background: "#bb2929",
            color: "#fff",
            border: "none",
            padding: "14px 26px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.3s ease",
            animation: "pulse 2s infinite",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "scale(1.05)";
            (e.currentTarget as HTMLButtonElement).style.background =
              "#ff3c3c";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "scale(1)";
            (e.currentTarget as HTMLButtonElement).style.background = "#e53232";
          }}
        >
          Choose This Plan →
        </button>

        {/* 🔥 animation keyframes */}
        <style jsx>{`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(229, 50, 50, 0.6);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(229, 50, 50, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(229, 50, 50, 0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}