"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ finish }: { finish: () => void }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setHide(true);
      setTimeout(() => finish(), 600);
    }, 2200);

    return () => clearTimeout(t);
  }, [finish]);

  return (
    <div className={`loader ${hide ? "hide" : ""}`}>
      {/* 🧠 LOGO */}
      <div className="logoWrap">
        <Image
          src="/images/redline-logo.png"
          alt="REDLINE VFX"
          width={580}
          height={580}
          priority
          className="logo"
        />
      </div>

      {/* TEXT */}
      <div className="text">
        REDLINE <span>VFX</span>
      </div>

      <div className="sub">rendering reality...</div>

      <style jsx>{`
        .loader {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at center, #0a0a0a, #000);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .hide {
          opacity: 0;
          transform: scale(1.05);
          transition: all 0.6s ease;
        }

        /* 🧠 LOGO WRAP */
        .logoWrap {
          position: relative;
          z-index: 2;
          margin-bottom: 20px;
          animation: shake 3s infinite ease-in-out;
        }

        /* 🔥 LOGO ANIMATION (no glow) */
        .logo {
          animation: logoIntro 2.2s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes logoIntro {
          0% {
            transform: scale(0.85) rotate(-2deg);
            opacity: 0.4;
          }

          25% {
            transform: scale(1.02) rotate(1deg);
            opacity: 0.9;
          }

          50% {
            transform: scale(1.05) rotate(-1deg);
            opacity: 1;
          }

          75% {
            transform: scale(1.02) rotate(1deg);
            opacity: 0.95;
          }

          100% {
            transform: scale(0.85) rotate(-2deg);
            opacity: 0.4;
          }
        }

        /* 🔥 subtle shake */
        @keyframes shake {
          0%,
          100% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(-1px, 1px);
          }
          40% {
            transform: translate(1px, -1px);
          }
          60% {
            transform: translate(-1px, -1px);
          }
          80% {
            transform: translate(1px, 1px);
          }
        }

        /* TEXT */
        .text {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: 6px;
          color: #fff;
          animation: glitch 1.2s infinite;
        }

        .text span {
          color: #e53232;
        }

        @keyframes glitch {
          0% {
            text-shadow: 2px 0 #e53232, -2px 0 #000;
          }
          20% {
            text-shadow: -2px 0 #e53232, 2px 0 #000;
          }
          40% {
            text-shadow: 2px 2px #e53232, -2px -2px #000;
          }
          60% {
            text-shadow: -1px 1px #e53232, 1px -1px #000;
          }
          100% {
            text-shadow: 2px 0 #e53232, -2px 0 #000;
          }
        }

        .sub {
          margin-top: 10px;
          font-size: 12px;
          color: #777;
          letter-spacing: 3px;
          text-transform: uppercase;
          animation: flicker 1.8s infinite;
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}