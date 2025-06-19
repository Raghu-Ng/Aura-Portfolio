import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const navLinks = [
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "projects", label: "Portfolio" },
  { to: "contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="hero" smooth={true} duration={500} className="flex items-center gap-3 cursor-pointer">
          <img src="/uploads/Logo.png" alt="The Aura Productions" className="w-8 h-8 rounded-full" />
          <span className="text-xl font-bold">The Aura Productions</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              window.open("https://wa.me/9535858066", "_blank");
            }}
          >
            Get Quote
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
