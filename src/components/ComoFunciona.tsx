import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { MessageCircle, ClipboardList, UserCheck, HeartHandshake } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "01", title: "Você entra em contato", desc: "Fale conosco pelo WhatsApp ou telefone para iniciar a conversa." },
  { icon: ClipboardList, num: "02", title: "Entendemos a necessidade", desc: "Avaliamos o quadro do paciente e as demandas da família." },
  { icon: UserCheck, num: "03", title: "Indicamos o atendimento ideal", desc: "Montamos o plano de cuidado mais adequado com profissionais especializados." },
  { icon: HeartHandshake, num: "04", title: "Cuidado humanizado e profissional", desc: "Iniciamos o acompanhamento com dedicação, carinho e excelência." },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary mb-4">
              Como Funciona
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-4">
            Simples, rápido e <span className="gradient-text">acolhedor.</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Em poucos passos, seu familiar já pode contar com cuidado de excelência.
          </p>
        </AnimatedSection>

        <StaggerContainer className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" style={{ transform: "translateX(-50%)" }} />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${i % 2 !== 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className={`glass-card p-8 inline-block text-left`}>
                      <span className="text-sm font-bold gradient-text">{step.num}</span>
                      <h3 className="font-display text-xl font-bold text-primary mt-1 mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-4 border-background"
                    style={{ background: "var(--gradient-accent)" }}>
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ComoFunciona;
