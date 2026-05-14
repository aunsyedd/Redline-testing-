"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ finish }: { finish: () => void }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setHide(true);
      setTimeout(() => finish(), 400); // fade out then call finish
    }, 1400); // ✅ was 2200ms — now 1.4s

    return () => clearTimeout(t);
  }, [finish]);

  return (
    <div className={`loader ${hide ? "hide" : ""}`}>
      <div className="logoWrap">
        <Image
          src="/images/whitelogo.png"
          alt="REDLINE VFX"
          width={580}
          height={580}
          priority
          className="logo"
        />
      </div>

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
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .hide {
          opacity: 0;
          transform: scale(1.05);
        }

        .logoWrap {
          position: relative;
          z-index: 2;
          margin-bottom: 20px;
          animation: shake 3s infinite ease-in-out;
        }

        .logo {
          animation: logoIntro 2.2s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes logoIntro {
          0%   { transform: scale(0.85) rotate(-2deg); opacity: 0.4; }
          25%  { transform: scale(1.02) rotate(1deg);  opacity: 0.9; }
          50%  { transform: scale(1.05) rotate(-1deg); opacity: 1;   }
          75%  { transform: scale(1.02) rotate(1deg);  opacity: 0.95;}
          100% { transform: scale(0.85) rotate(-2deg); opacity: 0.4; }
        }

        @keyframes shake {
          0%, 100% { transform: translate(0, 0);   }
          20%       { transform: translate(-1px, 1px); }
          40%       { transform: translate(1px, -1px); }
          60%       { transform: translate(-1px, -1px);}
          80%       { transform: translate(1px, 1px);  }
        }

        .text {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: 6px;
          color: #fff;
          animation: glitch 1.2s infinite;
        }

        .text span { color: #e53232; }

        @keyframes glitch {
          0%   { text-shadow: 2px 0 #e53232,  -2px 0 #000; }
          20%  { text-shadow: -2px 0 #e53232,  2px 0 #000; }
          40%  { text-shadow: 2px 2px #e53232, -2px -2px #000; }
          60%  { text-shadow: -1px 1px #e53232, 1px -1px #000; }
          100% { text-shadow: 2px 0 #e53232,  -2px 0 #000; }
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
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1;   }
        }
      `}</style>
    </div>
  );
}