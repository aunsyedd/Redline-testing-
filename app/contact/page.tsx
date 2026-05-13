"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import Select from "react-select";
// import countryList from "react-select-country-list";
import { getCountryCallingCode } from "libphonenumber-js";

import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Bottom";

function ContactForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "",
    message: "",
    plan: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fullPhone = `${form.countryCode} ${form.phone}`;
    alert("Message sent successfully");
    console.log("FULL PHONE:", fullPhone);
    setForm({
      name: "",
      email: "",
      phone: "",
      countryCode: "",
      message: "",
      plan: "",
    });
  };

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (!plan) return;
    const decoded = decodeURIComponent(plan).trim();
    setForm((prev) => ({ ...prev, plan: decoded }));
  }, [searchParams]);

  const countryOptions = useMemo(() => {
    return countryList()
      .getData()
      .map((c) => {
        let dialCode = "";
        try {
          dialCode = getCountryCallingCode(c.value as any);
        } catch {
          dialCode = "";
        }
        return {
          label: c.label,
          value: `+${dialCode}`,
        };
      });
  }, []);

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
            <div style={{ width: "40%" }}>
              <Select
                options={countryOptions}
                placeholder="+Code"
                value={countryOptions.find((c) => c.value === form.countryCode)}
                onChange={(val: any) =>
                  setForm({ ...form, countryCode: val?.value || "" })
                }
                formatOptionLabel={(e: any, meta: any) =>
                  meta.context === "value" ? e.value : e.label
                }
                styles={{
                  control: (base: any) => ({
                    ...base,
                    backgroundColor: "#0f0f0f",
                    borderColor: "#1f1f1f",
                    minHeight: 48,
                    color: "#fff",
                  }),
                  menu: (base: any) => ({ ...base, backgroundColor: "#0f0f0f" }),
                  singleValue: (base: any) => ({ ...base, color: "#fff" }),
                  input: (base: any) => ({ ...base, color: "#fff" }),
                  placeholder: (base: any) => ({ ...base, color: "#777" }),
                  option: (base: any, state: any) => ({
                    ...base,
                    backgroundColor: state.isFocused ? "#1a1a1a" : "#0f0f0f",
                    color: "#fff",
                    cursor: "pointer",
                  }),
                }}
              />
            </div>

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
            required
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
        <Suspense
          fallback={
            <div style={{ color: "#fff", padding: 40 }}>Loading...</div>
          }
        >
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