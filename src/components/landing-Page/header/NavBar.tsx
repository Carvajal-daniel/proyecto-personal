"use client";

import { Settings, Bell, User } from "lucide-react";
import Logo from "../../../../public/assets/logo2.png";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation"; // Importação correta para navegação client-side

const navVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Navbar = () => {
  const router = useRouter();

  // Função para lidar com o login
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-2 left-2 right-2 z-50 bg-white/90 backdrop-blur-md shadow-xl shadow-blue-500/10 rounded-3xl border border-slate-100"
    >
      <div className="container mx-auto flex items-center justify-between h-14 px-6">
        
        {/* LOGO */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image src={Logo} alt="Logo" width={32} height={32} className="object-contain" />
          </div>
          <span className="font-bold text-lg cursor-pointer tracking-tight text-foreground">
            UPLYS
          </span>
        </motion.div>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {["Solutions", "Dashboard", "Pricing", "Support"].map((item) => (
            <motion.a
              key={item}
              variants={itemVariants}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-200"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* ACTIONS */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 mr-2">
            <button className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* BOTÃO ENTRAR DESKTOP */}
          <div className="hidden md:block">
            <Button 
              onClick={handleLogin}
              variant="default" 
              size="sm" 
              className="rounded-full bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 px-5 active:scale-95 transition-transform"
            >
              Entrar
            </Button>
          </div>

          {/* BOTÃO ENTRAR MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={handleLogin} 
              className="flex items-center gap-2 group outline-none"
            >
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Entrar
              </span>
              {/* Somente o ícone terá o efeito de clique para não balançar o texto junto */}
              <div className="p-2 bg-primary/10 border border-primary/20 rounded-full group-hover:bg-primary/20 group-active:scale-90 transition-all">
                <User className="w-5 h-5 text-primary" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;