import Navbar from "@/components/header/NavBar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";


export default function Home() {
  return (
    <main>

   <header>
    <Navbar />
   </header>
   <main>
    <Hero />
    <Pricing />

   </main>
    </main>
  );
}
