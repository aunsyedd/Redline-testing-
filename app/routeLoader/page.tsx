"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setLoading(true);
    setDisplay(true);

    const t = setTimeout(() => {
      setLoading(false);

      const hide = setTimeout(() => {
        setDisplay(false);
      }, 300);

      return () => clearTimeout(hide);
    }, 500); // loader duration per route change

    return () => clearTimeout(t);
  }, [pathname]);

  if (!display) return null;

  return (
    <div className={`routeLoader ${loading ? "show" : "hide"}`}>
      <div className="spinner"></div>

      <p>Loading...</p>

      <style jsx>{`
        .routeLoader {
          position: fixed;
          inset: 0;
          background: #050505;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9998;
          transition: opacity 0.3s ease;
        }

        .show {
          opacity: 1;
        }

        .hide {
          opacity: 0;
        }

        .spinner {
          width: 42px;
          height: 42px;
          border: 3px solid #222;
          border-top: 3px solid #e53232;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: 12px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        p {
          font-size: 12px;
          letter-spacing: 0.2em;
          color: #777;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}