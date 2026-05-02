
import { FaLinkedin, FaInstagram, FaTwitter  } from "react-icons/fa";
import { Logo } from "./Logo";


const cols = [
  { title: "Produto", items: ["Funcionalidades", "API", "Dashboard", "Integrações", "Changelog"] },
  { title: "Empresa", items: ["Sobre", "Blog", "Carreiras", "Parceiros", "Imprensa"] },
  { title: "Suporte", items: ["Ajuda", "Status", "Contato", "Comunidade", "Segurança"] },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-neutral-50 dark:bg-neutral-950 px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 font-serif-display text-lg leading-snug">
              A revolução do agendamento inteligente.
            </p>
            <p className="mt-3 text-sm text-altair-muted max-w-xs">
              Altair conecta sua agenda, seu WhatsApp e seus clientes em uma experiência sem fricção.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold mb-4">{c.title}</p>
              <ul className="space-y-2.5 text-sm text-altair-muted">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-foreground transition">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/5 dark:border-white/5 pt-6 md:flex-row">
          <p className="text-xs text-altair-muted">
            © 2026 Altair. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-xs text-altair-muted">
            <a href="#" className="hover:text-foreground transition">Privacidade</a>
            <a href="#" className="hover:text-foreground transition">Termos</a>
          </div>
          <div className="flex items-center gap-2">
            {[
              { I: FaInstagram, l: "Instagram" },
              { I: FaLinkedin, l: "LinkedIn" },
              { I: FaTwitter, l: "Twitter" },
            ].map(({ I, l }) => (
              <a
                key={l}
                href="#"
                aria-label={l}
                className="grid h-9 w-9 place-items-center rounded-full border border-black/10 dark:border-white/10 transition hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <I size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
