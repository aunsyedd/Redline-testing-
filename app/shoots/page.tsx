"use client";

import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import { Footer } from "@/app/components/Bottom";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ShootsPage() {
  const router = useRouter();
  const { tr } = useLanguage();
  return (
    
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#050505",
          color: "#fff",
          paddingTop: "120px",
        }}
      >
       {/* SHOWREEL SECTION */}
<section
  style={{
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 20px 120px",
  }}
>
  <div
    style={{
      background: "#0b0b0b",
      border: "1px solid #1a1a1a",
      borderRadius: 10,
      padding: 40,
      textAlign: "center",
      marginBottom: 40,
    }}
  >
    <h2
      style={{
        fontSize: 28,
        fontWeight: 800,
        marginBottom: 10,
      }}
    >
      {tr.shoots.showreel}
    </h2>

    <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
      {tr.shoots.showreelDesc1}
    </p>

    <div
      style={{
        width: "100%",
        height: 420,
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid #1a1a1a",
        background: "#000",
        position: "relative",
      }}
    >
      <video
        controls
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          background: "#000",
        }}
      >
        <source
          src="https://res.cloudinary.com/dvjvat0na/video/upload/f_auto,q_auto,c_scale,w_1280,vc_auto/v1779856646/1_ollc97.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>

  {/* SHOWREEL 2 */}
  <div
    style={{
      background: "#0b0b0b",
      border: "1px solid #1a1a1a",
      borderRadius: 10,
      padding: 40,
      textAlign: "center",
      marginBottom: 40,
    }}
  >
    <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
      {tr.shoots.showreel}
    </h2>

    <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
      {tr.shoots.showreelDesc2}
    </p>

    <div style={{
      width: "100%",
      height: 420,
      borderRadius: 10,
      overflow: "hidden",
      border: "1px solid #1a1a1a",
      background: "#000",
    }}>
      <video controls playsInline preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source
          src="https://res.cloudinary.com/dvjvat0na/video/upload/f_auto,q_auto,c_scale,w_1280,vc_auto/v1779856633/2_hvt0on.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>

  {/* SHOWREEL 3 */}
  <div
    style={{
      background: "#0b0b0b",
      border: "1px solid #1a1a1a",
      borderRadius: 10,
      padding: 40,
      textAlign: "center",
      marginBottom: 40,
    }}
  >
    <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
      {tr.shoots.showreel}
    </h2>

    <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
      {tr.shoots.showreelDesc2}
    </p>

    <div style={{
      width: "100%",
      height: 420,
      borderRadius: 10,
      overflow: "hidden",
      border: "1px solid #1a1a1a",
      background: "#000",
    }}>
      <video controls playsInline preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source
          src="https://res.cloudinary.com/dvjvat0na/video/upload/f_auto,q_auto,c_scale,w_1280,vc_auto/v1779856642/3_feh0yu.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>

  {/* SHOWREEL 4 */}
  <div
    style={{
      background: "#0b0b0b",
      border: "1px solid #1a1a1a",
      borderRadius: 10,
      padding: 40,
      textAlign: "center",
    }}
  >
    <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
      {tr.shoots.showreel}
    </h2>

    <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
      {tr.shoots.showreelDesc3}
    </p>

    <div style={{
      width: "100%",
      height: 420,
      borderRadius: 10,
      overflow: "hidden",
      border: "1px solid #1a1a1a",
      background: "#000",
    }}>
      <video controls playsInline preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source
          src="https://res.cloudinary.com/dvjvat0na/video/upload/f_auto,q_auto,c_scale,w_1280,vc_auto/v1779856659/4_cuqhiq.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>

  {/* SHOWREEL 5 */}
  <div
    style={{
      background: "#0b0b0b",
      border: "1px solid #1a1a1a",
      borderRadius: 10,
      padding: 40,
      textAlign: "center",
    }}
  >
    <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
      {tr.shoots.showreel}
    </h2>

    <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
      {tr.shoots.showreelDesc3}
    </p>

    <div style={{
      width: "100%",
      height: 420,
      borderRadius: 10,
      overflow: "hidden",
      border: "1px solid #1a1a1a",
      background: "#000",
    }}>
      <video controls playsInline preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source
          src="https://res.cloudinary.com/dvjvat0na/video/upload/f_auto,q_auto,c_scale,w_1280,vc_auto/v1779856642/5_pmes0a.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</section>

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            padding: "0 20px 120px",
          }}
        >
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            {tr.shoots.ctaTitle}
          </h2>

          <p style={{ color: "#888", fontSize: 14, marginBottom: 25 }}>
            {tr.shoots.ctaSub}
          </p>

<button
  onClick={() => router.push("/contact")}
  style={{
    background: "#e53232",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.08em",
    cursor: "pointer",
    textTransform: "uppercase",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = "#ff3c3c")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = "#e53232")
  }
>
  {tr.shoots.ctaBtn}
</button>
        </section>
      </main>

      <Footer />
    </>
  );
}