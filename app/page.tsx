import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
// import Pricing from "./components/Pricing";
import Pricing from "./components/PricingSection";
import HeroPrice from "./components/heropricing";
import { CaseStudy, FinalCTA, Footer } from "./components/Bottom";

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #1e1e1e, transparent)" }} />
      <Services />
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #1e1e1e, transparent)" }} />
      <Work />
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #1e1e1e, transparent)" }} />
      {/* <Pricing /> */}
      <Pricing />
      {/* <CaseStudy /> */}
      <HeroPrice />
      <FinalCTA />
      <Footer />
    </main>
  );
}
