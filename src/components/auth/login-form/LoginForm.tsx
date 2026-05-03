"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import { shinePrimaryLinkClass } from "@/components/ui/ShineButton";

const font = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400","500","700","800"] });

const INPUT = cn(
  "w-full rounded-[10px] border-[1.5px] border-[#e8e8f0] bg-[#f4f4f8]",
  "pl-[38px] pr-4 py-3 text-[14px] font-medium text-[#1a1a2e]",
  "placeholder:text-[#c4c4d4] placeholder:font-normal outline-none",
  "transition-all focus:border-[#7c3aed] focus:bg-white focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
);

const STATS = [
  { val:"99.9%", sub:"Disponibilidad", icon: <><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/></> },
  { val:"TLS 1.3", sub:"Cifrado", icon: <path d="M8 1l5 2.5V7c0 3-2 5.5-5 6.5C5 12.5 3 10 3 7V3.5L8 1z"/> },
  { val:"SOC 2", sub:"Certificado", icon: <path d="M13 4L6.5 11 3 7.5"/> },
];

export function LoginForm() {
  return (
    /* Mudanças principais: h-fit, remoção de min-h-screen e ajuste de arredondamento */
    <div className={cn(
      font.className, 
      "w-full max-w-[1080px] overflow-hidden h-fit rounded-[24px] border border-gray-200 shadow-2xl grid grid-cols-1 lg:grid-cols-2 bg-white"
    )}>

      {/* Panel visual — Oculto en móvil, visible en LG+ */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#5b3cf5] via-[#8b5cf6] to-[#d946ef] p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-14 -left-10 h-64 w-64 rounded-full bg-white/[0.07] blur-3xl" />

        <div className="flex items-center gap-3 relative z-10">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/20 backdrop-blur-md">
            <svg className="h-4 w-4 fill-white" viewBox="0 0 16 16"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z"/></svg>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white">Altair</span>
        </div>

        <div className="relative z-10 max-w-md py-12">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Plataforma Enterprise
          </span>
          <h2 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white">
            Gestiona todo en un solo lugar.
          </h2>
          <p className="text-base leading-relaxed text-white/80">
            Acceso centralizado a todos los módulos, informes y configuraciones con seguridad de nivel bancario.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-4">
          {STATS.map((s) => (
            <div key={s.val} className="flex min-w-[120px] flex-col gap-2 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <svg className="h-4 w-4 fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 16 16">{s.icon}</svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-white">{s.val}</div>
                <div className="text-[11px] font-medium text-white/60">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección del Formulario */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="flex items-center justify-center p-8 md:p-12"
      >
        <div className="w-full max-w-[340px]">
          {/* Logo visible solo en móvil/tablet */}
          <div className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7c3aed]">
               <svg className="h-4 w-4 fill-white" viewBox="0 0 16 16"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z"/></svg>
            </div>
            <span className="text-lg font-bold text-[#1a1a2e]">Altair</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e]">
              Bienvenido 👋
            </h2>
            <p className="mt-2 text-sm text-[#a0a0b0]">
              Ingresa tus datos para acceder al panel.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#444]">Correo electrónico</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c4c4d4]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <input type="email" placeholder="nombre@empresa.com" className={INPUT}/>
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#444]">Contraseña</label>
                <Link href="#" className="text-[11px] font-bold text-[#7c3aed] hover:underline">¿Olvidaste?</Link>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c4c4d4]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <input type="password" placeholder="••••••••" className={INPUT}/>
              </div>
            </div>

            <button type="submit" className={cn(shinePrimaryLinkClass, "w-full justify-center py-3.5 text-sm font-bold shadow-lg shadow-purple-200")}>
              Acceder ahora
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#eeeef4]"/>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c4c4d4]">o</span>
            <div className="h-px flex-1 bg-[#eeeef4]"/>
          </div>

          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-xl border-[1.5px] border-[#e8e8f0] bg-white py-3 text-sm font-bold text-[#1a1a2e] transition-all hover:bg-[#fafafa]">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          <p className="mt-8 text-center text-[13px] text-[#a0a0b0]">
            ¿Sin cuenta?{" "}
            <Link href="/register/client" className="font-bold text-[#7c3aed] hover:underline">
              Regístrate
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}