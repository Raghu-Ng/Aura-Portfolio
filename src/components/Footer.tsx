
import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 text-sm text-muted-foreground">
        <p>&copy; {currentYear} Raghava Reddy. All rights reserved.</p>
        <a href="https://github.com/Raghu-Ng" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          <Github className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
