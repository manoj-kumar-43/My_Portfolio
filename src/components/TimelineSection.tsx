import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    type: "education",
    title: "B.Tech in Computer Science & Technology",
    organization: "BPUT University, Rourkela (RITE)",
    period: "2022 – 2026",
    description:
      "Studying at Radhakrishna Institute of Technology and Engineering. Built multiple hands-on projects leveraging modern web technologies including HTML, CSS, Bootstrap, JavaScript, Python, MySQL, Node.JS and React.",
  },
  {
    type: "education",
    title: "Higher Secondary (12th) – PCMB",
    organization: "Chandra Sekhar Academy",
    period: "2019 – 2021",
    description: "Completed with 65% in Physics, Chemistry, Mathematics, and Biology.",
  },
  {
    type: "education",
    title: "Matriculation (10th)",
    organization: "Vikash Convent School",
    period: "2011 – 2019",
    description: "Completed with 70% marks.",
  },
  {
    type: "experience",
    title: "Web Development Intern",
    organization: "NxtWave Disruptive Technologies",
    period: "2024 – Present",
    description:
      "Built projects like Food Munch (responsive food ordering site), a ToDo List app, and a Wikipedia Search Application. Gained hands-on experience with HTML, CSS, Bootstrap, JavaScript, API integration, and DOM manipulation.",
  },
];

const TimelineSection = () => (
  <AnimatedSection id="timeline">
    <div className="container mx-auto max-w-3xl">
      <h2 className="section-heading mb-10">
        Education & <span className="text-gradient">Experience</span>
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-14">
              {/* Icon dot */}
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border">
                {item.type === "education" ? (
                  <GraduationCap size={18} className="text-primary" />
                ) : (
                  <Briefcase size={18} className="text-accent" />
                )}
              </div>

              <div className="glass-card p-5 hover-lift">
                <span className="inline-block text-xs font-mono text-primary mb-1">
                  {item.period}
                </span>
                <h3 className="text-foreground font-semibold text-base">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-mono">
                  {item.organization}
                </p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default TimelineSection;
