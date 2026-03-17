import AnimatedSection from "./AnimatedSection";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => (
  <AnimatedSection id="contact">
    <div className="container mx-auto max-w-2xl text-center">
      <h2 className="section-heading mb-4">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      <p className="text-muted-foreground mb-10">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/manoj-kumar-sahu-54b72528a"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 flex flex-col items-center gap-3 hover:border-primary/50 hover-lift group"
        >
          <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
          <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
        </a>
        <a
          href="https://github.com/manoj-kumar-43"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 flex flex-col items-center gap-3 hover:border-primary/50 hover-lift group"
        >
          <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
          <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
        </a>
        <a
          href="mkumar78033@gmail.com"
          className="glass-card p-6 flex flex-col items-center gap-3 hover:border-primary/50 hover-lift group"
        >
          <Mail className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
          <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">Email</span>
        </a>
      </div>
    </div>
  </AnimatedSection>
);

export default ContactSection;
