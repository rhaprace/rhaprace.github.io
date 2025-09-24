import { ExternalLink, Github, Dumbbell, FileText } from 'lucide-react';
import { useMemo } from 'react';
import atletech from '../assets/atletech-bg.png';
import jsDocs from '../assets/js-docs.png';
import SectionContainer from './common/SectionContainer';
import Card from './common/Card';
import TechBadge from './common/TechBadge';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
  icon: React.ElementType;
  featured: boolean;
  image?: string;
}

const Projects = () => {
  const projects = useMemo<Project[]>(() => [
    {
      title: "Atletech - AI Fitness App",
      description: "AI-powered fitness application that helps users track their weight based on personal goals. Features customizable meal plans and workout routines tailored to individual fitness objectives and preferences.",
      tech: ["React", "AI/ML", "JavaScript", "CSS"],
      github: "https://github.com/rhaprace/Atletech",
      live: "",
      category: "Mobile Application",
      icon: Dumbbell,
      featured: true,
      image: atletech
    },
    {
      title: "JavaScript Basics Documentation",
      description: "A comprehensive documentation website designed to help beginners learn JavaScript fundamentals. Features interactive examples, clear explanations, and structured learning paths covering everything from basic syntax to advanced concepts.",
      tech: ["JavaScript", "HTML", "CSS", "Documentation"],
      github: "#",
      live: "https://js-docs-tau.vercel.app/",
      category: "Website",
      icon: FileText,
      featured: true,
      image: jsDocs
    },
  ], []);

  return (
    <SectionContainer
      id="projects"
      title="PROJECTS"
      subtitle="Here are some of my featured projects that showcase my skills and experience"
      backgroundVariant="gradient"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        role="list"
        aria-label="Projects grid"
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group"
            style={{
              opacity: 0,
              animation: `fade-in 0.5s ease-out forwards ${index * 0.1}s`
            }}
            role="listitem"
          >
            <Card
              variant="glass"
              padding="lg"
              className="h-full flex flex-col"
            >
              <div className="space-y-6 flex-1 flex flex-col">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-orbitron font-semibold text-xl text-primary leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 flex-shrink-0">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2 ml-4">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30 hover:bg-green-500/30 hover:text-green-300 transition-all duration-300 flex-shrink-0"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                          {project.github && project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-gray-500/20 text-gray-400 rounded-full border border-gray-500/30 hover:bg-gray-500/30 hover:text-gray-300 transition-all duration-300 flex-shrink-0"
                            >
                              <span>GitHub</span>
                              <Github className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 mt-auto">
                  <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} tech={tech} variant="secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;