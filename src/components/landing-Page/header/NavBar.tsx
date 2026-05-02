"use client";

import { Logo } from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";
import { ShineButton } from "@/components/ui/ShineButton";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Preços", href: "#pricing" },
  { label: "Sobre", href: "#about" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-white/75 dark:bg-black/70 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-altair-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="hidden sm:inline-flex h-9 items-center rounded-full px-4 text-sm text-altair-muted hover:text-foreground transition">
            
            <Link href="/login">Entrar</Link>
          </button>
          <ShineButton>Começar grátis →</ShineButton>
        </div>
      </div>
    </header>
  );
}
