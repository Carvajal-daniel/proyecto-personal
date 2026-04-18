"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import Gradient from "@/lib/gradient/Gradient";
import { Button } from "@/components/ui/Button";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation"; // 1. Correção da importação

const fontTitulo = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const router = useRouter(); // 2. Inicialização do hook dentro do componente

  const avatars = [
    "/assets/avatar.png",
    "/assets/avatar2.png",
    "/assets/avatar3.png",
  ];

  // 3. Função movida para dentro do componente
  const handleRegister = () => {
    router.push("/register/client");
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:px-6 lg:min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.08, ease: "easeOut" }}
      >
        <Gradient className="h-50 w-50 left-40" />
      </motion.div>

      <motion.div variants={itemVariants} className="relative z-10 mb-4 flex items-center gap-2">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-secondary" />
        <span className="rounded-full bg-secondary px-3 py-[2px] text-[9px] font-medium tracking-wider text-white/80 md:px-4 md:text-[10px] shadow-md shadow-gray-500/50">
          INTELIGENCIA ARTIFICIAL PROACTIVA
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className={`${fontTitulo.className} relative z-10 max-w-5xl uppercase tracking-tighter text-foreground leading-[0.9]`}
      >
        <span className="mb-2 block text-[38px] font-semibold sm:text-7xl md:text-8xl lg:text-9xl">
          Tu negocio en
        </span>
        <span className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4 my-2">
          <span className="relative inline-block rounded-2xl bg-primary/10 px-6 py-2 text-[38px] text-primary neon-glow-text sm:text-7xl md:text-8xl lg:text-9xl">
            piloto
          </span>
        </span>
        <span className="mt-2 block text-[38px] font-semibold sm:text-7xl md:text-8xl lg:text-9xl">
          automático.
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="relative z-10 mt-6 max-w-[280px] text-base font-medium text-black/80 sm:max-w-md md:text-xl lg:max-w-2xl"
      >
        La primera IA que atiende, agenda y factura por ti.
        <br className="hidden sm:block" />
        Moderniza tu local hoy con tecnología de oráculo.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="relative z-10 mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10"
      >
        <Button
          variant="default"
          size="lg"
          onClick={handleRegister} // Nome corrigido aqui também
          className="w-full sm:w-auto px-10 py-6 text-lg font-semibold 
          bg-gradient-to-r from-primary to-secondary text-white 
          shadow-lg shadow-gray-500/50 border-0 hover:scale-105 transition-all duration-300 active:scale-95"
        >
          Empieza Gratis
        </Button>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center -space-x-2">
            {avatars.map((src, index) => (
              <div key={index} className="ghost-border h-12 w-12 overflow-hidden rounded-full border-2 border-background shadow-lg shadow-gray-500/50">
                <Image src={src} alt="Avatar" width={48} height={48} className="h-full w-full object-cover" />
              </div>
            ))}
            <div className="ghost-border flex h-12 w-12 items-center justify-center rounded-full bg-neutral/80 text-[11px] font-bold text-white backdrop-blur-sm border-2 border-background">
              +500
            </div>
          </div>
          <span className="text-[10px] font-bold tracking-widest text-muted-foreground md:text-xs uppercase">
            MÁS DE 500 COMERCIOS YA FACTURAN MÁS
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;