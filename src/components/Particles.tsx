import { motion } from "framer-motion";

const Particles = () => {
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: 60 + Math.random() * 250,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  const orbs = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: 300 + Math.random() * 200,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Floating orbs */}
      {orbs.map((o) => (
        <motion.div
          key={`orb-${o.id}`}
          className="absolute rounded-full"
          style={{
            width: o.size,
            height: o.size,
            left: `${o.x}%`,
            top: `${o.y}%`,
            background: o.id % 2 === 0
              ? "radial-gradient(circle, hsla(120,55%,42%,0.06), transparent 70%)"
              : "radial-gradient(circle, hsla(180,45%,50%,0.05), transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15 + o.id * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.id % 3 === 0
              ? "radial-gradient(circle, hsla(120,55%,42%,0.08), transparent 70%)"
              : p.id % 3 === 1
              ? "radial-gradient(circle, hsla(180,45%,50%,0.06), transparent 70%)"
              : "radial-gradient(circle, hsla(200,60%,50%,0.04), transparent 70%)",
          }}
          animate={{
            x: [0, 30 * (p.id % 2 === 0 ? 1 : -1), 0],
            y: [0, -20 * (p.id % 2 === 0 ? -1 : 1), 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shimmer lines */}
      <motion.div
        className="absolute w-px h-full left-1/4"
        style={{ background: "linear-gradient(to bottom, transparent, hsla(120,55%,42%,0.08), transparent)" }}
        animate={{ opacity: [0, 0.6, 0], y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      <motion.div
        className="absolute w-px h-full left-3/4"
        style={{ background: "linear-gradient(to bottom, transparent, hsla(180,45%,50%,0.06), transparent)" }}
        animate={{ opacity: [0, 0.5, 0], y: ["-100%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 5 }}
      />
    </div>
  );
};

export default Particles;
