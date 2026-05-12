"use client";

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

export default function Capabilities() {
  return (
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
        className="font-display"
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
        {services.map((s, i) => {
          return (
            <div
              key={i}
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                padding: "28px 32px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#161616";
                el.style.borderColor = "#333";

                const bar = el.querySelector(
                  ".accent-bar"
                ) as HTMLElement;
                if (bar) bar.style.height = "100%";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "#111";
                el.style.borderColor = "#1e1e1e";

                const bar = el.querySelector(
                  ".accent-bar"
                ) as HTMLElement;
                if (bar) bar.style.height = "0%";
              }}
            >
              {/* Red accent line */}
              <div
                className="accent-bar"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 3,
                  height: "0%",
                  background: "#e53232",
                  transition: "height 0.35s ease",
                }}
              />

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#f0f0f0",
                  marginBottom: 6,
                }}
              >
                {s.title}
              </h3>

              <p style={{ fontSize: 13, color: "#666" }}>{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}