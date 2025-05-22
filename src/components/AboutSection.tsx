
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-heading inline-block mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Bio Section */}
          <div className="lg:col-span-2 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm Avantika Kodape, a passionate Full Stack Developer with a strong foundation in computer science and software engineering. My journey began with a fascination for problem-solving and creating efficient, scalable solutions.
              </p>
              <p>
                I specialize in building robust backend systems and crafting intuitive user interfaces. With experience in designing RESTful APIs, implementing authentication systems, and optimizing database performance, I enjoy tackling complex challenges and turning them into elegant solutions.
              </p>
              <p>
                My approach combines technical expertise with collaborative teamwork. I believe in continuous learning and staying updated with the latest technologies to deliver high-quality, future-proof applications.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-8">
              <div className="timeline-item">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <GraduationCap className="w-5 h-5" />
                  <span>2020 - 2024</span>
                </div>
                <h4 className="text-lg font-semibold mt-2">B.Tech in Computer Science and Engineering</h4>
                <p className="text-foreground/70">IIIT Nagpur</p>
              </div>
              
              <div className="timeline-item">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Award className="w-5 h-5" />
                  <span>Key Strengths</span>
                </div>
                <ul className="mt-2 space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Problem-solving and analytical thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Strong technical foundation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Adaptability to new technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
