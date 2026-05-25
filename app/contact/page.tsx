"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";
import { useLanguage } from "@/app/context/LanguageContext";

/* MAIN COUNTRIES (EXPANDED) */
const countryOptions = [
  { label: "Pakistan", value: "+92" },
  { label: "India", value: "+91" },
  { label: "United States", value: "+1" },
  { label: "Canada", value: "+1" },
  { label: "United Kingdom", value: "+44" },
  { label: "Australia", value: "+61" },
  { label: "Germany", value: "+49" },
  { label: "France", value: "+33" },
  { label: "Italy", value: "+39" },
  { label: "Spain", value: "+34" },
  { label: "Brazil", value: "+55" },
  { label: "Mexico", value: "+52" },
  { label: "UAE", value: "+971" },
  { label: "Saudi Arabia", value: "+966" },
  { label: "Qatar", value: "+974" },
  { label: "Kuwait", value: "+965" },
  { label: "Turkey", value: "+90" },
  { label: "Russia", value: "+7" },
  { label: "China", value: "+86" },
  { label: "Japan", value: "+81" },
  { label: "South Korea", value: "+82" },
  { label: "Indonesia", value: "+62" },
  { label: "Malaysia", value: "+60" },
  { label: "Singapore", value: "+65" },
  { label: "South Africa", value: "+27" },
  { label: "Nigeria", value: "+234" },
  { label: "Egypt", value: "+20" },
  { label: "Bangladesh", value: "+880" },
  { label: "Sri Lanka", value: "+94" },
];

function ContactLoading() {
  const { tr } = useLanguage();
  return <div style={{ color: "#fff", padding: 40 }}>{tr.contact.loading}</div>;
}

