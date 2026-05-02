
import HeroText from "./HeroText";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        
        {/* TEXTO ANIMADO (client separado) */}
        <HeroText />

        {/* VISUAL (client) */}
        <HeroVisual />

      </div>
    </section>
  );
}