import { BentoGrid } from "@/components/BentoGrid";
import { CTA } from "@/components/cta/CTA";
import { Footer } from "@/components/landing-Page/footer/Footer";
import Navbar from "@/components/landing-Page/header/NavBar";
import { Hero } from "@/components/landing-Page/hero/Hero";
import Pricing from "@/components/landing-Page/pricing/Pricing";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
