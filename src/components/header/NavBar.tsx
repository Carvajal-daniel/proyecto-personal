"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Settings, Bell, Menu, X } from "lucide-react";
import Logo from "../../../public/assets/logo2.png"
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral m-1 mt-1 rounded-3xl shadow-sm  shadow-primary/10">
      <div className="container mx-auto flex items-center justify-between h-14 px-6">

        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={50} height={50} className="-mr-2 -ml-2" />
          {/* LOGO */}
          <span className="font-bold text-lg tracking-tight text-foreground">
            UPLYS
          </span>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {["Solutions", "Dashboard", "Pricing", "Support"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${i === 0
                  ? "text-foreground underline underline-offset-4 decoration-primary"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">


          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2  hover:bg-white/5 transition"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Settings className="w-5 h-5" />
            </button>

            <Button variant="default" size="sm" className="rounded-2xl">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2">
          <div className="flex flex-col items-center gap-10  p-4 mt-2">
            {["Solutions", "Dashboard", "Pricing", "Support"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-xl font-medium text-white hover:text-foreground transition"
              >
                {item}
              </a>
            ))}

            <Button className="mt-2 rounded-xl uppercase font-semibold ">
              Comenzar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;