import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "JS" },
  { name: "React", icon: "⚛" },
  { name: "Node.js", icon: "⬡" },
  { name: "Express.js", icon: "Ex" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TypeScript", icon: "TS" },
  { name: "UI/UX Design", icon: "◎" },
  { name: "Mobile Dev", icon: "📱" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Git", icon: "⑂" },
  { name: "REST APIs", icon: "⇄" },
  { name: "Figma", icon: "◈" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="section-spacing"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">02</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">Skills</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-5 flex flex-col items-center gap-3 cursor-default group"
            >
              <span className="text-2xl group-hover:text-primary transition-colors duration-300">
                {skill.icon}
              </span>
              <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
