"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const [step, setStep] = useState(1);
  const [activeVideo, setActiveVideo] = useState(0);
  const [secondVideoReady, setSecondVideoReady] = useState(false);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const introText = "REDLINE VFX — CINEMATIC STUDIO";
  const router = useRouter();

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
        setTimeout(() => setIntroDone(true), 800);
      }
    }, 60);
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
  // VIDEO LOGIC — lazy load second video
  // =========================
  useEffect(() => {
    const video1 = video1Ref.current;
    if (!video1) return;

    const handleVideo1End = () => {
      setSecondVideoReady(true); // mount second video
      setActiveVideo(1);
    };

    video1.addEventListener("ended", handleVideo1End);
    video1.play().catch(() => {}); // catch autoplay block silently

    return () => {
      video1.removeEventListener("ended", handleVideo1End);
    };
  }, []);

  // play second video once it's mounted
  useEffect(() => {
    if (!secondVideoReady) return;
    const video2 = video2Ref.current;
    if (!video2) return;

    video2.currentTime = 0;
    video2.play().catch(() => {});

    const handleVideo2End = () => {
      const video1 = video1Ref.current;
      if (!video1) return;
      video1.currentTime = 0;
      video1.play().catch(() => {});
      setActiveVideo(0);
    };

    const handleVideo2Play = () => {
      // already playing, nothing needed
    };

    video2.addEventListener("ended", handleVideo2End);
    return () => {
      video2.removeEventListener("ended", handleVideo2End);
    };
  }, [secondVideoReady]);

  // when activeVideo goes back to 0, second video goes invisible
  // no extra logic needed — opacity handles it

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
        {/* VIDEO 1 — always mounted, preloaded */}
        <video
          ref={video1Ref}
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: activeVideo === 0 ? 1 : 0,
            transition: "opacity 1.8s ease-in-out",
            filter: "contrast(1.1) brightness(0.8)",
          }}
        >
          <source src="/images/Highlightes.mp4" type="video/mp4" />
        </video>

        {/* VIDEO 2 — only mounted after video 1 ends */}
        {secondVideoReady && (
          <video
            ref={video2Ref}
            muted
            playsInline
            preload="none"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: activeVideo === 1 ? 1 : 0,
              transition: "opacity 1.8s ease-in-out",
              filter: "contrast(1.1) brightness(0.8)",
            }}
          >
            <source src="/images/Highlightes2.mp4" type="video/mp4" />
          </video>
        )}

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
          position: "relative",
          zIndex: 2,
        }}
      >
        {!introDone && (
          <div
            style={{
              color: "#ff4d4d",
              letterSpacing: "0.35em",
              fontSize: 18,
              marginBottom: 20,
              fontWeight: 800,
              textShadow: "0 0 12px rgba(255,77,77,0.8)",
            }}
          >
            {typedText}
            <span style={{ opacity: 0.6 }}>|</span>
          </div>
        )}

        {introDone && (step === 1 || step === 2) && (
          <div style={{ animation: "fadeUp 1s ease" }}>
            <h1 style={headlineStyle}>
              Cinematic visuals that make brands{" "}
              <span style={{ color: "#ff4d4d" }}>
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

        {introDone && step === 3 && (
          <div style={{ animation: "fadeUp 1s ease", maxWidth: 820 }}>
            <div style={tagStyle}>A small studio. Senior craft.</div>
            <p style={textStyleLarge}>
              Redline VFX is a Jeddah-based CGI and marketing studio.
            </p>
            <p style={textStyleSmall}>
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
            bottom: 50,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 16,
            zIndex: 10,
            whiteSpace: "nowrap",
          }}
        >
          <button
            onClick={() => router.push("/shoots")}
            style={{
              background: "#e53232",
              color: "#fff",
              border: "none",
              padding: "14px 26px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#ff3c3c")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#e53232")
            }
          >
            View Cinematic Shoots
          </button>

          <button
            onClick={() => router.push("/Plans")}
            style={{
              background: "transparent",
              color: "#ddd",
              border: "1px solid #333",
              padding: "14px 26px",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#666")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "#333")
            }
          >
            Explore Plans
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0px);  }
        }
      `}</style>
    </section>
  );
}

const headlineStyle = {
  fontSize: "clamp(48px,7vw,96px)",
  lineHeight: 0.95,
  color: "#fff",
  marginBottom: 26,
  letterSpacing: "-0.05em",
  fontWeight: 600,
  textShadow:
    "0 2px 4px rgba(0,0,0,0.9), 0 6px 18px rgba(0,0,0,0.85), 0 12px 40px rgba(0,0,0,0.75)",
};

const lineStyle = {
  width: 180,
  height: 2,
  margin: "0 auto 30px",
  background: "#ff4d4d",
  boxShadow: "0 0 25px rgba(255,77,77,0.6)",
};

const textStyle = {
  maxWidth: 760,
  margin: "0 auto",
  color: "#f1f1f1",
  fontSize: 18,
  lineHeight: 1.7,
  textShadow:
    "0 2px 4px rgba(0,0,0,0.95), 0 4px 14px rgba(0,0,0,0.85)",
};

const tagStyle = {
  color: "#b90808",
  textTransform: "uppercase" as const,
  letterSpacing: "0.28em",
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 26,
  textShadow: "0 0 10px rgba(0,0,0,0.7)",
};

const textStyleLarge = {
  color: "#f3f3f3",
  fontSize: "clamp(18px,2vw,24px)",
  lineHeight: 1.8,
  fontWeight: 300,
  textShadow:
    "0 2px 4px rgba(0,0,0,0.95), 0 6px 20px rgba(0,0,0,0.85)",
};

const textStyleSmall = {
  color: "#d0d0d0",
  marginTop: 28,
  fontSize: 15,
  lineHeight: 1.8,
  textShadow:
    "0 2px 4px rgba(0,0,0,0.95), 0 4px 14px rgba(0,0,0,0.85)",
};