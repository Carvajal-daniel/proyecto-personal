import Image from "next/image";
import { Button } from "./ui/Button";

const Hero = () => {
  // Lista de imágenes para la prueba social
  const avatars = [
    "/assets/avatar.png",
    "/assets/avatar2.png",
    "/assets/avatar3.png",
  ];

  return (
    <section className="relative -mt-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      
      {/* Imagen de fondo principal */}
     {/* Imagen de fondo principal */}
      <Image 
        src="/assets/Hero.png" 
        alt="Fondo decorativo del Hero" 
        width={1920} // Resolução base alta
        height={1080} // Resolução base alta
        quality={100} // Força o Next.js a renderizar com 100% de qualidade
        priority 
        className="fixed left-1/2 top-[35%] -z-10 w-4/5 -translate-x-[45%] -translate-y-1/2 rounded-2xl object-cover opacity-[0.18] shadow-2xl" 
      />

      {/* Brillo de neón ambiental (Fondo) */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      {/* Etiqueta superior */}
      <div className="label-tech mb-4 flex items-center gap-2">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span className="rounded-full bg-neutral/40 px-4 py-1 text-[10px] text-foreground/80">
          INTELIGENCIA ARTIFICIAL PROACTIVA
        </span>
      </div>

      {/* Título Principal */}
      <h1 className="display-lg max-w-2xl font-bold uppercase text-foreground">
        <span className="block text-5xl mb-2">Tu negocio en</span>
        <span className="relative z-10 inline-block rounded-lg px-4 py-1 text-5xl text-primary neon-glow-text">
          piloto
        </span>{" "}
        <span className="block text-5xl mt-2">automático.</span>
      </h1>

      {/* Subtítulo descriptivo */}
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
        La primera IA que atiende, agenda y factura por ti.
        <br />
        Moderniza tu local hoy con tecnología de oráculo.
      </p>

      {/* Botón de Acción y Prueba Social */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
        <Button size="lg">
          Empieza Gratis
        </Button>

        <div className="flex flex-col items-center gap-3">
          <div className="flex -space-x-1">
            {avatars.map((src) => (
              <div key={src} className="ghost-border h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={src}
                  alt="Avatar de cliente"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            
            {/* Medalla de +500 */}
            <div className="ghost-border flex h-9 w-9 items-center justify-center rounded-full bg-neutral/40 text-xs font-bold text-muted-foreground">
              +500
            </div>
          </div>
          <span className="label-tech text-muted-foreground">
            MÁS DE 500 COMERCIOS YA FACTURAN MÁS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;