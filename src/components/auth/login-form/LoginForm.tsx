"use client";

import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fontTitulo = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

// Variantes otimizadas para velocidade e prontidão
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10 }, // Distância mínima para não parecer lento
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Metade do tempo anterior
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05, // Stagger ultrarrápido (50ms)
      delayChildren: 0.05,   // Inicia quase imediatamente
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const LoginForm = () => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-background px-4 py-10">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="w-full max-w-md"
      >
        {/* Cabecera */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className={`${fontTitulo.className} text-4xl uppercase tracking-tighter text-foreground`}>
            Login
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-1 w-10 bg-primary rounded-full" />
            <p className="text-sm font-bold text-muted uppercase tracking-widest">
              Accede a tu cuenta
            </p>
            <span className="h-1 w-10 bg-secondary rounded-full" />
          </div>
        </motion.div>

        {/* Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-[1.5rem] p-8 shadow-xl py-9 border border-border"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-neutral ml-1">
                Correo electrónico
              </label>
              <input 
                type="email" 
                placeholder="correo@ejemplo.com"
                className="w-full px-4 py-3.5 rounded-xl bg-background-soft border border-border focus:border-primary focus:bg-white outline-none transition-all text-foreground placeholder:text-muted"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black uppercase tracking-widest text-neutral">
                  Contraseña
                </label>
                <Link href="#" className="text-[10px] font-bold text-secondary/80 underline hover:text-primary transition-colors uppercase">
                  Olvidé mi contraseña
                </Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3.5 rounded-xl bg-background-soft border border-border focus:border-primary focus:bg-white outline-none transition-all text-foreground"
              />
            </div>

            <Button
              size="lg"
              className="w-full py-6 text-sm font-black uppercase tracking-widest bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all rounded-xl shadow-xl shadow-gray-400/50 border-0 active:scale-[0.98]"
            >
              Entrar al sistema
            </Button>
          </form>

          <div className="mt-5 text-center">
            <p className="text-xs font-medium text-neutral">
              ¿Aún no tienes acceso?
            </p>
            <Link 
              href="/register/client" 
              className="inline-block mt-4 text-xs font-bold text-primary border-b-2 border-primary/20 hover:border-primary transition-all uppercase tracking-widest"
            >
              Crear cuenta ahora
            </Link>
          </div>
        </motion.div>

        {/* Mensaje de Seguridad */}
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-center text-[10px] font-bold text-muted uppercase tracking-[0.2em]"
        >
          🔒 Conexión Segura & Encriptada
        </motion.p>
      </motion.div>
    </section>
  );
};