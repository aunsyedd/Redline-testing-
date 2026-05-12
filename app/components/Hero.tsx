"use client";

import { useEffect, useState } from "react";


export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const [step, setStep] = useState(1);

  const introText = "REDLINE VFX — CINEMATIC STUDIO";

  // ✨ Typewriter intro
  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedText(introText.slice(0, i));
      i++;

      if (i > introText.length) {
        clearInterval(interval);

        setTimeout(() => {
          setIntroDone(true);
        }, 800);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // 🔁 CLEAN LOOP (FIXED - NO FLICKER)
  useEffect(() => {
    if (!introDone) return;

    const sequence = [
      { step: 1, duration: 3000 },
      { step: 2, duration: 3000 },
      { step: 3, duration: 4000 },
    ];

    let index = 0;
    let timeout: any;

    const run = () => {
      setStep(sequence[index].step);

      timeout = setTimeout(() => {
        index = (index + 1) % sequence.length;
        run();
      }, sequence[index].duration);
    };

    run();

    return () => clearTimeout(timeout);
  }, [introDone]);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#050505",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        color: "white",
        padding: "40px",
      }}
    >
{/* 🎥 CINEMATIC VIDEO SPACE LAYER */}
<div
  style={{
    position: "absolute",
    inset: 0,
    zIndex: 0,
    overflow: "hidden",
    pointerEvents: "none",
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 1,
        filter: "contrast(1.1) brightness(0.8)",
   
    }}
  >
    <source src="/images/Highlightes.mp4" type="video/mp4" />
  </video>

  {/* dark cinematic overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at center, rgba(0,0,0,0.35), rgba(0,0,0,0.9))",
    }}
  />
</div>
      {/* 🎥 Cinematic Shutter */}
      {!introDone && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#000",
            transform: "scaleY(1)",
            transformOrigin: "top",
            animation:
              "shutterOpen 1.2s cubic-bezier(0.22,1,0.36,1) forwards",
            zIndex: 50,
          }}
        />
      )}

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(229,50,50,0.12), transparent 60%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 1100,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ✨ TYPEWRITER */}
        {!introDone && (
          <div
            style={{
              color: "#e53232",
              letterSpacing: "0.35em",
              fontSize: 18,
              marginBottom: 20,
                  fontWeight: 800,
            }}
          >
            {typedText}
            <span style={{ opacity: 0.4 }}>|</span>
          </div>
        )}

        {/* 🔁 SCENE 1 + 2 */}
        {introDone && (step === 1 || step === 2) && (
          <div style={{ animation: "fadeUp 1s ease" }}>
            <h1 style={headlineStyle}>
              Cinematic visuals that make brands{" "}
              <span style={{ color: "#e53232" }}>
                impossible to scroll past.
              </span>
            </h1>

            <div style={lineStyle} />

            <p style={textStyle}>
              Photoreal CGI, product animation, and premium content for the
              brands and agencies shaping the next decade in KSA.
            </p>
          </div>
        )}

        {/* 📖 ABOUT */}
        {introDone && step === 3 && (
          <div style={{ animation: "fadeUp 1s ease", maxWidth: 820 }}>
            <div style={tagStyle}>A small studio. Senior craft.</div>

            <p style={textStyleLarge}>
              Redline VFX is a Jeddah-based CGI and marketing studio. We build
              photoreal 3D content for brands, then run the paid and organic
              channels that put it in front of the right people.
            </p>

            <p style={textStyleSmall}>
              Founder-led, three people deep, built around a senior compositor
              with a decade of post-production experience.
            </p>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes shutterOpen {
          0% { transform: scaleY(1); }
          100% { transform: scaleY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}

/* Styles */
const headlineStyle = {
  fontSize: "clamp(48px,7vw,96px)",
  lineHeight: 0.95,
  color: "#f5f5f5",
  marginBottom: 26,
  letterSpacing: "-0.05em",
  fontWeight: 600,
};

const lineStyle = {
  width: 180,
  height: 2,
  margin: "0 auto 30px",
  background: "#e53232",
  boxShadow: "0 0 25px rgba(229,50,50,0.5)",
};

const textStyle = {
  maxWidth: 760,
  margin: "0 auto",
  color: "#8d8d8d",
  fontSize: 18,
  lineHeight: 1.7,
};

const tagStyle = {
  color: "#e53232",
  textTransform: "uppercase",
  letterSpacing: "0.28em",
  fontSize: 12,
  marginBottom: 26,
};

const textStyleLarge = {
  color: "#d0d0d0",
  fontSize: "clamp(18px,2vw,24px)",
  lineHeight: 1.8,
  fontWeight: 300,
};

const textStyleSmall = {
  color: "#777",
  marginTop: 28,
  fontSize: 15,
  lineHeight: 1.8,
};