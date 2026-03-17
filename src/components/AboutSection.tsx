import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <AnimatedSection id="about">
    <div className="container mx-auto max-w-3xl">
      <h2 className="section-heading mb-8">
        About <span className="text-gradient">Me</span>
      </h2>
      <div className="glass-card p-8 space-y-4">
        <p className="text-muted-foreground leading-relaxed font-mono text-sm">
          I am a passionate computer science student interested in web technologies and software development.
          I enjoy building modern web applications and solving real-world problems using technology.
        </p>
        <p className="text-muted-foreground leading-relaxed font-mono text-sm">
           My goal is to grow as a professional MERN stack developer and contribute to innovative software solutions.
          Having recently completed my B.Tech in Computer Science, I'm actively building projects and expanding my skill set.
        </p>
        <div className="flex flex-wrap gap-4 pt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-primary">📍</span>
            <span className="text-muted-foreground">India</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">🎓</span>
            <span className="text-muted-foreground">B.Tech CSE Graduate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">💻</span>
            <span className="text-muted-foreground">MERN Stack</span>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
