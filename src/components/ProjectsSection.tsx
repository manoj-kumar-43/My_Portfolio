import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

/*
 * ============================================================
 *  HOW TO ADD A NEW PROJECT
 * ============================================================
 *  Copy the template below and paste it into the `projects` array.
 *
 *  {
 *    title: "Project Title",
 *    description: "A short paragraph describing the project.",
 *    features: [
 *      "Feature 1",
 *      "Feature 2",
 *      "Feature 3",
 *    ],
 *    tech: ["React", "Node.js", "MongoDB"],
 *    live: "https://your-live-link.com",   // set to "" if no live demo
 *    github: "https://github.com/your-repo",
 *  },
 * ============================================================
 */

const projects = [
  {
  title: "Nova AI Chat Bot",
  description: "A full-stack AI chatbot application built using the MERN stack that allows users to interact with an AI assistant in real time. It integrates an AI API to generate intelligent responses and provides a clean, responsive user experience.",
  features: [
    "Real-time AI chat interaction",
    "Integrated AI API for dynamic responses",
    "Responsive and user-friendly interface",
    "RESTful API-based backend architecture",
    "Deployed and accessible online",
  ],
  tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "AI API"],
  live: "https://nova-ai-chat-self.vercel.app/",
  github: "https://github.com/manoj-kumar-43"
},
  {
    title: "Fake News Detection System",
    description:
      "A web application that detects whether a news article is real or fake using machine learning (Logistic Regression model). Users can input news text and the system predicts the authenticity of the news.",
    features: [
      "Text based news verification",
      "Machine learning prediction",
      "Clean and simple UI",
      "Fast result generation",
    ],
    tech: ["Python", "ML", "React", "Vercel"],
    live: "https://verify-fake.vercel.app/",
    github: "https://github.com/manoj-kumar-43",
  },
  {
    title: "Food Munch – Responsive Food Ordering Website",
    description:
      "A fully responsive food ordering website featuring a visually engaging homepage, intuitive navigation, and responsive design across all devices. Simulates a real-world restaurant platform with modern UI/UX practices.",
    features: [
      "Fully responsive across all devices",
      "Modern UI/UX design",
      "Optimized performance",
      "Clean and structured codebase",
    ],
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://dishdelight.ccbp.tech",
    github: "https://github.com/manoj-kumar-43",
  },
  {
    title: "ToDo List Web Application",
    description:
      "A responsive and interactive ToDo list application to help users efficiently manage daily tasks with dynamic task operations: add, delete, and mark as completed.",
    features: [
      "Add, delete & mark tasks as completed",
      "Real-time UI updates",
      "Mobile-friendly interface",
      "DOM manipulation & event handling",
    ],
    tech: ["HTML", "Bootstrap", "JavaScript"],
    live: "https://choosetodo.ccbp.tech",
    github: "https://github.com/manoj-kumar-43",
  },
  {
    title: "Wikipedia Search Application",
    description:
      "A search application with live API integration that fetches and renders real-time search results from Wikipedia, showcasing asynchronous programming and DOM manipulation skills.",
    features: [
      "Live Wikipedia API integration",
      "Real-time search results",
      "Asynchronous HTTP requests",
      "Clean and responsive UI",
    ],
    tech: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://wikipulse.ccbp.tech",
    github: "https://github.com/manoj-kumar-43",
  },
];

const ProjectsSection = () => (
  <AnimatedSection id="projects">
    <div className="container mx-auto max-w-4xl">
      <h2 className="section-heading mb-12 text-center">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <div className="grid gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card p-8 hover:border-primary/50 hover-lift group"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {p.description}
            </p>
            <ul className="space-y-1 mb-6">
              {p.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-95"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors active:scale-95"
              >
                <Github size={16} /> Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProjectsSection;
