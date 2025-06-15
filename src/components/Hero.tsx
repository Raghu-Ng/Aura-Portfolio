
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/uploads/4e4dad60-4605-4b3f-b805-11655ff3853b.png"
            alt="Raghava Reddy"
            className="w-48 h-48 object-cover rounded-full animate-fade-in-up grayscale mask-radial-fade"
            style={{ animationDelay: '0.2s' }}
          />
          <h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tighter animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Raghava Reddy
          </h1>
          <p 
            className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
          Developer and AI Enthusiast
          </p>
          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Link to="projects" smooth={true} duration={500} offset={-64}>
              <Button>
                View my work <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
