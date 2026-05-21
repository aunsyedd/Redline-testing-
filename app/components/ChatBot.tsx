"use client";

import { useEffect, useRef, useState } from "react";

const PROMPTS = [
  "What services do you offer?",
  "Pricing plans",
  "Project timeline",
  "CGI portfolio",
];

type Message = { role: "bot" | "user"; text: string };

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi there — I'm Redline AI. Ask me about our CGI services, pricing, or turnaround times.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = async (text?: string) => {
    const msg = text ?? input;
    if (!msg.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply || "No response." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Connection error — please try again." },
      ]);
    } finally {
      setTyping(false);
    }
  };

//   return (
//     <>
//       {/* ── CHAT WINDOW ── */}
//       {open && (
//         <div style={windowStyle}>
//           {/* Header */}
//           <div style={headerStyle}>
//             <div style={avatarStyle}>
//               <RobotIcon size={16} color="#fff" />
//             </div>
//             <div style={{ flex: 1 }}>
//               <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.04em" }}>
//                 Redline AI
//               </div>
//               <div style={{ fontSize: 11, color: "#666", marginTop: 2, display: "flex", alignItems: "center", gap: 5 }}>
//                 <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
//                 Online · CGI studio assistant
//               </div>
//             </div>
//             <button
//               onClick={() => setOpen(false)}
//               style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: "2px 4px" }}
//               aria-label="Close chat"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Quick prompts */}
//           <div style={{ padding: "10px 12px", display: "flex", flexWrap: "wrap", gap: 6, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
//             {PROMPTS.map((p) => (
//               <button
//                 key={p}
//                 onClick={() => sendMessage(p)}
//                 style={chipStyle}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "rgba(192,57,43,0.15)";
//                   e.currentTarget.style.borderColor = "rgba(192,57,43,0.4)";
//                   e.currentTarget.style.color = "#e57373";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "rgba(255,255,255,0.05)";
//                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
//                   e.currentTarget.style.color = "#aaa";
//                 }}
//               >
//                 {p}
//               </button>
//             ))}
//           </div>

//           {/* Messages */}
//           <div ref={chatRef} style={msgsStyle}>
//             {messages.map((m, i) => (
//               <div
//                 key={i}
//                 style={{
//                   display: "flex",
//                   gap: 8,
//                   maxWidth: "88%",
//                   alignSelf: m.role === "user" ? "flex-end" : "flex-start",
//                   flexDirection: m.role === "user" ? "row-reverse" : "row",
//                   animation: "msgIn 0.2s ease",
//                 }}
//               >
//                 <div style={m.role === "user" ? userMiniAvatarStyle : botMiniAvatarStyle}>
//                   {m.role === "user" ? "U" : "AI"}
//                 </div>
//                 <div
//                   style={{
//                     padding: "10px 13px",
//                     borderRadius: m.role === "user" ? "12px 4px 12px 12px" : "4px 12px 12px 12px",
//                     fontSize: 13,
//                     lineHeight: 1.55,
//                     color: "#f0f0f0",
//                     background: m.role === "user"
//                       ? "#c0392b"
//                       : "#1c1c1c",
//                     border: m.role === "user"
//                       ? "none"
//                       : "1px solid rgba(255,255,255,0.07)",
//                   }}
//                 >
//                   {m.text}
//                 </div>
//               </div>
//             ))}

