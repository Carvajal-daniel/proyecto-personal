import Image from "next/image";
import { Button } from "./ui/Button";
import Gradient from "@/utils/gradient/Gradient";

const Hero = () => {
  // Lista de imágenes para la prueba social
  const avatars = [
    "/assets/avatar.png",
    "/assets/avatar2.png",
    "/assets/avatar3.png",
  ];

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:px-6 lg:min-h-screen">
      <Gradient />


      {/* Etiqueta superior */}
      <div className="relative z-10 mb-6 flex items-center gap-2">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-secondary" />
        <span className="rounded-full bg-secondary  px-3 py-[3px] text-[9px] font-medium tracking-wider text-white/80 md:px-4 md:text-[10px]">
          INTELIGENCIA ARTIFICIAL PROACTIVA
        </span>
      </div>

      {/* Título Principal - Tamaños escalonados */}
      <h1 className="relative z-10 max-w-4xl font-bold uppercase tracking-tight text-foreground">
        <span className="mb-1 block text-4xl sm:text-6xl md:text-6xl lg:text-7xl">
          Tu negocio en
        </span>
        <span className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <span className="relative inline-block rounded-lg bg-primary/10 px-4 py-1 text-4xl text-primary neon-glow-text sm:text-6xl md:text-6xl lg:text-7xl">
            piloto
          </span>
        </span>
        <span className="mt-1 block text-4xl sm:text-6xl md:text-6xl lg:text-7xl">
          automático.
        </span>
      </h1>

      {/* Subtítulo descriptivo - Mejorado el ancho máximo para legibilidad */}
      <p className="relative z-10 mt-6 max-w-[280px] text-base leading-relaxed text-muted-foreground sm:max-w-md md:text-lg lg:max-w-lg">
        La primera IA que atiende, agenda y factura por ti.
        <br className="hidden sm:block" />
        Moderniza tu local hoy con tecnología de oráculo.
      </p>

      {/* Botón de Acción y Prueba Social */}
      <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
        <Button size="lg" className="w-full sm:w-auto px-10 py-6 text-lg">
          Empieza Gratis
        </Button>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center -space-x-2">
            {avatars.map((src) => (
              <div key={src} className="ghost-border h-10 w-10 overflow-hidden rounded-full border-2 border-background shadow-xl">
                <Image
                  src={src}
                  alt="Avatar de cliente"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

            {/* Medalla de +500 */}
            <div className="ghost-border flex h-10 w-10 items-center justify-center rounded-full bg-neutral/80 text-[10px] font-bold text-foreground backdrop-blur-sm border-2 border-background">
              +500
            </div>
          </div>
          <span className="text-[10px] font-semibold tracking-widest text-muted-foreground md:text-xs">
            MÁS DE 500 COMERCIOS YA FACTURAN MÁS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;