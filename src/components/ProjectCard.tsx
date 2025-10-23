import { memo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyImage } from "@/components/LazyImage";
import { BadgeList } from "@/components/BadgeList";
import { ProjectActions } from "@/components/ProjectActions";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const PROJECT_IMAGE_HEIGHT = "h-48";

const ProjectCardComponent = ({ project }: ProjectCardProps) => {
  return (
    <Card className="shadow-[var(--shadow-card)] border-border overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className={`${PROJECT_IMAGE_HEIGHT} overflow-hidden`}>
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <ProjectActions project={project} />
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <BadgeList items={project.tags} />
      </CardContent>
    </Card>
  );
};

export const ProjectCard = memo(ProjectCardComponent);

