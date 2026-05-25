import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Work from "./components/Work";
import Pricing from "./components/Pricing"
import { FinalCTA, Footer } from "./components/Bottom";


export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Hero />

      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #1e1e1e, transparent)",
        }}
      />
      
<Work/>
<Pricing/>
      <FinalCTA />
      <Footer />

           
    </main>
  );
}