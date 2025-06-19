import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/uploads/Hero.mp4" type="video/mp4" />
      </video>
      
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <img
            src="/uploads/Logo.png"
            alt="The Aura Productions"
            className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-full animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          />
          <h1 
            className="text-4xl md:text-7xl font-extrabold tracking-tighter animate-fade-in-up bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            style={{ animationDelay: '0.4s' }}
          >
            The Aura Productions
          </h1>
          <p 
            className="max-w-[700px] text-muted-foreground md:text-xl animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Crafting Visual Stories That Captivate and Inspire
          </p>
          <p 
            className="max-w-[600px] text-muted-foreground/80 md:text-lg animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            Professional Video Production • Motion Graphics • Brand Storytelling
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Link to="projects" smooth={true} duration={500} offset={-64}>
              <Button size="lg" className="text-lg px-8 py-6">
                View Our Work <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
