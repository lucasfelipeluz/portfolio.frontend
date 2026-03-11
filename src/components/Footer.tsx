import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            {/* <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-destructive fill-current" />
            <span>por</span>
            <span className="text-foreground font-medium">
              Lucas Felipe Luz
            </span> */}
            <span>{currentYear}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lucasfelipeluz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            {/* <a
              href="https://linkedin.com/in/joaosilva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a> */}
            <a
              href="mailto:lucasfelipeluz.dev@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
