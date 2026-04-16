import Navbar from "@/components/header/NavBar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";


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
