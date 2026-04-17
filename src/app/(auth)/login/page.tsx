import { LoginForm } from "@/components/auth/login-form/LoginForm";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const fontLogo = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

export default function LoginPage() {
  return (
    // O fundo usa --background (#F8FBFF) para um ar limpo e arejado
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        
        {/* Logo/Título do Sistema */}
        <div className="text-center mb-6">
        
          
        </div>
        
        {/* O formulário estilizado que criamos anteriormente */}
        <LoginForm />
        
        {/* Footer Auxiliar (Opcional, pois o LoginForm já tem um Link de registro) */}
        <div className="mt-8 text-center">
          <p className="text-xs font-semibold text-neutral/50 uppercase tracking-widest">
            Altair Intelligence © 2026
          </p>
        </div>

      </div>
    </main>
  );
}