/* ─── SUCCESS OVERLAY ─────────────────────────────────────── */
function SuccessOverlay({ onDismiss }: { onDismiss: () => void }) {
  const { tr } = useLanguage();
  const [phase, setPhase] = useState<"enter" | "idle" | "exit">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("idle"), 50);
    const t2 = setTimeout(() => setPhase("exit"), 4500);
    const t3 = setTimeout(onDismiss, 5100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDismiss]);

  return (
    <>
      <style>{`
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes glitch-h {
          0%,100% { clip-path: inset(0 0 98% 0); transform: translate(-4px,0); }
          20%      { clip-path: inset(30% 0 50% 0); transform: translate(4px,0); }
          40%      { clip-path: inset(70% 0 10% 0); transform: translate(-2px,0); }
          60%      { clip-path: inset(10% 0 80% 0); transform: translate(3px,0); }
          80%      { clip-path: inset(55% 0 35% 0); transform: translate(-4px,0); }
        }
        @keyframes draw-circle {
          from { stroke-dashoffset: 283; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes draw-check {
          from { stroke-dashoffset: 80; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes check-pop {
          0%   { transform: scale(0.6); opacity: 0; }
          60%  { transform: scale(1.12); opacity: 1; }
          80%  { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        @keyframes flare-burst {
          0%   { opacity: 0; transform: scale(0.5); }
          30%  { opacity: 1; transform: scale(1.4); }
          60%  { opacity: 0.4; transform: scale(1.8); }
          100% { opacity: 0; transform: scale(2.4); }
        }
        @keyframes particle-fly {
          0%   { opacity: 1; transform: translate(0,0) scale(1); }
          100% { opacity: 0; transform: var(--tx) scale(0); }
        }
        @keyframes text-reveal {
          from { opacity: 0; transform: translateY(16px) skewX(-4deg); }
          to   { opacity: 1; transform: translateY(0) skewX(0deg); }
        }
        @keyframes sub-reveal {
          from { opacity: 0; letter-spacing: 0.5em; }
          to   { opacity: 0.55; letter-spacing: 0.25em; }
        }
        @keyframes line-wipe {
          from { scaleX: 0; }
          to   { scaleX: 1; }
        }
        @keyframes overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes overlay-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes frame-in {
          from { opacity: 0; transform: scale(1.06); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes frame-out {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.94); }
        }
        @keyframes dismiss-btn-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .success-overlay {
          animation: ${phase === "exit" ? "overlay-out 0.6s ease forwards" : "overlay-in 0.4s ease forwards"};
        }
        .success-frame {
          animation: ${phase === "exit" ? "frame-out 0.5s ease forwards" : "frame-in 0.5s ease forwards"};
        }
      `}</style>

      <div
        className="success-overlay"
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.92)",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(6px)",
        }}
        onClick={onDismiss}
      >
        <div style={{
          position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
        }}>
          <div style={{
            position: "absolute", left: 0, right: 0, height: 2,
            background: "linear-gradient(90deg, transparent, rgba(229,50,50,0.6), transparent)",
            animation: "scanline 1.4s ease-in-out 0.1s 1 forwards",
          }} />
        </div>

        <div
          className="success-frame"
          style={{
            position: "absolute",
            width: 380, padding: "52px 40px",
            border: "1px solid rgba(229,50,50,0.15)",
            background: "rgba(229,50,50,0.04)",
            animation: "glitch-h 0.18s linear 0.3s 3",
            pointerEvents: "none",
            opacity: 0.4,
          }}
        />

        <div
          className="success-frame"
          style={{
            position: "relative",
            width: 380, padding: "52px 40px",
            background: "#070707",
            border: "1px solid #1e1e1e",
            boxShadow: "0 0 0 1px rgba(229,50,50,0.08), 0 40px 120px rgba(0,0,0,0.9)",
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 0,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {[
            { top: 0, left: 0, borderTop: "2px solid #e53232", borderLeft: "2px solid #e53232" },
            { top: 0, right: 0, borderTop: "2px solid #e53232", borderRight: "2px solid #e53232" },
            { bottom: 0, left: 0, borderBottom: "2px solid #e53232", borderLeft: "2px solid #e53232" },
            { bottom: 0, right: 0, borderBottom: "2px solid #e53232", borderRight: "2px solid #e53232" },
          ].map((s, i) => (
            <div key={i} style={{ position: "absolute", width: 18, height: 18, ...s }} />
          ))}

          <div style={{ position: "relative", marginBottom: 32 }}>
            <div style={{
              position: "absolute", inset: -20,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(229,50,50,0.35) 0%, transparent 70%)",
              animation: "flare-burst 0.8s ease-out 0.5s 1 both",
            }} />

            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i / 10) * 360;
              const dist = 55 + Math.random() * 20;
              const tx = `translate(${Math.cos((angle * Math.PI) / 180) * dist}px, ${Math.sin((angle * Math.PI) / 180) * dist}px)`;
              return (
                <div key={i} style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  width: i % 3 === 0 ? 4 : 2,
                  height: i % 3 === 0 ? 4 : 2,
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "#e53232" : "#fff",
                  marginTop: -1, marginLeft: -1,
                  "--tx": tx,
                  animation: `particle-fly 0.7s cubic-bezier(.2,.8,.3,1) ${0.55 + i * 0.03}s 1 both`,
                } as any} />
              );
            })}

            <svg
              width="82" height="82" viewBox="0 0 100 100"
              style={{ animation: "check-pop 0.55s cubic-bezier(.2,.8,.3,1) 0.4s both" }}
            >
              <circle cx="50" cy="50" r="45" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle
                cx="50" cy="50" r="45"
                fill="none"
                stroke="#e53232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset="283"
                transform="rotate(-90 50 50)"
                style={{ animation: "draw-circle 0.6s cubic-bezier(.4,0,.2,1) 0.45s forwards" }}
              />
              <polyline
                points="28,52 43,67 72,35"
                fill="none"
                stroke="#e53232"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="80"
                strokeDashoffset="80"
                style={{ animation: "draw-check 0.4s cubic-bezier(.4,0,.2,1) 1s forwards" }}
              />
            </svg>
          </div>

          <div style={{
            fontSize: 22, fontWeight: 800, color: "#fff",
            letterSpacing: "0.04em", textTransform: "uppercase",
            animation: "text-reveal 0.5s ease 1.1s both",
            textAlign: "center",
          }}>
            {tr.contact.successTitle}
          </div>

          <div style={{
            width: 40, height: 1,
            background: "#e53232",
            margin: "14px auto",
            transformOrigin: "left",
            animation: "line-wipe 0.4s ease 1.3s both",
          }} />

          <div style={{
            fontSize: 11, color: "#777",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            animation: "sub-reveal 0.5s ease 1.4s both",
            textAlign: "center",
          }}>
            {tr.contact.successSub}
          </div>

          <button
            onClick={onDismiss}
            style={{
              marginTop: 36,
              background: "transparent",
              border: "1px solid #2a2a2a",
              color: "#555",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "10px 28px",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
              animation: "dismiss-btn-in 0.4s ease 1.6s both",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#e53232";
              (e.currentTarget as HTMLButtonElement).style.color = "#e53232";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a";
              (e.currentTarget as HTMLButtonElement).style.color = "#555";
            }}
          >
            {tr.contact.close}
          </button>
        </div>
      </div>
    </>
  );
}

