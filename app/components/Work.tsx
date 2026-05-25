"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function SelectedWork() {
  const { tr } = useLanguage();
  const projects = tr.work.projects;
  const [active, setActive] = useState(0);

  // Auto slide every 2.5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section
      id="selected-work"
      style={{
        background: "#00000002",
        padding: "clamp(80px, 12vw, 160px) clamp(20px, 6vw, 60px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Small Label */}
        <div
          style={{
            color: "#e53232",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          {tr.work.label}
        </div>

        {/* Heading */}
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(48px, 7vw, 86px)",
            lineHeight: 1,
            marginBottom: 90,
            fontWeight: 320,
          }}
        >
          {tr.work.title}
        </h2>

        {/* Sliding Work */}
        <div
          style={{
            position: "relative",
            height: 180,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {projects.map((project, i) => {
            const isActive = i === active;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  transition: "all 0.8s ease",
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translateY(0px)"
                    : "translateY(40px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 18,
                    marginBottom: 10,
                  }}
                >
                  {/* Red Line */}
                  <div
                    style={{
                      width: 24,
                      height: 3,
                      background: "#e53232",
                    }}
                  />

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "clamp(30px, 5vw, 48px)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Category */}
                <div
                  style={{
                    color: "#e53232",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.category}
                </div>
              </div>
            );
          })}
        </div>
        {/* Bottom Center Red Line */}
<div
  style={{
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "60%",
  height: 1,
  background:
    "linear-gradient(90deg, transparent 0%, #e53232 50%, transparent 100%)",
}}
/>
      </div>
    </section>
  );
}