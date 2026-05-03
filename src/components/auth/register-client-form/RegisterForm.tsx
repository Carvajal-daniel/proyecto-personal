"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import { shinePrimaryLinkClass } from "@/components/ui/ShineButton";

const font = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400","500","700","800"] });

const INPUT = cn(
  "w-full rounded-[10px] border-[1.5px] border-[#e8e8f0] bg-[#f4f4f8]",
  "pl-4 pr-4 py-3 text-[14px] font-medium text-[#1a1a2e]",
  "placeholder:text-[#c4c4d4] placeholder:font-normal outline-none",
  "transition-all focus:border-[#7c3aed] focus:bg-white focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
);

function FormRow({
  label,
  htmlFor,
  children,
  error
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="ml-1 text-[10px] font-bold uppercase tracking-widest text-[#555]"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="ml-1 text-[10px] font-bold uppercase text-red-500 animate-pulse">
          {error}
        </p>
      )}
    </div>
  );
}

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const clearError = useCallback(() => setError(""), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };

  return (
    <div className={cn(
      font.className, 
      "w-full max-w-[1000px] overflow-hidden h-fit rounded-[24px] border border-gray-200 shadow-2xl grid grid-cols-1 lg:grid-cols-2 bg-white"
    )}>
      
      {/* Painel Visual (Mesmo do Login) */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#5b3cf5] via-[#8b5cf6] to-[#d946ef] p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-14 -left-10 h-64 w-64 rounded-full bg-white/[0.07] blur-3xl" />

        <div className="flex items-center gap-3 relative z-10">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/20 backdrop-blur-md">
            <svg className="h-4 w-4 fill-white" viewBox="0 0 16 16"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z"/></svg>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white">Altair</span>
        </div>

        <div className="relative z-10 max-w-md">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Únete a la élite
          </span>
          <h2 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white">
            Crea tu cuenta hoy mismo.
          </h2>
          <p className="text-base leading-relaxed text-white/80">
            Únete a cientos de empresas que ya optimizan sus procesos con nuestra inteligencia aplicada.
          </p>
        </div>

        <div className="relative z-10 text-white/40 text-[10px] font-bold uppercase tracking-widest">
          © 2026 Altair Systems — Secure Infrastructure
        </div>
      </div>

      {/* Seção do Formulário */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="flex items-center justify-center p-8 md:p-10"
      >
        <div className="w-full max-w-[360px]">
          {/* Logo Mobile */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7c3aed]">
               <svg className="h-4 w-4 fill-white" viewBox="0 0 16 16"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z"/></svg>
            </div>
            <span className="text-lg font-bold text-[#1a1a2e]">Altair</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e]">
              Registro 👋
            </h2>
            <p className="mt-2 text-sm text-[#a0a0b0]">
              Crea tu perfil de cliente para comenzar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormRow label="Nombre Completo" htmlFor="register-name">
              <input
                id="register-name"
                type="text"
                required
                placeholder="Ej. Daniel Carvajal"
                className={INPUT}
              />
            </FormRow>

            <FormRow label="WhatsApp Personal" htmlFor="register-phone">
              <input
                id="register-phone"
                type="tel"
                required
                placeholder="+58 412 0000000"
                className={INPUT}
              />
            </FormRow>

            <FormRow label="Correo Electrónico" htmlFor="register-email">
              <input
                id="register-email"
                type="email"
                required
                placeholder="usuario@email.com"
                className={INPUT}
              />
            </FormRow>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormRow label="Contraseña" htmlFor="register-password">
                <input
                  id="register-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); clearError(); }}
                  placeholder="••••••••"
                  className={INPUT}
                />
              </FormRow>

              <FormRow label="Confirmar" htmlFor="register-confirm" error={error}>
                <input
                  id="register-confirm"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); clearError(); }}
                  placeholder="••••••••"
                  className={cn(INPUT, error && "border-red-500 focus:border-red-500")}
                />
              </FormRow>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={cn(
                shinePrimaryLinkClass, 
                "w-full justify-center py-3.5 text-sm font-bold shadow-lg shadow-purple-200 mt-2 transition-all active:scale-[0.98]",
                loading && "opacity-70 cursor-not-allowed"
              )}
            >
              {loading ? "Configurando..." : "Crear mi cuenta"}
            </button>
          </form>

          <p className="mt-8 text-center text-[13px] text-[#a0a0b0]">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="font-bold text-[#7c3aed] hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}