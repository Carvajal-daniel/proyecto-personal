import { LoginForm } from "@/components/auth/login-form/LoginForm";

export default function LoginPage() {
  return (
    // Eliminamos py-10 e incluimos h-svh para un ajuste perfecto
    <main className="flex h-svh w-full flex-col items-center justify-center bg-background px-4 overflow-hidden">
      <LoginForm />
    </main>
  );
}