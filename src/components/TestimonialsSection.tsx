import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carolina Silva",
    role: "Empresária",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "Resultado incrível! A equipe é muito profissional e atenciosa. Me senti acolhida desde a primeira consulta.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fernanda Costa",
    role: "Advogada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    text: "Fiz harmonização facial e estou apaixonada! O ambiente é lindo e o atendimento é impecável.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda Oliveira",
    role: "Médica",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    text: "Profissionais altamente qualificados. Confio totalmente nos tratamentos e indico para todas as minhas amigas.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            O que nossas clientes{" "}
            <span className="text-gradient-gold">dizem</span>
          </h2>
          <p className="text-muted-foreground">
            A satisfação das nossas clientes é nosso maior orgulho. Veja o que
            elas têm a dizer sobre a experiência na Luna.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
