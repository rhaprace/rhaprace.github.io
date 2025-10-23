import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Eye } from "lucide-react";
import { ProjectDetailsDialog } from "@/components/ProjectDetailsDialog";
import { Project } from "@/types/project";

interface ProjectActionsProps {
  project: Project;
}

const ACTION_BUTTON_SIZE = "h-8 w-8";

export const ProjectActions = ({ project }: ProjectActionsProps) => {
  return (
    <div className="flex gap-2">
      {project.githubUrl && <GithubButton url={project.githubUrl} />}
      {project.liveUrl && <LiveSiteButton url={project.liveUrl} />}
      {project.carouselImages && <ProjectDetailsDialog project={project} />}
    </div>
  );
};

const GithubButton = ({ url }: { url: string }) => (
  <Button size="icon" variant="ghost" className={ACTION_BUTTON_SIZE} asChild>
    <a href={url} target="_blank" rel="noopener noreferrer" title="View Source Code">
      <GitBranch className="h-4 w-4" />
    </a>
  </Button>
);

const LiveSiteButton = ({ url }: { url: string }) => (
  <Button size="icon" variant="ghost" className={ACTION_BUTTON_SIZE} asChild>
    <a href={url} target="_blank" rel="noopener noreferrer" title="View Live Site">
      <ExternalLink className="h-4 w-4" />
    </a>
  </Button>
);