/* ─── CONTACT FORM ────────────────────────────────────────── */
function ContactForm() {
  const { tr } = useLanguage();
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "",
    message: "",
    plan: "",
    mixMatch: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          country_code: form.countryCode,
          phone: form.phone,
          plan: form.plan,
          mix_match: form.mixMatch,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || tr.contact.failed);
        return;
      }

      setShowSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        countryCode: "",
        message: "",
        plan: "",
        mixMatch: "",
      });
    } catch (error) {
      console.error(error);
      alert(tr.contact.error);
    }
  };

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (!plan) return;
    const decoded = decodeURIComponent(plan).trim();
    setForm((prev) => ({ ...prev, plan: decoded }));
  }, [searchParams]);

  return (
    <>
      {showSuccess && <SuccessOverlay onDismiss={() => setShowSuccess(false)} />}

      {/* ── Global responsive styles ── */}
      <style jsx global>{`
        .contact-section {
          display: flex;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px 100px;
          align-items: flex-start;
        }
        .contact-info {
          flex: 1;
        }
        .contact-form-wrapper {
          flex: 1;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: #0b0b0b;
          padding: 30px;
          border: 1px solid #1a1a1a;
          border-radius: 6px;
        }
        .contact-input {
          background: #0f0f0f;
          border: 1px solid #1f1f1f;
          padding: 14px 16px;
          color: #fff;
          font-size: 14px;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }
        .phone-row {
          display: flex;
          gap: 10px;
        }
        .country-select {
          background: #0f0f0f;
          border: 1px solid #1f1f1f;
          padding: 14px 16px;
          color: #fff;
          font-size: 14px;
          outline: none;
          width: 42%;
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .phone-input {
          background: #0f0f0f;
          border: 1px solid #1f1f1f;
          padding: 14px 16px;
          color: #fff;
          font-size: 14px;
          outline: none;
          flex: 1;
          min-width: 0;
          box-sizing: border-box;
        }
        .submit-btn {
          background: #e53232;
          color: #fff;
          border: none;
          padding: 14px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
        }
        .submit-btn:hover {
          background: #ff3c3c;
        }

        @media (max-width: 768px) {
          .contact-section {
            flex-direction: column !important;
            gap: 30px !important;
            padding: 20px 16px 80px !important;
          }
          .contact-info,
          .contact-form-wrapper {
            width: 100% !important;
          }
          .contact-form {
            padding: 20px !important;
          }

          /* Stack country code + phone vertically */
          .phone-row {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .country-select {
            width: 100% !important;
          }
          .phone-input {
            width: 100% !important;
            flex: none !important;
          }
        }
      `}</style>

      <section className="contact-section">
        {/* Left: info */}
        <div className="contact-info">
          <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 20 }}>
            {tr.contact.headline}
            <span style={{ color: "#e53232" }}>{tr.contact.headlineHighlight}</span>
          </h2>

          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#fff" }}>
            {tr.contact.sub}
          </p>

          <div style={{ marginTop: 40, color: "#777", fontSize: 14, lineHeight: 2 }}>
            <div>info@redlinevfx.com</div>
            <div>Jeddah, Saudi Arabia</div>
            <div>{tr.contact.responseTime}</div>
          </div>

          <div style={{ marginTop: 40, color: "#aaa", fontSize: 13 }}>
            {tr.contact.vision}
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">

            <input
              type="text"
              name="name"
              placeholder={tr.contact.name}
              value={form.name}
              onChange={handleChange}
              required
              className="contact-input"
            />

            <input
              type="email"
              name="email"
              placeholder={tr.contact.email}
              value={form.email}
              onChange={handleChange}
              required
              className="contact-input"
            />

            {/* Phone row — stacks on mobile */}
            <div className="phone-row">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                required
                className="country-select"
              >
                <option value="">{tr.contact.countryCode}</option>
                {countryOptions.map((c, index) => (
                  <option key={`${c.value}-${index}`} value={c.value}>
                    {c.label} ({c.value})
                  </option>
                ))}
              </select>

              <input
                type="tel"
                name="phone"
                placeholder={tr.contact.phone}
                value={form.phone}
                onChange={handleChange}
                required
                className="phone-input"
              />
            </div>

            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="contact-input"
            >
              <option value="">{tr.contact.selectPlan}</option>
              {tr.contact.planOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <select
              name="mixMatch"
              value={form.mixMatch}
              onChange={handleChange}
              className="contact-input"
            >
              <option value="">{tr.contact.mixMatch}</option>
              {tr.contact.mixMatchItems.map((item) => (
                <option key={item.name} value={`${item.name} - ${item.price}`}>
                  {item.name} - {item.price}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder={tr.contact.message}
              value={form.message}
              onChange={handleChange}
              rows={6}
              required
              className="contact-input"
              style={{ resize: "none" }}
            />

            <button type="submit" className="submit-btn">
              {tr.contact.send}
            </button>

          </form>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
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
        <Suspense fallback={<ContactLoading />}>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

const inputStyle = {
  background: "#0f0f0f",
  border: "1px solid #1f1f1f",
  padding: "14px 16px",
  color: "#fff",
  fontSize: 14,
  outline: "none",
};

const buttonStyle = {
  background: "#e53232",
  color: "#fff",
  border: "none",
  padding: "14px",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
};
