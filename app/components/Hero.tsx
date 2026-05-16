"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const [step, setStep] = useState(1);
  const [activeVideo, setActiveVideo] = useState(0);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const introText = "REDLINE VFX — CINEMATIC STUDIO";

  // =========================
  // TYPING EFFECT
  // =========================
  useEffect(() => {
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
  }, []);

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

    video1.preload = "auto";
    video1.muted = true;
    video1.playsInline = true;
    video1.currentTime = 0;
    video1.play().catch(() => {});

    video2.preload = "none";
    video2.muted = true;
    video2.playsInline = true;

    const loadVideo2 = () => {
      video2.preload = "auto";
      video2.load();
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(loadVideo2, { timeout: 3000 });
    } else {
      setTimeout(loadVideo2, 2000);
    }

    let switchTimeout: ReturnType<typeof setTimeout>;

    const switchToVideo2 = async () => {
      video2.currentTime = 0;
      try { await video2.play(); } catch {}
      switchTimeout = setTimeout(() => setActiveVideo(1), 50);
    };

    const switchToVideo1 = async () => {
      video1.currentTime = 0;
      try { await video1.play(); } catch {}
      switchTimeout = setTimeout(() => setActiveVideo(0), 50);
    };

    video1.addEventListener("ended", switchToVideo2);
    video2.addEventListener("ended", switchToVideo1);

    return () => {
      clearTimeout(switchTimeout);
      video1.removeEventListener("ended", switchToVideo2);
      video2.removeEventListener("ended", switchToVideo1);
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
        <video
          ref={video1Ref}
          muted
          playsInline
          preload="auto"
          poster="/images/poster1.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: activeVideo === 0 ? 1 : 0,
            transition: "opacity 2s ease-in-out",
            filter: "contrast(1.1) brightness(0.6)",
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
        >
          <source src="/images/1.mp4" type="video/mp4" />
        </video>

        {/* VIDEO 2 */}
        <video
          ref={video2Ref}
          muted
          playsInline
          preload="none"
          poster="/images/poster2.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: activeVideo === 1 ? 1 : 0,
            transition: "opacity 2s ease-in-out",
            filter: "contrast(1.1) brightness(0.6)",
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
        >
          <source src="/images/2.mp4" type="video/mp4" />
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
              Cinematic visuals that make brands{" "}
              <span style={{ color: "#ff4d4d" }}>
                impossible to scroll past.
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
              Photoreal CGI, product animation, and premium content for the
              brands and agencies shaping the next decade in KSA.
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
              A small studio. Senior craft.
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
              Redline VFX is a Jeddah-based CGI and marketing studio.
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
              Founder-led, three people deep, built around senior production.
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
            View Cinematic Shoots
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
            Explore Plans
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
