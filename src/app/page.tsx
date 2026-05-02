
import Navbar from "@/components/landing-Page/header/NavBar";
import { Hero } from "@/components/landing-Page/hero/Hero";
import Pricing from "@/components/landing-Page/pricing/Pricing";



export default function Home() {
  return (
    <div className="overflow-hidden">

   <header>
    <Navbar />
   </header>
   <main>
    <section>
    <Hero />
    </section>
    <Pricing />

   </main>
    </div>
  );
}
