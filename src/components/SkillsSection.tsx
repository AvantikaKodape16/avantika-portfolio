
import { useState, useEffect } from "react";
import { Code, Server, Database, Cloud, Puzzle } from "lucide-react";

const skills = {
  programming: ["Python", "JavaScript", "C++"],
  frameworks: ["Django", "Flask", "React", "Next.js"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  devops: ["AWS", "Docker", "Kubernetes"],
  others: ["Redis", "Celery", "Pandas", "Git"]
};

export default function SkillsSection() {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute("data-category");
            if (category) {
              setAnimatedSkills((prev) => ({ ...prev, [category]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.keys(skills).forEach((category) => {
      const element = document.querySelector(`[data-category="${category}"]`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getIcon = (category: string) => {
    switch (category) {
      case "programming":
        return <Code className="w-5 h-5" />;
      case "frameworks":
        return <Puzzle className="w-5 h-5" />;
      case "databases":
        return <Database className="w-5 h-5" />;
      case "devops":
        return <Cloud className="w-5 h-5" />;
      default:
        return <Server className="w-5 h-5" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-heading inline-block mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            A comprehensive collection of technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div 
              key={category}
              data-category={category}
              className={`bg-card rounded-xl p-6 border border-border transition-all duration-500 ${
                animatedSkills[category] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  {getIcon(category)}
                </div>
                <h3 className="text-xl font-semibold">{getCategoryTitle(category)}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {skillList.map((skill, index) => (
                  <span key={skill} className="skill-badge" style={{ transitionDelay: `${index * 100}ms` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
