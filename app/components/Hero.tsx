"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Hero() {
  const { tr } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const [step, setStep] = useState(1);
  const [activeVideo, setActiveVideo] = useState(0);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const introText = tr.hero.intro;

  // =========================
  // TYPING EFFECT
  // =========================
  useEffect(() => {
    setTypedText("");
    setIntroDone(false);
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(introText.slice(0, i));
      i++;
      if (i > introText.length) {
        clearInterval(interval);
        setTimeout(() => setIntroDone(true), 600);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [introText]);

  // =========================
  // CONTENT STEP CYCLE
  // =========================
  useEffect(() => {
    if (!introDone) return;

    const sequence = [
      { step: 1, duration: 3000 },
      { step: 2, duration: 3000 },
      { step: 3, duration: 4000 },
    ];

    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

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

  // =========================
  // VIDEO LOGIC
  // =========================
useEffect(() => {
  const video1 = video1Ref.current;
  const video2 = video2Ref.current;
  if (!video1 || !video2) return;

  // ======================
  // BASIC SETUP (LIGHT)
  // ======================
  video1.preload = "metadata";
  video2.preload = "metadata";

  video1.muted = true;
  video2.muted = true;

  video1.playsInline = true;
  video2.playsInline = true;

  // Start first video only
  video1.currentTime = 0;
  video1.play().catch(() => {});

  // ======================
  // CLEAN SWITCH HANDLERS
  // ======================
  const handleVideo1End = () => {
    setActiveVideo(1);
    video2.currentTime = 0;
    video2.play().catch(() => {});
  };

  const handleVideo2End = () => {
    setActiveVideo(0);
    video1.currentTime = 0;
    video1.play().catch(() => {});
  };

  video1.addEventListener("ended", handleVideo1End);
  video2.addEventListener("ended", handleVideo2End);

  return () => {
    video1.removeEventListener("ended", handleVideo1End);
    video2.removeEventListener("ended", handleVideo2End);
  };
}, []);

  // =========================
  // PAUSE VIDEO WHEN OFF-SCREEN
  // =========================
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const v1 = video1Ref.current;
        const v2 = video2Ref.current;
        if (entry.isIntersecting) {
          if (v1 && v1.paused) v1.play().catch(() => {});
          if (v2 && !v2.paused) v2.play().catch(() => {});
        } else {
          v1?.pause();
          v2?.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100svh", // svh for mobile browser chrome awareness
        background: "#050505",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        color: "white",
        padding: "clamp(20px, 5vw, 40px)",
        contentVisibility: "auto" as any,
        containIntrinsicSize: "100vw 100vh",
      }}
    >
      {/* VIDEO LAYER */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* VIDEO 1 */}
{/* VIDEO 1 */}
<video
  ref={video1Ref}
  autoPlay
  muted
  playsInline
  preload="metadata"
  onEnded={() => {
    setActiveVideo(1);
    video2Ref.current?.play().catch(() => {});
  }}
  poster="/images/poster1.jpg"
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",

    // Smooth cinematic transition
    opacity: activeVideo === 0 ? 1 : 0,
    transition: "opacity 1s ease-in-out, transform 6s ease-out",

    // Premium cinematic look
    transform: activeVideo === 0 ? "scale(1.03)" : "scale(1)",
    filter: "contrast(1.08) brightness(0.58)",

    // GPU optimization
    willChange: "opacity, transform",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    WebkitBackfaceVisibility: "hidden",

    // Better rendering performance
    contain: "layout paint style",
    pointerEvents: "none",
  }}
>
  <source
    src="https://res.cloudinary.com/dvjvat0na/video/upload/f_auto,q_auto,c_scale,w_1280,vc_auto/web_video_002_n9casa.mp4"
    type="video/mp4"
  />
</video>

        {/* VIDEO 2 */}
<video
  ref={video2Ref}
  muted
  playsInline
  preload="metadata"
  onEnded={() => {
    setActiveVideo(0);
    video1Ref.current?.play().catch(() => {});
  }}
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: activeVideo === 1 ? 1 : 0,
    transition: "opacity 1.2s ease-in-out",
    filter: "contrast(1.1) brightness(0.6)",
    willChange: "opacity",
    transform: "translateZ(0)",
  }}
>
  <source
    src="https://res.cloudinary.com/dvjvat0na/video/upload/f_auto,q_auto,c_scale,w_1280,vc_auto/Highlightes2_zm3wam.mp4"
    type="video/mp4"
  />
