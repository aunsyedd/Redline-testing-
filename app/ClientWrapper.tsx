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
  const [routeLoading, setRouteLoading] = useState(false);

  // =========================
  // 🎬 FIRST LOAD ONLY
  // =========================
  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (visited) {
      setFirstLoad(false);
      return;
    }

    // Loader component controls its own timing via finish()
    // No timeout needed here — Loader calls finish() when done
  }, []);

  // =========================
  // ⚡ ROUTE CHANGE
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
      {firstLoad && (
        <Loader
          finish={() => {
            setFirstLoad(false);
            sessionStorage.setItem("visited", "true");
          }}
        />
      )}

      {/* ROUTE CHANGE SPINNER — overlays page, doesn't block it */}
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

      {/* PAGE — always rendered once first load is done */}
      {!firstLoad && children}
    </>
  );
}