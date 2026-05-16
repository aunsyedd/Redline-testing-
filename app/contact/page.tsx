"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";

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


const mixMatchOptions = [
  { name: "One-off CGI Piece", price: "SAR 4,500" },
  { name: "3D Architectural Visualisation", price: "SAR 2,500" },
  { name: "Full Production Day", price: "SAR 3,500" },
  { name: "Green-Screen Production", price: "SAR 5,500" },
  { name: "Voiceover (AR / EN)", price: "SAR 1,500" },
  { name: "Performance Ad Management", price: "SAR 2,500" },
  { name: "Community Management", price: "SAR 2,500" },
  { name: "Additional Revision Round", price: "SAR 800" },
];

function ContactForm() {
  const searchParams = useSearchParams();

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fullPhone = `${form.countryCode} ${form.phone}`;
    alert("Message sent successfully");
    console.log("FULL PHONE:", fullPhone);
    console.log("MIX MATCH:", form.mixMatch);

    setForm({
      name: "",
      email: "",
      phone: "",
      countryCode: "",
      message: "",
      plan: "",
      mixMatch: "",
    });
  };

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (!plan) return;
    const decoded = decodeURIComponent(plan).trim();
    setForm((prev) => ({ ...prev, plan: decoded }));
  }, [searchParams]);

  return (
    <section
      style={{
        display: "flex",
        gap: 60,
        maxWidth: 1100,
        margin: "0 auto",
        padding: "40px 20px 100px",
        alignItems: "flex-start",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 20 }}>
          {"Let's build something "}
          <span style={{ color: "#e53232" }}>impossible</span>
        </h2>

        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#fff" }}>
          Have a project in mind? We usually respond within 24 hours.
        </p>

        <div
          style={{ marginTop: 40, color: "#777", fontSize: 14, lineHeight: 2 }}
        >
          <div>hello@redlinevfx.studio</div>
          <div>Jeddah, Saudi Arabia</div>
          <div>Response Time: 24 Hours</div>
        </div>

        <div style={{ marginTop: 40, color: "#aaa", fontSize: 13 }}>
          Tell us your vision and we will turn it into cinematic visuals, CGI,
          and high-impact marketing content.
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            background: "#0b0b0b",
            padding: 30,
            border: "1px solid #1a1a1a",
            borderRadius: 6,
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <div style={{ display: "flex", gap: 10 }}>
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                width: "40%",
              }}
            >
              <option value="">Country Code</option>
              {countryOptions.map((c, index) => (
                <option key={`${c.value}-${index}`} value={c.value}>
                  {c.label} ({c.value})
                </option>
              ))}
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              style={{ ...inputStyle, flex: 1 }}
            />
          </div>

          <select
            name="plan"
            value={form.plan}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Plan</option>
            <option value="01 STARTER - SAR 4,500 / month">
              01 Starter - SAR 4,500 / month
            </option>
            <option value="02 GROWTH - SAR 8,500 / month">
              02 Growth - SAR 8,500 / month
            </option>
            <option value="03 CAMPAIGN - SAR 18,500 / project">
              03 Campaign - SAR 18,500 / project
            </option>
            <option value="04 FULL FUNNEL - SAR 14,500 / month">
              04 Full Funnel - SAR 14,500 / month
            </option>
            <option value="05 GROWTH ENGINE - SAR 5,500 / month">
              05 Growth Engine - SAR 5,500 / month
            </option>
          </select>

          <select
            name="mixMatch"
            value={form.mixMatch}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Mix & Match Services</option>
            {mixMatchOptions.map((item) => (
              <option key={item.name} value={`${item.name} - ${item.price}`}>
                {item.name} - {item.price}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
            style={{ ...inputStyle, resize: "none" }}
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e: any) =>
              (e.currentTarget.style.background = "#ff3c3c")
            }
            onMouseLeave={(e: any) =>
              (e.currentTarget.style.background = "#e53232")
            }
          >
            Send Message
          </button>
        </form>
      </div>

      {/* RESPONSIVE CSS ONLY */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            flex-direction: column !important;
            gap: 30px !important;
            padding: 20px 16px 80px !important;
          }

          section > div {
            width: 100% !important;
          }

          form {
            padding: 20px !important;
          }

          form > div:nth-of-type(1),
          form > div:nth-of-type(2),
          form > div:nth-of-type(4),
          form > div:nth-of-type(5) {
            flex-direction: column !important;
          }

          form > div:nth-of-type(3) {
            flex-direction: column !important;
          }

          form > div:nth-of-type(3) select,
          form > div:nth-of-type(3) input {
            width: 100% !important;
          }

          input,
          select,
          textarea {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
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
        <Suspense fallback={<div style={{ color: "#fff", padding: 40 }}>Loading...</div>}>
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