import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python"],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

const SkillsSection = () => (
  <AnimatedSection id="skills">
    <div className="container mx-auto max-w-4xl">
      <h2 className="section-heading mb-12 text-center">
        Tech <span className="text-gradient">Stack</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="text-sm font-mono text-primary mb-4">{`// ${cat.title}`}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm font-mono rounded-full border border-border bg-secondary/50 text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SkillsSection;
