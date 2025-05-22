
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 mb-4 md:mb-0">
            © {currentYear} Avantika Kodape. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1">
            <span className="text-foreground/70">Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-foreground/70">using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
