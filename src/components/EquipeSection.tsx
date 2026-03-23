import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import gersonImg from "@/assets/gerson.jpg";
import elianeImg from "@/assets/eliane.jpg";
import brunaImg from "@/assets/bruna.jpg";

const team = [
  {
    name: "Gerson",
    role: "Enfermeiro",
    image: gersonImg,
    highlights: [
      "Enfermeiro há 23 anos",
      "Pós graduado em Terapia Intensiva",
      "Especialista em Urgência e Emergência",
      "Apaixonado por promover saúde e bem-estar",
    ],
  },
  {
    name: "Eliane",
    role: "Cuidadora de Idosos",
    image: elianeImg,
    highlights: [
      "Graduanda em Técnico de Enfermagem",
      "Cuidadora de idosos há 23 anos",
      "Ama conhecer a história e se conectar com cada paciente",
    ],
  },
  {
    name: "Bruna",
    role: "Fisioterapeuta",
    image: brunaImg,
    highlights: [
      "Fisioterapeuta",
      "Experiência na área hospitalar há 9 anos",
      "Foco em qualidade de vida e independência funcional",
    ],
  },
];

const EquipeSection = () => {
  return (
    <section id="equipe" className="section-padding relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-accent/10 text-accent mb-4">
              Nossa Equipe
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-4 leading-tight">
            Profissionais que cuidam com{" "}
            <span className="gradient-text">experiência, técnica e coração.</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Conheça os profissionais que fazem da BEG Saúde uma referência em cuidado humanizado.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="glass-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-2xl font-bold text-primary-foreground">{member.name}</h3>
                    <p className="text-sm font-medium" style={{ color: "hsl(120 55% 70%)" }}>{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2.5">
                    {member.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default EquipeSection;
