import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with native performance and beautiful user interfaces.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive, user-centered designs that combine aesthetics with seamless functionality.",
  },
  {
    icon: Server,
    title: "MERN Stack Development",
    description: "End-to-end full-stack solutions using MongoDB, Express, React, and Node.js.",
  },
];

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="section-spacing"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">04</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">Services</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 group"
            >
              <service.icon
                size={28}
                strokeWidth={1.5}
                className="text-primary mb-4 group-hover:animate-float"
              />
              <h3 className="text-lg font-bold tracking-tight mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
