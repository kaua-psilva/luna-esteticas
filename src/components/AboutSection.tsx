import { Award, Users, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Profissionais Certificados",
    description: "Equipe altamente qualificada e em constante atualização.",
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Protocolos rigorosos e produtos de alta procedência.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada tratamento é adaptado às suas necessidades únicas.",
  },
  {
    icon: Heart,
    title: "Cuidado e Carinho",
    description: "Ambiente acolhedor para você se sentir especial.",
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm text-primary font-medium tracking-widest uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
              Excelência em{" "}
              <span className="text-gradient-gold">estética avançada</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Luna Estética Avançada nasceu do sonho de oferecer tratamentos
              estéticos de alta qualidade em um ambiente sofisticado e acolhedor.
              Nossa missão é realçar a beleza natural de cada cliente,
              proporcionando resultados excepcionais com segurança e cuidado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Contamos com profissionais experientes, equipamentos de última
              geração e produtos cuidadosamente selecionados para garantir a
              melhor experiência e os melhores resultados para você.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=700&fit=crop"
                alt="Interior da clínica Luna Estética"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border/50 rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="font-display text-3xl font-semibold text-gradient-gold mb-2">
                10+
              </p>
              <p className="text-foreground font-medium">Anos de experiência</p>
              <p className="text-sm text-muted-foreground mt-1">
                Cuidando da sua beleza com dedicação
              </p>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
