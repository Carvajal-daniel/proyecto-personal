import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const fontTitulo = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

export const LoginForm = () => {
  return (
    // Fondo usa el color --background (#F8FBFF), muy claro y limpio
    <section className="relative flex flex-col items-center justify-center bg-background px-4 py-10">
      
      <div className="w-full max-w-md">
        {/* Cabecera Minimalista */}
        <div className="text-center mb-10">
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
        </div>

        {/* Card Blanco Puro */}
        <div className="bg-white rounded-[1.5rem] p-8 shadow-xl py-9 border border-border">
          <form className="space-y-6">
            
            {/* Input de Email */}
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

            {/* Input de Contraseña */}
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

            {/* Botón Principal con el Gradiente de tus colores */}
            <Button
              size="lg"
              className="w-full py-6 text-sm font-black uppercase tracking-widest bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity rounded-xl shadow-xl shadow-gray-400/50 border-0"
            >
              Entrar al sistema
            </Button>
          </form>

          {/* Footer del Login */}
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
        </div>

        {/* Mensaje de Seguridad Discreto */}
        <p className="mt-4 text-center text-[10px] font-bold text-muted uppercase tracking-[0.2em]">
          🔒 Conexión Segura & Encriptada
        </p>
      </div>
    </section>
  );
};