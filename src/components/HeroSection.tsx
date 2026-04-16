import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-40 h-40 rounded-full bg-secondary border-2 border-border glow-primary flex items-center justify-center overflow-hidden"
        >
          <img src={profilePhoto} alt="Manoj Kumar Sahu" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <p className="font-mono text-primary text-sm">Hi, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Manoj Kumar Sahu
          </h1>
          <p className="text-xl md:text-2xl text-gradient font-semibold">
            Aspiring MERN Stack Developer
          </p>
          <p className="max-w-lg mx-auto text-muted-foreground">
            Computer Science student passionate about building modern web applications and solving real-world problems with technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <a
            href="https://github.com/manoj-kumar-43"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-kumar-sahu-54b72528a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://drive.google.com/file/d/1BqWopZm6ACWUNbUiwXFq3vtydmTGoZIt/view?usp=sharing"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-200 text-sm font-medium"
          >
            <Download size={18} />
            Resume
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
