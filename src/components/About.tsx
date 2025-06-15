
const About = () => {
  const skills = ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Component Design", "Material-UI"];
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate frontend developer with a love for creating beautiful, functional, and user-centric web applications. My expertise lies in the React ecosystem, where I enjoy building complex component libraries and intuitive interfaces.
            </p>
            <p className="text-muted-foreground">
              I'm always eager to learn new technologies and take on challenging projects that push my skills to the next level.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <div key={skill} className="px-4 py-2 bg-background rounded-full text-sm font-medium">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
