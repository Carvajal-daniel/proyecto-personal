"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";
import { ShineButton } from "@/components/ui/ShineButton";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Funciones", href: "#features" },
  { label: "Precios", href: "#pricing" },
  { label: "Sobre", href: "#about" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-white/75 dark:bg-black/70 border-b border-black/5 dark:border-white/5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm text-altair-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">

          <button className="hidden sm:inline-flex h-9 items-center rounded-full px-4 text-sm text-altair-muted hover:text-foreground transition">
            <Link href="/login">Iniciar sesión</Link>
          </button>

          <ShineButton>
            <Link href="/">Comenzar gratis →</Link>
          </ShineButton>

        </div>
      </div>
    </motion.header>
  );
}