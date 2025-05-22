
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-pulse-light"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-secondary/20 blur-3xl animate-pulse-light" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-accent/20 blur-3xl animate-pulse-light" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 space-y-6 animate-fade-in-right">
            <h2 className="font-mono text-primary">Hello, my name is</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Avantika Kodape
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium text-foreground/80">
              Full Stack Developer
            </h3>
            <p className="text-lg text-foreground/70 max-w-xl">
              A passionate full stack developer crafting seamless user experiences and scalable backend systems using modern web technologies from front to back.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="animated-button inline-flex items-center gap-2"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="border border-primary hover:bg-primary/10 text-primary font-medium py-3 px-6 rounded-lg transition-all inline-flex items-center gap-2"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-2/5 flex justify-center animate-fade-in-left">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 p-2 animate-float">
                <img
                  src="/lovable-uploads/73b5db46-7a2b-4910-9f9d-c4038020b93d.png"
                  alt="Avantika Kodape"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
