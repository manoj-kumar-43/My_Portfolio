import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Built Your Own Static Website",
    issuer: "CCBP 4.0 Academy, NxtWave",
    date: "June 2024",
    tech: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Build Your Own Responsive Website",
    issuer: "CCBP 4.0 Academy, NxtWave",
    date: "July 2024",
    tech: ["HTML", "CSS", "Bootstrap", "Flexbox"],
  },
  {
    title: "Introduction to Database",
    issuer: "CCBP 4.0 Academy, NxtWave",
    date: "October 2024",
    tech: ["SQL"],
  },
  {
    title: "Programming Foundation with Python",
    issuer: "CCBP 4.0 Academy, NxtWave",
    date: "July 2025",
    tech: ["Python"],
  },
];

const CertificationsSection = () => (
  <AnimatedSection id="certifications">
    <div className="container mx-auto max-w-4xl">
      <h2 className="section-heading mb-12 text-center">
        My <span className="text-gradient">Certifications</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass-card p-6 hover-lift group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Award size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-foreground font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-xs font-mono mt-1">
                  {cert.issuer}
                </p>
                <p className="text-primary text-xs font-mono mt-0.5">
                  {cert.date}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cert.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.linkedin.com/in/manoj-kumar-sahu-54b72528a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
        >
          <ExternalLink size={14} /> View all on LinkedIn
        </a>
      </div>
    </div>
  </AnimatedSection>
);

export default CertificationsSection;
