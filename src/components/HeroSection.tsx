import { motion } from "framer-motion";
import logoBeg from "@/assets/logo-beg.jpeg";
import equipeHero from "@/assets/equipe-hero.jpg";
import Particles from "./Particles";
import { Heart, Shield, Award, Home, ChevronDown } from "lucide-react";

const badges = [
  { icon: Heart, text: "Atendimento humanizado" },
  { icon: Award, text: "Profissionais experientes" },
  { icon: Shield, text: "Cuidado com excelência" },
  { icon: Home, text: "Mais conforto e segurança em casa" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)", backgroundSize: "300% 300%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <Particles />
      
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(120 55% 42%), transparent 70%)" }}
        animate={{ x: [100, 140, 100], y: [-100, -140, -100], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(180 45% 50%), transparent 70%)", opacity: 0.08 }}
        animate={{ x: [-80, -120, -80], y: [80, 120, 80], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative z-10 px-4 md:px-8 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={logoBeg}
              alt="BEG Saúde Home Care"
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl mb-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
              Cuidado humanizado e profissional{" "}
              <span className="gradient-text">no conforto do seu lar.</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8 font-body" style={{ color: "hsla(0,0%,100%,0.8)" }}>
              A BEG Saúde Home Care oferece atendimento com excelência, carinho e experiência para promover mais qualidade de vida, segurança e bem-estar para você e sua família.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.a
                href="https://wa.me/5541999509711"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                animate={{ boxShadow: ["0 4px 20px hsla(142,70%,40%,0.35)", "0 8px 35px hsla(142,70%,40%,0.55)", "0 4px 20px hsla(142,70%,40%,0.35)"] }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.2 } }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Falar no WhatsApp
              </motion.a>
              <motion.a
                href="#equipe"
                className="btn-outline-hero"
                whileHover={{ scale: 1.05, y: -3, borderColor: "hsla(0,0%,100%,0.8)" }}
                whileTap={{ scale: 0.97 }}
              >
                Conheça nossa equipe
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "hsla(0,0%,100%,0.85)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "hsla(120,55%,42%,0.2)" }}>
                    <b.icon className="w-4 h-4" style={{ color: "hsl(120 55% 60%)" }} />
                  </div>
                  {b.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: "var(--gradient-accent)" }}
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={equipeHero}
                alt="Equipe BEG Saúde Home Care"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                style={{ maxHeight: "580px" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl glass-card"
                style={{ background: "hsla(0,0%,100%,0.95)" }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-sm font-semibold text-beg-navy">+23 anos de experiência</p>
                <p className="text-xs text-muted-foreground">Cuidado humanizado e profissional</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#quem-somos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-semibold">Deslize</span>
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
