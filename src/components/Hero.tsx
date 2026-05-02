import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { ShineButton } from "./ui/ShineButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur px-3 py-1 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-altair-muted">IA de Agendamento — Ao vivo 24/7</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif-display mt-6 leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)" }}
          >
            Sua agenda no{" "}
            <span className="italic bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              piloto automático
            </span>{" "}
            com a Isa.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg font-light text-altair-muted"
          >
            A Isa atende seus clientes no WhatsApp, agenda compromissos, envia lembretes e mantém sua agenda cheia — enquanto você cuida do que importa.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <ShineButton>Começar grátis →</ShineButton>
            <a href="#" className="text-sm text-altair-muted hover:text-foreground transition">
              Ver demonstração →
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[
                "from-blue-500 to-violet-500",
                "from-emerald-500 to-teal-500",
                "from-amber-500 to-rose-500",
                "from-pink-500 to-purple-500",
              ].map((g, i) => (
                <div
                  key={i}
                  className={`h-9 w-9 rounded-full bg-gradient-to-br ${g} ring-2 ring-background`}
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-altair-muted text-xs">
                <span className="font-medium text-foreground">2.400 negócios</span> já automatizam com Altair
              </p>
            </div>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const [active, setActive] = useState<number[]>([3, 9, 16, 22]);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * 35);
        if (next.includes(idx)) return next.filter((n) => n !== idx);
        if (next.length >= 9) next.shift();
        next.push(idx);
        return next;
      });
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-[520px]">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="altair-card absolute left-0 top-0 w-full max-w-md rounded-2xl p-5 shadow-2xl shadow-blue-600/10"
      >
        <div className="flex items-center gap-1.5 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs text-altair-muted">altair · agenda</span>
        </div>
        <p className="text-xs text-altair-muted mb-2">Maio 2026</p>
        <div className="grid grid-cols-7 gap-1.5">
          {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
            <div key={`d-${i}`} className="text-[10px] text-altair-muted text-center mb-1">
              {d}
            </div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => {
            const isActive = active.includes(i);
            return (
              <motion.div
                key={i}
                animate={{
                  backgroundColor: isActive
                    ? "rgba(16,185,129,0.85)"
                    : "rgba(120,120,120,0.08)",
                  scale: isActive ? 1 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="aspect-square rounded-md"
              />
            );
          })}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { v: "+38", l: "novos" },
            { v: "94%", l: "ocupação" },
            { v: "R$12k", l: "receita" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/5 p-2.5"
            >
              <p className="text-sm font-semibold">{s.v}</p>
              <p className="text-[10px] text-altair-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-2 right-0 w-[230px] rounded-[2rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-violet-600/20"
      >
        <div className="rounded-[1.5rem] overflow-hidden bg-[#0b141a]">
          <div className="bg-emerald-700 px-3 py-2.5 text-white">
            <p className="text-xs font-medium">Isa · Altair</p>
            <p className="text-[10px] opacity-80">online agora</p>
          </div>
          <div className="p-3 space-y-2 min-h-[260px]">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 p-2 text-[11px] text-white">
              Oi! Quero marcar um corte 😊
            </div>
            <div className="max-w-[80%] ml-auto rounded-2xl rounded-tr-sm bg-emerald-600 p-2 text-[11px] text-white">
              Claro! Tenho amanhã 14h ou 16h. Qual prefere?
            </div>
            <div className="max-w-[60%] rounded-2xl rounded-tl-sm bg-white/10 p-2 text-[11px] text-white">
              16h perfeito ✨
            </div>
            <div className="max-w-[80%] ml-auto rounded-2xl rounded-tr-sm bg-emerald-600 p-2 text-[11px] text-white">
              Agendado! Te envio um lembrete amanhã 💙
            </div>
            <div className="inline-flex gap-1 rounded-2xl bg-white/10 px-3 py-2">
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
