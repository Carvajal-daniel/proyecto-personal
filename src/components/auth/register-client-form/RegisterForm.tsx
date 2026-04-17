"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const fontTitulo = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validación básica de coincidencia
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    // Simulación de envío a la API
    setTimeout(() => {
      setLoading(false);
      console.log("Registro exitoso");
    }, 2000);
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md">
        
        {/* Cabecera del Registro */}
        <div className="text-center mb-10">
          <h2 className={`${fontTitulo.className} text-4xl uppercase tracking-tighter text-foreground`}>
            Registro
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-1 w-10 bg-primary rounded-full" />
            <p className="text-sm font-bold text-muted uppercase tracking-widest">
              Crea tu perfil de cliente
            </p>
            <span className="h-1 w-10 bg-secondary rounded-full" />
          </div>
        </div>

        {/* Card de Formulario */}
        <div className="bg-white rounded-[1.5rem] p-8 shadow-xl border border-border">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* NOMBRE COMPLETO */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-neutral ml-1">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Daniel Carvajal"
                className="w-full px-4 py-2.5 rounded-xl bg-background-soft border border-border focus:border-primary focus:bg-white outline-none transition-all text-foreground placeholder:text-muted"
              />
            </div>

            {/* WHATSAPP */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-neutral ml-1">
                WhatsApp Personal
              </label>
              <input
                type="tel"
                required
                placeholder="+58 412 0000000"
                className="w-full px-4 py-2.5 rounded-xl bg-background-soft border border-border focus:border-primary focus:bg-white outline-none transition-all text-foreground placeholder:text-muted"
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-neutral ml-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                placeholder="usuario@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-background-soft border border-border focus:border-primary focus:bg-white outline-none transition-all text-foreground placeholder:text-muted"
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-1">
              <label className="text-[11px] font-black uppercase tracking-widest text-neutral ml-1">
                Contraseña
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-background-soft border border-border focus:border-primary focus:bg-white outline-none transition-all text-foreground"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-neutral ml-1">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 rounded-xl bg-background-soft border outline-none transition-all text-foreground ${
                  error ? "border-red-500" : "border-border focus:border-primary focus:bg-white"
                }`}
              />
              {error && (
                <p className="text-[10px] font-bold text-red-500 uppercase ml-1">
                  {error}
                </p>
              )}
            </div>

            {/* BOTÓN DE ACCIÓN */}
            <Button
              disabled={loading}
              size="lg"
              className="w-full py-6 mt-4 text-sm font-black uppercase tracking-widest bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity rounded-xl shadow-xl shadow-gray-500/30 border-0"
            >
              {loading ? "Configurando acceso..." : "Crear mi cuenta"}
            </Button>
          </form>

          {/* Footer del Registro */}
          <div className="mt-6 text-center">
            <p className="text-xs font-medium text-neutral">
              ¿Ya tienes una cuenta?
            </p>
            <Link 
              href="/login" 
              className="inline-block mt-3 text-xs font-bold text-secondary border-b-2 border-secondary/20 hover:border-secondary transition-all uppercase tracking-widest"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>

        {/* Seguridad */}
        <p className="mt-6 text-center text-[10px] font-bold text-muted uppercase tracking-[0.2em]">
          🔒 Datos protegidos por Altair Intelligence
        </p>
      </div>
    </section>
  );
}