//             {typing && (
//               <div style={{ display: "flex", gap: 8, alignSelf: "flex-start" }}>
//                 <div style={botMiniAvatarStyle}>AI</div>
//                 <div style={{
//                   padding: "12px 16px",
//                   background: "#1c1c1c",
//                   border: "1px solid rgba(255,255,255,0.07)",
//                   borderRadius: "4px 12px 12px 12px",
//                   display: "flex",
//                   gap: 5,
//                   alignItems: "center",
//                 }}>
//                   {[0, 150, 300].map((delay) => (
//                     <span
//                       key={delay}
//                       style={{
//                         width: 6,
//                         height: 6,
//                         borderRadius: "50%",
//                         background: "#555",
//                         display: "inline-block",
//                         animation: `bounce 0.9s ${delay}ms infinite`,
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Input */}
//           <div style={{ display: "flex", gap: 8, padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               placeholder="Ask anything about Redline…"
//               style={inputStyle}
//             />
//             <button
//               onClick={() => sendMessage()}
//               style={sendBtnStyle}
//               aria-label="Send message"
//             >
//               <SendIcon />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ── FAB ── */}
//       <button
//         onClick={() => setOpen((v) => !v)}
//         aria-label={open ? "Close chat" : "Open chat"}
//         style={fabStyle}
//         onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
//         onMouseLeave={(e) => (e.currentTarget.style.background = "#c0392b")}
//       >
//         {open ? (
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
//             <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         ) : (
//           <RobotIcon size={20} color="#fff" />
//         )}
//       </button>

//       <style>{`
//         @keyframes msgIn {
//           from { opacity: 0; transform: translateY(6px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes bounce {
//           0%, 60%, 100% { transform: translateY(0); }
//           30%            { transform: translateY(-5px); }
//         }
//         @keyframes popIn {
//           from { opacity: 0; transform: scale(0.94) translateY(12px); }
//           to   { opacity: 1; transform: scale(1) translateY(0); }
//         }
//       `}</style>
//     </>
//   );
}

// ── ICONS ──────────────────────────────────────────────
function RobotIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="6" width="14" height="12" rx="3" />
      <path d="M12 2v4" />
      <circle cx="12" cy="2" r="1" />
      <circle cx="9" cy="12" r="1" fill={color} />
      <circle cx="15" cy="12" r="1" fill={color} />
      <path d="M9 16h6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" fill="#fff" stroke="none" />
    </svg>
  );
}

// ── STYLES ─────────────────────────────────────────────
const windowStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 84,
  right: 22,
  width: "min(370px, 92vw)",
  height: 530,
  zIndex: 9999,
  display: "flex",
  flexDirection: "column",
  borderRadius: 14,
  overflow: "hidden",
  background: "#111",
  border: "1px solid rgba(255,255,255,0.09)",
  animation: "popIn 0.22s ease-out",
  transformOrigin: "bottom right",
};

const headerStyle: React.CSSProperties = {
  padding: "14px 16px",
  background: "#161616",
  borderBottom: "1px solid rgba(255,255,255,0.07)",
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const avatarStyle: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: "50%",
  background: "#c0392b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const msgsStyle: React.CSSProperties = {
  flex: 1,
  padding: "14px 12px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const chipStyle: React.CSSProperties = {
  fontSize: 11,
  padding: "5px 11px",
  borderRadius: 20,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.09)",
  color: "#aaa",
  cursor: "pointer",
  transition: "all 0.15s ease",
};

const botMiniAvatarStyle: React.CSSProperties = {
  width: 26,
  height: 26,
  borderRadius: "50%",
  background: "#1e1e1e",
  border: "1px solid rgba(255,255,255,0.08)",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 10,
  color: "#666",
  marginTop: 2,
};

const userMiniAvatarStyle: React.CSSProperties = {
  ...botMiniAvatarStyle,
  background: "#3a1010",
  borderColor: "rgba(192,57,43,0.3)",
  color: "#c0392b",
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  background: "#1a1a1a",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 10,
  padding: "10px 13px",
  color: "#f0f0f0",
  fontSize: 13,
  outline: "none",
};

const sendBtnStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: 10,
  background: "#c0392b",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  transition: "background 0.15s ease",
};

const fabStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 22,
  right: 22,
  zIndex: 9999,
  width: 52,
  height: 52,
  borderRadius: "50%",
  background: "#c0392b",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s ease",
  boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
};