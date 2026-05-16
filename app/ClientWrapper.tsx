"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/app/Loader/page";
import ChatBot from "./components/ChatBot";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [firstLoad, setFirstLoad] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // =========================
  // 🎬 FIRST LOAD
  // =========================
  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (visited) {
      setFirstLoad(false);
      setShowChat(true); // 👈 show chat for returning users
      return;
    }
  }, []);

  // =========================
  // ⚡ AFTER FIRST LOAD FINISH
  // =========================
const handleFinish = () => {
  setFirstLoad(false);
  sessionStorage.setItem("visited", "true");

  // wait until page fully renders + loader removed
  requestAnimationFrame(() => {
    setTimeout(() => {
      setShowChat(true);
    }, 1000);
  });
};

  // =========================
  // 🔁 ROUTE CHANGE LOADER
  // =========================
  useEffect(() => {
    if (firstLoad) return;

    setRouteLoading(true);

    const t = setTimeout(() => {
      setRouteLoading(false);
    }, 300);

    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      {/* FIRST LOAD LOADER */}
      {firstLoad && <Loader finish={handleFinish} />}

      {/* ROUTE LOADING OVERLAY */}
      {routeLoading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(5,5,5,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            backdropFilter: "blur(2px)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              border: "3px solid #1a1a1a",
              borderTop: "3px solid #e53232",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* PAGE */}
      {!firstLoad && children}

      {/* 🤖 CHATBOT (GLOBAL + DELAYED) */}
    {!firstLoad && !routeLoading && showChat && (
  <ChatBot />
)}
    </>
  );
}