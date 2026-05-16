"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I’m Redline AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  // PRESET PROMPTS
  const prompts = [
    "What services do you offer?",
    "Explain your pricing plans",
    "Show me CGI portfolio ideas",
    "How long does a project take?",
  ];
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 640);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

  // AUTO SCROLL
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // SEND MESSAGE
  const sendMessage = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: messageText },
    ]);

    setInput("");
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply || "No response from Gemini.",
        },
      ]);
    } catch {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Error connecting to AI service ⚠️",
        },
      ]);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
<button
  onClick={() => setOpen(!open)}
  style={{
    position: "fixed",
    bottom: 22,
    right: 22,
    zIndex: 9999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: isMobile ? 0 : 10,

    padding: isMobile ? "14px" : "12px 16px",
    borderRadius: 999,

    border: "1px solid rgba(255, 77, 77, 0.25)",

    background:
      "linear-gradient(135deg, rgba(255,59,59,0.95), rgba(90,10,10,0.95))",

    color: "#fff",
    fontWeight: 600,
    letterSpacing: "0.08em",
    fontSize: 12,

    cursor: "pointer",

    boxShadow:
      "0 8px 30px rgba(255,59,59,0.25), 0 0 60px rgba(0,0,0,0.6)",

    transition: "all 0.25s ease",
    animation: "pulse 2.8s infinite",
  }}
>
  {/* ICON (always visible) */}
  <span
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.08)",
    }}
  >
    {/* ROBOT ICON */}
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="6" width="14" height="12" rx="3" />
      <path d="M12 2v4" />
      <circle cx="12" cy="2" r="1" />
      <circle cx="10" cy="12" r="1" />
      <circle cx="14" cy="12" r="1" />
      <path d="M9 15h6" />
    </svg>
  </span>

  {/* TEXT ONLY ON DESKTOP */}
  {!isMobile && (
    <span style={{ fontSize: 11, letterSpacing: "0.1em" }}>
      AI CHAT
    </span>
  )}

  {/* DOT ONLY ON DESKTOP */}
  {!isMobile && (
    <span
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 0 10px rgba(255,255,255,0.8)",
      }}
    />
  )}
</button>

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 22,
            width: "min(380px, 92vw)",
            height: 520,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            borderRadius: 16,
            overflow: "hidden",
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.85), rgba(0,0,0,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(14px)",
            boxShadow:
              "0 0 40px rgba(0,0,0,0.7), 0 0 20px rgba(255,59,59,0.1)",
            animation: "popIn 0.25s ease-out",
            transformOrigin: "bottom right",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              padding: "12px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#fff",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.08em",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* ROBOT ICON */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff3b3b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="8" width="16" height="12" rx="2" />
                <path d="M9 3h6" />
                <path d="M10 9h4" />
                <path d="M12 2v2" />
                <path d="M8 16h.01M16 16h.01" />
                <path d="M2 12h2M20 12h2" />
              </svg>

              REDLINE AI ASSISTANT
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#aaa",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              ✕
            </button>
          </div>

          {/* PRESET PROMPTS */}
          <div
            style={{
              padding: 10,
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {prompts.map((p, i) => (
              <button
                key={i}
                onClick={() => sendMessage(p)}
                style={{
                  fontSize: 11,
                  padding: "6px 10px",
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#ddd",
                  cursor: "pointer",
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {/* MESSAGES */}
          <div
            ref={chatRef}
            style={{
              flex: 1,
              padding: 12,
              overflowY: "auto",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    m.role === "user" ? "flex-end" : "flex-start",
                  marginBottom: 10,
                  animation: "msgIn 0.25s ease",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 12px",
                    borderRadius: 12,
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: "#fff",
                    background:
                      m.role === "user"
                        ? "linear-gradient(135deg, #ff3b3b, #7a0f0f)"
                        : "rgba(255,255,255,0.06)",
                    border:
                      m.role === "user"
                        ? "1px solid rgba(255,77,77,0.3)"
                        : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ color: "#aaa", fontSize: 12 }}>
                Gemini is thinking...
              </div>
            )}
          </div>

          {/* INPUT */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: 8,
              gap: 8,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              style={{
                flex: 1,
                padding: 10,
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
                outline: "none",
                borderRadius: 10,
                fontSize: 13,
              }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={() => sendMessage()}
              style={{
                padding: "10px 14px",
                background: "linear-gradient(135deg, #ff3b3b, #7a0f0f)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              SEND
            </button>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes msgIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,59,59,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(255,59,59,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,59,59,0); }
        }
      `}</style>
    </>
  );
}