</video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0.35), rgba(0,0,0,0.9))",
          }}
        />
      </div>

      {/* CONTENT */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 1100,
          width: "100%",
          position: "relative",
          zIndex: 2,
          // Push content up slightly on mobile to avoid overlap with buttons
          paddingBottom: "clamp(80px, 15vw, 120px)",
          paddingTop: "clamp(80px, 12vw, 0px)",
        }}
      >
        {!introDone && (
          <div
            style={{
              color: "#ff4d4d",
              letterSpacing: "clamp(0.12em, 2vw, 0.35em)",
              fontSize: "clamp(11px, 3vw, 18px)",
              marginBottom: 20,
              fontWeight: 800,
              textShadow: "0 0 12px rgba(255,77,77,0.8)",
              // Wrap gracefully on tiny screens
              wordBreak: "break-word",
            }}
          >
            {typedText}
            <span style={{ opacity: 0.6 }}>|</span>
          </div>
        )}

        {introDone && (step === 1 || step === 2) && (
          <div style={{ animation: "fadeUp 1s ease" }}>
            <h1
              style={{
                fontSize: "clamp(32px, 7vw, 96px)",
                lineHeight: 1.0,
                color: "#fff",
                marginBottom: "clamp(16px, 3vw, 26px)",
                letterSpacing: "-0.04em",
                fontWeight: 600,
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.9), 0 6px 18px rgba(0,0,0,0.85), 0 12px 40px rgba(0,0,0,0.75)",
              }}
            >
              {tr.hero.headline}
              <span style={{ color: "#ff4d4d" }}>
                {tr.hero.headlineHighlight}
              </span>
            </h1>
            <div
              style={{
                width: "clamp(80px, 15vw, 180px)",
                height: 2,
                margin: "0 auto clamp(16px, 3vw, 30px)",
                background: "#ff4d4d",
                boxShadow: "0 0 25px rgba(255,77,77,0.6)",
              }}
            />
            <p
              style={{
                maxWidth: 760,
                margin: "0 auto",
                color: "#f1f1f1",
                fontSize: "clamp(14px, 2.5vw, 18px)",
                lineHeight: 1.7,
                textShadow: "0 2px 4px rgba(0,0,0,0.95), 0 4px 14px rgba(0,0,0,0.85)",
                padding: "0 clamp(0px, 2vw, 20px)",
              }}
            >
              {tr.hero.sub}
            </p>
          </div>
        )}

        {introDone && step === 3 && (
          <div
            style={{
              animation: "fadeUp 1s ease",
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                color: "#b90808",
                textTransform: "uppercase",
                letterSpacing: "clamp(0.1em, 2vw, 0.28em)",
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: 600,
                marginBottom: "clamp(14px, 3vw, 26px)",
                textShadow: "0 0 10px rgba(0,0,0,0.7)",
              }}
            >
              {tr.hero.eyebrow}
            </div>
            <p
              style={{
                color: "#f3f3f3",
                fontSize: "clamp(16px, 3vw, 24px)",
                lineHeight: 1.8,
                fontWeight: 300,
                textShadow: "0 2px 4px rgba(0,0,0,0.95), 0 6px 20px rgba(0,0,0,0.85)",
                padding: "0 clamp(0px, 2vw, 20px)",
              }}
            >
              {tr.hero.studioLine}
            </p>
            <p
              style={{
                color: "#d0d0d0",
                marginTop: "clamp(14px, 3vw, 28px)",
                fontSize: "clamp(12px, 2vw, 15px)",
                lineHeight: 1.8,
                textShadow: "0 2px 4px rgba(0,0,0,0.95), 0 4px 14px rgba(0,0,0,0.85)",
                padding: "0 clamp(0px, 2vw, 20px)",
              }}
            >
              {tr.hero.teamLine}
            </p>
          </div>
        )}
      </div>

      {/* BUTTONS */}
      {introDone && (
        <div
          style={{
            position: "absolute",
            bottom: "clamp(24px, 5vw, 50px)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            // Stack vertically on very small screens
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "clamp(8px, 2vw, 16px)",
            zIndex: 10,
            justifyContent: "center",
            width: "100%",
            padding: "0 clamp(16px, 5vw, 40px)",
            boxSizing: "border-box",
          }}
        >
          <Link
            href="/shoots"
            style={{
              background: "#e53232",
              color: "#fff",
              border: "none",
              padding: "clamp(11px, 2vw, 14px) clamp(18px, 3vw, 26px)",
              fontSize: "clamp(10px, 1.8vw, 13px)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.3s ease",
              textDecoration: "none",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ff3c3c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#e53232")}
          >
            {tr.hero.btnShoots}
          </Link>

          <Link
            href="/Plans"
            style={{
              background: "transparent",
              color: "#ddd",
              border: "1px solid #333",
              padding: "clamp(11px, 2vw, 14px) clamp(18px, 3vw, 26px)",
              fontSize: "clamp(10px, 1.8vw, 13px)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "border-color 0.3s ease",
              textDecoration: "none",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#666")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333")}
          >
            {tr.hero.btnPlans}
          </Link>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0px); }
        }

        /* Stack buttons on very small screens */
        @media (max-width: 380px) {
          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
