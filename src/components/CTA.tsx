import { motion } from "framer-motion";
import { ShineButton } from "./ui/ShineButton";

const partners = [
  { name: "Lumen", color: "from-blue-500 to-cyan-500" },
  { name: "Forma", color: "from-violet-500 to-purple-500" },
  { name: "Nova", color: "from-emerald-500 to-teal-500" },
  { name: "Atrium", color: "from-amber-500 to-orange-500" },
  { name: "Quartz", color: "from-rose-500 to-pink-500" },
];

export function CTA() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25), rgba(37,99,235,0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 opacity-50 transition hover:opacity-100"
            >
              <div className={`h-5 w-5 rounded-md bg-gradient-to-br ${p.color}`} />
              <span className="text-sm font-medium">{p.name}</span>
            </div>
          ))}
        </div>

        <h2
          className="font-serif-display leading-tight"
          style={{ fontSize: "clamp(2.2rem,4.5vw,3.6rem)" }}
        >
          Pronto para sua agenda{" "}
          <span className="italic bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            voar sozinha?
          </span>
        </h2>
        <p className="mt-5 text-lg text-altair-muted">
          Junte-se a milhares de negócios que já automatizam com a Isa.
        </p>
        <div className="mt-9 flex justify-center">
          <ShineButton className="px-7 py-3.5 text-base">
            Criar minha conta grátis →
          </ShineButton>
        </div>
        <p className="mt-5 text-xs text-altair-muted">
          14 dias grátis · Sem cartão · Cancele quando quiser
        </p>
      </motion.div>
    </section>
  );
}
