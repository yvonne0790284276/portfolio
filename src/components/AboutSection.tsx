import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="section-spacing"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">01</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">About</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Terminal window */}
          <div className="glass-card p-0">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="font-mono text-xs text-muted-foreground ml-2">about.tsx</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-muted-foreground">
              <p className="text-primary mb-2">{"// Who am I?"}</p>
              <p className="mb-4">
                <span className="text-primary/60">const</span>{" "}
                <span className="text-foreground">developer</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-primary/60">name:</span>{" "}
                <span className="text-foreground">"Yankurije Yvonne"</span>,
              </p>
              <p className="pl-4">
                <span className="text-primary/60">role:</span>{" "}
                <span className="text-foreground">"Full-Stack Developer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-primary/60">stack:</span>{" "}
                <span className="text-foreground">["MongoDB", "Express", "React", "Node.js"]</span>,
              </p>
              <p className="pl-4">
                <span className="text-primary/60">passion:</span>{" "}
                <span className="text-foreground">"Building elegant solutions"</span>,
              </p>
              <p>{"}"}</p>
            </div>
          </div>

          {/* Prose */}
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              I'm a passionate MERN Stack Developer and UI/UX Designer dedicated to
              creating exceptional digital experiences. I combine technical
              expertise with design sensibility to build applications that are both
              powerful and beautiful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experience across web and mobile development, I specialize in
              building scalable, type-safe applications using modern frameworks. I
              believe great software is invisible — it just works, effortlessly.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Type Safety", value: "99.9%" },
                { label: "Stack", value: "MERN" },
                { label: "Focus", value: "Full-Stack" },
                { label: "Design", value: "UI/UX" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4">
                  <p className="font-mono text-xs text-primary tracking-[0.15em] uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
