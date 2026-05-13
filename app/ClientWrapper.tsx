"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/app/Loader/page";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [firstLoad, setFirstLoad] = useState(true);

  // route loader
  const [routeLoading, setRouteLoading] = useState(false);

  // 🔒 block UI rendering during transition
  const [showPage, setShowPage] = useState(false);

  // =========================
  // 🎬 FIRST LOAD ONLY
  // =========================
  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (visited) {
      setFirstLoad(false);
      setShowPage(true);
      return;
    }

    const t = setTimeout(() => {
      setFirstLoad(false);
      setShowPage(true);
      sessionStorage.setItem("visited", "true");
    }, 4000);

    return () => clearTimeout(t);
  }, []);

  // =========================
  // ⚡ ROUTE CHANGE FIX (IMPORTANT PART)
  // =========================
  useEffect(() => {
    if (firstLoad) return;

    setRouteLoading(true);
    setShowPage(false); // hide page immediately (prevents flash)

    // minimum loader time (controls UX smoothness)
    const t = setTimeout(() => {
      setRouteLoading(false);
      setShowPage(true);
    }, 500); // ⬅️ THIS IS YOUR TIMER FIX

    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      {/* FIRST LOAD LOADER */}
      {firstLoad && <Loader finish={() => setFirstLoad(false)} />}

      {/* ROUTE LOADER */}
      {routeLoading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#050505",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
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
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      )}

      {/* PAGE CONTENT (CONTROLLED) */}
      {showPage && !firstLoad && children}
    </>
  );
}