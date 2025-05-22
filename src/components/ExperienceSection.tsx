
import { useState } from "react";
import { Building, CalendarDays, CheckCircle } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  expanded?: boolean;
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      company: "GrayQuest",
      role: "Backend Developer Intern",
      period: "March – May 2024",
      responsibilities: [
        "Built secure and performant RESTful APIs using Django REST Framework",
        "Implemented authentication systems with JWT and OAuth2 integration",
        "Optimized PostgreSQL database queries to improve application performance",
        "Set up AWS cloud infrastructure for application deployment",
        "Integrated third-party services and APIs into the application",
      ],
      expanded: true,
    },
  ]);

  const toggleExpand = (id: number) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, expanded: !exp.expanded } : exp
      )
    );
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-heading inline-block mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            My professional experience and internships
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-card rounded-xl p-6 border border-border mb-6 animate-fade-in"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Building className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-semibold mt-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-foreground/70 mt-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="text-primary hover:text-primary/80 bg-primary/10 rounded-full p-2 transition-colors"
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      exp.expanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {exp.expanded && (
                <div className="mt-4 animate-fade-in">
                  <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
