import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import { BadgeList } from "@/components/BadgeList";
import quakeSafeImage from "@/assets/Projects/quake-safe.png";
import fireAwareImage from "@/assets/Projects/fire-aware.png";

const projects = [
  {
    title: "QuakeSafe",
    description: "An earthquake safety and preparedness application with interactive maps, real-time alerts, and offline-first capabilities for emergency situations.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Leaflet", "i18next", "PWA"],
    image: quakeSafeImage,
    liveUrl: "https://quakesafe-beta.vercel.app/",
    githubUrl: "https://github.com/rhaprace/quakeSafe",
  },
  {
    title: "Fire-Aware",
    description: "A comprehensive fire safety and awareness application with real-time alerts, emergency protocols, and interactive safety features for fire prevention and response.",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Recharts"],
    image: fireAwareImage,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className="shadow-[var(--shadow-card)] border-border overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="h-48 overflow-hidden">
            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {project.title}
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View Source Code">
                      <GitBranch className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View Live Site">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <BadgeList items={project.tags} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
