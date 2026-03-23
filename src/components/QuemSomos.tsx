import { AnimatedSection } from "./AnimatedSection";
import { Heart, Users, Sparkles } from "lucide-react";

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-light-bg)" }}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, hsl(120 55% 42%), transparent 70%)" }} />

      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary mb-4">
              Quem Somos
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8 leading-tight">
            Na BEG Saúde Home Care, acreditamos que{" "}
            <span className="gradient-text">cuidar vai muito além de atender.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            Nosso propósito é oferecer assistência humanizada, segura e acolhedora, respeitando a individualidade de cada paciente e proporcionando mais tranquilidade para toda a família.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-border/30">
            <p className="text-lg md:text-xl text-center text-foreground leading-relaxed font-medium">
              Unimos experiência, dedicação e sensibilidade para entregar um cuidado de excelência no ambiente onde o paciente se sente mais confortável:{" "}
              <span className="gradient-text font-bold">o seu lar.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { icon: Heart, title: "Humanização", desc: "Cuidado centrado na pessoa e na família" },
                { icon: Users, title: "Experiência", desc: "Equipe com décadas de atuação em saúde" },
                { icon: Sparkles, title: "Excelência", desc: "Comprometimento com os mais altos padrões" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-secondary/10">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default QuemSomos;
