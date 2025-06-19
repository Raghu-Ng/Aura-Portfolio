const About = () => {
  const services = [
    "Video Production", 
    "Motion Graphics", 
    "Brand Storytelling", 
    "Commercial Films", 
    "Event Coverage", 
    "Post-Production", 
    "Color Grading"
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">About The Aura Productions</h2>
              <p className="text-muted-foreground text-lg">
                We are a passionate team of creative professionals dedicated to bringing your vision to life through compelling visual storytelling. Our mission is to create content that not only looks stunning but also resonates with your audience and drives results.
              </p>
              <p className="text-muted-foreground">
                From concept development to final delivery, we handle every aspect of video production with meticulous attention to detail. Whether you need a commercial, corporate video, or creative content, we have the expertise to make your project stand out.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Services</h3>
              <p className="text-muted-foreground">
                We offer comprehensive video production services tailored to meet your specific needs and objectives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {services.map(service => (
                <div key={service} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
