import HeroText from "./HeroText";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative px-6 pt-32 md:mt-20 md:pb-[7rem]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <HeroText />
        <HeroVisual />
      </div>
    </section>
  );
}
