import HeroSection from "@/components/HeroSection";
import QuemSomos from "@/components/QuemSomos";
import EquipeSection from "@/components/EquipeSection";
import ServicosSection from "@/components/ServicosSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ComoFunciona from "@/components/ComoFunciona";
import CTAFinal from "@/components/CTAFinal";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <QuemSomos />
      <EquipeSection />
      <ServicosSection />
      <DiferenciaisSection />
      <ComoFunciona />
      <CTAFinal />
      <FooterSection />
      <FloatingButtons />
    </div>
  );
};

export default Index;
