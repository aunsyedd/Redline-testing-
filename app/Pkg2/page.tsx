"use client";

import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type PackageType = {
  id: string;
  slug: string;
  label: string;
  title: string;
  price: string;
  period: string;
  description: string;
  items: string[];
};

const packages: PackageType[] = [
  {
    id: "01",
    slug: "01 STARTER - SAR 4,500 / month",
    label: "PACKAGE 01 / CGI RETAINER",
    title: "STARTER",
    price: "SAR 4,500",
    period: "per month",
    description:
      "Entry-level monthly retainer for brands that need consistent visual content without committing to a full marketing engine.",
    items: [
      "1 short-form CGI piece per month (up to 15s)",
      "8 brand stills",
      "Light post-production on supplied footage",
      "1 strategy call per month",
    ],
  },
  {
    id: "02",
    slug: "02 GROWTH - SAR 8,500 / month",
    label: "PACKAGE 02 / CGI RETAINER",
    title: "GROWTH",
    price: "SAR 8,500",
    period: "per month",
    description:
      "Hero CGI plus consistent supporting content. The package most clients land on.",
    items: [
      "1 hero CGI piece per month (up to 30s)",
      "3 short-form cutdowns",
      "12 brand stills",
      "Light post-production on supplied footage",
      "Bi-weekly strategy calls",
    ],
  },
  {
    id: "03",
    slug: "03 CAMPAIGN - SAR 18,500 / project",
    label: "PACKAGE 03 / PROJECT",
    title: "CAMPAIGN",
    price: "SAR 18,500",
    period: "per project · 4–6 weeks",
    description: "One-off campaigns. Launches, openings, seasonal pushes.",
    items: [
      "1 flagship hero CGI / brand film (up to 60s)",
      "5 short-form cutdowns",
      "20 stills (key-art and supporting)",
      "Full creative direction and storyboarding",
      "Master plus platform-specific cuts",
    ],
  },
  {
    id: "04",
    slug: "04 FULL FUNNEL - SAR 14,500 / month",
    label: "PACKAGE 04 / CGI + MARKETING RETAINER",
    title: "FULL FUNNEL",
    price: "SAR 14,500",
    period: "per month · capped at 3 accounts",
    description:
      "Hero creative plus the engine that distributes it. One team, one accountable owner.",
    items: [
      "1 hero CGI piece + 4 cutdowns per month",
      "Social management on 2 platforms",
      "Full performance ad management",
      "12 brand stills + ad creative variants",
      "Weekly strategy and performance calls",
    ],
  },
  {
    id: "05",
    slug: "05 GROWTH ENGINE - SAR 5,500 / month",
    label: "PACKAGE 05 / MARKETING ONLY",
    title: "GROWTH ENGINE",
    price: "SAR 5,500",
    period: "per month",
    description:
      "Pure social and performance marketing. For brands with their own content who just need the channels run.",
    items: [
      "Social management on 2 platforms (12 posts each)",
      "Full performance ad management on Meta and Google",
      "Light creative cuts from supplied assets",
      "Monthly performance report",
      "Bi-weekly strategy calls",
    ],
  },
];

/* ─────────────────────────────────────────
   SCROLL ARROW
───────────────────────────────────────── */
function ScrollArrow({ nextId }: { nextId: string }) {
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
        Explore
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
}: {
  pkg: PackageType;
  nextId?: string;
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
          Choose This Plan →
        </button>
      </div>

      {nextId && <ScrollArrow nextId={nextId} />}

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
            nextId={
              index < packages.length - 1
                ? packages[index + 1].id // ✅ plain: "02", "03", etc.
                : undefined
            }
          />
        ))}
      </main>

      <Footer />
    </>
  );
}