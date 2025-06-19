import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Video, Palette, Users, Film, Edit3, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Video Production",
      description: "Professional video production services from concept to final delivery. We capture your story with cinematic quality.",
      features: ["4K/HD Recording", "Professional Equipment", "Location Scouting", "Direction & Production"]
    },
    {
      icon: Video,
      title: "Commercial Films",
      description: "Compelling commercial videos that drive engagement and convert viewers into customers.",
      features: ["Brand Storytelling", "Product Showcase", "Testimonial Videos", "Promotional Content"]
    },
    {
      icon: Palette,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and visual effects that bring your content to life with stunning animations.",
      features: ["Logo Animations", "Title Sequences", "Infographics", "Visual Effects"]
    },
    {
      icon: Edit3,
      title: "Post-Production",
      description: "Expert editing, color grading, and sound design to polish your content to perfection.",
      features: ["Video Editing", "Color Grading", "Sound Design", "Final Delivery"]
    },
    {
      icon: Users,
      title: "Event Coverage",
      description: "Comprehensive coverage of corporate events, weddings, and special occasions.",
      features: ["Multi-Camera Setup", "Live Streaming", "Event Highlights", "Full Documentation"]
    },
    {
      icon: Zap,
      title: "Brand Storytelling",
      description: "Strategic video content that tells your brand story and connects with your audience.",
      features: ["Brand Strategy", "Content Planning", "Social Media Videos", "Corporate Films"]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer comprehensive video production services to help bring your vision to life. 
            From concept development to final delivery, we handle every aspect with professional expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 