import { useState } from "react";

const results = [
  {
    id: 1,
    treatment: "Harmonização Facial",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    treatment: "Limpeza de Pele",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    treatment: "Rejuvenescimento",
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
  },
];

export const ResultsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="resultados" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Resultados Reais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Transformações que{" "}
            <span className="text-gradient-gold">inspiram</span>
          </h2>
          <p className="text-muted-foreground">
            Veja alguns dos resultados alcançados por nossas clientes. Cada
            tratamento é personalizado para atender às suas necessidades.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.id}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/50"
              onMouseEnter={() => setHoveredId(result.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* Before Image */}
                <img
                  src={result.before}
                  alt={`${result.treatment} - Antes`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === result.id ? "opacity-0" : "opacity-100"
                  }`}
                />
                {/* After Image */}
                <img
                  src={result.after}
                  alt={`${result.treatment} - Depois`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === result.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Labels */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      hoveredId === result.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/80 text-foreground"
                    }`}
                  >
                    {hoveredId === result.id ? "Depois" : "Antes"}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">
                  {result.treatment}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Passe o mouse para ver o resultado
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          * Os resultados podem variar de acordo com cada paciente. Imagens
          ilustrativas.
        </p>
      </div>
    </section>
  );
};
