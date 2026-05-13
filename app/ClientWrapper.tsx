"use client";

import { useEffect, useState } from "react";
import Loader from "@/app/Loader/page";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  // 🎬 FIRST LOAD ONLY
  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (visited) {
      setLoading(false);
      return;
    }

    const t = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("visited", "true");
    }, 2000);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <Loader finish={() => setLoading(false)} />}

      {/* ⚡ INSTANT PAGE RENDER (NO ANIMATION WRAPPER) */}
      {!loading && children}
    </>
  );
}