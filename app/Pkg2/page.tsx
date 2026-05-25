"use client";

import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import type { PackageItem } from "@/app/lib/i18n/translations";

/* ─────────────────────────────────────────
   SCROLL ARROW
───────────────────────────────────────── */
function ScrollArrow({ nextId, label }: { nextId: string; label: string }) {
  const scrollToNext = () => {
    const el = document.getElementById(nextId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={scrollToNext}
      style={{
        position: "absolute",
        bottom: 30,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <span
        style={{
          fontSize: 11,
          letterSpacing: 2,
          color: "#999",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {label}
      </span>

      <div
        style={{
          color: "#e53232",
          fontSize: 15,
          animation: "floatArrow 1.8s infinite",
        }}
      >
        ↓
      </div>

      <style jsx>{`
        @keyframes floatArrow {
          0% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(12px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────
   SINGLE PACKAGE SECTION
───────────────────────────────────────── */
function PackageSection({
  pkg,
  nextId,
  chooseLabel,
  exploreLabel,
}: {
  pkg: PackageItem;
  nextId?: string;
  chooseLabel: string;
  exploreLabel: string;
}) {
  const router = useRouter();

  const handleSelect = () => {
    router.push(`/contact?plan=${encodeURIComponent(pkg.slug)}`);
  };

  return (
    <section
      id={pkg.id} // ✅ plain id: "01", "02", "03", "04", "05"
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(30px, 5vw, 80px)",
        gap: "40px",
        fontFamily: "sans-serif",
        flexWrap: "wrap",
        borderBottom: "1px solid #111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #e53232 40%, transparent)",
          opacity: 0.4,
        }}
      />

      {/* LEFT */}
      <div
        style={{
          flex: "1 1 300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "clamp(10px, 4vw, 80px)",
        }}
      >
        <div
          style={{
            fontSize: "clamp(120px, 18vw, 220px)",
            fontWeight: 800,
            color: "#e53232",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {pkg.id}
        </div>
      </div>

      {/* RIGHT */}
      <div
        style={{
          flex: "1 1 400px",
          maxWidth: "600px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: "#888",
            marginBottom: 10,
            textTransform: "uppercase",
          }}
        >
          {pkg.label}
        </div>

        <h2
          style={{
            fontSize: "clamp(42px, 6vw, 64px)",
            fontWeight: 800,
            marginBottom: 20,
            lineHeight: 1,
          }}
        >
          {pkg.title}
        </h2>

        <div style={{ marginBottom: 20 }}>
          <span style={{ fontSize: 28, fontWeight: 700 }}>{pkg.price}</span>
          <span style={{ fontSize: 14, color: "#888", marginLeft: 8 }}>
            {pkg.period}
          </span>
        </div>

        <p
          style={{
            fontSize: 14,
            color: "#aaa",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          {pkg.description}
        </p>

        <div style={{ fontSize: 13, color: "#ccc", lineHeight: 1.8 }}>
          {pkg.items.map((item: string, i: number) => (
            <div key={i}>— {item}</div>
          ))}
        </div>

        <button
          onClick={handleSelect}
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
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.background = "#ff3c3c";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "#bb2929";
          }}
        >
          {chooseLabel}
        </button>
      </div>

      {nextId && <ScrollArrow nextId={nextId} label={exploreLabel} />}

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
    </section>
  );
}

/* ─────────────────────────────────────────
   FULL PAGE
───────────────────────────────────────── */
export default function PlansPage() {
  const { tr } = useLanguage();
  const packages = tr.pkg2.packages;

useEffect(() => {
  const targetId = sessionStorage.getItem("scrollToPlan");
  if (targetId) {
    sessionStorage.removeItem("scrollToPlan");
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  }
}, []);

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", background: "#050505" }}>
        {packages.map((pkg, index) => (
          <PackageSection
            key={pkg.id}
            pkg={pkg}
            chooseLabel={tr.pkg2.choosePlan}
            exploreLabel={tr.pkg2.explore}
            nextId={
              index < packages.length - 1
                ? packages[index + 1].id
                : undefined
            }
          />
        ))}
      </main>

      <Footer />
    </>
  );
}