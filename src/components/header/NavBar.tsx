"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Settings, Bell, Menu, X } from "lucide-react";
import Logo from "../../../public/assets/logo2.png";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    // Adicionado backdrop-blur e borda sutil para definição
    <nav // No className do <nav>
className="fixed top-2 left-2 right-2 z-50 bg-white border border-slate-600/20 shadow-xl shadow-blue-500/10 rounded-3xl">
      <div className="container mx-auto flex items-center justify-between h-14 px-6">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
             <Image src={Logo} alt="Logo" width={32} height={32} className="object-contain" />
          </div>
          <span className="font-bold text-lg cursor-pointer tracking-tight text-foreground bg-clip-text">
            UPLYS
          </span>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {["Solutions", "Dashboard", "Pricing", "Support"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-all duration-200 hover:text-primary ${
                i === 0
                  ? "text-primary underline underline-offset-8 decoration-2"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 mr-2">
            <button className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>

          <Button variant="default" size="sm" className=" cursor-pointer hidden md:flex rounded-full bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 px-5">
            Entrar
          </Button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-xl transition"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU - Animado e com as cores da paleta */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-background border border-border/50 rounded-3xl shadow-xl animate-in fade-in zoom-in duration-200">
          <div className="flex flex-col items-center gap-6 py-4">
            {["Solutions", "Dashboard", "Pricing", "Support"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-neutral hover:text-primary transition"
              >
                {item}
              </a>
            ))}
            
            <hr className="w-full border-border/50" />
            
            <div className="flex flex-col w-full gap-3">
               <Button className="w-full py-6 rounded-2xl bg-primary text-white">
                Entrar na conta
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;