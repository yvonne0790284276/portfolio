import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-24">
        {/* Left: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-center order-2 lg:order-1"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-2xl" />
            {/* Image container */}
            <div className="relative glass-card p-2 rounded-2xl overflow-hidden aqua-glow-shadow">
              <img
                src={profileImage}
                alt="Yankurije Yvonne"
                className="w-full max-w-[360px] h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col gap-6 order-1 lg:order-2"
        >


          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9]">
            Yankurije
            <br />
            <span className="text-gradient-aqua">Yvonne</span>
          </h1>

          <p className="font-mono text-sm text-muted-foreground max-w-md leading-relaxed">
            MERN Stack Developer · UI/UX Designer · Mobile App Developer
          </p>

          <p className="text-muted-foreground text-base max-w-md leading-relaxed">
            Building scalable logic. Designing fluid experiences. Crafting
            full-stack applications with precision and purpose.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full aqua-glow-shadow hover:aqua-glow-shadow-strong transition-shadow text-sm"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-all text-sm"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-primary/40" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
