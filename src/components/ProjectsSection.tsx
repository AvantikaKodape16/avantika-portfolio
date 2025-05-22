
import { useState } from "react";
import { Github, ExternalLink, Code, FileText, Mic, Book, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  liveUrl?: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Login API",
    description: "A secure authentication API built with Django REST Framework, featuring JWT authentication, password reset, and user management.",
    techStack: ["Django", "Django REST Framework", "JWT", "PostgreSQL"],
    github: "https://github.com/AvantikaKodape16/login-api",
    icon: <Code className="w-16 h-16 text-foreground/50" />
  },
  {
    id: 2,
    title: "TCP/UDP Chatbot",
    description: "A network-based chat application implementing both TCP and UDP protocols for real-time communication between clients.",
    techStack: ["Socket Programming", "Python", "Concurrency"],
    github: "https://github.com/AvantikaKodape16/tcp-udp-chatbot",
    icon: <ArrowRight className="w-16 h-16 text-foreground/50" />
  },
  {
    id: 3,
    title: "Text Summarization",
    description: "An NLP application that condenses long texts into concise summaries while preserving key information and context.",
    techStack: ["Python", "NLTK", "Transformers", "Flask"],
    github: "https://github.com/AvantikaKodape16/text-summarization",
    icon: <Book className="w-16 h-16 text-foreground/50" />
  },
  {
    id: 4,
    title: "Species Extinction Prediction",
    description: "A machine learning model to predict endangered species extinction risk based on environmental and biological factors.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Data Visualization"],
    github: "https://github.com/AvantikaKodape16/species-extinction-prediction",
    icon: <ArrowRight className="w-16 h-16 text-foreground/50" />
  },
  {
    id: 5,
    title: "PODTALK",
    description: "A podcast platform allowing users to discover, stream, and share podcast episodes with social features and personalized recommendations.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "AWS S3"],
    github: "https://github.com/AvantikaKodape16/podtalk",
    liveUrl: "https://podtalk-web.netlify.app/",
    icon: <Mic className="w-16 h-16 text-foreground/50" />
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-heading inline-block mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className={`transition-all duration-300 ${
                  hoveredProject === project.id ? "scale-110" : ""
                }`}>
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-full text-foreground/70">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Source Code</span>
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Project</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
