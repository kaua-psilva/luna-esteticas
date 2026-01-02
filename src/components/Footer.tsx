import { Moon, Sparkles, Instagram, Facebook, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Links Rápidos",
    links: [
      { label: "Home", href: "#home" },
      { label: "Tratamentos", href: "#tratamentos" },
      { label: "Resultados", href: "#resultados" },
      { label: "Sobre", href: "#sobre" },
    ],
  },
  {
    title: "Tratamentos",
    links: [
      { label: "Limpeza de Pele", href: "#tratamentos" },
      { label: "Botox", href: "#tratamentos" },
      { label: "Depilação a Laser", href: "#tratamentos" },
      { label: "Skincare", href: "#tratamentos" },
    ],
  },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container-custom section-padding !py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                  <Moon className="w-5 h-5 text-primary-foreground" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold text-foreground">
                  Luna
                </span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Estética Avançada
                </span>
              </div>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Clínica de estética especializada em tratamentos faciais e
              corporais. Oferecemos os melhores procedimentos com tecnologia de
              ponta e profissionais qualificados.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-medium text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luna Estética Avançada. Todos os
            direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> em
            São Paulo
          </p>
        </div>
      </div>
    </footer>
  );
};
