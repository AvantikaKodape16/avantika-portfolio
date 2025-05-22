
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Element } from "react-scroll";

const Index = () => {
  useEffect(() => {
    document.title = "Avantika Kodape | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <Element name="home" className="element">
        <HeroSection />
      </Element>

      <Element name="about" className="element">
        <AboutSection />
      </Element>

      <Element name="skills" className="element">
        <SkillsSection />
      </Element>

      <Element name="projects" className="element">
        <ProjectsSection />
      </Element>

      <Element name="experience" className="element">
        <ExperienceSection />
      </Element>

      <Element name="contact" className="element">
        <ContactSection />
      </Element>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
