import Gradient from "@/lib/gradient/Gradient";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Emprendedor",
    price: "$15",
    features: ["IA WhatsApp (500 chats)", "Caja Básica USD/VES", "1 Usuario"],
    cta: "Seleccionar",
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "$35",
    features: ["IA WhatsApp (Ilimitado)", "Caja Avanzada Multimoneda", "Dashboard Predictivo", "Soporte Prioritario"],
    cta: "Obtener Plan Pro",
    highlighted: true,
  },
  {
    name: "Imperio",
    price: "$70",
    features: ["Múltiples Sucursales", "Integración API Custom", "Auditoría de IA Mensual"],
    cta: "Seleccionar",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative">


<Gradient primaryColor="#8B5CF6" secondaryColor="#0EA5E9" className="left-auto -right-10 top-30 !translate-x-0 h-60 w-60" />

      <div className="container mx-auto text-center">
        <span className="label-tech text-muted-foreground mb-2 block">TRANSPARENCIA TOTAL</span>
        <h2 className="display-md mb-4">Inversión para el Crecimiento.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 text-left flex flex-col justify-between bg-surface shadow-xl ${
                plan.highlighted
                  ? "bg-surface-high neon-border-active relative"
                  : "bg-surface-high ghost-border"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  RECOMENDADO
                </span>
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/mes</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button
  variant="outline"
  className={plan.highlighted ? "bg-primary text-primary-foreground" : ""}
>
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
