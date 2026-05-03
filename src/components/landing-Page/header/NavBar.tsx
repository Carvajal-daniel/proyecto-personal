"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { shinePrimaryLinkClass } from "@/components/ui/ShineButton";

const links = [
  { label: "Funciones", href: "#features" },
  { label: "Precios", href: "#pricing" },
  { label: "Sobre", href: "#about" },
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl dark:border-white/5 dark:bg-black/70"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-altair-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden h-9 items-center rounded-full px-4 text-sm text-altair-muted transition-colors hover:text-foreground sm:inline-flex"
          >
            Iniciar sesión
          </Link>

          <Link href="/login" className={shinePrimaryLinkClass}>
            Comenzar gratis →
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
