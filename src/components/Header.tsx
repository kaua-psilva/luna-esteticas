import { useState, useEffect } from "react";
import { Menu, X, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Quem Somos", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom section-padding !py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                <Moon className="w-5 h-5 text-primary-foreground" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary animate-float" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold tracking-wide text-foreground">
                Luna
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Estética Avançada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("#contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[400px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-card rounded-2xl p-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="block text-lg font-medium text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => scrollToSection("#contato")}
              className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
