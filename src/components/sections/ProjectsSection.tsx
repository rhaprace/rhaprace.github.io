import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team analytics.",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    title: "AI Content Generator",
    description: "Web application leveraging AI to generate marketing copy, blog posts, and social media content.",
    tags: ["Next.js", "OpenAI", "MongoDB", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with detailed forecasts, interactive maps, and location-based alerts.",
    tags: ["React", "Weather API", "Charts.js", "CSS"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=400&fit=crop",
  },
];

export const ProjectsSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className="shadow-[var(--shadow-card)] border-border overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {project.title}
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
