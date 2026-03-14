import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN e-commerce application with payment integration, admin dashboard, and real-time inventory management.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop boards, real-time updates, and team analytics.",
    stack: ["React", "Express", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media managers with data visualization, scheduling, and multi-platform support.",
    stack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "Mobile Fitness App",
    description:
      "Cross-platform fitness tracking application with workout plans, progress analytics, and social features.",
    stack: ["React Native", "Firebase", "Node.js"],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="section-spacing"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">03</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">Projects</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500" />

                {/* Floating action buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
                    <Github size={14} className="text-foreground" />
                  </button>
                  <button className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
                    <ExternalLink size={14} className="text-foreground" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold tracking-tight mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70 px-2 py-1 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
