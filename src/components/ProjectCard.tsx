
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm"><Github className="h-4 w-4 mr-2" />GitHub</Button>
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <Button size="sm"><ExternalLink className="h-4 w-4 mr-2" />Live Demo</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
