import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="section-spacing"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">05</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">Contact</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="max-w-lg mx-auto">
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                className="inline-block mb-4"
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <motion.circle
                    cx="32" cy="32" r="28"
                    stroke="hsl(180 100% 45%)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.path
                    d="M20 32 L28 40 L44 24"
                    stroke="hsl(180 100% 45%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  />
                </svg>
              </motion.div>
              <p className="text-foreground font-bold">Message Sent!</p>
              <p className="text-sm text-muted-foreground mt-1">I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="input-underline w-full text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="input-underline w-full text-foreground"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase block mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="input-underline w-full text-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full aqua-glow-shadow hover:aqua-glow-shadow-strong transition-shadow flex items-center justify-center gap-2 text-sm"
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          )}

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { icon: Mail, href: "mailto:yvonne@example.com", label: "Email" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full border border-border hover:border-primary/50 hover:aqua-glow-shadow transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-muted-foreground hover:text-primary" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
