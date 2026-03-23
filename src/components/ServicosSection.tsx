import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Home, Heart, Activity, Stethoscope, Dumbbell, UserCheck } from "lucide-react";

const services = [
  { icon: Home, title: "Assistência Domiciliar", desc: "Atendimento completo no conforto do lar, com profissionais qualificados e dedicados ao bem-estar do paciente." },
  { icon: Heart, title: "Cuidados com Idosos", desc: "Acompanhamento especializado e acolhedor para proporcionar mais qualidade de vida na terceira idade." },
  { icon: Stethoscope, title: "Acompanhamento Pós-hospitalar", desc: "Continuidade do cuidado após a alta hospitalar, garantindo uma recuperação segura e tranquila." },
  { icon: Activity, title: "Suporte em Reabilitação", desc: "Apoio profissional para o processo de reabilitação, promovendo autonomia e independência funcional." },
  { icon: Dumbbell, title: "Fisioterapia Domiciliar", desc: "Sessões de fisioterapia personalizadas no conforto do lar, com foco na recuperação e prevenção." },
  { icon: UserCheck, title: "Cuidados Personalizados", desc: "Plano de cuidado individualizado conforme as necessidades específicas de cada paciente e família." },
];

const ServicosSection = () => {
  return (
    <section id="servicos" className="section-padding relative" style={{ background: "var(--gradient-light-bg)" }}>
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary mb-4">
              Nossos Serviços
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-4">
            Soluções em <span className="gradient-text">Home Care</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços domiciliares para garantir conforto, segurança e recuperação com excelência.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="glass-card p-8 h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-accent/10">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicosSection;
