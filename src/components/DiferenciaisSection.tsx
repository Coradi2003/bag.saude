import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Heart, Shield, Home, Users, Star, Leaf } from "lucide-react";

const diffs = [
  { icon: Heart, title: "Atendimento Humanizado", desc: "Cada paciente é tratado com empatia, respeito e dedicação integral." },
  { icon: Users, title: "Equipe Experiente", desc: "Profissionais com mais de 20 anos de experiência em saúde e cuidado." },
  { icon: Home, title: "Mais Conforto", desc: "O paciente recebe cuidado no ambiente onde se sente mais acolhido." },
  { icon: Shield, title: "Segurança para a Família", desc: "Tranquilidade de saber que seu familiar está em boas mãos." },
  { icon: Star, title: "Cuidado Individualizado", desc: "Planos personalizados para atender cada necessidade específica." },
  { icon: Leaf, title: "Qualidade de Vida", desc: "Compromisso contínuo com o bem-estar e a dignidade do paciente." },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-light-bg)" }}>
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-accent/10 text-accent mb-4">
              Diferenciais
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-4">
            Por que escolher a <span className="gradient-text">BEG Saúde?</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            O que nos torna únicos é o compromisso genuíno com cada pessoa que cuidamos.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((d) => (
            <StaggerItem key={d.title}>
              <div className="glass-card p-8 h-full text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 bg-secondary/10">
                  <d.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
