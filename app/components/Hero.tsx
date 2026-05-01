"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    let frame: number;
    let w = 0;
    const animate = () => {
      w += 0.8;
      if (w > 100) w = 100;
      el.style.width = w + "%";
      if (w < 100) frame = requestAnimationFrame(animate);
    };
    setTimeout(() => { frame = requestAnimationFrame(animate); }, 600);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 40px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(229,50,50,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Animated line accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(229,50,50,0.3), transparent)",
          opacity: 0.4,
          width: "100%",
        }}
      />

      {/* Eyebrow */}
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#e53232",
          marginBottom: 28,
          fontWeight: 600,
          opacity: 0,
          animation: "fadeUp 0.8s ease 0.2s forwards",
        }}
      >
        Saudi Arabia · CGI & VFX Studio
      </div>

      {/* Headline */}
      <h1
        className="font-display"
        style={{
          fontSize: "clamp(52px, 8vw, 96px)",
          lineHeight: 1.0,
          maxWidth: 900,
          marginBottom: 28,
          color: "#f0f0f0",
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.35s forwards",
        }}
      >
        Cinematic visuals that make brands{" "}
        <span style={{ color: "#e53232", position: "relative" }}>
          impossible to scroll past.
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              bottom: -4,
              left: 0,
              height: 3,
              width: "0%",
              background: "#e53232",
              transition: "width 0.05s linear",
            }}
          />
        </span>
      </h1>

      {/* Subtext */}
      <p
        style={{
          maxWidth: 480,
          color: "#999",
          fontSize: 15,
          lineHeight: 1.7,
          marginBottom: 44,
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.5s forwards",
        }}
      >
        Photoreal CGI, product animation, and premium content for the brands and
        agencies shaping the next decade in KSA.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.65s forwards",
        }}
      >
        <button
          style={{
            background: "#e53232",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "#ff3c3c";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "#e53232";
            el.style.transform = "translateY(0)";
          }}
        >
          Watch the reel ▶
        </button>
        <button
          style={{
            background: "transparent",
            color: "#f0f0f0",
            border: "1px solid #444",
            padding: "14px 28px",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 2,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "#888";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "#444";
            el.style.transform = "translateY(0)";
          }}
        >
          Book a call
        </button>
      </div>

      {/* Client logos bar */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 60,
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.85s forwards",
        }}
      >
        {["Chef Station", "Komila Lounge", "+ Your Brand Here"].map((name) => (
          <span
            key={name}
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: name === "+ Your Brand Here" ? "#e53232" : "#444",
              fontWeight: 500,
            }}
          >
            {name}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
