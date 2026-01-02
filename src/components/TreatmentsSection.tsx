import {
  Sparkles,
  Syringe,
  Zap,
  Flower2,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    icon: Sparkles,
    title: "Limpeza de Pele Profissional",
    description:
      "Remoção profunda de impurezas e células mortas para uma pele renovada e radiante.",
  },
  {
    icon: Syringe,
    title: "Botox e Preenchimento",
    description:
      "Tratamentos injetáveis com produtos de alta qualidade para rejuvenescimento facial.",
  },
  {
    icon: Zap,
    title: "Depilação a Laser",
    description:
      "Tecnologia avançada para eliminação definitiva dos pelos com conforto e segurança.",
  },
  {
    icon: Flower2,
    title: "Skincare Avançado",
    description:
      "Protocolos personalizados com dermocosméticos de última geração.",
  },
  {
    icon: Heart,
    title: "Rejuvenescimento Facial",
    description:
      "Procedimentos que estimulam o colágeno para uma pele mais firme e jovem.",
  },
  {
    icon: Star,
    title: "Tratamentos Corporais",
    description:
      "Redução de medidas, celulite e flacidez com tecnologias inovadoras.",
  },
];

export const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Nossos Tratamentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Cuidados exclusivos para{" "}
            <span className="text-gradient-gold">sua beleza</span>
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma linha completa de tratamentos estéticos realizados
            por profissionais qualificados com equipamentos de última geração.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:bg-card transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <treatment.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {treatment.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {treatment.description}
              </p>

              {/* CTA */}
              <Button
                variant="ghost"
                className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
